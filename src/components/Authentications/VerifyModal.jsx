import { Modal } from 'antd'
import React from 'react'

export default function VerifyModal({isModalOpen, handleOk, handleCancel}) {
  return (
    <div>
         <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  )
}
