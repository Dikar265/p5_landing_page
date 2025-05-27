import { Logo } from "./Logo";
import { MenuLinks, Burger } from "./LinksMenu";
export const Header = () => {
  return (
    <nav className="sticky top-10 m-4 md:m-8 text-primary flex justify-between p-4 px-8 md:px-20 z-50">
      <Logo />
      <MenuLinks />
      <Burger />
    </nav>
  );
};
