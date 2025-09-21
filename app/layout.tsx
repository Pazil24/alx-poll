import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ALX Polly",
  description: "A Next.js polling application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="border-b">
          <div className="container mx-auto p-4 flex justify-between items-center">
            <Link href="/polls" className="font-bold text-xl">
              ALX Polly
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/polls" className="hover:text-gray-600">
                My Polls
              </Link>
              <Link href="/polls/new" className="hover:text-gray-600">
                Create Poll
              </Link>
              <div className="ml-4">
                <Link href="/auth">
                  <span className="font-bold">U</span>
                </Link>
              </div>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="py-6 text-center text-gray-500 text-sm">
          © 2025 ALX Polly. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
