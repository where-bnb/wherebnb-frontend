"use client";

import Logo from "@/components/navbar/Logo";

const RegisterNavbar = () => {
  return (
    <div className="sticky top-0 bg-white z-10 shadow-sm py-2">
      <div
        className="
                flex
                flex-row
                items-center
                justify-between
                gap-3
                md:gap-0
                sm:mx-5
            "
                    >
                        <Logo />
                    </div>
            </div>

    );
};

export default RegisterNavbar;