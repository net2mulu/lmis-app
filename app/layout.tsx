import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider, SignInButton, SignedOut } from "@clerk/nextjs";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header>
            <SignedOut>
              <div className="px-2 py-1 bg-sky-300 text-white w-max m-2 rounded-md">
                <SignInButton />
              </div>
            </SignedOut>
          </header>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
