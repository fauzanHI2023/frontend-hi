"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';

interface ThemeProviderProps {
  children: React.ReactNode;
}

interface ThemeContextType {
  darkTheme: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(() => {
    // Coba ambil tema yang disimpan di localStorage hanya jika berada di lingkungan browser
    const storedTheme = typeof window !== 'undefined' && localStorage.getItem('darkTheme');
    return storedTheme ? JSON.parse(storedTheme) : false;
  });

  useEffect(() => {
    // Simpan tema saat terjadi perubahan, hanya jika berada di lingkungan browser
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkTheme', JSON.stringify(darkTheme));
    }
  }, [darkTheme]);

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
