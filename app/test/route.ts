import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  console.log("request", request.nextUrl);
  try {
    return Response.json({ message: "hello" });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
