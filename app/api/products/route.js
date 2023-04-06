// import Product from "../../../components/models/Products";
import { NextResponse } from "next/server";
// import Products from "../models/Products";

// GET DATA
export async function GET(request) {
  return NextResponse.json({
    message: "Hi I am get request I am working",
  });
}

// POST data
export async function POST(request) {
  const res = await request.json();
  return NextResponse.json({ res });
}
