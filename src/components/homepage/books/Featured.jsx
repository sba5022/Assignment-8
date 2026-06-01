import React from 'react';
import books from "@/data/books.json";
import Image from 'next/image';
import Link from 'next/link';

const Featured = () => {
  const featuredBooks = books.slice(0, 4);

  return (
    <div className="container mx-auto my-10">
      
      <h2 className="text-3xl font-bold text-center mb-6">
        Featured Books
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {featuredBooks.map((book) => (
          <div key={book.id} className="border rounded-lg p-4 shadow-md">

            <Image
              src={book.image_url}
              alt={book.title}
              width={200}
              height={200}
              className="rounded-md"
            />

            <h3 className="font-bold mt-2">
              {book.title}
            </h3>

            <p className="text-sm text-gray-600">
              {book.author}
            </p>

            <Link href={`/books/${book.id}`}>
              <button className="btn btn-primary mt-3">
                View Details
              </button>
            </Link>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Featured;