import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import LoginModal from "../components/ui/modals/LoginModal";
import RegisterModal from "../components/ui/modals/RegisterModal";
import ToastProvider from "@/providers/ToastProvider";
import { MswProvider } from "../providers/MswProvider";
import AuthSession from "@/providers/AuthSessionProvider";
import getCurrentUser from "./actions/getCurrentUser";

export const metadata = {
  title: "WhereBnb",
  description: "WhereBnb-web-application",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({ children }) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <MswProvider />
        <AuthSession>
          <ToastProvider />
          <RegisterModal />
          <LoginModal />
          <Navbar />
          <div className="md:pt-[200px] pt-[95px]">{children}</div>
        </AuthSession>
      </body>
    </html>
  );
}
