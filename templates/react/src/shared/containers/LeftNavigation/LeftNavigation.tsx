import { LucideProps } from 'lucide-react';
import { LeftDrawer } from './LeftDrawer';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@aiqiabr/aiqia-ui';

type Props = {
  menu: (
    | {
        icon: React.ForwardRefExoticComponent<
          Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
        >;
        label: string;
        href: string;
      }
    | {
        title: string;
      }
  )[];
};

export function LeftNavigation({ menu }: Props) {
  const location = useLocation();
  const pathname = location.pathname;

  const isActive = (href: string) =>
    pathname.split('/')[1] === href.split('/')[1];

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
                  isActive(item.href) && 'bg-primary/5 text-primary'
                )}
              >
                <item.icon className="size-5" />
                {isExpanded && <span className="ml-2">{item.label}</span>}
              </Link>
            )
          )}
        </>
      )}
    </LeftDrawer>
  );
}
