import { cn } from '@aiqiabr/aiqia-ui';
import { CircleSmall } from 'lucide-react';
import { DynamicIcon } from 'lucide-react/dynamic';
import { Link, useLocation } from 'react-router-dom';
import { LeftDrawer } from './LeftDrawer';

type MenuItem = {
  icon: any;
  label: string;
  href: string;
  key?: string;
};

type TitleItem = {
  title: string;
};

type Props = {
  menu: (MenuItem | TitleItem)[];
  onModuleSelect?: (moduleKey: string) => void;
};

export function LeftNavigation({ menu, onModuleSelect }: Props) {
  const location = useLocation();
  const pathname = location.pathname;

  const isActive = (href: string) =>
    pathname.split('/')[1] === href.split('/')[1];

  const handleModuleClick = (item: MenuItem) => {
    if (item.key && onModuleSelect) {
      onModuleSelect(item.key);
    }
  };

  return (
    <LeftDrawer>
      {(isExpanded: boolean) => (
        <>
          {menu.map((item, index) =>
            'title' in item ? (
              isExpanded && (
                <h3
                  key={index}
                  className="px-2 py-1 mt-3 font-semibold text-muted-foreground text-sm"
                >
                  {item.title}
                </h3>
              )
            ) : (
              <Link
                key={index}
                to={item.href}
                className={cn(
                  'flex items-center p-2 rounded-lg hover:bg-primary/5 text-sm hover:text-primary',
                  !isExpanded && 'justify-center',
                  isActive(item.href) && 'bg-primary/10 text-primary'
                )}
                onClick={() => handleModuleClick(item)}
              >
                {item.icon ? (
                  <DynamicIcon name={item.icon} className="shrink-0 size-5" />
                ) : (
                  <CircleSmall className="shrink-0 size-5" />
                )}
                {isExpanded && <span className="ml-2">{item.label}</span>}
              </Link>
            )
          )}
        </>
      )}
    </LeftDrawer>
  );
}
