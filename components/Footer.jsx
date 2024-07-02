import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
import {FaSquareFacebook, FaSquareGithub, FaSquareInstagram, FaSquareTwitter, FaSquareWhatsapp, FaSquareXTwitter} from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h4>Angel&apos;s Food</h4>
          <p> 869 Blvrd du Plateau, Gatineau</p>
          <p>Téléphone : +1 438 467 8027</p>
        </div>
        <div className={styles.socialIcons}>
          <Link id = "facebook"href="#"><FaSquareFacebook/></Link>
          <Link id = "Github" href="#"><FaSquareGithub/></Link>
          <Link id = "Insta" href="#"><FaSquareInstagram/></Link>
          <Link id = "Twitter" href="#"><FaSquareTwitter/></Link>
          <Link id = "whatsapp" href="#"><FaSquareWhatsapp/></Link>
          <Link id = "Twitter" href="#"><FaSquareXTwitter/></Link>
        </div>
      </div>
    </footer>
  );
}
