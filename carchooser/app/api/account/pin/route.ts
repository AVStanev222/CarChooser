import { NextResponse } from "next/server";
import { getSessionUser } from "@/app/lib/auth";
import { togglePinnedCar } from "@/app/lib/storage";

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

  const updated = togglePinnedCar(user.id, {
    label: carLabel,
    path: carPath,
  });
  const pinnedCars = updated?.pinnedCars ?? [];

  return NextResponse.json({
    pinnedCars,
    pinned: pinnedCars.some((entry) => entry.path === carPath),
  });
}
