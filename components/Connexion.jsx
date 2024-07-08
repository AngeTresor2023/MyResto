'use client';

import { useRef, useState } from 'react';
import styles from '@/components/Connexion.module.css';

export default function Connexion() {
    const nomRef = useRef(null); // Créer une référence pour le champ de nom
    const courrielRef = useRef(null); // Créer une référence pour le champ courriel
    const passwordRef = useRef(null); // Créer une référence pour le champ de mot de passe
    const emailRef = useRef(null); // Créer une référence pour le champ de courriel
    const telephoneRef = useRef(null); // Créer une référence pour le champ de téléphone

    const [erreurNom, setErreurNom] = useState('');
    const [erreurCourriel, setErreurCourriel] = useState('');
    const [envoiReussi, setEnvoiReussi] = useState(false);
    const courrielRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expression régulière pour valider le courriel

    const handleSubmit = (event) => {
        event.preventDefault(); // Empêche la soumission par défaut du formulaire
        const nom = nomRef.current.value; // Obtenir la valeur du champ de nom
        const courriel = courrielRef.current.value; // Obtenir la valeur du champ courriel
        const password = passwordRef.current.value; // Obtenir la valeur du champ de mot de passe
        const email = emailRef.current.value; // Obtenir la valeur du champ courriel
        const telephone = telephoneRef.current.value; // Obtenir la valeur du champ de téléphone
        
        let erreur = false;
        if (!nom) {
            setErreurNom("Ce champ doit être rempli");
            erreur = true;
        } else {
            setErreurNom('');
        }
        if (!courriel || !courrielRegex.test(courriel)) {
            setErreurCourriel("Ce courriel est invalide");
            erreur = true;
        } else {
            setErreurCourriel('');
        }
        if (erreur) {
            setEnvoiReussi(false);
            return;
        }
        setEnvoiReussi(true);
        console.log(`Nom: ${nom}, Courriel: ${courriel}, Password: ${password}, Email: ${email}, Telephone: ${telephone}`);
    };

    const [isLogin, setIsLogin] = useState(true);

    const showSignup = () => setIsLogin(false);
    const showLogin = () => setIsLogin(true);

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <div className={styles.btnBox}>
                    <button className={`${styles.btn} ${isLogin ? styles.active : ''}`} onClick={showLogin}>Sign In</button>
                    <button className={`${styles.btn} ${!isLogin ? styles.active : ''}`} onClick={showSignup}>Sign Up</button>
                </div>
              
                <form onSubmit={handleSubmit} className={`${styles.formSection} ${isLogin ? styles.show : styles.hide}`}> 
                    <div className={styles.formTitle}><span>Sign In</span></div>
                    <div className={styles.formInputs}>
                        <div className={styles.inputBox}>
                            <input type="text" className={styles.inputField} placeholder="User Name" ref={nomRef} required />
                            {erreurNom && <div className={styles.erreur}>{erreurNom}</div>}
                        </div>
                        <div className={styles.inputBox}>
                            <input type="password" className={styles.inputField} placeholder="Password" ref={passwordRef} required />
                        </div>
                        <div className={styles.forgetPass}><a href="#">Forgot Password</a></div>
                        <div className={styles.inputBox}>
                            <button className={styles.inputSubmit}><span>Sign In</span></button>
                        </div>
                    </div>
                </form>

                <form onSubmit={handleSubmit} className={`${styles.formSection} ${!isLogin ? styles.show : styles.hide}`}>
                    <div className={styles.formTitle}><span>Sign Up</span></div>
                    <div className={styles.formInputs}>
                        <div className={styles.inputBox}>
                            <input type="text" className={styles.inputField} placeholder="User Name" ref={nomRef} required />
                            {erreurNom && <div className={styles.erreur}>{erreurNom}</div>}
                        </div>
                        <div className={styles.inputBox}>
                            <input type="email" className={styles.inputField} placeholder="Email" ref={emailRef} required />
                            {erreurCourriel && <div className={styles.erreur}>{erreurCourriel}</div>}
                        </div>
                        <div className={styles.inputBox}>
                            <input type="tel" className={styles.inputField} placeholder="Telephone" ref={telephoneRef} required />
                        </div>
                        <div className={styles.inputBox}>
                            <input type="password" className={styles.inputField} placeholder="Password" ref={passwordRef} required />
                        </div>
                        <div className={styles.inputBox}>
                            <button className={styles.inputSubmit}><span>Sign Up</span></button>
                        </div>
                    </div>
                </form>

                {envoiReussi && 
                    <div className={styles.result}>
                        Informations envoyées avec succès. Nom = {nomRef.current.value} et Courriel = {courrielRef.current.value}
                    </div>
                }
            </div>
        </div>
    );
}
