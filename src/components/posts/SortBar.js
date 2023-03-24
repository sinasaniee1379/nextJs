import { AdjustmentsIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { useRouter } from "next/router";
import pushRouter from "@/utils/pushRouter";

const sortOption = [
  { lable: "پربازدید ترین", id: "most" },
  { lable: "مجبوب ترین", id: "popular" },
  { lable: "جدید ترین", id: "newest" },
];
const SortBar = () => {
  const router = useRouter();
  const [sort, setSort] = useState(router.query.sort || "newest");

  const handleSort = (id) => {
    setSort(id);
    router.query.sort = id;
    pushRouter(router);
  };
  return (
    <div className="bg-white rounded-3xl px-4 flex items-center">
      <div className="flex gap-x-2 items-center ml-4">
        <AdjustmentsIcon className="w-6 h-6" />
        <span className="">مرتب سازی</span>
      </div>
      <ul className="flex items-center gap-x-4">
        {sortOption.map(({ id, lable }) => {
          return (
            <li
              onClick={() => handleSort(id)}
              className={`relative py-4 cursor-pointer text-gray-700 ${
                id === sort ? "text-purple-800 font-bold" : ""
              }`}
              key={id}
            >
              {lable}
              {id === sort && (
                <span className="w-[100%] h-[3px] absolute bottom-0 right-0 bg-purple-700 rounded"></span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SortBar;
