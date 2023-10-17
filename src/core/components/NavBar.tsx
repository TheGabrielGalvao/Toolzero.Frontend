import {
  Button,
  IconButton,
  MobileNav,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import clsx from "clsx";
import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-gray-400">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="#" className="flex items-center">
          Sobre
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium text-gray-400"
        >
          <Link to="/">Toolzero</Link>
        </Typography>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <Button
            variant="filled"
            size="sm"
            className={clsx("bg-primary text-white", "hidden lg:inline-block")}
          >
            <span>Apoie-nos!</span>
          </Button>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-black hover:bg-transparent focus:bg-transparent active:bg-transparent flex justify-center items-center lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? <HiX size={32} /> : <HiOutlineMenu size={32} />}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>
        {navList}
        {/* <Button variant="gradient" size="sm" fullWidth className="mb-2">
          <span>Buy Now</span>
        </Button> */}
      </MobileNav>
    </Navbar>
  );
};
