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
        <div className="px-10 py-5 h-[2000px]">{children}</div>
      </ScrollArea>
    </>
  );
};
