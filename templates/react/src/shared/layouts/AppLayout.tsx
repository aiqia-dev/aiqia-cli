import { Outlet } from 'react-router-dom';
import { LeftNavigation } from '../containers';

export function AppLayout() {
  return (
    <>
      <div className="flex max-w-full h-[calc(100svh-var(--top-bar-root-height,0px))]">
        <LeftNavigation />

        <div className="flex-1 w-0">
          <Outlet />
        </div>
      </div>
    </>
  );
}
