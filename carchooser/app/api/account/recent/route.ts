import { NextResponse } from "next/server";
import { getSessionUser } from "@/app/lib/auth";
import { recordRecentCar, removeRecentCar } from "@/app/lib/storage";

export async function POST(request: Request) {
  const user = await getSessionUser();

  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { carLabel, carPath } = await request.json().catch(() => ({}));

  if (
    !carLabel ||
    !carPath ||
    typeof carLabel !== "string" ||
    typeof carPath !== "string"
  ) {
    return NextResponse.json(
      { error: "Car label and path are required" },
      { status: 400 },
    );
  }

  const updated = recordRecentCar(user.id, {
    label: carLabel,
    path: carPath,
  });

  return NextResponse.json({
    recentCars: updated?.recentCars ?? [],
  });
}

export async function DELETE(request: Request) {
  const user = await getSessionUser();

  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const carPath = searchParams.get("carPath");

  if (!carPath) {
    return NextResponse.json(
      { error: "carPath query parameter is required" },
      { status: 400 },
    );
  }

  const updated = removeRecentCar(user.id, carPath);

  return NextResponse.json({
    recentCars: updated?.recentCars ?? [],
  });
}
