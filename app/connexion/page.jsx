import Connexion from '@/components/Connexion';

export const metadata = {
    title: 'Mon Resto | Connexion',
    description: 'Ce site web présente les gatronomie africaines.',
    openGraph: {
      title: 'Mon Resto | Connexion',
      description: 'Ce site web présente les gatronomie africaines.',
      images: ['./react.webp']
    }
  }


export default function Page() {
    return <>
        <Connexion />
    </>;
}