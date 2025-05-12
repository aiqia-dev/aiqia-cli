import { useProduct } from '@/contexts/ProductContext';
import { cn, ScrollArea } from '@aiqiabr/aiqia-ui';
import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { TopNavigation } from '../containers';

type Props = {
  children: React.ReactNode;
};

export const PageLayout = ({ children }: Props) => {
  const { product, currentModule, setCurrentSubmodule, currentSubmodule } =
    useProduct();
  const location = useLocation();

  const submoduleMenu = useMemo(() => {
    if (!product || !currentModule) return [];

    const currentModuleData = product.modules.find(
      (m) => m.key === currentModule
    );
    if (!currentModuleData) return [];

    return currentModuleData.submodules.map((submodule) => ({
      label: submodule.label,
      href: submodule.route,
      key: submodule.key,
    }));
  }, [product, currentModule]);

  useEffect(() => {
    document.querySelector('[data-radix-scroll-area-viewport]')?.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (!product || !currentModule) return;

    const currentPath = location.pathname;
    const currentModuleData = product.modules.find(
      (m) => m.key === currentModule
    );

    if (currentModuleData) {
      const matchedSubmodule = currentModuleData.submodules.find((submodule) =>
        currentPath.startsWith(submodule.route)
      );

      if (matchedSubmodule && matchedSubmodule.key !== currentSubmodule) {
        setCurrentSubmodule(matchedSubmodule.key);
      }
    }
  }, [location.pathname, product, currentModule, setCurrentSubmodule]);

  const isVerticalMenu = submoduleMenu.length > 6;

  return (
    <div className={cn('flex', isVerticalMenu ? 'flex-row' : 'flex-col')}>
      <div
        className={cn(
          'bg-card',
          !submoduleMenu.length && 'hidden',
          isVerticalMenu
            ? 'border-r px-4 py-2 w-[200px] overflow-y-auto h-[calc(100svh-var(--top-bar-root-height))]'
            : 'px-10 py-2 border-b h-[var(--top-navigation-heigth)]'
        )}
      >
        <TopNavigation menu={submoduleMenu} isVertical={isVerticalMenu} />
      </div>

      <ScrollArea
        className={cn(
          'block',
          isVerticalMenu || !submoduleMenu.length
            ? 'h-[calc(100svh-var(--top-bar-root-height))]'
            : 'h-[calc(100svh-var(--margin-top-bars))]'
        )}
      >
        <div className="px-10 py-5 pb-20">{children}</div>
      </ScrollArea>
    </div>
  );
};
