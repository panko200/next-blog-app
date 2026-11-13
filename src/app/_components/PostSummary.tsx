"use client";
import type { Post } from "@/app/_types/Post";
import Link from "next/link";

type Props = {
  post: Post;
};

const PostSummary: React.FC<Props> = (props) => {
  const { post } = props;
  return (
    <div className="space-y-2 border border-slate-400 p-3">
      <div className="font-semibold">{post.title}</div>
      {/* <div>{post.content}</div> */}
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default PostSummary;
