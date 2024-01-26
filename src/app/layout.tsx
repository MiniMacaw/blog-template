import "@/styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/components/theme-providers"
import { MainHeader } from "@/components/main-header"
import { GotoTop} from "@/components/goto-top"

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <MainHeader />
            <main>{children}</main>
            <GotoTop />
          </div>
        </Providers>
      </body>
    </html>
  );
}
