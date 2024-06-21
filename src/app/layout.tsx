import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const fira = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kelvin Leandro's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fira.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
