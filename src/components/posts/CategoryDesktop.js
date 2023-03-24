import { ChevronDownIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const CategoryDesktop = ({ pageCategory }) => {
  const [isOpne, setIsOpen] = useState(false);
  const { query } = useRouter();
  console.log(pageCategory);
  return (
    <div className="bg-white rounded-3xl overflow-hidden sticky top-24">
      <div
        className="flex justify-between items-center py-4 px-4 bg-purple-200"
        onClick={() => setIsOpen(!isOpne)}
      >
        <span>دسته بندی مقالات</span>
        <ChevronDownIcon
          className={`w-6 h-6 stroke-purple-400 transition-all duration-200 ${
            isOpne ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      <div className={`${isOpne ? "block" : "hidden"}`}>
        <Link href={"/blogs"}>
          <a
            className={`hover:bg-purple-100 block pr-4  py-2 mb-1 ${
              !query.categorySlug
                ? "bg-purple-700 text-white hover:bg-purple-500"
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
                className={`hover:bg-purple-100 block pr-4  py-2 mb-1 ${
                  query.categorySlug === item.englishTitle
                    ? "bg-purple-700 text-white hover:bg-purple-500"
                    : ""
                }`}
              >
                {item.title}
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryDesktop;
