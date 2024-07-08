/*'use client'
import React, { createContext, useState } from 'react';

import Header from '@/components/Header';
import { Karla } from 'next/font/google';
import Footer from '@/components/Footer'
import './globals.css';
import '@/components/i18n.js';

import styles from '@/app/layout.module.css'

export const ThemeContext = createContext(null);

const karla = Karla({ subsets: ['latin'] });
export default function RootLayout({children}) {
  const [theme, setTheme] = useState ("ligth");
  const toggleTheme = () => {
    setTheme((curr) =>(curr === "ligth" ? "dark" : "ligth"));
  };
return (
  <html lang='en'>
    <body className={karla.className+''+styles.body}>
      <ThemeContext.Provider value={{theme, toggleTheme}}>

      
        <Header />
        {children}
        <main className={styles.main}>
        </main>
        <Footer />
        </ThemeContext.Provider>
      </body>
  </html>
   );
}*/
// layout.jsx
'use client';
import React, { createContext, useState, useContext } from 'react';
import Header from '@/components/Header';
import { Karla } from 'next/font/google';
import Footer from '@/components/Footer';
import './globals.css';
import styles from './layout.module.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import {LocaleProvider} from '@/components/LocaleProvider';
export const ThemeContext = createContext(null);

const karla = Karla({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState("light");


  return (
    <html lang='fr'>
      <body className={`${karla.className} ${styles.body}`}>
        <LocaleProvider>

        
        <ThemeProvider>
          <Header />
          <main className={styles.main}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
