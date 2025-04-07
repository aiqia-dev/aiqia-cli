import { Outlet } from 'react-router-dom';
import { LeftNavigation } from '../containers/LeftNavigation/LeftNavigation';
import { TopNavigation } from '../containers';
import { ScrollArea } from '@aiqiabr/aiqia-ui';

export function AppLayout() {
  return (
    <>
      <div className="flex max-w-full h-[calc(100svh-var(--top-bar-root-height,0px))]">
        <LeftNavigation />

        <div className="flex-1">
          <TopNavigation />

          <ScrollArea className="h-[calc(100svh-var(--margin-top-bars))] overflow-auto">
            <div className="px-10 py-5">
              <Outlet />
            </div>
          </ScrollArea>
        </div>
      </div>
    </>
  );
}
