export const posts = [
  {
    id: 1,
    title: "Teknolojinin İş Yerine Etkisi: Değişen Dinamikler",
    excerpt:
      "Modern teknolojinin geleneksel işyeri dinamiklerini ve üretkenliği nasıl dönüştürdüğüne dair bir inceleme.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    category: "Teknoloji",
    author: "Jason Francisco",
    authorImage: "/avatar-1.png",
    date: "2024-01-18",
    image: "/hero.png",
    featured: true,
    readTime: "5 dk okuma",
    tags: ["teknoloji", "iş yeri", "geleceğin işi"],
  },
  {
    id: 2,
    title: "Yapay Zekanın Temellerini Anlamak",
    excerpt:
      "AI'nin günlük hayattaki uygulamaları hakkında bir başlangıç rehberi.",
    content:
      "Yapay Zeka, günlük hayatımızın ayrılmaz bir parçası haline geldi...",
    category: "Teknoloji",
    author: "Sarah Chen",
    authorImage: "/avatar-2.png",
    date: "2024-01-17",
    image: "/blog-1.png",
    featured: false,
    readTime: "4 dk okuma",
    tags: ["AI", "teknoloji", "makine öğrenimi"],
  },
  {
    id: 3,
    title: "Yapay Zekanın Temellerini Anlamak",
    excerpt:
      "AI'nin günlük hayattaki uygulamaları hakkında bir başlangıç rehberi.",
    content:
      "Yapay Zeka, günlük hayatımızın ayrılmaz bir parçası haline geldi...",
    category: "Teknoloji",
    author: "Sarah Chen",
    authorImage: "/avatar-1.png",
    date: "2024-01-17",
    image: "/blog-2.png",
    featured: false,
    readTime: "4 dk okuma",
    tags: ["AI", "teknoloji", "makine öğrenimi"],
  },
  {
    id: 4,
    title: "Yapay Zekanın Temellerini Anlamak",
    excerpt:
      "AI'nin günlük hayattaki uygulamaları hakkında bir başlangıç rehberi.",
    content:
      "Yapay Zeka, günlük hayatımızın ayrılmaz bir parçası haline geldi...",
    category: "Teknoloji",
    author: "Sarah Chen",
    authorImage: "/avatar-2.png",
    date: "2024-01-17",
    image: "/blog-3.png",
    featured: false,
    readTime: "4 dk okuma",
    tags: ["AI", "teknoloji", "makine öğrenimi"],
  },
  // Daha fazla yazı eklenebilir...
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
