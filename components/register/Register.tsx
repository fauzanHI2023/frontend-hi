import React from 'react';

interface RegisterProps {
  closeModal: () => void;
}

const Register: React.FC<RegisterProps> = ({ closeModal }) => {
  // Tambahkan logika register di sini

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-40">
      <div className="bg-white p-8 pt-2 rounded-md shadow-lg flex flex-col w-1/3">
        <div className="flex justify-end">
          <button className="text-hi-dark" onClick={closeModal}>X</button>
        </div>
        <div className="flex flex-col pb-12 sign-form">
          <h4 className="text-center text-hi-dark text-3xl font-bold">Register</h4>
        </div>
        <div className="flex flex-col w-full">
          {/* Form register */}
          <form action="" className="flex flex-col w-full">
            {/* Tambahkan input untuk register */}
            <input type="text" placeholder="Username" className="px-4 py-2 w-full border-solid border border-stone-800 rounded-md text-stone-700 mb-6"/>
            <input type="email" placeholder="Email" className="px-4 py-2 w-full border-solid border border-stone-800 rounded-md text-stone-700 mb-6"/>
            <input type="password" placeholder="Password" className="px-4 py-2 w-full border-solid border border-stone-800 rounded-md text-stone-700 mb-3"/>
            <button type="submit" className="bg-black py-2 rounded-lg">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
