import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";
import { ReduxProvider } from "@/store/provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie World",
  description: "Created by Ivan Deresh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <div className="max-container">
            <TheHeader />
            {children}
            <TheFooter />
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
