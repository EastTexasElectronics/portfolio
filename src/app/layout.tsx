import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import ContactModal  from "@/components/ContactModal";
import React from "react";
import { Toaster } from "@/components/ui/toaster"


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
          <title>Robert Havelaar</title>
      </head>
      <body className="bg-black">
        {children}
        <ContactModal />
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
