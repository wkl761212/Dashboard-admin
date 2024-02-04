import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import TopCards from "../components/TopCards";
import Schedule from "../components/Schedule";



export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <Header />
      <TopCards />
      <div className="p-4 grid md:grid-cols-2 grid-cols-1 gap-4">
        
        <Schedule/>
        
       
      </div>
      
    </main>
  );
}
