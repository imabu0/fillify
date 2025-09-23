import { Logo } from "../icons/logo";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="absolute w-full">
      <div className="flex items-center justify-between w-7xl m-auto sticky top-0 mt-0">
      <div className="text-xl flex items-center gap-0.5 font-medium h-16">
        <Logo></Logo>
        FILLIFY
      </div>
      <div className="flex items-center gap-10">
        <Link href="/">Home</Link>
        <Link href="">About</Link>
        <Link href="">Edit PDF</Link>
        <Link href="">Make Fillable</Link>
        <Link href="">Contact</Link>
      </div>
      </div>
    </div>
  );
}
