export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

export async function POST(request: Request) {
  try {
    const cloudinaryUrl = process.env.CLOUDINARY_URL;
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;

    if (cloudinaryUrl) {
      cloudinary.config({ url: cloudinaryUrl });
    } else if (cloudName && apiKey && apiSecret) {
      cloudinary.config({
        cloud_name: cloudName,
        api_key: apiKey,
        api_secret: apiSecret,
      });
    } else {
      return NextResponse.json(
        { error: "Cloudinary not configured (CLOUDINARY_URL or CLOUDINARY_* env)" },
        { status: 503 }
      );
    }

    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    if (!file || !(file instanceof File)) {
      return NextResponse.json(
        { error: "file required" },
        { status: 400 }
      );
    }

    const type = file.type;
    if (!["image/png", "image/jpeg", "image/jpg"].includes(type)) {
      return NextResponse.json(
        { error: "Only PNG and JPG allowed" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const dataUri = `data:${type};base64,${buffer.toString("base64")}`;

    const result = await new Promise<{ secure_url?: string }>((resolve, reject) => {
      cloudinary.uploader.upload(dataUri, {
        resource_type: "image",
        folder: "clinicflow-camps",
        overwrite: true,
        use_filename: false,
        unique_filename: false,
        use_filename_as_display_name: true,
      }, (err, res) => {
        if (err) reject(err);
        else resolve(res as { secure_url?: string });
      });
    });

    const url = result?.secure_url;
    if (!url) {
      return NextResponse.json(
        { error: "No URL in response" },
        { status: 502 }
      );
    }

    return NextResponse.json({ url });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
