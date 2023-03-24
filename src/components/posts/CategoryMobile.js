import Link from "next/link";
import { useRouter } from "next/router";

const CategoryMobile = ({ pageCategory }) => {
  const { query } = useRouter();
  return (
    <div className="flex md:hidden gap-x-4 overflow-auto pb-5">
      <Link href={`/blogs`}>
        <a
          className={`block border border-gray-500 bg-white px-3 py-1 rounded-3xl text-gray-500 whitespace-nowrap text-sm ${
            !query.categorySlug
              ? "border-purple-700 text-purple-700 bg-purple-100 border-2"
              : ""
          }`}
        >
          همه مقالات
        </a>
      </Link>
      {pageCategory.map((item) => {
        return (
          <Link href={`/blogs/${item.englishTitle}`} key={item._id}>
            <a
              className={`block border border-gray-500 bg-white px-3 py-1 rounded-3xl text-gray-500 whitespace-nowrap text-sm ${
                query.categorySlug === item.englishTitle
                  ? "border-purple-700 text-purple-700 bg-purple-100 border-2"
                  : ""
              }`}
            >
              {item.title}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryMobile;
