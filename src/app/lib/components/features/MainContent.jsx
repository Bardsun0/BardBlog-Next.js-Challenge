"use client";
import React from "react";
import Image from "next/image";
import Button from "../common/Button";
import Advertisement from "../common/Advertisement";
import BlogPost from "./BlogPost";
import CategoryBadge from "./CategoryBadge";
import AuthorInfo from "./AuthorInfo";
import { usePosts } from "../../hooks/usePosts";
import LoadingSpinner from "../common/LoadingSpinner";
import ErrorMessage from "../common/ErrorMessage";

const MainContent = () => {
  const { posts, loading, error } = usePosts();
  const { posts: featuredPosts } = usePosts({ featured: true });

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  const featuredPost = featuredPosts[0] || posts[0];

  const QuoteSection = () => (
    <div className="max-w-2xl mx-auto text-center my-20 px-4">
      <blockquote className="text-2xl font-serif italic text-neutral-300">
        `Yaşamak görevdir bu yangın yerinde,
        <br />
        Yaşamak, insan kalarak...`
        <footer className="text-lg mt-4 text-neutral-400">
          — Nazım Hikmet
        </footer>
      </blockquote>
    </div>
  );

  return (
    <main className="flex-grow bg-gradient-to-b from-background to-card-bg dark:from-neutral-900 dark:to-neutral-900 pt-20">
      {/* Hero Section */}
      <section className="relative max-w-screen-xl mx-auto w-full h-[700px] mb-20">
        <div className="relative w-full h-full overflow-hidden rounded-2xl">
          <Image
            src={featuredPost.image}
            alt="Hero background"
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-500 hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent" />
        </div>
      </section>

      <QuoteSection />

      {/* Posts Grid Section */}
      <section className="max-w-screen-xl mx-auto px-6 mb-20">
        <h2 className="text-3xl font-serif font-bold mb-12 text-neutral-900 dark:text-neutral-100">
          Son Yazılar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
        <div className="text-center mt-16">
          <Button>Daha Fazla Yazı Keşfet</Button>
        </div>
      </section>

      {/* Advertisement Section */}
      <section className="max-w-screen-xl mx-auto px-6 mb-20">
        <Advertisement />
      </section>
    </main>
  );
};

export default MainContent;
