import Acceuil from '@/components/Acceuil';

export const metadata = {
  title: 'Mon Resto | Accueil',
  description: 'Ce site web présente les gatronomie africaines.',
  openGraph: {
    title: 'Mon Resto | Accueil',
    description: 'Ce site web présente les gatronomie africaines.',
    images: ['./react.webp']
  }
}

export default function Home() {
  
  return (
    <Acceuil/>
  );
}