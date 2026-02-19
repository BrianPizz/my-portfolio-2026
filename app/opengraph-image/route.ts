import { readFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

/**
 * Dedicated route for the Open Graph / link preview image.
 * Serves public/og.png so crawlers (iMessage, Twitter, etc.) get a stable URL.
 */
export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "og.png");
    const buffer = await readFile(filePath);
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=86400, s-maxage=86400",
      },
    });
  } catch {
    return new NextResponse(null, { status: 404 });
  }
}
