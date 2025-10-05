import AuthHeading from '@/components/UI/AuthHeading'
import AuthSubHeading from '@/components/UI/AuthSubHeading'
import Logo from '@/components/UI/Logo'
import React from 'react'

export default function PageFormat({ heading, subheading, form, footnote='' , footnoteLink=''}) {
  return (
    <div className='flex flex-col items-center pt-10 lg:pt-20'>
        {/* Logo */}
        <div >
            <Logo />
        </div>

        {/* content */}
        <div className='mt-10 lg:mt-20 text-center'>
          {/* Heading */}
          <div>
            <AuthHeading heading={heading}/>
          </div>

          {/* subheading */}
          <div className='mt-2 lg:mt-4 '>
            <AuthSubHeading subheading={subheading}/>
          </div>

          {/* Form */}
          <div>

          </div>


          {/* Footnote */}
          <div>
            <p className='font-cabin '>{footnote} <span className='font-open-sans font-medium'>{footnoteLink}</span></p>
          </div>
        </div>
    </div>
  )
}
