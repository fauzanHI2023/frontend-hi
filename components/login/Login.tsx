import React, { useState } from 'react';
import { signIn, getSession } from 'next-auth/react';
import Register from '../register/Register';
import { FcGoogle } from "react-icons/fc";
import Swal from 'sweetalert2';
import { useSession } from 'next-auth/react';
import UserStatus from '../UserStatus';
import Link from 'next/link';

interface LoginProps {
  closeModal: () => void;
  onLoginSuccess: (usernameOrEmail: string) => void;
}

const Login: React.FC<LoginProps> = ({ closeModal, onLoginSuccess }) => {
  const [showRegister, setShowRegister] = useState(false);
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const { data: session } = useSession();

  const handleSignInUsernamePassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/login-api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usernameOrEmail, password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Login success
        console.log('Login successful', data.success.user_name);
        onLoginSuccess(usernameOrEmail);
        localStorage.setItem('loggedInUsername', usernameOrEmail);
        closeModal(); // Close modal after successful login
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfull Login",
          showConfirmButton: false,
          timer: 2500
        });
      } else {
        // Login failed
        console.error('Login failed:', data.message);
        closeModal();
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Invalid Login",
          text: data.message || "Check Username/Email or Password",
          showConfirmButton: false,
          timer: 2500
        });
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  };

  const handleGoogleSignIn = async () => {
    const result = await signIn('google', {
      callbackUrl: '/dashboard',
    });
    closeModal();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Successfull Login",
      showConfirmButton: false,
      timer: 2500
    });

    if (result) {
      console.log('User signed in:', result);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 pt-2 rounded-md shadow-lg flex flex-col w-1/3">
        <div className="flex justify-end">
          <button className="text-hi-dark" onClick={closeModal}>X</button>
        </div>
        <div className="flex flex-col pb-12 sign-form">
          <h4 className="text-center text-hi-dark text-3xl font-bold">Login</h4>
        </div>
        <div className="flex flex-col w-full">
          <form action="" onSubmit={handleSignInUsernamePassword} className="flex flex-col w-full">
            <input type="text" placeholder="Username or Email" value={usernameOrEmail} onChange={(e) => setUsernameOrEmail(e.target.value)} className="px-4 py-2 w-full border-solid border border-stone-400 rounded-md text-stone-700 mb-6"/>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="px-4 py-2 w-full border-solid border border-stone-400 rounded-md text-stone-700 mb-3"/>
            <a href="#" className="w-full text-hi-dark text-sm mb-2">Forgot Password?</a>
            <button type="submit" className="bg-hi-dark py-2 rounded-lg">Login</button>
          </form>
          <div className="flex flex-row text-center my-4">
            <p className="text-stone-400 text-base">Don&apos;t have an account yet?</p>
            <a href="#" className="text-sky-500" onClick={() => setShowRegister(true)}>Register</a>
          </div>
        </div>
        <button onClick={handleGoogleSignIn} className="text-hi-dark rounded-lg border border-black px-4 py-3 flex flex-row items-center justify-center">
          <span className="pr-2 text-xl"><FcGoogle /></span>
          Sign In With Google
        </button>
      </div>
      {showRegister && <Register closeModal={() => setShowRegister(false)} />} {/* Tampilkan modal Register jika showRegister true */}
    </div>
  );
};

export default Login;
