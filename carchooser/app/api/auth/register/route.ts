import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { createUserRecord, findUserByEmail } from "@/app/lib/storage";

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();

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

    const existingUser = findUserByEmail(email);

    if (existingUser) {
      return NextResponse.json(
        { error: "An account with that email already exists" },
        { status: 409 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = createUserRecord({
      email,
      name: typeof name === "string" && name.length ? name : null,
      hashedPassword,
    });

    return NextResponse.json({
      id: user.id,
      email: user.email,
      name: user.name,
    });
  } catch (error) {
    console.error("Failed to register user", error);
    return NextResponse.json(
      { error: "Unable to create account. Please try again." },
      { status: 500 },
    );
  }
}
