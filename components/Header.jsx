'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import logo from '@/public/logo1.svg';
import styles from './Header.module.css';
import Link from 'next/link';
import { FaSun, FaMoon, FaGlobe, FaCog } from 'react-icons/fa';
import { useTheme } from './ThemeProvider';
import {FormattedMessage} from 'react-intl'
import { useLocale } from './LocaleProvider';



export default function Header() {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  /*traduction */
  const [locale, setLocale] = useLocale();
  const handleLocale = () => {
      if (locale === 'fr') {
          setLocale('en');
      }
      else {
          setLocale('fr');
      }
  }


  /* pour le theme builder */

  const [theme, setTheme] = useTheme();
    const handleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        }
        else {
            setTheme('light');
        }
    }

  /*const { theme, toggleTheme } = useContext(ThemeContext);*/

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.nav +' '+(theme === 'light'? styles.light : styles.dark)}>
      <div className={styles.container}>
        <div className={styles.logolink}>
          <Link href='/'>
            <Image src={logo} alt='Logo React' width={30} />
          </Link>
        </div>
        <nav className={`${styles.navlinks} ${menuOpen ? styles.open : ''}`}>
          <Link href='/' id = "home" className={pathname === '/' ? styles.active : ''}>
          <FormattedMessage id='app.header.menu.lien1'/>
          </Link>
          <Link href='/menu' id = "menu" className={pathname === '/menu' ? styles.active : ''}>
          <FormattedMessage id='app.header.menu.lien2'/>
          </Link>
          <Link href='/contact' id = "contact" className={pathname === '/contact' ? styles.active : ''}>
          <FormattedMessage id='app.header.menu.lien3'/>
          </Link>
          <Link href='/connexion' id = "sign" className={pathname === '/connexion' ? styles.active : ''}>
          <FormattedMessage id='app.header.menu.lien4'/>
          </Link>
          <div className={styles.settings}>
            <FaCog className={styles.settingsIcon} onClick={toggleDropdown} />
            {dropdownOpen && (
              <div className={styles.dropdownMenu}>
                <div className={styles.dropdownItem}>
                  <FaGlobe />
                  <select className={styles.traduc} onChange={handleLocale}>
                    <option value='fr'>Fr</option>
                    <option value='en'>En</option>
                  </select>
                </div>
                <div className={styles.dropdownItem} onClick={handleTheme}>
                  {theme === 'light' ? (
                    <>
                      <FaMoon />
                    </>
                  ) : (
                    <>
                      <FaSun />
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </nav>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      </div>
    </header>
  );
}


