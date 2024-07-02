'use client'
import Image from 'next/image';
import Weare from '@/components/Weare';
import styles from '@/components/Acceuil.module.css';
import nous from '@/public/gallerie-artd.json';
import { initReactI18next } from 'react-i18next';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next'; 

i18next.use(initReactI18next)
.init({
  resources:{
    en:{
      translation:{
        home:'Home',
        menu:'Menu',
        sign:'Sign',
        contact:'Contact'
      }
    },
    fr:{
      translation:{
        home:'Acceuil',
        menu:'Menu',
        sign:'Connexion',
        contact:'Contact'
      }
    }
  },
lng:'fr',
fallbackLng:'fr'
})



export default function Acceuil() {
  const {t} = useTranslation();
  return (

    <main className={styles.main}>
      <section className={styles.home}>
        <h1> Bienvenue chez Angel &apos;s Food!</h1>
        <p className={styles.subtitle}>Les saveurs africaines a votre porte.</p>
      </section> 
      <section className={styles.weareSection}> 
        <Weare imas={nous} />
      </section> 
    </main>
  );
}