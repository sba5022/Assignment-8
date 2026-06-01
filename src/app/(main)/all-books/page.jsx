'use client'
import React, { useState } from 'react';
import books from "@/data/books.json";
import Link from "next/link";
import LeftSideBar from '@/components/homepage/books/LeftSideBar';
const AllBooks = () => {
    const [searchTerm, setSearchTerm] = useState('');

     const categories = [...new Set(books.map(book => book.category))];
     const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
    return (
        <div className="container mx-auto my-[60px] grid grid-cols-12 gap-2">
             <div className="space-y-5 col-span-3">
         <LeftSideBar categories={categories} />

      </div>
        <div className="text-4xl font-bold  text-center col-span-6">
             <h1>All Books</h1> 
             <div className="mb-8">
          <input
            type="text"
            placeholder="Search books by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>   
            <div className="grid grid-cols-1  gap-4">
            {filteredBooks.map((book) => (
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
        </div>
    );
};

export default AllBooks;