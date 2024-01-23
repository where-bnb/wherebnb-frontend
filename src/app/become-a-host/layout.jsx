// src/app/become-a-host/layout.jsx

import RegisterNavbar from "@/components/host/RegisterRoom/RegisterNavbar";
import Footer from "@/components/host/RegisterRoom/Footer";
import {HostDataProvider} from "@/context/HostDataContext";

const BecomeAHostLayout = ({ children }) => {

    return (
        <>
            <HostDataProvider>
                <RegisterNavbar/>
                <div className="flex-grow py-40 min-h-screen flex flex-col items-center justify-center">
                    {children}
                </div>
                <Footer/>
            </HostDataProvider>
        </>
    );
};

export default BecomeAHostLayout;