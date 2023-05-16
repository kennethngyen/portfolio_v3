import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div
      style={{ height: "7vh"}}
      className="text-l z-100 lg:text-xl m-0 flex items-center justify-center md:justify-end w-full px-4 gap-2 lg:gap-9 border border-gray-200 shadow-md"
    >
      <Link
        className="font-bold hover:text-blue-500"
        href={"/"}
      >
        Home
      </Link>
      <Link
        className="font-bold hover:text-blue-500"
        href={"/about"}
      >
        About
      </Link>
      <Link
        className="font-bold hover:text-blue-500"
        href={"/contact"}
      >
        Contact
      </Link>
      <Link
        className="font-bold hover:text-blue-500 mr-2"
        href={"/project"}
      >
        Projects
      </Link>
    </div>
  );
};

export default Navbar;
