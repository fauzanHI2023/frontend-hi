"use client"
import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { useSession, getSession } from 'next-auth/react';

const DashboardPage: React.FC = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  
  if (session) {
    window.location.href = '/';
    return null;
  }

  return (
    <DashboardLayout>
      <h1>Dashboard Index</h1>      
    </DashboardLayout>
  );
};

export default DashboardPage;
