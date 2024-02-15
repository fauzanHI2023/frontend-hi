"use client"
import React, { useState, useEffect } from 'react';
import SubMenu from './SubMenu';
import { menuItems } from '@/data/data';
import Link from 'next/link';
import Login from './login/Login';
import UserStatus from './UserStatus';
import { useSession } from 'next-auth/react';
import { useTheme } from '@/context/ThemeProvider';

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: session } = useSession();
  const { darkTheme, toggleTheme } = useTheme();
  const [loggedInUsername, setLoggedInUsername] = useState('');

  useEffect(() => {
    const savedUsername = localStorage.getItem('loggedInUsername');
    if (savedUsername) {
      setLoggedInUsername(savedUsername);
    }
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleLoginSuccess = (usernameOrEmail: string) => {
    setLoggedInUsername(usernameOrEmail);
    closeModal();
  };

  return (
    <nav className="absolute flex-center top-0 z-30 w-full py-7 text-white shadow-navbar max-md:hidden">
      <div className="flex flex-row justify-between mx-auto w-full max-w-8xl px-6 xs:px-8 sm:px-16">
        <div className={`text-${darkTheme ? 'hi-darklight' : 'hi-dark'}`}>
          <Link href="/"><h4>Human Initiative</h4></Link>
        </div>
        <ul className="flex flex-row relative">
          {menuItems.map((item) => (
            <li key={item.id} className={`text-${darkTheme ? 'hi-darklight' : 'hi-dark'} group pl-4 pr-4 text-center`}>
              <Link href={item.url}>{item.label}</Link>
              {item.subMenu && <SubMenu items={item.subMenu} />}
            </li>
          ))}
        </ul>
        <button onClick={toggleTheme} className={`bg-transparent text-${darkTheme ? 'white' : 'hi-dark'} font-semibold hover:text-${darkTheme ? 'black' : 'white'} py-2 px-4 border border-${darkTheme ? 'white' : 'black'} hover:border-transparent rounded`}>
          {darkTheme ? 'Light Mode' : 'Dark Mode'}
        </button>
        <div className="flex flex-row">
          <UserStatus session={session} usernameOrEmail={loggedInUsername} onLoginSuccess={handleLoginSuccess} />
          {/* Tampilkan tombol Login hanya jika modal tidak terbuka atau tidak ada sesi */}
          {(!isModalOpen && !session && !loggedInUsername) && (
            <button onClick={openModal} className={`text-${darkTheme ? 'hi-darklight' : 'hi-dark'}`}>Login</button>
          )}
          {/* Tampilkan modal login jika isModalOpen true */}
          {isModalOpen && <Login closeModal={closeModal} onLoginSuccess={handleLoginSuccess} />}
        </div>
      </div>
    </nav>
  );
};

export default Header;
