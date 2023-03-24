import { useState } from "react";
import { useRouter } from "next/router";
import pushRouter from "@/utils/pushRouter";
import http from "@/services/httpService";
import { errorMessage, successMessage } from "@/utils/message";

const CommentForm = ({ postId, responseTo, setOnReply }) => {
  const [comment, setComment] = useState("");
  const router = useRouter();
  const handleComment = (e) => {
    e.preventDefault();

    const data = {
      content: comment,
      postId,
      responseTo,
    };
    console.log(data);
    http
      .post("/post-comment/save-comment", data)
      .then((res) => {
        setComment("");
        if (setOnReply) setOnReply((open) => !open);
        successMessage(res.data.message);

        pushRouter(router);
      })
      .catch((err) => {
        errorMessage(err?.response?.data?.message);
      });
  };
  return (
    <form className="mt-4">
      <textarea
        name=""
        id=""
        className=" p-4 rounded my-4 w-full border-none ring-2 ring-slate-300 shadow-sm focus:outline-none focus:ring-purple-700 focus:ring-2 dark:focus-within:ring-blue-500"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="نظرت رو برام بنویس..."
      />
      <button
        onClick={handleComment}
        className="mt-4 mx-auto py-4 w-full sm:w-56 bg-violet-700 rounded-xl text-white px-3 md:text-lg"
      >
        ارسال نظر
      </button>
    </form>
  );
};

export default CommentForm;
