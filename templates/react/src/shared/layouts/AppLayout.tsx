import { useProduct } from '@/contexts/ProductContext';
import { useProductData } from '@/hooks/useProductData';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { LeftNavigation } from '../containers';

export function AppLayout() {
  const { product, setCurrentModule, currentModule } = useProduct();
  const location = useLocation();

  useProductData();

  const generateMenuItems = () => {
    const defaultItems = [
      {
        icon: 'layout-dashboard',
        label: 'Início',
        href: '/',
        key: 'index',
      },
      {
        icon: 'flame',
        label: 'Exemplos',
        href: '/examples',
        key: 'examples',
      },
    ];

    if (!product) return defaultItems;

    const moduleItems = product.modules.map((module) => ({
      icon: module.iconOrLogoSrc,
      label: module.label,
      href: module.route,
      key: module.key,
    }));

    return [...defaultItems, ...moduleItems];
  };

  const menuItems = generateMenuItems();

  useEffect(() => {
    if (!product) return;

    const currentPath = location.pathname;
    const matchedModule = product.modules.find((module) =>
      currentPath.startsWith(module.route)
    );

    if (matchedModule && matchedModule.key !== currentModule) {
      setCurrentModule(matchedModule.key);
    }
  }, [location.pathname, product, setCurrentModule]);

  return (
    <div className="flex max-w-full h-[calc(100svh-var(--top-bar-root-height,0px))]">
      <LeftNavigation menu={menuItems} onModuleSelect={setCurrentModule} />

      <div className="flex-1 w-0">
        <Outlet />
      </div>
    </div>
  );
}
