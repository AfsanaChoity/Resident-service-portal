import AuthHeading from '@/components/UI/AuthHeading'
import AuthSubHeading from '@/components/UI/AuthSubHeading'
import Logo from '@/components/UI/Logo'
import Link from 'next/link'
import React from 'react'

export default function PageFormat({ heading, subheading, form, footnote='' , footnoteLink='', footnoteLinkPath='' }) {
  return (
   <div className='min-h-screen flex items-center pt-8 '>
     <div className='container mx-auto flex flex-col items-center  '>
        {/* Logo */}
        <div >
            <Logo />
        </div>

        {/* content */}
        <div className='pt-10 lg:pt-20 text-center w-full  '>
          {/* Heading */}
          <div>
            <AuthHeading heading={heading}/>
          </div>

          {/* subheading */}
          <div className='pt-2 lg:pt-4 max-w-xl mx-auto px-4 lg:px-0'>
            <AuthSubHeading subheading={subheading}/>
          </div>

          {/* Form */}
          <div className='pt-10  px-4 lg:px-0 max-w-xl mx-auto '>
            {form}
          </div>


          {/* Footnote */}
          <div className='pb-4 '>
            <p className='font-cabin '>{footnote} <Link href={footnoteLinkPath} className='font-open-sans font-medium'>{footnoteLink}</Link></p>
          </div>
        </div>
    </div>
   </div>
  )
}
