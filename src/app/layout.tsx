import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/utils/ThemeToggle/ThemeToggle";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500"]
});

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
