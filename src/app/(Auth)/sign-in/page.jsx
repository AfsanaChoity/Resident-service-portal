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


                {/* Password */}
                <Form.Item
                    name="password"
                    label="Enter your password"
                    rules={[
                        {
                            // required: true,
                            message: 'Please input your password!',
                        },
                    ]}

                >
                    <Input.Password />
                </Form.Item>


                {/* Remember me & Forget Password */}
                <Form.Item>
                    <div className='flex justify-between items-center '>
                        <Checkbox onChange={onChange} className='custom-checkbox !text-white !font-cabin'>Remember me</Checkbox>
                        <Link href="/forgot-password" className='font-cabin font-semibold !text-white'>Forgot password?</Link>
                    </div>
                </Form.Item>

                {/* Button */}
                <Form.Item className='  '>
                    <Link href="/">
                        <AuthButton text="Continue" />
                    </Link>
                </Form.Item>
            </Form>
        </div>
    );
};


export default function SignInPage() {
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
                    heading="Sign In"
                    subheading="Sign in if you already have an account."
                    form={<SignInForm />}
                    footnote="Don’t have an account?"
                    footnoteLink="Sign up"
                    footnoteLinkPath="/sign-up"
                />
            </ConfigProvider>
        </div>
    )
}
