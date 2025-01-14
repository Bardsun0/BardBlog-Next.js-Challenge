"use client";
import { useState } from "react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Form işlemleri burada yapılacak
      console.log("Form submitted with email:", email);
    } catch (error) {
      console.error("Error submitting form:", error);
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
        className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all flex items-center justify-center"
      >
        Subscribe
      </button>
    </form>
  );
};

export default NewsletterForm;
