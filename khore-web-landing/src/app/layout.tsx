import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira-code" });

export const metadata: Metadata = {
  title: "Khora | The Next Generation Video Engine",
  description: "An open-source, node-based NLE powered by Vulkan. No subscription, no legacy bloat, no lag.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${firaCode.variable} font-sans bg-charcoal-900 text-gray-100`}>
        {children}
      </body>
    </html>
  );
}
