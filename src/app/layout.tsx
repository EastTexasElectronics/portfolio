import "@/styles/globals.css";
// import { Navbar } from "@/components/navbar";
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
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="bg-black">
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
