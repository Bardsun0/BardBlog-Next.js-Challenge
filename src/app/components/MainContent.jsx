import React from "react";
import Image from "next/image";

const MainContent = () => {
  // Örnek blog postları verisi
  const posts = Array.from({ length: 9 }).map((_, index) => ({
    id: index + 1,
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    author: "Jason Francisco",
    date: "August 20, 2023",
    image: `/blog-${(index % 3) + 1}.png`, // 3 farklı görsel arasında dönecek
    authorImage: `/avatar-${(index % 2) + 1}.png`, // 2 farklı avatar arasında dönecek
  }));

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] mb-16">
        <div className="relative w-full h-full">
          {/* Hero Background Image */}
          <Image
            src="/hero.png"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-screen-xl mx-auto px-4 text-center text-white">
              <span className="inline-block bg-blue-600 text-white text-sm px-4 py-1 rounded-full mb-4">
                Technology
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-3xl mx-auto">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </h1>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-10 h-10 rounded-full overflow-hidden relative">
                  <Image
                    src="/avatar-1.png"
                    alt="Author"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="font-medium">Jason Francisco</span>
                <span className="text-gray-300">•</span>
                <span>August 20, 2023</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advertisement Section */}
      <section className="max-w-screen-xl mx-auto px-4 mb-16">
        <div className="w-full h-[100px] bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">Advertisement</span>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="max-w-screen-xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold mb-8">Latest Post</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-[240px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-blue-600 text-sm">{post.category}</span>
                <h3 className="text-xl font-bold mt-2 mb-4 line-clamp-2">
                  {post.title}
                </h3>
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
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
            View All Post
          </button>
        </div>
      </section>

      {/* Bottom Advertisement Section */}
      <section className="max-w-screen-xl mx-auto px-4 mb-16">
        <div className="w-full h-[100px] bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">Advertisement</span>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
