import Link from "next/link";
import React from "react";
import Logo from "./dojo-logo.png";
import Image from "next/image";
import LogoutButton from "./LogoutButton";
const Navbar = ({ user }) => {
  return (
    <nav>
      <Image
        src={Logo}
        width={70}
        quality={100}
        placeholder="blur"
        alt="Dojo Helpdesk"
      />
      <h1>Dojo Helpdesk</h1>
      <Link href={"/"}>Dashboard</Link>
      <Link href={"/tickets"} className="mr-auto">
        Tickets
      </Link>
      {user && <span>{user.email}</span>}
      {user && <LogoutButton />}
    </nav>
  );
};

export default Navbar;
