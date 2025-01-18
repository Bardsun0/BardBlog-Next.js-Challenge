export const posts = [
  {
    id: 1,
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    excerpt:
      "An exploration of how modern technology is transforming traditional workplace dynamics and productivity.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    category: "Technology",
    author: "Jason Francisco",
    authorImage: "/avatar-1.png",
    date: "2024-01-18",
    image: "/hero.png",
    featured: true,
    readTime: "5 min read",
    tags: ["technology", "workplace", "future of work"],
  },
  {
    id: 2,
    title: "Understanding the Basics of Artificial Intelligence",
    excerpt: "A beginner's guide to AI and its applications in everyday life.",
    content:
      "Artificial Intelligence has become an integral part of our daily lives...",
    category: "Technology",
    author: "Sarah Chen",
    authorImage: "/avatar-2.png",
    date: "2024-01-17",
    image: "/blog-1.png",
    featured: false,
    readTime: "4 min read",
    tags: ["AI", "technology", "machine learning"],
  },
  {
    id: 3,
    title: "Understanding the Basics of Artificial Intelligence",
    excerpt: "A beginner's guide to AI and its applications in everyday life.",
    content:
      "Artificial Intelligence has become an integral part of our daily lives...",
    category: "Technology",
    author: "Sarah Chen",
    authorImage: "/avatar-2.png",
    date: "2024-01-17",
    image: "/blog-2.png",
    featured: false,
    readTime: "4 min read",
    tags: ["AI", "technology", "machine learning"],
  },
  {
    id: 4,
    title: "Understanding the Basics of Artificial Intelligence",
    excerpt: "A beginner's guide to AI and its applications in everyday life.",
    content:
      "Artificial Intelligence has become an integral part of our daily lives...",
    category: "Technology",
    author: "Sarah Chen",
    authorImage: "/avatar-2.png",
    date: "2024-01-17",
    image: "/blog-3.png",
    featured: false,
    readTime: "4 min read",
    tags: ["AI", "technology", "machine learning"],
  },

  // Daha fazla post eklenebilir...
];

export const getPostById = (id) => {
  return posts.find((post) => post.id === parseInt(id));
};

export const getPostsByCategory = (category) => {
  return posts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
};

export const getFeaturedPosts = () => {
  return posts.filter((post) => post.featured);
};

export const getRecentPosts = (limit = 6) => {
  return [...posts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
};
