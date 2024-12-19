import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} antialiased bg-slate-100`}>
        <div className="flex w-full h-screen">
          <div className="h-full min-w-16 md:min-w-[250px] xl:min-w-[350px] bg-white transition1">
            <Sidebar />
          </div>
          <div className="w-full h-full flex flex-col p-2 md:p-5">
            <div className="h-[100px]">
              <Navbar />
            </div>
            <div className="bg-white overflow-y-auto h-full rounded-lg">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
