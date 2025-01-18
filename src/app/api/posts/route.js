import { posts } from "@/app/lib/data/posts";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const featured = searchParams.get("featured");

    let response;
    if (featured === "true") {
      response = posts.filter((post) => post.featured);
    } else {
      response = posts;
    }

    return NextResponse.json(response);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
