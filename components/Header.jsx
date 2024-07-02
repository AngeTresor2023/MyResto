
import Image from 'next/image';
import { useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import logo from '@/public/logo1.svg';
import styles from './Header.module.css';
import Link from 'next/link';
import { useTranslation, initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import { ThemeContext } from '@/app/layout';
import { FaSun, FaMoon, FaGlobe, FaCog } from 'react-icons/fa';

// Initialize i18next
i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: 'Home',
        menu: 'Menu',
        sign: 'Sign',
        contact: 'Contact'
      }
    },
    fr: {
      translation: {
        home: 'Acceuil',
        menu: 'Menu',
        sign: 'Connexion',
        contact: 'Contact'
      }
    }
  },
  lng: 'fr',
  fallbackLng: 'fr',
  interpolation: {
    escapeValue: false // React already escapes values to prevent XSS
  }
});

export default function Header() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('fr');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  function handleLangChange(event) {
    setLanguage(event.target.value);
  }

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.logolink}>
          <Link href='/'>
            <Image src={logo} alt='Logo React' width={30} />
          </Link>
        </div>
        <nav className={`${styles.navlinks} ${menuOpen ? styles.open : ''}`}>
          <Link href='/' id = "home" className={pathname === '/' ? styles.active : ''}>
            {t('home')}
          </Link>
          <Link href='/menu' id = "menu" className={pathname === '/menu' ? styles.active : ''}>
            {t('menu')}
          </Link>
          <Link href='/contact' id = "contact" className={pathname === '/contact' ? styles.active : ''}>
            {t('contact')}
          </Link>
          <Link href='/connexion' id = "sign" className={pathname === '/connexion' ? styles.active : ''}>
            {t('sign')}
          </Link>
          <div className={styles.settings}>
            <FaCog className={styles.settingsIcon} onClick={toggleDropdown} />
            {dropdownOpen && (
              <div className={styles.dropdownMenu}>
                <div className={styles.dropdownItem}>
                  <FaGlobe />
                  <select className={styles.traduc} onChange={handleLangChange} value={language}>
                    <option value='fr'>Fr</option>
                    <option value='en'>En</option>
                  </select>
                </div>
                <div className={styles.dropdownItem} onClick={toggleTheme}>
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


