
import { NextResponse, NextRequest } from "next/server";
import payload from "@server/payload.json";
import { SApiJobItensExpanded } from "@models/job-models";

export async function GET(request: NextRequest) {
  try {
    const id = request.nextUrl.pathname.split('/').pop()
    const itemId = parseInt(id as string);

    if (isNaN(itemId)) {
      return NextResponse.json(
        { message: "Invalid id" },
        { status: 400 },
      );
    }

    const { data, success, error } = SApiJobItensExpanded.safeParse(payload);
    if (!success) {
      console.error("[Validation Error]", error.issues);
      return NextResponse.json(
        { message: "Invalid data format" },
        { status: 400 },
      );
    }

    const item = data?.jobItems.find((item) => item.id === itemId);
    if (!item) {
      return NextResponse.json(
        { message: 'Item not found' },
        { status: 400 },
      );
    }

    return NextResponse.json({ jobItem: item }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "failed to load data from route GET" },
      { status: 500 },
    );
  }
}
