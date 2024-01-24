// src/app/become-a-host/layout.jsx

import RegisterNavbar from "@/components/host/RegisterRoom/RegisterNavbar";
import Footer from "@/components/host/RegisterRoom/Footer";
import { HostDataProvider } from "@/context/HostDataContext";
import Container from "@/components/ui/Container";

const BecomeAHostLayout = ({ children }) => {
  return (
    <Container>
      <RegisterNavbar />
      <HostDataProvider>
        <div className="min-h-screen flex flex-col items-center justify-center">
          {children}
        </div>
        <Footer />
      </HostDataProvider>
    </Container>
  );
};

export default BecomeAHostLayout;