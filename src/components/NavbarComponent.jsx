'use client';

import useNavbarComponent from "@/hooks/useNavbarComponent";
import HostNavbar from "@/components/host/Hosting/HostNavbar";
import RegisterNavbar from "@/components/host/RegisterRoom/RegisterNavbar";
import Navbar from "@/components/navbar/Navbar";

export default function NavbarComponent() {
    const navbarType = useNavbarComponent();

    switch (navbarType) {
        case 'host':
            return <HostNavbar />;
        case 'register':
            return <RegisterNavbar />;
        default:
            return <Navbar />;
    }
}