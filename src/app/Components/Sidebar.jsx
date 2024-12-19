'use client'

import assets from '@/utils/assets'
import Image from 'next/image'
import React from 'react'
import Button from './ui/Button'

const Sidebar = () => {


  return (
    <div className='w-full h-full flex flex-col'>
        <div className='w-full h-[100px] px-2 md:mt-5 md:px-5 md:py-7 flex justify-center md:justify-start'>
            <Image alt='' src={assets.icons.logo} width={100} height={100} className=''/>
        </div>
        <div className='w-full h-full flex flex-col justify-start items-center pb-5'>
            <div className='w-full h-full flex flex-col gap-5 py-5 px-4'>
                { assets.sidebar.map((content, index)=> (
                    <button key={index} className='flex items-center justify-center md:justify-start gap-5 w-full rounded-lg hover:bg-gray-200 py-3 px-3'>
                        <div>
                            <Image alt={content.name} src={content.image} width={25} height={25}/>
                        </div>
                        <p className='text-gray-600 font-bold text-xl hidden md:block'>{content.name}</p>
                    </button>
                ))}
            </div>
            <div className='flex flex-col justify-end items-center gap-5 md:hidden w-full h-full'>
                <Button value={assets.icons.notification}/>
                <Button value={assets.icons.message}/>
            </div>
        </div>
    </div>
  )
}

export default Sidebar