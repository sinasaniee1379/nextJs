import React from "react";
import SingleComment from "./SingleComment";

const ReplyComment = ({ parentCommentId, comments, postId }) => {
  return comments.map((comment) => {
    return (
      parentCommentId === comment.responseTo && (
        <div key={comment._id} className="mr-5">
          <SingleComment comment={comment} postId={postId} />
          <ReplyComment
            comments={comments}
            parentCommentId={comment._id}
            postId={postId}
          />
        </div>
      )
    );
  });
};

export default ReplyComment;
