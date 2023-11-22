import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import SitemapUrl from "../../../models/sitemapFile";

export async function POST(request) {
  const { url } = await request.json();
  console.log("url for sitemap request", url);
  await connectMongoDB();
  await SitemapUrl.create({ url });
  return NextResponse.json(
    { message: "sitemap url generated" },
    { status: 201 }
  );
}

export async function GET() {
  await connectMongoDB();
  const sitemapUrls = await SitemapUrl.find();
  console.log("SITEMAPURL ALL LIST", sitemapUrls);
  return NextResponse.json({ sitemapUrls });
}
