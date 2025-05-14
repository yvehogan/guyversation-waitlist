import { Appbar } from "@/components/modules/admin/appbar";
import React from "react";

interface HeaderProps {
    user: any;
  }

const Header: React.FC<HeaderProps> = ({ user }) => {

  return (
    <header>
      <Appbar/>
    </header>
  );
};

export default Header;
