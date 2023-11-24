import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import VerificationOwnershipUrl from "../../../models/verificationProduct";

export async function POST(request) {
  const { url } = await request.json();
  await connectMongoDB();
  await VerificationOwnershipUrl.create({ url });
  return NextResponse.json(
    { message: "verification ownership url is generated" },
    { status: 201 }
  );
}

export async function GET() {
  await connectMongoDB();
  const verificationOwnershipUrl = await VerificationOwnershipUrl.find();
  return NextResponse.json({ verificationOwnershipUrl });
}
