import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import RouteMetaData from "../../../models/metaDataFile";

export async function POST(request) {
  try {
    const { homePage, concrete_delivery, blog, testimonials, contact_us } =
      await request.json();
    await connectMongoDB();
    await RouteMetaData.create({
      homePage,
      concrete_delivery,
      blog,
      testimonials,
      contact_us,
    });
    return NextResponse.json(
      { message: "MetaData generated" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error storing metadata:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connectMongoDB();
  const RouteAllMetaData = await RouteMetaData.find();
  return NextResponse.json({ RouteAllMetaData });
}
