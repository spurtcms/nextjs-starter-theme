import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "spurtCMS Blog Template",
  description: "spurtCMS Blog Template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Head>
       <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
       </Head>
      <body className={inter.className}>
      <main className="container min-h-screen mx-auto max-w-screen-lg">
      <Header/>
      {children}
      </main>
      </body>
   
    </html>
  );
}
