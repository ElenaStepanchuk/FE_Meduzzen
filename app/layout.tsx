"use client";
import { UserProvider } from "@auth0/nextjs-auth0/client";

import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";

import { Inter } from "next/font/google";

import { Provider } from "react-redux";
import { store } from "@/store/store";

import { Header, Footer } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
