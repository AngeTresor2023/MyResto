'use client'
import Gallerie from '@/components/Galerie.jsx'
import gallerieMenu from '@/public/gallerie-art.json'
import gallerieMenud from '@/public/gallerie-artd.json'
import styles from './Menu.module.css'
import { useState } from 'react';
export default function Menu() {
    return (
                    <Gallerie images={gallerieMenu} />
    );
}