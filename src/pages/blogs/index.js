import axios from "axios";
import PostList from "@/components/posts/PostList";
import SortBar from "@/components/posts/SortBar";
import CategoryMobile from "@/components/posts/CategoryMobile";
import CategoryDesktop from "@/components/posts/CategoryDesktop";
import Layout from "@/containers/Layout";
import http from "@/services/httpService";
import queryString from "query-string";
import PaginationComponent from "@/common/pagination";
export default function Home({ blogsData, pageCategory }) {
  console.log(blogsData);

  return (
    <Layout>
      <div className="bg-gray-50">
        <div className="container mx-auto lg:max-w-screen-xl px-4 pb-10 md:px-0">
          <CategoryMobile pageCategory={pageCategory} />
          <div className="grid gap-8 md:grid-cols-12 md:grid-rows-[60px_minmax(300px,_1fr)] min-h-screen">
            <div className="hidden md:block md:row-span-2 md:col-span-3">
              <CategoryDesktop pageCategory={pageCategory} />
            </div>
            <div className=" hidden md:block md:col-span-9">
              <SortBar />
            </div>
            <div className="md:col-span-9 grid grid-cols-6 gap-8">
              <PostList blogsData={blogsData.docs} />
              <PaginationComponent
                page={blogsData.page}
                totalPages={blogsData.totalPages}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req, query }) {
  const { data: result } = await http.get(
    `/posts?${queryString.stringify(query)}`,
    { withCredentials: true, headers: { Cookie: req.headers.cookie || "" } }
  );
  const { data: pageCategory } = await http.get("/post-category");
  const { data } = result;
  return {
    props: {
      blogsData: data,
      pageCategory: pageCategory.data,
    },
  };
}
