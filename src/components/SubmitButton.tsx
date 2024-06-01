"use client";

import React from 'react'

const SubmitButton = ({children}: Readonly<{
    children: React.ReactNode
}>) => {
  return (
    <>
        <button onClick={()=>console.log("Click")}>{children}</button>
    </>
  )
}

export default SubmitButton