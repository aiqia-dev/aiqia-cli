import { Button } from '@aiqiabr/aiqia-ui';

export type Menu = {
  label: string;
  href: string;
};

type Props = {
  menu?: Menu[];
};

export function TopNavigation({ menu }: Props) {
  if (!menu) return null;
  return (
    <nav className="py-2 border-b h-[var(--top-navigation-heigth)] bg-card">
      <div className="container mx-auto px-10 flex items-center gap-2">
        {menu.map((item, index) => (
          <Button
            variant="ghost"
            key={index}
            href={item.href}
            className="hover:text-primary hover:bg-primary/5"
          >
            {item.label}
          </Button>
        ))}
      </div>
    </nav>
  );
}
