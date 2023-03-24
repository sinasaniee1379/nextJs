import { ClockIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Postinteraction from "./Postinteraction";

const PostList = ({ blogsData }) => {
  return blogsData.map((blog, index) => {
    console.log(blog);
    return (
      <div
        key={index}
        className="col-span-6 md:col-span-3 lg:col-span-2 rounded-3xl bg-white p-2 flex flex-col max-h-[350px]"
      >
        <div className="aspect-w-16 aspect-h-9 mb-6">
          <Link href={`/posts/${blog.hashId}/${blog.slug}`}>
            <a>
              <img
                alt="veu"
                src={blog.coverImage}
                className="rounded-2xl w-full h-full object-center object-cover "
              />
            </a>
          </Link>
        </div>
        <div className="bg-gray-50 rounded-2xl p-2 flex flex-col w-full justify-between flex-1">
          <Link href={`/posts/${blog.hashId}/${blog.slug}`}>
            <a>
              <h2 className="mb-4 font-bold">{blog.titleBrief}</h2>
            </a>
          </Link>
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img
                  className="w-6 h-6 rounded-full ring-2 ring-white ml-2"
                  src="/images/profile.jpg"
                  alt="profile"
                />

                <span className="text-sm">سینا صنیعی</span>
              </div>
              <Link href={`/blogs/${blog?.category?.englishTitle}`}>
                <a
                  className="text-xs px-2 py-1 
                      rounded-xl bg-blue-100 text-blue-600
                       hover:text-blue-100 hover:bg-blue-600 
                       transition-all duration-300 cursor-pointer"
                >
                  {blog.category?.title}
                </a>
              </Link>
            </div>
            <div className="flex items-center justify-between">
              <Postinteraction post={blog} isSmall />
              <div className="flex items-center text-[10px] text-gray-400 font-bold">
                <ClockIcon className="w-4 h-4 stroke-gray-400 ml-1" />
                <span className="ml-1">زمان مطالعه :</span>
                <span className="ml-1 leading-3">{blog.readingTime}</span>
                <span>دقیقه</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default PostList;
