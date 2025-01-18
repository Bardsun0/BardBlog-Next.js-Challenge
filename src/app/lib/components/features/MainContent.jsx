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

  return (
    <main className="flex-grow bg-white dark:bg-gray-900 pt-16">
      {/* Hero Section */}
      <section className="relative max-w-screen-xl mx-auto w-full h-[600px] mb-16">
        <div className="relative w-full h-full">
          <Image
            src={featuredPost.image}
            alt="Hero background"
            fill
            sizes="100vw"
            className="object-cover"
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQrJiEwSzIrLisxKys4P1E/ODA0NEcxPi1HOkc4RVlXWFBYP1xXRFZLV0v/2wBDARUXFx4aHR4eHUtDOEM4S0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0v/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-screen-xl mx-auto px-4 text-center text-white">
              <CategoryBadge>{featuredPost.category}</CategoryBadge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-3xl mx-auto">
                {featuredPost.title}
              </h1>
              <AuthorInfo
                image={featuredPost.authorImage}
                author={featuredPost.author}
                date={featuredPost.date}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid Section */}
      <section className="max-w-screen-xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold mb-8 text-black dark:text-white">
          Latest Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button>View All Posts</Button>
        </div>
      </section>

      {/* Advertisement Section */}
      <section className="max-w-screen-xl mx-auto px-4 mb-16">
        <Advertisement />
      </section>
    </main>
  );
};

export default MainContent;
