import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Header from "../components/Header/Header";
// import Footer from "../components/Footer/Footer";
// import WhatsApp from "../components/utils/WhatsApp";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
  style: ["normal"],
});


export const metadata: Metadata = {
  title: "Elite K9 International",
  description:
    "Professional dog training company specializing in personalized training programs for dogs of all breeds and sizes. Offering obedience training, behavior modification, puppy training, and advanced techniques to ensure a well-behaved, happy pet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} m-0 p-0 text-neutral-200 transition-all duration-200 antialiased bg-background font-[95%] md:font-[98%] lg:font-[100%] `}>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
        {/* <WhatsApp /> */}
      </body>
    </html>
  );
}
