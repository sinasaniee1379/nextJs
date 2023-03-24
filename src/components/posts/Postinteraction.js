import {
  AnnotationIcon,
  HeartIcon,
  BookmarkIcon,
} from "@heroicons/react/outline";
import {
  HeartIcon as RedHeartIcon,
  BookmarkIcon as BlueBookmarkIcon,
} from "@heroicons/react/solid";
import { toPersianDigits } from "@/utils/toPersianDigits";
import http from "@/services/httpService";
import { useRouter } from "next/router";
import pushRouter from "@/utils/pushRouter";

const Postinteraction = ({ post, isSmall, className }) => {
  const iconSize = `${isSmall ? "h-4 w-4" : "h-6 w-6"}`;
  const router = useRouter();
  const handleLike = (postId) => {
    http
      .put(`/posts/like/${postId}`)
      .then((res) => {
        pushRouter(router);
      })
      .catch((err) => {});
  };

  const handleBookmark = (postId) => {
    http
      .put(`/posts/bookmark/${postId}`)
      .then((res) => {
        pushRouter(router);
      })
      .catch((err) => {});
  };
  return (
    <div
      className={`flex items-center ${
        isSmall ? "gap-x-2" : "gap-x-4"
      } ${className}`}
    >
      <button className="bg-gray-100 p-0.5 rounded flex items-center gap-x-1 ">
        <AnnotationIcon className="w-4 h-4 stroke-gray-500" />
        <span className="text-xs text-gray-500 font-bold leading-3">
          {toPersianDigits(post.commentsCount)}
        </span>
      </button>
      <button
        onClick={() => handleLike(post._id)}
        className="bg-red-100 p-0.5 rounded flex items-center gap-x-1 text-red-500 hover:bg-red-500 hover:text-red-100 transition-all"
      >
        {post.isLiked ? (
          <RedHeartIcon className={`${iconSize} fill-current`} />
        ) : (
          <HeartIcon className={`${iconSize} stroke-current`} />
        )}
        <span className="text-xs font-bold leading-3">
          {toPersianDigits(post.likesCount)}
        </span>
      </button>
      <button
        onClick={() => handleBookmark(post._id)}
        className="bg-blue-100 text-blue-500 p-0.5 rounded flex items-center gap-x-1 hover:bg-blue-500 hover:text-white transition-all"
      >
        {post.isBookmarked ? (
          <BlueBookmarkIcon className={`${iconSize} fill-current`} />
        ) : (
          <BookmarkIcon className={`${iconSize} stroke-current`} />
        )}
      </button>
    </div>
  );
};

export default Postinteraction;
