"use client"
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const page = () => {
  return <>
  <div className='h-screen p-4 bg-black'>
    <div className='h-full flex justify-center items-center flex-col gap-4 text-white'>
      <p className='text-2xl '>Welcome to ONKAR's  <span>"Find GITHUB profile page"</span></p>
      <p>To start looking for  users click the link down below</p>
      <Link href={'/home'} className='text-blue-500 underline'>Click here</Link>

    </div>
  </div>
  </>
}

export default page