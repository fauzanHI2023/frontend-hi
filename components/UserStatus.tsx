import React, { useState, useRef, useEffect } from 'react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeProvider';

interface UserStatusProps {
  session: any;
  usernameOrEmail: string; // Prop untuk menentukan nama pengguna atau email;
  onLoginSuccess: (usernameOrEmail: string) => void;
}

const UserStatus: React.FC<UserStatusProps> = ({ session, usernameOrEmail, onLoginSuccess }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const { darkTheme } = useTheme();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setIsPopupOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSignOut = async () => {
    await signOut();
    localStorage.removeItem('loggedInUsername'); // Hapus informasi login dari localStorage saat logout
    window.location.href = '/';
  };

  // Tentukan nama pengguna yang akan ditampilkan
  let displayName = session?.username || session?.user?.name || usernameOrEmail;

  return (
    <>
      {displayName && (
        <>
          <span className={`text-${darkTheme ? 'hi-darklight' : 'hi-dark'}`} onClick={() => setIsPopupOpen(true)}>Hi, {displayName}</span> <br />
          {/* Tampilkan tombol sign out jika popup terbuka */}
          {isPopupOpen && (
            <div ref={popupRef} className={`flex flex-col border-stone-800 absolute top-16 rounded-xl bg-${darkTheme ? 'hi-hover-dashboard' : 'hi-darklight'} text-${darkTheme ? 'hi-darklight' : 'hi-dark'} hover:text-hi-darklight right-8 w-40 items-center justify-start px-2 py-1`}>
              <Link href="/dashboard">My Account</Link>
              <button onClick={handleSignOut} className="">Sign out</button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default UserStatus;
