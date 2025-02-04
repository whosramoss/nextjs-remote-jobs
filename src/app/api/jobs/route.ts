
import { NextResponse, NextRequest } from "next/server";
import payload from "@server/payload.json";
import { SApiJobItens } from "@models/job-models";

export async function GET(request: NextRequest) {
  try {
    const { data, success, error } = SApiJobItens.safeParse(payload);

    if (!success) {
      console.error("[Validation Error]", error.issues);
      return NextResponse.json(
        { message: "Invalid data format" },
        { status: 400 },
      );
    }

    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "failed to load data from route GET" },
      { status: 500 },
    );
  }
}
