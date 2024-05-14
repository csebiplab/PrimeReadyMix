import connectMongoDB from "@/lib/db";
import robottxts from "@/models/robots";
import { NextResponse } from "next/server";


export async function GET() {
  await connectMongoDB();
  const robotTxts = await robottxts.find();
  return NextResponse.json({ robotTxts });
}
