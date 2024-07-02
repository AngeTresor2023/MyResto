import Contact from '@/components/Contact';

export const metadata = {
    title: 'Mon Resto | Contact',
    description: 'Ce site web présente les gatronomie africaines.',
    openGraph: {
      title: 'Mon Resto | Contact',
      description: 'Ce site web présente les gatronomie africaines.',
      images: ['./react.webp']
    }
  }


export default function Page() {
    return <>
        <Contact />
    </>;
}