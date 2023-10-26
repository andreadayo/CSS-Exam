import type { Metadata } from "next";
import Head from "next/head";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Computer Science Society",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
