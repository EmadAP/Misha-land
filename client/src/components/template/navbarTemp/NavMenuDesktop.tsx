import MegaMenu from "../../sections/navbarSection/MegaMenu";
import menImg from "@/assets/banner/navbar/men-1.png";
import womenImg from "@/assets/banner/navbar/women-1.png";
import AccessoriesImg from "@/assets/banner/navbar/AccessoriesImg.png";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuList,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import {
  navAccessoryItems,
  navMenItems,
  navWomenItems,
} from "@/lib/mock/dummylists";

export function NavMenuDesktop() {
  return (
    <NavigationMenu dir="rtl" className="hidden md:flex">
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuTrigger>مردانه</NavigationMenuTrigger>
          <NavigationMenuContent>
            <MegaMenu
              image={menImg}
              columns={[
                {
                  title: "پوشاک مردانه",
                  link: "/browse?gender=men",
                  items: navMenItems,
                },
              ]}
            />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>زنانه</NavigationMenuTrigger>
          <NavigationMenuContent>
            <MegaMenu
              image={womenImg}
              columns={[
                {
                  title: "پوشاک زنانه",
                  link: "/browse?gender=women",
                  items: navWomenItems,
                },
              ]}
            />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>اکسسوری</NavigationMenuTrigger>
          <NavigationMenuContent>
            <MegaMenu
              image={AccessoriesImg}
              columns={[
                {
                  title: "مردانه و زنانه",
                  link: "/browse?type=accessories",
                  items: navAccessoryItems,
                },
              ]}
            />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/browse">فروشگاه</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
