import { Button } from 'antd'
import React from 'react'

export default function GoldButton({text, onClick=''}) {
  return (
    <div>
        <Button onClick={onClick} className='!bg-[#C6A664] !text-white !font-adamina !border-none !px-8 '>{text}</Button>
    </div>
  )
}
