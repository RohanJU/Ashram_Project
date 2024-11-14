import { Button } from "@nextui-org/react";
import React from 'react'
import headerimg from "../../../public/images/pngegg.png"
import Image from 'next/image' 
import Link from "next/link";


function Header() {
  return (
    <nav className="flex flex--justify-content-evenly flex--align-items-center">
      <div className="nav-left flex">
        <Button className="btn btn--outline">Home</Button>
        <Link href={"/about"}>
          <Button className="btn btn--outline">About</Button>
        </Link>
        <Link href={"/book"}>
          <Button className="btn btn--outline">Book</Button>
        </Link>
      </div>
      <div>
        <Image width={100} height={100} src={headerimg} alt="LOGO" />
      </div>
      <div className="nav-right flex">
        <Link href={"/Gallery"}>
            <Button className="btn btn--outline">Gallery</Button>
        </Link>
        <Link href={"/donate"}>
            <Button className="btn btn--outline">Donate</Button>
        </Link> 
        <Link href={"/user"}>
          <Button className="btn btn--outline">User</Button>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
