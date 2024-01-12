"use client";

import Container from "@/components/ui/Container";
import Logo from "@/components/navbar/Logo";
import HostMenu from "@/components/host/Hosting/HostMenu";
import HostProfile from "@/components/host/Hosting/HostProfile";

const HostNavbar = () => {
    return (
        <div className="fixed w-full bg-white z-10 shadow-sm">
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
                        <HostMenu/>
                    </div>
                    <HostProfile/>
                </Container>
            </div>
        </div>
    );
};

export default HostNavbar;