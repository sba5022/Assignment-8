'use client';
import React from 'react';
import books from "@/data/books.json";
import Image from 'next/image';

import toast, { Toaster } from "react-hot-toast";
const BooksDetails = async({params}) => {
     const { id } = await params;

  const book = books.find((book) => book.id === Number(id));

  if (!book) {
    return <h2 className="text-center text-2xl">Book not found</h2>;
  }
  const handleBorrow = () => {
    if (!session?.user) {
      toast.error("Please login first");
      router.push("/login");
      return;
    }

    toast.success("Book borrowed successfully!");
  };
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm container mx-auto my-10">
                <figure>
                    <Image
                        src={book.image_url}
                     width={400}
                        height={400}
                        alt={book.title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-5xl">{book.title}</h2>
                    <p > <span className='font-bold text-2xl'>Description:</span> <span className='text-2xl'>{book.description}</span></p>
                    <p><span className='font-bold text-2xl'>Author:</span> <span className='text-2xl'>{book.author}</span></p>
                    <p><span className='font-bold text-2xl'>Available Quantity:</span> <span className='text-2xl'>{book.available_quantity}</span></p>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={handleBorrow}>
                            Borrow This Book
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BooksDetails;