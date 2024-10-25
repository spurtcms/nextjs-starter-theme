'use client'
import Image from "next/image";
import Link from "next/link";
import ThemeSwitch from "../utilities/Theme/ThemeSwitch";

export default function Header() {
  return (
    <header className="flex items-center justify-between md:py-8 sm:py-4 lg:px-0 px-4 py-4">
      <Link href={"/"}>

        <Image
          src="/img/logo.svg"
          alt="spurtCMS Profile Image"
          className="w-48 md:w-auto"
          width={32}
          height={32}
          priority

        /></Link>
      <ThemeSwitch />

    </header>
  );
}
