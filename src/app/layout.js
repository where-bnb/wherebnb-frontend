import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import SearchBar from "@/components/searchbar/SearchBarContainer";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import ClientOnly from "@/components/ClientOnly";
import ToastProvider from "@/providers/ToastProvider";

export const metadata = {
  title: "WhereBnb",
  description: "WhereBnb-web-application",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToastProvider />
          <RegisterModal />
          <LoginModal />
          <Navbar />
        </ClientOnly>
        <div className="md:pt-[200px] pt-[95px]">{children}</div>
      </body>
    </html>
  );
}
