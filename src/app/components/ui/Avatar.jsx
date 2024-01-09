"use client";

import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      className="rounded-full"
      height="35"
      width="35"
      alt="Avatar"
      src="/images/placeholder.jpg"
    />
  );
};

export default Avatar;
