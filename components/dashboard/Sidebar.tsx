"use client"
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { menuDashboard } from '@/data/data'; // Sesuaikan path sesuai dengan struktur folder Anda
import { useTheme } from '@/context/ThemeProvider';

const Sidebar = () => {
  const pathname = usePathname();
  const { darkTheme } = useTheme();

  return (
    <aside className={`h-full bg-${darkTheme ? 'hi-dashboard-primary' : 'hi-dashboard-light'} h-96 w-1/4 py-4 rounded-xl`}>
      <ul className="h-full">
        {menuDashboard.map((menuItem, index) => (
          <li key={index} className={`py-3 pl-8 ${pathname === menuItem.url ? 'bg-hi-hover-dashboard' : ''}`}>
            <Link href={menuItem.url} className={`text-${darkTheme ? 'hi-darklight' : 'hi-dark'} flex flex-row items-center`}>
               <span className={`text-${darkTheme ? 'hi-darklight' : 'hi-dark'} pr-2`}>{menuItem.icon}</span>
              {menuItem.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
