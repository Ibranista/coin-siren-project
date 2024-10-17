import "./globals.css";
import "material-symbols";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "./components/Organisms/navbar";
import HeroJumbotron from "./components/Organisms/heroJumbotron";
import Text from "./components/Atoms/text";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "900"]
});

export default function RootLayout({
  children,
  lang = "en",
}: Readonly<{
  children: React.ReactNode;
  lang: string;
}>) {
  console.log('hello')
  return (
    <html lang={lang} className={poppins.className}>
      <body>
        <main className="bg-slight_light">
          <section className="main_jumbotron max-lg:pb-[60px] pb-[108px]">
            <Navbar />
            <HeroJumbotron />
          </section>
          {children}
          <footer className="pt-9 pb-[60px] md:pt-12 md:pb-20 px-4 max-w-[1201.5px] mx-auto">
            <Text variant={"lightest_dark"} className="text-[13px] font-black">
              &copy; 2024 Hyperhire
            </Text>
          </footer>
        </main>
      </body >
    </html >
  );
}
