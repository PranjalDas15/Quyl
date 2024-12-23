import Image from 'next/image'
import React from 'react'

const Button = ({value, onClick = undefined}) => {
  return (
    <button onClick={onClick}>
    <Image
      alt={value}
      src={value}
      width={25}
      height={25}
    />
  </button>
  )
}

export default Button