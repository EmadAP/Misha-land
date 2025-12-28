import NavMobileSidebar from "@/components/sections/navbarSection/NavMobileSidebar";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

function NavMenuMobile() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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

      <NavMobileSidebar open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default NavMenuMobile;
