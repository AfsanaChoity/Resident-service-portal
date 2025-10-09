import { Modal } from 'antd'
import Image from 'next/image'
import React from 'react'
import GoldButton from '../UI/GoldButton'
import Link from 'next/link'
import '@/styles/Modal.css'

export default function VerifyModal({ isModalOpen,icon='', text='', image='', buttonText='', path='', closable=false, handleOk='', handleCancel='' }) {
  return (
    <div>
         <Modal
        title={null}
        footer={null}
        open={isModalOpen}
        closable={closable}
        className="verify-modal "
      >

        <div className='flex flex-col items-center gap-6 p-4'>
          {/* Icon */}
          {icon && <Image src={icon} alt='icon' />}

          {/* text */}
          <p className='font-cabin text-[18px] text-white font-semibold'>{text}</p>

          {/* Icon */}
          {image && <Image src={image} alt='image'/>}

          {/* Button */}
          <Link href={path}>
            <GoldButton text={buttonText}/>
          </Link>
        </div>
        
      </Modal>
    </div>
  )
}
