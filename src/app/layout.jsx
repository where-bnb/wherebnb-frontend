import { Nunito } from "next/font/google";
import "./globals.css";
import LoginModal from "../components/ui/modals/LoginModal";
import RegisterModal from "../components/ui/modals/RegisterModal";
import ToastProvider from "@/providers/ToastProvider";
import { MswProvider } from "../providers/MswProvider";
import AuthSession from "@/providers/AuthSessionProvider";
import Navbar from "@/components/navbar/Navbar";

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
        {/*<MswProvider />*/}
        {/*<AuthSession>*/}
        {/*    <ToastProvider />*/}
        {/*    <RegisterModal />*/}
        {/*    <LoginModal />*/}
        {/*    <Navbar/>*/}
        <div>{children}</div>
        {/*<div>app/layout.jsx</div>*/}
        
        {/*</AuthSession>*/}
        </body>
        </html>
    );
}