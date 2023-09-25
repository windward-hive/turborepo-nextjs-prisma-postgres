// generate react component meta data for post with author, date, and tags
import { Prisma } from "database";
import dayjs from "dayjs";
import Link from "next/link";

export type PostMetaProps = {
  post: Prisma.Post;
};

export default function PostMeta({ post }: { post: Prisma.Post }) {
  // TODO: implement edit button
  const shouldShowEditButton = true;

  return (
    <div className="flex items-center mt-6">
      <Link href={`/users/`}>
        <div className="flex items-center">
          <i className="ri-user-3-line text-3xl text-gray-500" />
          <div className="flex flex-col ml-2">
            <div className="text-sm font-bold text-gray-500">Luan Nguyen</div>
            <div className="text-sm text-gray-400">
              Posted on {dayjs(post.createdAt).format("MMMM D, YYYY")}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}