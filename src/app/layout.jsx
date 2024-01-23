import { Nunito } from "next/font/google";
import "./globals.css";
import LoginModal from "../components/ui/modals/LoginModal";
import RegisterModal from "../components/ui/modals/RegisterModal";
import ToastProvider from "@/providers/ToastProvider";
import { MswProvider } from "../providers/MswProvider";
import AuthSession from "@/providers/AuthSessionProvider";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/ui/Container";
import FilterModal from "@/components/searchPage/filters/FilterModal";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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

          <ReactQueryProvider>
            <Container>{children}</Container>

            <ReactQueryDevtools />
          </ReactQueryProvider>
        </AuthSession>
      </body>
    </html>
  );
}
