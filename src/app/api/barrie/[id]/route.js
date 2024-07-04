import connectMongoDB from "@/lib/db";
import BarriePageMetadata from "@/models/barrieMetada.model";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { title, description, keywords } = await request.json();
  await connectMongoDB();
  const home = await BarriePageMetadata.findByIdAndUpdate(id, {
    title,
    description,
    keywords,
  });
  return NextResponse.json({ home }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const home = await BarriePageMetadata.findOne({ _id: id });
  return NextResponse.json({ home }, { status: 200 });
}
