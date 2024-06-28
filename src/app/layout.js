import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import { DarkThemeProvider } from "./utilities/Theme/DarkThemeProvider";
import Footer from "./components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "spurtCMS Blog Template",
  description: "spurtCMS Blog Template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={inter.className}>
      <script
          src="https://connect.facebook.net/en_US/sdk.js"
          async
          defer
          crossorigin="anonymous"
        />
        <DarkThemeProvider>
      <main className="container min-h-screen mx-auto max-w-screen-lg">
      <Header/>
      {children}
      <Footer />
      </main>
      </DarkThemeProvider>
     
      
      </body>
   
    </html>
  );
}
