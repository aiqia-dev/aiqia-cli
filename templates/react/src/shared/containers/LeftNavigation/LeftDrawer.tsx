import { Button } from '@aiqiabr/aiqia-ui';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';

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
    <aside className="border-r p-1 bg-card h-full">
      <div
        className={`
      flex flex-col h-full transition-all duration-300
      relative p-1 z-10
      ${isExpanded ? 'w-64' : 'w-16'}
    `}
      >
        <Button
          variant="outline"
          size="iconSm"
          className="m-2 bg-card absolute right-[-27px] top-[-0px] rounded-full size-7 text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary"
          onClick={toggleMenu}
        >
          {isExpanded ? <ChevronLeft /> : <ChevronRight />}
        </Button>
        <nav className="flex flex-col space-y-1 overflow-auto">
          {children(isExpanded)}
        </nav>
      </div>
    </aside>
  );
}
