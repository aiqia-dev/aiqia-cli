import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@aiqiabr/aiqia-ui';
import { Link } from 'react-router-dom';

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
    <nav className="px-10 py-3 border-b h-[var(--top-navigation-heigth)]">
      <NavigationMenu>
        <NavigationMenuList>
          {menu.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link to={item.href}>{item.label}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
