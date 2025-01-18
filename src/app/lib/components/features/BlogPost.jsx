import React, { memo } from "react";
import Image from "next/image";

const BlogPost = memo(({ post }) => {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <span className="text-blue-600 text-sm">{post.category}</span>
        <h3 className="text-xl font-bold mt-2 mb-4 line-clamp-2 text-black dark:text-white">
          {post.title}
        </h3>
        <div className="flex items-center space-x-2">
          <div className="relative w-8 h-8">
            <Image
              src={post.authorImage}
              alt={post.author}
              fill
              className="rounded-full object-cover"
              sizes="32px"
            />
          </div>
          <span className="text-sm font-medium">{post.author}</span>
          <span className="text-gray-400">•</span>
          <time className="text-sm text-gray-500" dateTime={post.date}>
            {post.date}
          </time>
        </div>
      </div>
    </article>
  );
});

BlogPost.displayName = "BlogPost";

export default BlogPost;
