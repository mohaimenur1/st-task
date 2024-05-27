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
      <body className={`${murecho.className}`}>
        <Navbar />
        <div className="flex items-center justify-center">
          <div className="flex justify-center items-center h-full pt-[16px]">
            <Sidebar />
            <main className="w-full">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
