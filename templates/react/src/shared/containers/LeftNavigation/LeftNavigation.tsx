import {
  ChartNoAxesGantt,
  MapIcon,
  Settings,
  TowerControlIcon,
} from 'lucide-react';
import { LeftDrawer } from './LeftDrawer';
import { Link } from 'react-router-dom';

export function LeftNavigation() {
  const menuItems = [
    {
      icon: TowerControlIcon,
      label: 'Menu 1',
      href: '/',
    },
    {
      icon: MapIcon,
      label: 'Menu 2',
      href: '/',
    },
    {
      icon: ChartNoAxesGantt,
      label: 'Menu 3',
      href: '/',
    },
    { icon: Settings, label: 'Menu 4', href: '/' },
  ];

  return (
    <LeftDrawer>
      {(isExpanded: boolean) =>
        menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className={`
              flex items-center p-2 rounded-lg hover:bg-accent h-10
              ${!isExpanded ? 'justify-center' : ''}
            `}
          >
            <item.icon className="size-5" />
            {isExpanded && <span className="ml-2">{item.label}</span>}
          </Link>
        ))
      }
    </LeftDrawer>
  );
}
