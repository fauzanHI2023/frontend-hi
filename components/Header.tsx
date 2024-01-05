"use client";
import React, { useState, useEffect } from 'react'
import SubMenu from './SubMenu';
import { menuItems } from '@/data/data'
import Link from 'next/link'
import Login from './Login'
import { signIn, useSession } from 'next-auth/react';

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  return (
    <nav className="flex-center top-0 z-30 w-full py-7 text-white shadow-navbar max-md:hidden">
        <div className="flex flex-row justify-between mx-auto w-full max-w-8xl px-6 xs:px-8 sm:px-16">
            <div>
                <Link href="/"><h4>Human Initiative</h4></Link>
            </div>
            <ul className="flex flex-row relative">
            {menuItems.map((item) => (
              <li key={item.id} className="group pl-4 pr-4 text-center">
                <Link href={item.url}>{item.label}</Link>
                {item.subMenu && <SubMenu items={item.subMenu} />}
              </li>
            ))}
            </ul>
            <div className="flex flex-row">
                {/* <span>Search</span> */}
                <div>
                    <button onClick={openModal}>Login</button>
                    <Login/>
                    {/* <Link href="/en">EN</Link> */}
                </div>
            </div>
        </div>
        {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
        <div className="bg-slate-950 p-8 rounded-md shadow-lg flex flex-col">

          <button onClick={() => signIn("google")} className="text-white rounded-lg border border-white px-4 py-3">Sign In With Google</button>
          <button onClick={() => signIn("facebook")} className="text-white">Sign In With Facebook</button>
        </div>
      </div>
      )}
    </nav>
  )
}

export default Header