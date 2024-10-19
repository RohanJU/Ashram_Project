import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import headerimg from "../../../public/images/pngegg.png";
function Header() {
  return (
    <nav className="flex flex--justify-content-evenly flex--align-items-center">
      <div className="nav-left flex">
        <Button className="btn btn--outline">Home</Button>
        <Link href={"/about"}>
          <Button className="btn btn--outline">About</Button>
        </Link>
        <Link href={"/books"}>
          <Button className="btn btn--outline">Book</Button>
        </Link>
      </div>
      <div>
        <Image width={100} height={100} src={headerimg} alt="LOGO" />
      </div>
      <div className="nav-right flex">
        <Button className="btn btn--outline">Gallery</Button>
        <Button className="btn btn--outline">Donate</Button>
        <Button className="btn btn--outline">User</Button>
      </div>
    </nav>
  );
}

export default Header;
