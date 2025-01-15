"use client";
import React from "react";
import Image from "next/image";
import Button from "../common/Button";
import Advertisement from "../common/Advertisement";
import BlogPost from "./BlogPost";
import CategoryBadge from "./CategoryBadge";
import AuthorInfo from "./AuthorInfo";

const MainContent = () => {
  const posts = Array.from({ length: 9 }).map((_, index) => ({
    id: index + 1,
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    author: "Jason Francisco",
    date: "August 20, 2023",
    image: `/blog-${(index % 3) + 1}.png`,
    authorImage: `/avatar-${(index % 2) + 1}.png`,
  }));

  return (
    <main className="flex-grow bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative max-w-screen-xl mx-auto w-full h-[600px] mb-16">
        <div className="relative w-full h-full">
          <Image
            src="/hero.png"
            alt="Hero background"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-screen-xl mx-auto px-4 text-center text-white">
              <CategoryBadge>Technology</CategoryBadge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-3xl mx-auto">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </h1>
              <AuthorInfo
                image="/avatar-1.png"
                author="Jason Francisco"
                date="August 20, 2023"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advertisement Section */}
      <section className="max-w-screen-xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold mb-8 text-black dark:text-white">
          Latest Post
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button>View All Post</Button>
        </div>
      </section>

      {/* Bottom Advertisement Section */}
      <section className="max-w-screen-xl mx-auto px-4 mb-16">
        <Advertisement />
      </section>
    </main>
  );
};

export default MainContent;
