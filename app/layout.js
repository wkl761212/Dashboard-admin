import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
  
    <Sidebar>
      {children}
    </Sidebar>
  );
}
