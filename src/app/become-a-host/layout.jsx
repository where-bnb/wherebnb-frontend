// src/app/become-a-host/layout.jsx

import RegisterNavbar from "@/components/host/RegisterRoom/RegisterNavbar";
import Footer from "@/components/host/RegisterRoom/Footer";

const BecomeAHostLayout = ({ children }) => {
    return (
        <>
            <RegisterNavbar/>
            <div className="flex-grow py-40 min-h-screen flex flex-col items-center justify-center">
                {children}
            </div>
            <Footer/>
        </>
    );
};

export default BecomeAHostLayout;