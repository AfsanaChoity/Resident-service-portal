'use client'
import { Dropdown } from 'antd';
import Link from 'next/link';
import React from 'react'
import { TfiAlignJustify } from "react-icons/tfi";



const mobileMenuItems = [
  {
    label: (<Link href="/" style={{ }}>HOME</Link>),
    key: 'home',
  },
  {
    label: (<a href="#services" style={{  }}>SERVICES</a>),
    key: 'services',
  },
  {
    label: (<a href="#map" style={{  }}>PACKAGE</a>),
    key: 'map',
  },
  {
    label: (<a href="#features" style={{  }}>PRE-ARRIVAL</a>),
    key: 'features',
  },
  {
    label: (<a href="#founders" style={{  }}>SERVICE REQUEST</a>),
    key: 'founders',
  },
  {
    label: (<Link href="/sign-in" style={{  }}>LOGIN</Link>),
    key: 'founders',
  },
];

export default function Header() {
  const [current, setCurrent] = React.useState(null);

  return (
    <div>
      {/* navbar */}
      <nav className=' px-4 xl:px-8 2xl:px-10 pt-3 lg:pt-5 '>

        {/* content */}
        <div className=' flex justify-between items-center w-full '>

          {/* shop name */}
          <div className='  '>
            <h3 className=' text-[18px] md:text-xl lg:text-2xl xl:text-3xl font-great-vibes text-center'>The Concourse Oxford <br /> Luxury Collection</h3>
          </div>

          {/* lists */}
          <div className='hidden lg:block'>
            <ul className='font-cabin lg:text-[16px] xl:text-[22px] flex uppercase'>
              <Link href="/"><li className="mx-4 cursor-pointer">Home</li></Link>
              <Link href="/services"><li className="mx-4 cursor-pointer">Services</li></Link>
              <a href="#map"><li className="mx-4 cursor-pointer">Packages</li></a>
              <a href="#features"><li className="mx-4 cursor-pointer">Pre-Arrival</li></a>
              {/* <a href="#founders"><li className="mx-4 cursor-pointer">Preferences Profile</li></a> */}
              <a href="#founders"><li className="mx-4 cursor-pointer">Service Request</li></a>


            </ul>
          </div>

          <div className='flex items-center gap-2'>
            {/* Button */}
            <div className='flex gap-4 lg:gap-8 items-center uppercase font-cabin font-semibold text-sm lg:text-[16px] xl:text-[22px]'>
              <Link href='/sign-in' className='hidden lg:block'>Login</Link>
              <Link href='/sign-up' className='bg-[#F4EDE4] text-black   px-4 2xl:px-6 py-1 lg:py-2 rounded-full'>Sign Up</Link>
            </div>

            {/* mobile hamburger */}
            <div className="lg:hidden">
              <Dropdown
                menu={{
                  items: mobileMenuItems,
                  onClick: ({ key }) => {

                    setCurrent(key);

                    const map = { '0': 'home', '1': 'services', '2': 'map', '3': 'features', '4': 'founders' };
                    const id = map[key] ?? key;
                    const el = document.getElementById(id);
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    else window.location.hash = `#${id}`;
                  }
                }}
                trigger={['click']}
                placement="bottomRight"
                getPopupContainer={() => document.body}
                align={{ offset: [0, 10] }}

              >
                <button type="button" aria-label="Open menu" className="rounded flex items-center">
                  <TfiAlignJustify style={{ fontSize: 20 }} />
                </button>
              </Dropdown>
            </div>
          </div>


        </div>


      </nav>
    </div>
  )
}
