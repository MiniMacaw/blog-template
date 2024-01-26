import "../styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {Providers} from "./providers"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "minimacaw blog",
  description: "minimacaw blog powerd by nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
