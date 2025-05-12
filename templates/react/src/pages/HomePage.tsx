import { PageLayout } from '@/shared/layouts';
import { Heading } from '@aiqiabr/aiqia-ui';

export const HomePage = () => {
  return (
    <PageLayout>
      <Heading variant="h2">HomePage</Heading>
      <p className="mt-4">
        Bem-vindo ao FlashDocs! Selecione um módulo no menu lateral para
        começar.
      </p>
    </PageLayout>
  );
};
