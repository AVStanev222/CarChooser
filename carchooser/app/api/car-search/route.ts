import { NextResponse } from "next/server";

export async function POST(request: Request) {
  if (!process.env.CAR_API_KEY || !process.env.CAR_API_HOST) {
    return NextResponse.json(
      { error: "CAR_API_KEY and CAR_API_HOST must be set in .env.local" },
      { status: 500 }
    );
  }

  const body = await request.json();
  const { make, model, minYear } = body as {
    make?: string;
    model?: string;
    minYear?: number;
  };

  const apiUrl = new URL(`https://${process.env.CAR_API_HOST}/v1/cars`);
  if (make) apiUrl.searchParams.set("make", make);
  if (model) apiUrl.searchParams.set("model", model);
  if (minYear) apiUrl.searchParams.set("year", String(minYear));

  try {
    const response = await fetch(apiUrl, {
      headers: {
        "X-RapidAPI-Key": process.env.CAR_API_KEY,
        "X-RapidAPI-Host": process.env.CAR_API_HOST,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(text || "API request failed");
    }

    const data = await response.json();
    return NextResponse.json({ results: data });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to fetch car data",
      },
      { status: 500 }
    );
  }
}
