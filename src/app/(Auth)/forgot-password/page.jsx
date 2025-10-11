'use client'
import React from 'react'
import PageFormat from '@/components/Authentications/shared/PageFormat'
import '@/styles/AuthForm.css'

import {
    Checkbox,
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

    const onChange = e => {
        console.log(`checked = ${e.target.checked}`);
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

                {/* Email */}
                <Form.Item
                    name="email"
                    label="Enter your email "

                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            // required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input placeholder="abc@gmail.com" />
                </Form.Item>

                {/* Button */}
                <Form.Item className='  '>
                    <Link href="/otp-verification">
                        <AuthButton text="Continue" />
                    </Link>
                </Form.Item>
            </Form>
        </div>
    );
};


export default function ForgotPassPage() {
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
                    heading="Forgot Password"
                    subheading="To reset your password, please enter the email address. You’ll get the link on your email."
                    form={<SignInForm />}
                    
                />
            </ConfigProvider>
        </div>
    )
}
