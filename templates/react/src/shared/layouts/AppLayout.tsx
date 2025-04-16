
import { Outlet } from 'react-router-dom';
import { LeftNavigation } from '../containers';
import {
  LayoutDashboard,
  MessageCircleMore,
  ShieldCheck,
  Truck,
  Users,
} from 'lucide-react';

export function AppLayout() {
  const productItems = [
    {
      icon: LayoutDashboard,
      label: 'Início',
      href: '/',
    },
    {
      title: 'Features',
    },
    {
      icon: Users,
      label: 'Examples',
      href: '/examples',
    },
    {
      title: 'Submenu 1',
    },
    {
      icon: Truck,
      label: 'Módulo 1',
      href: '/1',
    },
    {
      icon: ShieldCheck,
      label: 'Módulo 2',
      href: '/2',
    },
    {
      icon: MessageCircleMore,
      label: 'Módulo 3',
      href: '/3',
    },
    {
      title: 'Submenu 2',
    },
    {
      icon: Truck,
      label: 'Módulo 1',
      href: '/1',
    },
  ];

  return (
    <div className="flex max-w-full h-[calc(100svh-var(--top-bar-root-height,0px))]">
      <LeftNavigation menu={productItems} />

      <div className="flex-1 w-0">
        <Outlet />
      </div>
    </div>
  );
}
