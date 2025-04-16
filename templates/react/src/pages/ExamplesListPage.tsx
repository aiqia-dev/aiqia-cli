
import { ExampleList } from '@/features/example/ExampleList';
import { PageLayout } from '@/shared/layouts';

export const ExamplesListPage = () => {
  const submenus = [
    { label: 'All Examples', href: '/examples' },
    { label: 'Add Example', href: '/examples/new' },
  ];

  return (
    <PageLayout menu={submenus}>
      <ExampleList />
    </PageLayout>
  );
};
