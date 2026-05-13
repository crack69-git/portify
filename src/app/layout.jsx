import { Inter } from "next/font/google";
import "./globals.css";
import NavbarSection from "@/components/shared/NavbarSection";
import RightSection from "@/components/shared/RightSection";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
export const metadata = {
  title: "Portify",
  description: "Homepage",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavbarSection />
        <div className="flex">
          <RightSection />
          <main className="w-11/12 mx-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
