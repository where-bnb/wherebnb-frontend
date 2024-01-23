// src/app/become-a-host/layout.jsx

import HostNavbar from "@/components/host/Hosting/HostNavbar";

const HostingLayout = ({ children }) => {
    return (
        <>
                <HostNavbar/>
                <div className="py-40 min-h-screen">
                    {children}
                </div>
        </>
        );
};

export default HostingLayout;