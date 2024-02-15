"use client"
import React from 'react'
import { useTheme } from '@/context/ThemeProvider'

const ErrorAuthentication = () => {
  const { darkTheme } = useTheme();
  return (
    <main className={`bg-${darkTheme ? 'hi-dark' : 'hi-darklight'} relative top-0 flex min-h-screen flex-col items-center justify-center font-poppins`}>
      <h5 className={`text-3xl font-extrabold text-${darkTheme ? 'hi-darklight' : 'hi-dark'} tracking-tight`}>Access Denied, Silahkan Login Terlebih Dahulu</h5>
    </main>
  )
}

export default ErrorAuthentication