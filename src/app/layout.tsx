import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Head from "next/head";

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
      <Head>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <body className={fira.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
