import { Murecho } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const murecho = Murecho({ subsets: ["latin"] });

export const metadata = {
  title: "Flight Details",
  description: "Booking Flights",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={murecho.className}>
        <Navbar />
        <div className="flex mx-[164px] my-0 pt-[16px]">
          <Sidebar />
          <main className="w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
