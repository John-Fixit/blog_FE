"use client";

import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/utils/ThemeToggle/ThemeToggle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500"]
});

const metadata: Metadata = {
  title: "Blog",
  description: "Blog site",
};

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
      </body>
    </html>
  );
}
