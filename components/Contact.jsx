'use client'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import styles from '@/components/Contact.module.css';

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nom: '',
      email: '',
      objet: '',
      message: '',
    },
  });

  const [result, setResult] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendMail = async (data) => {
    const templateParams = {
      name: data.nom,
      subject: data.objet,
      email: data.email,
      message: data.message,
    };

    try {
      const response = await emailjs.send(
        'service_60iai1m', 
        'template_icbd58a', // Remplacez par votre ID de modèle
        templateParams,
        'jM-3tgc87g2j4rncA' // Remplacez par votre ID utilisateur
      );

      console.log('Email sent successfully!', response.status, response.text);
      setResult('Email envoyé avec succès !');
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error sending email:', error);
      setResult('Erreur lors de l\'envoi de l\'email.');
    }
  };

  const onSubmit = (data) => {
    sendMail(data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.formTitle}><span>Contactez-nous</span></div>
        {result && <div className={styles.resultMessage}>{result}</div>}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit(onSubmit)} className={styles.formInputs}>
            <div className={styles.inputBox}>
              <input
                type="text"
                {...register('nom', { required: true })}
                className={styles.inputField}
                placeholder="Votre nom"
              />
            </div>
            {errors.nom && <span className={styles.error}>Ce champ est requis</span>}
            <div className={styles.inputBox}>
              <input
                type="email"
                {...register('email', { required: true })}
                className={styles.inputField}
                placeholder="Votre email"
              />
            </div>
            {errors.email && <span className={styles.error}>Ce champ est requis</span>}
            <div className={styles.inputBox}>
              <input
                type="text"
                {...register('objet', { required: true })}
                className={styles.inputField}
                placeholder="Sujet"
              />
            </div>
            {errors.objet && <span className={styles.error}>Ce champ est requis</span>}
            <div className={styles.inputBox}>
              <textarea
                {...register('message', { required: true })}
                className={styles.inputField}
                placeholder="Votre message"
                rows="4"
              />
            </div>
            {errors.message && <span className={styles.error}>Ce champ est requis</span>}
            <div className={styles.inputBox}>
              <button type="submit" className={styles.inputSubmit}><span>Envoyer le message</span></button>
            </div>
          </form>
        ) : (
          <div className={styles.thankYouMessage}>
            Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.
          </div>
        )}
      </div>
    </div>
  );
}
