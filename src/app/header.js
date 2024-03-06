import Image from "next/image";

export default function Header() {
  return (
    <header className="md:py-8 sm:py-4 lg:px-0 px-4 py-4">
          <a href="">
            <img src="/img/logo.svg" className="w-48 md:w-auto" />
          </a>
    </header>
  );
}
