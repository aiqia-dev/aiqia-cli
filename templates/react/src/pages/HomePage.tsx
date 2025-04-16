import { PageLayout } from '@/shared/layouts';
import { Heading } from '@aiqiabr/aiqia-ui';

export const HomePage = () => {
  const submenus = [
    { label: 'Submenu 1', href: '/' },
    { label: 'Submenu 2', href: '/' },
    { label: 'Submenu 3', href: '/' },
  ];

  return (
    <PageLayout menu={submenus}>
      <Heading variant="h2">HomePage</Heading>
    </PageLayout>
  );
};
