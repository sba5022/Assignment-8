import Image from "next/image";
import books from "@/data/books.json";
import LeftSideBar from "@/components/homepage/books/LeftSideBar";
import RightSideBar from "@/components/homepage/books/RightSideBar";
import Link from "next/link";

export default function Home() {
    const categories = [...new Set(books.map(book => book.category))];
  return (
    <div className="container mx-auto my-[60px] grid grid-cols-12 gap-2">
      
     

      <div className="space-y-5 col-span-3">
         <LeftSideBar categories={categories} />

      </div>
      <div className="text-4xl font-bold  text-center col-span-6">
        All Books
    <div className="grid grid-cols-1  gap-4">
    {books.map((book) => (
      <div
        key={book.id}
        className="border rounded-lg p-4 shadow-md"
      >
         <figure className="px-50 pt-10 ">
    <img
      src={book.image_url}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
        <h2 className="text-md font-bold">
          {book.title}
        </h2>

          <div className=" items-center">
      <Link href={`/books/${book.id}`}>
        <button className="btn btn-primary">Details</button>
      </Link>
    </div>
      </div>
    ))}
  </div>
      </div>
      <div className="text-4xl font-bold  text-center col-span-3">
       <RightSideBar/>
      </div>
    </div>
  );
}