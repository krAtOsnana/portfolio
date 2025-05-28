import React from "react";
import { HyperText } from "./ui/HyperText";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex justify-center items-center gap-5 ">
        <div className="">
          <Image src="/kklogo.svg" height={40} width={40} alt="logo" className="" />
        </div>
        <HyperText className="">kushagra kumar</HyperText>
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
