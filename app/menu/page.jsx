import Menu from '@/components/Menu';

export const metadata = {
    title: 'Mon Resto | Menu',
    description: 'Ce site web présente les gatronomie africaines.',
    openGraph: {
      title: 'Mon Resto | Menu',
      description: 'Ce site web présente les gatronomie africaines.',
      images: ['./logo.png']
    }
  }

export default function Page() {
    return <>
        <Menu />
    </>;
}