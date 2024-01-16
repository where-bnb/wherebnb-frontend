import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import LoginModal from "../components/ui/modals/LoginModal";
import RegisterModal from "../components/ui/modals/RegisterModal";
import ToastProvider from "@/providers/ToastProvider";
import { MswProvider } from "../providers/MswProvider";
import AuthSession from "@/providers/AuthSessionProvider";
import Container from "@/components/ui/Container";
import FilterModal from "@/components/searchPage/filters/FilterModal";

export const metadata = {
  title: "WhereBnb",
  description: "WhereBnb-web-application",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <MswProvider />
        <AuthSession>
          <ToastProvider />
          <RegisterModal />
          <LoginModal />
          <FilterModal />
          <Navbar />
          <div className="md:pt-[260px] pt-[180px]">
            <Container>{children}</Container>
          </div>
        </AuthSession>
      </body>
    </html>
  );
}
