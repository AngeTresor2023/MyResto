import Image from 'next/image'
import styles from './Galerie.module.css'
// images est un tableau
export default function Gallerie({ images }) {
    return (
        <div className={styles.bodies}>
          <h1 className={styles.neo}>Nos Menu</h1>
          <div className={styles.grid}>
            {images.map((image, index) => (
              <div key={index} className={`${styles.tile} ${index % 2 === 0 ? styles.normal : styles.reversed}`}>
                <Image className={styles.ess} 
                src={image.src} 
                alt={image.alt} 
                width={300} 
                height={300} />
                <div className={styles.textContainer}>
                  <h2 className={styles.title}>{image.alt}</h2>
                  <p className={styles.description}>{image.descrip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}