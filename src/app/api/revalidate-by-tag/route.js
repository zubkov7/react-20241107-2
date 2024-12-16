import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export function GET(request) {
  const tag = request.nextUrl.searchParams.get("tag");

  revalidateTag(tag);

  return NextResponse.json({ status: "success", tag });
}
