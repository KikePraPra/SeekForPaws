import { useState } from "react";
import { useRouter } from "@tanstack/react-router";

const menuItems = [
  {
    path: "/",
    label: "Cerrar sesión",
    icon: "/logout.png",
    alt: "Cerrar sesión",
  },
  {
    path: "/",
    label: "Cambiar cuenta",
    icon: "/change_account.png",
    alt: "Cambiar cuenta",
  },
  { path: "/start",
    label: "Inicio",
    icon: "/home.png", 
    alt: "Inicio" 
  }
];

export default function BurgerMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.navigate({ to: path });
    setOpen(false);
  };

  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <div className="flex justify-end">
      {/*boton hamburguesa y close*/}
      <button
        onClick={toggleMenu}
      className="flex items-center absolute right-7 translate-y-[-1rem] focus:outline-none z-[100]"

        aria-label="toggle menu"
      >
        <img src={open ? "/close.png" : "/burger.svg"} alt="menu icon" />
      </button>

      {/*menu desplegable*/}
      <div
        className={`fixed top-0 right-0 w-60 h-65 bg-verde-muy-oscuro text-white z-50 rounded-bl-2xl p-4 transform transition-all duration-300 ${
          open
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <ul className="mt-15 space-y-4 text-base">
          {menuItems.map(({ path, label, icon, alt }) => (
            <li
              key={path}
              className="flex items-center gap-2 cursor-pointer p-2"
              onClick={() => handleNavigate(path)}
            >
              <img src={icon} alt={alt} className="w-6 h-6 mr-2" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
