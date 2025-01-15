"use client";
import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";

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
      <Input
        type="email"
        required
        aria-label="Email address"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
      />

      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? "Subscribing..." : "Subscribe"}
      </Button>

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
