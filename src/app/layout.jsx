import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar/Navbar";
import SearchBar from "@/app/components/searchbar/SearchBarContainer";
import LoginModal from "@/app/components/modals/LoginModal";
import RegisterModal from "@/app/components/modals/RegisterModal";
import ClientOnly from "@/app/components/ClientOnly";
import ToastProvider from "@/app/providers/ToastProvider";

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
