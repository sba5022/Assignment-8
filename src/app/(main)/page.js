import Image from "next/image";
import books from "@/data/books.json";
import LeftSideBar from "@/components/homepage/books/LeftSideBar";
import RightSideBar from "@/components/homepage/books/RightSideBar";
import Link from "next/link";

export default function Home() {
    const categories = [...new Set(books.map(book => book.category))];
  return (
    <div className="container mx-auto my-[60px] grid grid-cols-12 gap-2">
      <div className="text-4xl font-bold  text-center col-span-3">
        
       <RightSideBar/>
      </div>
    </div>
  );
}