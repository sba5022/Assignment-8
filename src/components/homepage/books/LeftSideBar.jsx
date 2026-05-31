import Link from "next/link";

const LeftSideBar = ({ categories, activeCategory }) => {
    console.log("activeCategory:", activeCategory);
    console.log("category:", categories);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">
        All Categories
      </h1>

      {categories.map((category) => (
        <Link
          key={category}
          href={`/category/${category}`}
        >
          <div
            className={`p-3 rounded-lg shadow-md mt-3 cursor-pointer ${
              activeCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-100"
            }`}
          >
            {category}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LeftSideBar;