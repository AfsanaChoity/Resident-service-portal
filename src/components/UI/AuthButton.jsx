import { Button } from 'antd'
import React from 'react'

export default function AuthButton({text, onClick=''}) {
  return (
    <div>
        <Button onClick={onClick} type="primary" htmlType="submit" block className='!bg-[#C6A664] !font-adamina text-[14px]'>
          {text}
        </Button>
    </div>
  )
}
