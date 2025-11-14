import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer/Footer";
import Header from "@/components/Header/Header";
import WhatsApp from "@/components/utils/WhatsApp";

const inter = Inter({
   subsets: ["latin"],
   weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
   style: ["normal"],
});

export const metadata: Metadata = {
   title: "Elite K9 International: Your Top Choice for Dogs in The Gambia, the UK, and Beyond",
   description:
      "If you’re searching online for anything related to dogs in The Gambia — be it security dogs, guard dogs, top-notch protection training, or a reputable working dog breeder — look no further than Elite K9 International. We’re dedicated to being the number one name that pops up when you need the best-trained and best-bred dogs. Whether you're in West Africa or Europe, our reputation for excellence in dog training and breeding speaks for itself.",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" suppressHydrationWarning>
         <body
            className={`${inter.className} m-0 p-0 text-neutral-200 transition-all duration-200 antialiased bg-[#1f1f1f] font-[95%] md:font-[98%] lg:font-[100%] `}
         >
            <Header />
            {children}
            <Footer />
            <WhatsApp />
         </body>
      </html>
   );
}
