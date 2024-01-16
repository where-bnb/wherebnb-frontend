"use client";

import Container from "@/components/ui/Container";
import Logo from "@/components/navbar/Logo";

const RegisterNavbar = () => {
    return (
        <div className="fixed w-full bg-white z-10 shadow-sm bg-amber-200">
            <div className="py-4">
                <Container>
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
                </Container>
            </div>
        </div>
    );
};

export default RegisterNavbar;