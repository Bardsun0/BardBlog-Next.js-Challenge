"use client";
import { useState } from "react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // API çağrısı simülasyonu
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus({
        type: "success",
        message: "Successfully subscribed to newsletter!",
      });
      setEmail("");
    } catch (error) {
      setStatus({
        type: "error",
        message: "An error occurred. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="space-y-3"
      aria-labelledby="newsletter"
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        required
        aria-label="Email address"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-2 text-sm 
                 border border-gray-300 dark:border-gray-700 
                 bg-white dark:bg-gray-800
                 text-gray-900 dark:text-gray-100
                 rounded-md 
                 focus:outline-none focus:ring-2 
                 focus:ring-gray-300 dark:focus:ring-gray-600 
                 transition-all disabled:opacity-50"
        disabled={isLoading}
      />

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-500 text-white px-4 py-2 rounded-md 
                 hover:bg-blue-700 dark:hover:bg-blue-400
                 transition-all 
                 flex items-center justify-center
                 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Subscribing..." : "Subscribe"}
      </button>

      {status.message && (
        <p
          className={`text-sm ${
            status.type === "success"
              ? "text-green-600 dark:text-green-400"
              : "text-red-600 dark:text-red-400"
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
};

export default NewsletterForm;
