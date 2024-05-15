"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import logo from '../assets/logo_token.svg'
import React from 'react';
import Image from 'next/image';
import { UserButton, useSession } from '@clerk/nextjs';


const NavBar = () => {
    const currentpath = usePathname();
    const { session } = useSession();
    const links = [
        { href: "/market", label: "Demo Trading" },
        { href: "/community", label: "Community" },
        { href: "/courses", label: "Learn" },
        { href: "/swap", label: "Swap" },
    ];

    return (
        <>
            <div className='font-display flex justify-between items-center py-3 px-6 border-b border-gray-400 bg-[#E9EBE7]'>
                <Link href='/'>
                    <Image src={logo} alt="Token Disc logo" width={150} height={50} />
                </Link>
                <ul className='flex justify-center items-center space-x-8 text-sm font-semibold'>
                    {links.map(link => (
                        <li key={link.href}>
                            <Link
                                className={`${currentpath === link.href ? 'text-slate-400 underline transition-all' : 'text-black'} hover:text-slate-400 transition-colors`}
                                href={link.href}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className='flex justify-end space-x-5 font-semibold'>
                    {!session && (
                        <>
                            <Link
                                href='/sign-in'
                                className='border border-black py-[0.5em] px-6 rounded-lg'
                            >
                                Login
                            </Link>
                            <Link
                                href='/sign-up'
                                className='bg-[#60A289] py-[0.5em] px-6 rounded-lg text-white'
                            >
                                Signup
                            </Link>
                        </>
                    )}
                    {session && (
                        <Link href='/profile' className='text-grey-300 hover:text-slate-400 mr-4 mt-[2.5px]'>Profile</Link>
                    )}
                    <div className="ml-auto">
                        <UserButton afterSignOutUrl='/' appearance={{
                            variables: {
                                colorPrimary: "#60A289",
                                colorText: "black",
                                colorBackground: '#E9EBE7'
                            }
                        }} />
                    </div>
                </div>
            </div >
        </>
    )
}

export default NavBar;