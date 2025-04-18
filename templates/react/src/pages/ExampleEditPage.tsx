
import { ExampleEdit } from '@/features/example/ExampleEdit';
import { PageLayout } from '@/shared/layouts';

export const ExampleEditPage = () => {
  const submenus = [
    { label: 'All Examples', href: '/examples' },
    { label: 'Add Example', href: '/examples/new' },
  ];

  return (
    <PageLayout menu={submenus}>
      <ExampleEdit />
    </PageLayout>
  );
};
