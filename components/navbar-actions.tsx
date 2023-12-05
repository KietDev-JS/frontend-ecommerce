"use client";

import { ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";

const NavbarActions = () => {
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="flex items-center rounded-full bg-black px-4 py-2 w-auto border-transparent font-semibold">
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium">0</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
