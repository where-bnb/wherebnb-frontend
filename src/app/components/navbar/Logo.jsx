"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      src="/images/logo.png"
      alt="logo"
      className="hidden md:block cursor-pointer"
      height="150"
      width="150"
      onClick={() => router.push("/")}
    />
  );
};

export default Logo;
