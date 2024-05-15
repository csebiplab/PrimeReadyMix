import { NextResponse } from "next/server";
import convertToLink from "@/helpers/trimSpace";
import blogContent from "@/models/blogContentFile";
import connectMongoDB from "@/lib/db";

export async function POST(request) {
  try {
    const { blogTitle, metaTitle, customLink, metaDescription, metaKeywords, shortDescription, content } = await request.json();
    const convertLink = convertToLink(customLink)
    await connectMongoDB();
    await blogContent.create({ blogTitle, metaTitle, customLink: convertLink, metaDescription, metaKeywords, shortDescription, content });
    return NextResponse.json(
      { message: "Blog content Created Successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error storing blog content:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connectMongoDB();
  const sortFields = ['updatedAt', -1]
  const blogContentData = await blogContent.find().sort([sortFields]);
  return NextResponse.json({ blogContentData });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await blogContent.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Blog deleted" },
    { status: 200 }
  );
}
