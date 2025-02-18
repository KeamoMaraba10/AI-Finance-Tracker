"use client"

import Image from 'next/image'
import React from 'react'
import { Button } from "@/components/ui/button"
import { useUser, UserButton } from '@clerk/nextjs'
import Link from 'next/link'

function Header() {
    const { user, isSignedIn } = useUser();

    return (
        <div className='p-5 flex justify-between items-center border shadow-sm'>
            <div className='flex flex-row items-center'>
                <Image src={"/brighter_logo.svg"} alt="logo" width={70} height={70}>

                </Image>
                <span className='text-black font-bold text-xl'>Brighter Budget</span>
            </div>

        {isSignedIn ? (<UserButton /> ):
        (
            <div className='flex gap-3 items-center'>
        <Link href="/dashboard">
            <Button variant="outline" className="rounded-full">Dashboard</Button>
        </Link>
        
        <Link href="/dashboard">
            <Button className="rounded-full">Get Started</Button>
        </Link>
        </div>)}

        
        </div>
    )
}

export default Header
