import LeftSideBar from "@/components/homepage/books/LeftSideBar";
import RightSideBar from "@/components/homepage/books/RightSideBar";
import books from "@/data/books.json";
import Link from "next/link";

const CategoryPage = async ({ params }) => {
  const { id} = await params;
console.log("URL category:", id);
  const categories = [...new Set(books.map(book => book.category))];

  const filteredBooks = books.filter(
    (book) => book.category === id
  );
  console.log("Filtered Books:", filteredBooks);

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-3">
        <LeftSideBar
          categories={categories}
          activeCategory={id}
        />
      </div>

      <div className="col-span-6">
        {filteredBooks.map(book => (
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
      <div className="col-span-3">
        <RightSideBar />
      </div>
    </div>
  );
};

export default CategoryPage;
