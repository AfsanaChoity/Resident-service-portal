'use client'
import React, { useState } from 'react'
import PageFormat from '@/components/Authentications/shared/PageFormat'
import '@/styles/AuthForm.css'
import icon from '@/assets/icons/tick.svg'

import {
    ConfigProvider,
    Form,
    Input,
    Select,
} from 'antd';
import AuthButton from '@/components/UI/AuthButton';
import Link from 'next/link';
import VerifyModal from '@/components/Authentications/VerifyModal';


const SignInForm = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();

    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    const showModal = () => {
        setIsModalOpen(true);
    }


    return (
        <div className=''>
            <Form
                className="white-labels  "
                layout="vertical"
                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={{ prefix: '63' }}
                scrollToFirstError
            >



                {/* Password */}
                <Form.Item
                    name="new-password"
                    label="New password"
                    rules={[
                        {
                            // required: true,
                            message: 'Please input your password!',
                        },
                    ]}

                >
                    <Input.Password />
                </Form.Item>

                {/* Confirm Password */}
                <Form.Item
                    name="confirm-password"
                    label="Confirm New password"
                    rules={[
                        {
                            // required: true,
                            message: 'Please input your password!',
                        },
                    ]}

                >
                    <Input.Password />
                </Form.Item>

                {/* Button */}
                <Form.Item className='  '>
                    
                    <AuthButton onClick={showModal} text="Continue" />
                    
                </Form.Item>
            </Form>

            {/* Modal */}
            <div>
                <VerifyModal isModalOpen={isModalOpen} text="Password Reset Successfully" icon={icon} buttonText='Okay' path='/sign-in'/>
            </div>
        </div>
    );
};


export default function ResetPasswordPage() {
    return (
        <div>

            <ConfigProvider
                theme={{
                    components: {
                        Input: { hoverBorderColor: '#F8F9FD', activeBorderColor: '#F8F9FD' },
                        Select: { hoverBorderColor: '#F8F9FD', activeBorderColor: '#F8F9FD' },
                    },
                }}
            >
                <PageFormat
                    heading="Set New Password"
                    subheading="Please enter your new password to proceed with the login."
                    form={<SignInForm />}
                    
                />
            </ConfigProvider>
        </div>
    )
}
