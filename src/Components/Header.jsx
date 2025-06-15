import { Logo } from "./Logo";
import { MenuLinks, Burger } from "./LinksMenu";
export const Header = () => {
  return (
    <nav className="fixed top-10 text-primary w-full flex justify-between p-4 px-8 md:px-20">
      <Logo />
      <MenuLinks />
      <Burger />
    </nav>
  );
};
