import { useProduct } from '@/contexts/ProductContext';
import { Button, cn } from '@aiqiabr/aiqia-ui';

export type Menu = {
  label: string;
  href: string;
  key?: string;
};

type Props = {
  menu?: Menu[];
  isVertical?: boolean;
};

export function TopNavigation({ menu, isVertical }: Props) {
  const { setCurrentSubmodule } = useProduct();

  if (!menu || menu.length === 0) return null;

  const handleSubmoduleClick = (item: Menu) => {
    if (item.key) {
      setCurrentSubmodule(item.key);
    }
  };

  return (
    <nav
      className={cn(
        'flex items-center gap-2',
        isVertical ? 'flex-col items-start' : 'flex-row'
      )}
    >
      {menu.map((item, index) => (
        <Button
          variant="ghost"
          key={index}
          href={item.href}
          className={cn(
            'hover:text-primary hover:bg-primary/10',
            isVertical && 'w-full justify-start'
          )}
          onClick={() => handleSubmoduleClick(item)}
        >
          {item.label}
        </Button>
      ))}
    </nav>
  );
}
