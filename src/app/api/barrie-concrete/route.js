import connectMongoDB from "@/lib/db";
import BarriePageMetadata from "@/models/barrieMetada.model";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, description, keywords } = await request.json();
    await connectMongoDB();
    await BarriePageMetadata.create({
      title,
      description,
      keywords,
    });
    return NextResponse.json(
      { message: "Request Success" },
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
  const data = await BarriePageMetadata.find();
  return NextResponse.json({ data });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await BarriePageMetadata.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Request Success" },
    { status: 200 }
  );
}
