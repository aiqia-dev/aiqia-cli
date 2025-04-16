import { ScrollArea } from '@aiqiabr/aiqia-ui';
import { TopNavigation } from '../containers';

type Props = {
  menu?: any[];
  children: React.ReactNode;
};

export const PageLayout = ({ menu, children }: Props) => {
  return (
    <>
      <TopNavigation menu={menu} />
      <ScrollArea className="h-[calc(100svh-var(--margin-top-bars))]">
        <div className="container mx-auto px-10 py-5 pb-20">{children}</div>
      </ScrollArea>
    </>
  );
};
