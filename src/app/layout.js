import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import { DarkThemeProvider } from "./utilities/Theme/DarkThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "spurtCMS Blog Template",
  description: "spurtCMS Blog Template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
       
      <body className={inter.className}>
      <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js"></script>
      <DarkThemeProvider>
      <main className="container min-h-screen mx-auto max-w-screen-lg">
      <Header/>
      {children}
      </main>
      </DarkThemeProvider>
      </body>
   
    </html>
  );
}
