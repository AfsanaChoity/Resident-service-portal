'use client'
import React, { useState } from 'react'
import PageFormat from '@/components/Authentications/shared/PageFormat'
import '@/styles/AuthForm.css'

import {
  ConfigProvider,
  Input,
} from 'antd';
import AuthButton from '@/components/UI/AuthButton';
import VerifyModal from '@/components/Authentications/VerifyModal';
import img from '@/assets/images/frame.png'


const VerificationForm = () => {
const [isModalOpen, setIsModalOpen] = useState(false);

  const onChange = value => {
    console.log('Received values of form: ', value);
  };

 const showModal = () => {
    setIsModalOpen(true);
  };

  
  return (
   <div className='max-w-md mx-auto space-y-4 md:space-y-8 mt-4 lg:mt-8 mb-4 md:mb-8'>

    <div>
       <Input.OTP
      
      length={6}
      size="large"
      className=""
      onChange={onChange}   
      />
    </div>

    <div>
       <AuthButton onClick={showModal} text="Send"/>
    </div>

    {/* modal */}
    <div>
        <VerifyModal isModalOpen={isModalOpen} text="Account Verified Successfully" image={img} buttonText='Okay' path='/sign-in'/>
    </div>

   </div>
  );
};


export default function VerificationPage() {
  return (
    <div className=''>

 <ConfigProvider
      theme={{
        components: {
          Input: { hoverBorderColor: '#F8F9FD', activeBorderColor: '#F8F9FD' },
          Select:{ hoverBorderColor: '#F8F9FD', activeBorderColor: '#F8F9FD' },
        },
      }}
    >
      <PageFormat
        heading="Account Verification"
        subheading="To verify your account, please enter the verification code you get on your email mdsah*******@gmail.com"
        form={<VerificationForm />}
        footnote="Didn’t get code?"
        footnoteLink="Send Again"
      />
    </ConfigProvider>

    
    </div>
  )
}
