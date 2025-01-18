import { getPostById } from "@/app/lib/data/posts";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const post = getPostById(params.id);

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
