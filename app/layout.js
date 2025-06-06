import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Provider from "@/components/Provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PromptMarket",
  description: "Discover and share AI prompts with the community",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Provider>
        <div className="relative flex flex-col min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-teal-500 rounded-full mix-blend-color-dodge filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600 rounded-full mix-blend-color-dodge filter blur-3xl opacity-20 animate-pulse" />
      </div>
          <Nav />
          {children}
        </div>
        </Provider>
      </body>
    </html>
  );
}
