import { cookies } from "next/headers";
import { createSessionRecord, deleteSessionByToken, findSessionWithUser } from "@/app/lib/storage";

const SESSION_COOKIE = "cc_session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

function getCookieStore() {
  return cookies();
}

export async function createSession(userId: string) {
  const expires = new Date(Date.now() + SESSION_MAX_AGE * 1000);
  const { token } = createSessionRecord(userId, expires);

  getCookieStore().set({
    name: SESSION_COOKIE,
    value: token,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires,
  });
}

export async function deleteSession() {
  const cookieStore = getCookieStore();
  const token = cookieStore.get(SESSION_COOKIE)?.value;

  if (token) {
    deleteSessionByToken(token);
  }

  cookieStore.delete(SESSION_COOKIE);
}

export async function getSessionUser() {
  const token = getCookieStore().get(SESSION_COOKIE)?.value;

  if (!token) {
    return null;
  }

  const result = findSessionWithUser(token);

  if (!result) {
    getCookieStore().delete(SESSION_COOKIE);
    return null;
  }

  return result.user;
}
