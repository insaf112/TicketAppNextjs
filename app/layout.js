import Link from "next/link";
import "./globals.css";
import { Rubik } from "next/font/google";

export const dynamic = "force-dynamic";
const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
