import NavMobileSidebar from "@/components/sections/navbarSection/NavMobileSidebar";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

function NavMenuMobile() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="hover:bg-background-20 p-2 rounded-full"
        >
          <GiHamburgerMenu size={20} />
        </button>
      )}
      {open && (
        <button
          onClick={() => setOpen(false)}
          className="hover:bg-background-20 p-2 rounded-full"
        >
          <IoClose size={20} />
        </button>
      )}

      <NavMobileSidebar open={open} />
    </>
  );
}

export default NavMenuMobile;
