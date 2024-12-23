'use client'

import assets from '@/utils/assets'
import Image from 'next/image'
import React from 'react'
import Button from './ui/Button'
import { usePathname, useRouter } from 'next/navigation'

const Sidebar = () => {
    const pathname = usePathname();
    const router = useRouter();

  return (
    <div className='w-full h-full flex flex-col px-2 md:px-4'>
        <div className='max-w-16 md:max-w-32 md:max-h-32 mt-12'>
            <Image alt='' src={assets.icons.logo} width={150} height={150} className='w-full h-full'/>
        </div>
        <div className='w-full h-full flex flex-col justify-start items-center'>
            <div className='w-full h-full flex flex-col gap-2 md:gap-3 pt-12 pb-5'>
                { assets.sidebar.map((content, index)=> {
                    const url = content.name.toLowerCase()
                    const isActive = pathname.includes(`/admin/${url}`);
                    return (
                        <button onClick={()=>router.push(`/admin/${url}`)} key={index} className={`flex items-center justify-center md:justify-start gap-5 rounded-lg hover:bg-gray-100 py-3 md:px-3 ${isActive ? 'bg-gray-200':'bg-transparent'}`}>
                            <div className='w-8 h-8'>
                                <Image alt={content.name} src={content.image} width={100} height={100} className='w-full h-full object-contain'/>
                            </div>
                            <p className='text-gray-600 font-bold text-xl hidden md:block'>{content.name}</p>
                        </button>
                    )
                })}
            </div>
            <div className='flex flex-col justify-end items-center gap-5 md:hidden w-full h-full py-5'>
                <Button value={assets.icons.notification}/>
                <Button value={assets.icons.message}/>
            </div>
        </div>
    </div>
  )
}

export default Sidebar