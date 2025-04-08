import React, { useState } from 'react';
import { Button } from '@aiqiabr/aiqia-ui';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function LeftDrawer({
  children,
}: {
  children: (isExpanded: boolean) => React.ReactNode;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
    localStorage.setItem('leftDrawerIsExpanded', (!isExpanded).toString());
  };

  React.useEffect(() => {
    const storedState = localStorage.getItem('leftDrawerIsExpanded');
    if (storedState !== null) {
      setIsExpanded(storedState === 'true');
    }
  }, []);

  return (
    <aside className="border-r p-1 bg-background h-full">
      <div
        className={`
      flex flex-col h-full transition-all duration-300
      relative p-1 z-10
      ${isExpanded ? 'w-64' : 'w-16'}
    `}
      >
        <Button
          variant="ghost"
          size="icon"
          className="m-2 backdrop-blur absolute right-[-32px] top-[-4px]"
          onClick={toggleMenu}
        >
          {isExpanded ? <ChevronLeft /> : <ChevronRight />}
        </Button>
        <nav className="flex flex-col space-y-2">{children(isExpanded)}</nav>
      </div>
    </aside>
  );
}
