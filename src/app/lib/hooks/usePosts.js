import { useState, useEffect } from "react";

export const usePosts = (options = {}) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);

        // URL parametrelerini oluştur
        const params = new URLSearchParams();
        if (options.featured) params.append("featured", "true");
        if (options.category) params.append("category", options.category);
        if (options.id) params.append("id", options.id);

        // API çağrısı
        const url = `/api/posts${
          params.toString() ? `?${params.toString()}` : ""
        }`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data = await response.json();
        setPosts(Array.isArray(data) ? data : [data]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [options.featured, options.category, options.id]);

  return { posts, loading, error };
};
