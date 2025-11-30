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

export function NavMenuDesktop() {
  const commonItems = [
    "تی‌شرت",
    "پیراهن",
    "هودی / سویشرت",
    "پلیور / بافت",
    "کت و شلوار",
    "شلوار کتان",
    "شلوار جین",
  ];

  return (
    <NavigationMenu dir="rtl" className="hidden md:flex">
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuTrigger>مردانه</NavigationMenuTrigger>
          <NavigationMenuContent>
            <MegaMenu
              image={menImg}
              columns={[
                { title: "پوشاک پسرانه", items: commonItems, href: "#" },
                { title: "پوشاک مردانه", items: commonItems, href: "#" },
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
                { title: "پوشاک دخترانه", items: commonItems, href: "#" },
                { title: "پوشاک زنانه", items: commonItems, href: "#" },
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
                  title: "اکسسوری زنانه",
                  items: [
                    "کیف",
                    "کفش",
                    "کلاه",
                    "جواهرات",
                    "شال و روسری",
                    "ست کادویی",
                  ],
                  href: "#",
                },
                {
                  title: "اکسسوری مردانه",
                  items: [
                    "کیف",
                    "کفش",
                    "کلاه",
                    "جواهرات",
                    "شال و روسری",
                    "ست کادویی",
                  ],
                  href: "#",
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
