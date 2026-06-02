import Image from "next/image";
import books from "@/data/books.json";
import LeftSideBar from "@/components/homepage/books/LeftSideBar";
import RightSideBar from "@/components/homepage/books/RightSideBar";
import Link from "next/link";
import Featured from "@/components/homepage/books/Featured";
import SectionO from "@/components/homepage/books/SectionO";
import SectionT from "@/components/homepage/books/SectionT";

export default function Home() {
  const categories = [...new Set(books.map(book => book.category))];
  return (
    <div>
    <div className="container mx-auto my-[60px] grid grid-cols-12 gap-4">
      <div className="text-4xl font-bold  text-center col-span-9">
        <Featured />

      </div>
      <div className="text-4xl font-bold  text-center col-span-3">
        <RightSideBar /></div>
      <div>
       

      </div>
    </div>
     <SectionO />
        <SectionT />
    </div>
  );
}