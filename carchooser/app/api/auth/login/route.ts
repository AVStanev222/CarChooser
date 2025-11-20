import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { createSession } from "@/app/lib/auth";
import { findUserByEmail } from "@/app/lib/storage";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (
    !email ||
    !password ||
    typeof email !== "string" ||
    typeof password !== "string"
  ) {
    return NextResponse.json(
      { error: "Email and password are required" },
      { status: 400 },
    );
  }

  const user = findUserByEmail(email);

  if (!user || !user.hashedPassword) {
    return NextResponse.json(
      { error: "Invalid email or password" },
      { status: 401 },
    );
  }

  const passwordValid = await bcrypt.compare(password, user.hashedPassword);

  if (!passwordValid) {
    return NextResponse.json(
      { error: "Invalid email or password" },
      { status: 401 },
    );
  }

  await createSession(user.id);

  return NextResponse.json({
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
    },
  });
}
