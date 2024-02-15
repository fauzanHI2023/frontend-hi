"use client"
import React from 'react';
import Sidebar from '../dashboard/Sidebar';
import { useTheme } from '@/context/ThemeProvider';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    const { darkTheme } = useTheme();
  return (
    <div className={`relative top-0 flex min-h-screen flex-row items-center justify-center p-24 bg-${darkTheme ? 'hi-dark' : 'hi-darklight'} font-poppins`}>
      <Sidebar />
      <main className="w-3/4">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
