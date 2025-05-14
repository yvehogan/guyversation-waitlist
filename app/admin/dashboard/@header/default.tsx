import { Appbar } from "@/components/modules/admin/appbar";
import React from "react";

interface HeaderProps {
  user: any;
}

const DefaultHeader: React.FC<HeaderProps> = ({ user }) => {
  return (
    <header>
      <Appbar user={user} />
    </header>
  );
};

export default DefaultHeader;