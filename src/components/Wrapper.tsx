import React from 'react'

interface WrapperProps {
  children: any
  className: string
}

const Wrapper = (props: WrapperProps) => {
  return (
    <div
      className={`mx-auto w-full max-w-[1280px] px-5 md:px-10 ${
        props.className || ''
      }`}
    >
      {props.children}
    </div>
  )
}

export default Wrapper
