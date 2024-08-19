import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";
import "./globals.css";
import Sider from "./components/sider/Sider";
import Search from "./components/search/Search";
import Play from "./components/play/Play";
import { Suspense } from "react";
// https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
const inter = Inter({ subsets: ["latin"] });
const quicksand = Quicksand({subsets: ["latin"]});
export const metadata: Metadata = {
  title: "Project 5: Music Online",
  description: "Project 5",
};
// https://console.firebase.google.com/project/project-5---f3---24/database/project-5---f3---24-default-rtdb/data
// Click to ... to import JSON to Firebase
// npm install firebase
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} bg-[#292929]`}>
        <div className="container mx-auto">
          <div className="flex items-start">
            <div className="w-[280px]">
              <Sider />
            </div>
            <div className="ml-[20px] flex-1">
              <Suspense>
                <Search />
              </Suspense>
              <main className="mt-[30px] mb-[120px]">
                {children}
              </main>
            </div>
          </div>
        </div>
        <Play />
      </body>
    </html>
  );
}
