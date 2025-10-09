import React from 'react'

export default function Header() {
  return (
    <div>
        {/* navbar */}
        <nav className=' '>

            {/* content */}
            <div className=' flex justify-between items-center w-full transform -translate-y-18 lg:-translate-y-8 z-20'> 

              {/* shop name */}
              <div className='flex-1 md:flex-none   '>
                <h3 className=' text-[18px] md:text-xl xl:text-2xl urbanist-extrabold'>Barbers Time</h3>
              </div>

              {/* lists */}
              <div className='hidden lg:block'>
                <ul className='urbanist-semibold  lg:text-[20px] xl:text-[22px] flex'>
                  <a href="#"><li className="mx-4 cursor-pointer">Home</li></a>
                  <a href="#services"><li className="mx-4 cursor-pointer">Services</li></a>
                  <a href="#map"><li className="mx-4 cursor-pointer">Map</li></a>
                  <a href="#features"><li className="mx-4 cursor-pointer">Features</li></a>
                  <a href="#founders"><li className="mx-4 cursor-pointer">Founders</li></a>


                </ul>
              </div>

              <div className='flex items-center gap-2'>
                {/* Button */}
                <div className=''>
                  <a href='#stay-with-us' className=''>Stay With Us</a>
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
