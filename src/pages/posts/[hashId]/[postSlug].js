import { toPersianDigits } from "@/utils/toPersianDigits";
import { LinkIcon, BookmarkIcon } from "@heroicons/react/outline";
import { BookmarkIcon as SolidBookmarkIcon } from "@heroicons/react/solid";
import axios from "axios";
import Postinteraction from "./../../../components/posts/Postinteraction";
import { FaTelegram } from "react-icons/fa";
import { IoLogoTwitter, IoLogoLinkedin } from "react-icons/io";
import { MdContentCopy } from "react-icons/md";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import PostList from "@/components/posts/PostList";
import PostComments from "@/components/posts/postComment";
import { toLocalDate } from "@/utils/toLocalDate";
import Layout from "./../../../containers/Layout/index";

const PostPage = ({ post }) => {
  const [copoied, setCopied] = useState(false);
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        <div className="md:max-w-screen-lg container mx-auto">
          <header className="flex flex-col md:flex-row gap-y-5 md:justify-between md:items-start mb-12 mx-auto max-w-screen-md">
            <div className="flex items-stretch">
              <img
                className="w-14 h-14 md:w-20 md:h-20 rounded-full ring-2 ring-white object-cover"
                alt={post.author.name}
                src={post.coverImage}
              />
              <div className="flex flex-col mr-4 justify-between">
                <div></div>
                <span className="font-normal text-xs hidden md:block">
                  {post.author.biography}
                </span>
                <div className="font-normal text-gray-400 text-sm">
                  <span>{toLocalDate(post.createdAt)}</span>
                  <span className="mx-1">&bull;</span>
                  <span>
                    <span>خواندن</span>
                    <span>{toPersianDigits}</span>
                    <span>دقیقه</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <botton>
                <LinkIcon className="h-6 w-6 hover:text-black text-gray-500 cursor-pointer" />
              </botton>
              <botton className="mr-4 border border-gray-300 text-gray-500 hover:text-gray-600 rounded-full px-3 py-1 flex items-center">
                <span className="ml-1 text-xs">
                  {post.isBookmarked ? "ذخیره" : "ذخیره شده"}
                </span>
                {post.isBookmarked ? (
                  <SolidBookmarkIcon className="h-6 w-6 fill-current" />
                ) : (
                  <BookmarkIcon className="h-6 w-6 stroke-current" />
                )}
              </botton>
            </div>
          </header>
          <main
            className="prose prose-xl prose-slate prose-h1:font-black prose-h1:text-xl md:prose-h1:text-3xl
         prose-h2:text-xl md:prose-h2:text-2xl prose-h2:font-extrabold
          prose-p:text-base prose-p:leading-8 md:prose-p:text-lg md:prose-p:leading-10 prose-img:rounded max-w-screen-md mx-auto"
          >
            <h1>{post.title}</h1>
            <h2>عنوان اول تستی</h2>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <img alt={post.author.name} src={post.coverImage} />
            <h2>عنوان دوم تستی</h2>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </main>
          <section>
            <ul className="flex items-center flex-wrap gap-x-4 mb-6">
              {["Next.Js", "ریکت", "جاوااسکریپت", "فرانت اند"].map(
                (item, index) => {
                  return (
                    <li
                      className="px-3 py-1 rounded-2xl bg-gray-200 hover:-gray-100 transition-all cursor-pointer text-gray-600 text-sm mb-3 block"
                      key={index}
                    >
                      {item}
                    </li>
                  );
                }
              )}
            </ul>
            <div className="flex items-center flex-col md:flex-row gap-y-8 md:justify-between">
              <Postinteraction
                post={post}
                className="justify-evenly w-full  md:w-auto"
              />
              <div className="flex items-center gap-x-6 justify-between w-full md:w-auto">
                <div className="flex items-center md:gap-x-6 gap-x-3 w-full md:w-auto">
                  <a
                    className="block"
                    rel="noreferrer"
                    target={"_blank"}
                    // href={`https://www.linkedin.com/sharing/share-offsite/?url=https://fronthooks.ir/posts/what-is-redux`}
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=http://localhost3000/posts/${post.hashId}/${post.slug}`}
                  >
                    <IoLogoLinkedin
                      className="fill-gray-400 hover:fill-gray-500 transition-all duration-300 cursor-pointer"
                      size={24}
                    />
                  </a>
                  <a
                    className="block"
                    rel="noreferrer"
                    target={"_blank"}
                    href={`https://twitter.com/share?text${post.title}&url=${process.env.NEXT_PUBLIC_DOMAIM_URL}/posts/${post.hashId}/${post.slug}`}
                  >
                    <IoLogoTwitter
                      className="fill-gray-400 hover:fill-gray-500 transition-all duration-300 cursor-pointer"
                      size={24}
                    />
                  </a>
                  <a
                    className="block"
                    rel="noreferrer"
                    target={"_blank"}
                    href={`https://telegram.me/share/url?url=${process.env.NEXT_PUBLIC_DOMAIM_URL}/post/${post.slug}&text=${post.title}`}
                  >
                    <FaTelegram
                      className="fill-gray-400 hover:fill-gray-500 transition-all duration-300 cursor-pointer"
                      size={24}
                    />
                  </a>
                </div>
                <div className="relative">
                  <CopyToClipboard
                    text={`${process.env.NEXT_PUBLIC_DOMAIM_URL}/posts/${post.hashId}/${post.slug}`}
                    onCopy={handleCopy}
                  >
                    <div className="cursor-pointer bg-gray-100 border px-3 py-1 rounded-2xl text-gray-600 flex items-center gap-x-2">
                      <span>کپی&nbsp;لینک</span>
                      <MdContentCopy size={24} />
                    </div>
                  </CopyToClipboard>
                  {copoied && (
                    <span className="absolute bottom-8 left-0 bg-blue-500 px-3 py-1 rounded-3xl text-white text-sm">
                      کپی شد
                    </span>
                  )}
                </div>
              </div>
            </div>
          </section>
          <section className="mb-20 mt-10">
            <h2 className="font-extrabold text-2xl md:text-3xl">پست مشابه</h2>
            <div className="grid grid-cols-6 gap-6">
              <PostList blogsData={post.related} />
            </div>
          </section>
          <PostComments post={post} />
        </div>
      </div>
    </Layout>
  );
};

export default PostPage;

export async function getServerSideProps(ctx) {
  const { query, req } = ctx;
  const { data } = await axios.get(
    `http://localhost:5000/api/posts/${query.postSlug}`,
    { withCredentials: true, headers: { Cookie: req.headers.cookie || "" } }
  );
  console.log(data);
  return {
    props: {
      post: data.data,
    },
  };
}
