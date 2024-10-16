import { Button } from "@nextui-org/react";
import Image from "next/image";
import headerimg from "../../../public/images/pngegg.png";
function Header() {
  return (
    <nav className="flex flex--justify-content-evenly flex--align-items-center">
      <div className="nav-left flex">
        <Button className="btn btn--outline">Home</Button>
        <Button className="btn btn--outline">About</Button>
        <Button className="btn btn--outline">Book</Button>
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
