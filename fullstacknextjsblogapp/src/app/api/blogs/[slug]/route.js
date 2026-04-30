import { connectDB } from "../../../../lib/db";
import Blog from "../../../../models/Blog";
import { NextResponse } from "next/server";

// GET single blog
// GET single blog
// GET single blog
export async function GET(req, { params }) {
  await connectDB();

  const { slug } = await params; // 👈 FIX

  const blog = await Blog.findOne({ slug });

  if (!blog) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  return NextResponse.json(blog);
}

// DELETE blog
export async function DELETE(req, { params }) {
  await connectDB();

  const { slug } = await params;

  await Blog.findOneAndDelete({ slug });

  return NextResponse.json({ message: "Deleted" });
}