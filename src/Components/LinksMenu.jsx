import { Menu } from "../Props/Menu";

export const MenuLinks = () => {
  return (
    <ul className="hidden md:flex flex-wrap gap-3 self-center list-none text-white">
      {Menu.map((menu, index) => (
        <li key={index}>{menu.name}</li>
      ))}
    </ul>
  );
};

export const Burger = () => {
    return(
        <div className="block md:hidden self-center text-white">
            X
        </div>
    )
}