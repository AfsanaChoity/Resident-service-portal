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

const SignUpForm = () => {
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}
      getPopupContainer={(node) => node.parentNode}
      >
        <Option value="63">+63</Option>
      </Select>
    </Form.Item>
  );
  
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

       <Form.Item
        name="fullname"
        label="Full Name"
        tooltip="What do you want others to call you?"
        rules={[{ required: true, message: 'Please input your full name!', whitespace: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
       
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input  placeholder="abc@gmail.com"/>
      </Form.Item>

    



      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
      </Form.Item>

        <Form.Item
        name="password"
        label="Choose a password with at least 8 characters"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        
      >
        <Input.Password />
      </Form.Item>

      {/* <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item> */}

      {/* Button */}
      <Form.Item className='!mt-8  '>
        <Link href="/verification"> 
          <AuthButton text="Create Account"/>
    </Link>
      </Form.Item>
    </Form>
   </div>
  );
};


export default function SignUpPage() {
  return (
    <div>

 <ConfigProvider
      theme={{
        components: {
          Input: { hoverBorderColor: '#F8F9FD', activeBorderColor: '#F8F9FD' },
          Select:{ hoverBorderColor: '#F8F9FD', activeBorderColor: '#F8F9FD' },
        },
      }}
    >
      <PageFormat
        heading="Create Account"
        subheading="Register for Your Account Instantly!"
        form={<SignUpForm />}
        footnote="Already have an account?"
        footnoteLink="Sign in"
        footnoteLinkPath='/sign-in'
      />
    </ConfigProvider>
    </div>
  )
}
