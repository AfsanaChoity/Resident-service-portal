'use client'
import React from 'react'
import PageFormat from '@/components/Authentications/shared/PageFormat'
import '@/styles/AuthForm.css'

import {
    ConfigProvider,
    Form,
    Input,
    Select,
} from 'antd';
import AuthButton from '@/components/UI/AuthButton';
import Link from 'next/link';

const { Option } = Select;

const SignInForm = () => {
    const [form] = Form.useForm();

    const onFinish = values => {
        console.log('Received values of form: ', values);
    };


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
                    <Link href="/sign-in">
                        <AuthButton text="Continue" />
                    </Link>
                </Form.Item>
            </Form>
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
