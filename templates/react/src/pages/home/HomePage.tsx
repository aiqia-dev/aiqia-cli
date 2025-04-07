import { PageLayout } from '@/components/layouts';
import { Heading } from '@/components/ui';

export const HomePage = () => {
  const submenus = [
    { label: 'Submenu 1', href: '/' },
    { label: 'Submenu 2', href: '/' },
    { label: 'Submenu 3', href: '/' },
  ];

  return (
    <PageLayout menu={submenus}>
      <Heading>HomePage</Heading>
    </PageLayout>
  );
};
