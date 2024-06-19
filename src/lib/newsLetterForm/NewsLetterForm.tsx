"use client";

import { Button, Input } from 'antd'
import React from 'react'
import { PiEnvelopeSimpleLight } from 'react-icons/pi'

const NewsLetterForm:React.FC = () => {
  return (
    <>
          <form className="" >
          <Input size="large" placeholder="Your Email" suffix={<PiEnvelopeSimpleLight className="text-[#696A75]" fontSize={"1.5rem"} />} className="mb-2" />

          <Button htmlType='submit' type="primary" className="bg-[#4B6BFB] hover:!bg-[#4d6bf2] text-white w-full rounded-[6px] font-medium text-[16px]" size="large">Subscribe</Button>
          </form>
    </>
  )
}

export default NewsLetterForm