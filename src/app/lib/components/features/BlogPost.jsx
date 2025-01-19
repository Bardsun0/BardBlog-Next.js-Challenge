import React, { memo } from "react";
import Image from "next/image";

const BlogPost = memo(({ post }) => {
  return (
    <article className="blog-card group">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-xl">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 bg-neutral-800/50 backdrop-blur-sm rounded-b-xl">
        <span className="text-[#CD5C5C] text-sm font-medium">
          {post.category}
        </span>
        <h3 className="blog-title text-xl mt-2 mb-4 line-clamp-2 text-neutral-100 group-hover:text-[#CD5C5C] transition-colors duration-300">
          {post.title}
        </h3>
        <div className="flex items-center space-x-4">
          <div className="relative w-10 h-10">
            <Image
              src={post.authorImage}
              alt={post.author}
              fill
              className="rounded-full object-cover ring-2 ring-neutral-700"
              sizes="40px"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-neutral-100">
              {post.author}
            </span>
            <time className="text-sm text-neutral-400" dateTime={post.date}>
              {post.date}
            </time>
          </div>
        </div>
      </div>
    </article>
  );
});

BlogPost.displayName = "BlogPost";

export default BlogPost;
