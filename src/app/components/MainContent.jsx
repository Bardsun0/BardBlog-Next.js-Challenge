import React from "react";
import Image from "next/image";

// Alt bileşenler
const CategoryBadge = ({ children }) => (
  <span className="inline-block bg-blue-600 text-white text-sm px-4 py-1 rounded-full">
    {children}
  </span>
);

const AuthorInfo = ({ image, author, date }) => (
  <div className="flex items-center space-x-2">
    <div className="w-10 h-10 rounded-full overflow-hidden relative">
      <Image src={image} alt={author} fill className="object-cover" />
    </div>
    <span className="font-medium">{author}</span>
    <span className="text-gray-300">•</span>
    <span>{date}</span>
  </div>
);

const Advertisement = () => (
  <div className="w-full h-[100px] bg-gray-200 flex items-center justify-center">
    <span className="text-gray-500">Advertisement</span>
  </div>
);

const BlogPost = ({ post }) => (
  <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
    <div className="relative h-[240px]">
      <Image src={post.image} alt={post.title} fill className="object-cover" />
    </div>
    <div className="p-6">
      <span className="text-blue-600 text-sm">{post.category}</span>
      <h3 className="text-xl font-bold mt-2 mb-4 line-clamp-2">{post.title}</h3>
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-full overflow-hidden relative">
          <Image
            src={post.authorImage}
            alt={post.author}
            fill
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
        <Advertisement />
      </section>

      {/* Latest Posts Section */}
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
          <button
            className="bg-blue-600 text-white px-8 py-3 rounded-full 
                           hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors"
          >
            View All Post
          </button>
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
