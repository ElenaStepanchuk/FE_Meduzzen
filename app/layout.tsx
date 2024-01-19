"use client";
import { Inter } from "next/font/google";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import "bootstrap/dist/css/bootstrap.css";

import "./globals.css";

import { Provider } from "react-redux";
import { store } from "@/store/store";

import { Header, Footer } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const accessToken = localStorage.getItem("accessToken");
  return (
    <html lang="en">
      <UserProvider>
        <Provider store={store}>
          <body className={inter.className}>
            <Header />
            <main className="main">{children}</main>
            <Footer />
          </body>
        </Provider>
      </UserProvider>
    </html>
  );
}
