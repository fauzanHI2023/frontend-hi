"use client"
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';

const useRequireAuth = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'loading') return; // Tunggu hingga status sesi terungkap

    if (!session) {
      router.replace('/'); // Redirect ke halaman login jika tidak ada sesi
    }
  }, [session, status, router]);

  return { session, status };
};

export default useRequireAuth;
