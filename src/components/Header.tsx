import React from "react";
import { HyperText } from "./ui/HyperText";

import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex justify-center items-center gap-5 ">
        
        <HyperText className="">kushagra kumar</HyperText>
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
