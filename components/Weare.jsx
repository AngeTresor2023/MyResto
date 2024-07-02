import Image from 'next/image';
import styles from './WeAre.module.css';
import '@/public/Ange.webp'

export default function Weare({ imas }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Qui Sommes Nous </h1>
      <div className={styles.team}>
        {imas.map((image, index) => (
          <div key={index} className={styles.member}>
            <Image  className={styles.image}
              src={image.imageUrl}
              alt={image.name}
              width={150}
              height={150}
              
            />
            <h2>{image.name}</h2>
            <h3>{image.role}</h3>
            <p>{image.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
