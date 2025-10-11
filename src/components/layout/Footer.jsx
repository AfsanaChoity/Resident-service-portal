import React from 'react'
import Logo from '../UI/Logo'
import { Divider } from 'antd'
import fb from "@/assets/icons/fb.svg"
import insta from "@/assets/icons/insta.svg"
import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
        <div className='container mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-4 lg:gap-10 px-[4%] 2xl:px-0 '>
            {/* 1st col */}
            <div className=' flex flex-col items-center md:items-start lg:col-span-3 gap-4 '>
                <Logo colorClass='text-[#C6A664]'/>

                <p className='font-cabin text-xs lg:text-sm max-w-[274px] text-center md:text-justify'>We make your stay easy and personalized. Our simple web portal lets you manage everything from arrival details to custom service requests, all in one place.</p>
            </div>

            {/* 2nd col */}
            <div className='lg:col-span-2 space-y-4 text-center '>
                <h1 className='font-adamina lg:text-xl '>About Us</h1>
                <ul className='text-sm lg:text-[16px] space-y-4'>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Packages</li>
                </ul>
            </div>

            {/* 3rd col */}
            <div className='lg:col-span-2 space-y-4 text-center md:text-left'>
                <h1 className='font-adamina lg:text-xl'>Social Profiles</h1>
                <div className='flex gap-2 justify-center md:justify-start'>
                    <a href="" className='border border-[#B0B0B0] p-2 rounded-lg'><Image src={fb}/></a>
                    <a href="" className='border border-[#B0B0B0] p-2 rounded-lg'><Image src={insta}/></a>
                    
                </div>
            </div>

            {/* 4th col */}
            <div className='lg:col-span-3  space-y-4 text-center lg:text-left'>
                <h1 className='font-adamina lg:text-xl'>Contact</h1>
                <p className='text-sm lg:text-[16px]' >hello@theconcourseoxford.com</p>
            </div>
        </div>

        {/* Devider */}
        <div className='pb-4 lg:pb-10'>
            <Divider style={{ borderColor: '#B0B0B0' }}/>
            <p className='text-center md:text-xl'>
            © 2025 Resident Portal. All rights reserved.
            </p>
        </div>
    </footer>
  )
}
