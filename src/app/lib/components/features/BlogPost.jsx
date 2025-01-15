"use client";
import React from "react";
import Image from "next/image";

const BlogPost = ({ post }) => (
  <article className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
    <div className="relative h-[240px]">
      <Image
        src={post.image}
        alt={post.title}
        fill
        sizes="100vw"
        className="object-cover"
      />
    </div>
    <div className="p-6">
      <span className="text-blue-600 text-sm">{post.category}</span>
      <h3 className="text-xl font-bold mt-2 mb-4 line-clamp-2 text-black dark:text-white">
        {post.title}
      </h3>
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-full overflow-hidden relative">
          <Image
            src={post.authorImage}
            alt={post.author}
            fill
            sizes="(max-width: 32px) 100vw"
            className="object-cover"
          />
        </div>
        <span className="text-sm font-medium">{post.author}</span>
        <span className="text-gray-400">•</span>
        <span className="text-sm text-gray-500">{post.date}</span>
      </div>
    </div>
  </article>
);

export default BlogPost;
