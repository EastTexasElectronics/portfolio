import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Robert Havelaar",
  description: "A portfolio of my work",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-black">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
