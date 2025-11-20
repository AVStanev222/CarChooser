import { randomBytes, randomUUID } from "crypto";
import fs from "fs";
import path from "path";

export type CarBookmark = {
  label: string;
  path: string;
};

export type UserRecord = {
  id: string;
  email: string;
  name: string | null;
  image: string | null;
  hashedPassword: string | null;
  recentCars: CarBookmark[];
  pinnedCars: CarBookmark[];
  createdAt: string;
  updatedAt: string;
};

export type SessionRecord = {
  token: string;
  userId: string;
  expiresAt: string;
  createdAt: string;
};

type StoredUser = Omit<UserRecord, "recentCars" | "pinnedCars"> & {
  recentCars?: Array<CarBookmark | string>;
  pinnedCars?: Array<CarBookmark | string>;
};

type DatabaseFile = {
  users: StoredUser[];
  sessions: SessionRecord[];
};

const DATA_DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DATA_DIR, "auth.json");

function ensureDatabaseFile() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  if (!fs.existsSync(DB_PATH)) {
    const initialData: DatabaseFile = { users: [], sessions: [] };
    fs.writeFileSync(DB_PATH, JSON.stringify(initialData, null, 2), "utf8");
  }
}

function readDatabase(): DatabaseFile {
  ensureDatabaseFile();
  const raw = fs.readFileSync(DB_PATH, "utf8");
  return JSON.parse(raw) as DatabaseFile;
}

function writeDatabase(data: DatabaseFile) {
  ensureDatabaseFile();
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), "utf8");
}

export function findUserByEmail(email: string) {
  const db = readDatabase();
  const user = db.users.find(
    (record) => record.email?.toLowerCase() === email.toLowerCase(),
  );
  return normalizeUser(user);
}

export function findUserById(userId: string) {
  const db = readDatabase();
  const user = db.users.find((record) => record.id === userId);
  return normalizeUser(user);
}

export function createUserRecord(data: {
  email: string;
  name: string | null;
  hashedPassword: string | null;
  image?: string | null;
}) {
  const db = readDatabase();
  const now = new Date().toISOString();
  const user: UserRecord = {
    id: randomUUID(),
    email: data.email,
    name: data.name,
    hashedPassword: data.hashedPassword,
    image: data.image ?? null,
    recentCars: [],
    pinnedCars: [],
    createdAt: now,
    updatedAt: now,
  };
  db.users.push(user);
  writeDatabase(db);
  return user;
}

export function upsertUserByEmail(data: {
  email: string;
  name?: string | null;
  image?: string | null;
}) {
  const db = readDatabase();
  const now = new Date().toISOString();
  const existing = db.users.find(
    (user) => user.email?.toLowerCase() === data.email.toLowerCase(),
  );

  if (existing) {
    existing.name = data.name ?? existing.name;
    existing.image = data.image ?? existing.image;
    existing.updatedAt = now;
    writeDatabase(db);
    return normalizeUser(existing)!;
  }

  const user: UserRecord = {
    id: randomUUID(),
    email: data.email,
    name: data.name ?? null,
    image: data.image ?? null,
    hashedPassword: null,
    recentCars: [],
    pinnedCars: [],
    createdAt: now,
    updatedAt: now,
  };
  db.users.push(user);
  writeDatabase(db);
  return user;
}

export function createSessionRecord(userId: string, expires: Date) {
  const db = readDatabase();
  const session: SessionRecord = {
    token: randomBytes(32).toString("hex"),
    userId,
    expiresAt: expires.toISOString(),
    createdAt: new Date().toISOString(),
  };
  db.sessions.push(session);
  writeDatabase(db);
  return session;
}

export function deleteSessionByToken(token: string) {
  const db = readDatabase();
  const initialLength = db.sessions.length;
  db.sessions = db.sessions.filter((session) => session.token !== token);
  if (db.sessions.length !== initialLength) {
    writeDatabase(db);
  }
}

export function findSessionWithUser(token: string) {
  const db = readDatabase();
  const session = db.sessions.find((record) => record.token === token);

  if (!session) {
    return null;
  }

  if (new Date(session.expiresAt) < new Date()) {
    db.sessions = db.sessions.filter((record) => record.token !== token);
    writeDatabase(db);
    return null;
  }

  const user = normalizeUser(
    db.users.find((record) => record.id === session.userId),
  );

  if (!user) {
    deleteSessionByToken(token);
    return null;
  }

  return { session, user };
}

function normalizeBookmark(entry: CarBookmark | string): CarBookmark {
  if (typeof entry === "string") {
    const slug = entry
      .toLowerCase()
      .replace(/[^a-z0-9]+/gi, "-")
      .replace(/^-+|-+$/g, "");
    return {
      label: entry,
      path: `/account/history/${slug || "legacy"}`,
    };
  }
  return entry;
}

function normalizeBookmarkArray(entries?: Array<CarBookmark | string>) {
  if (!Array.isArray(entries)) {
    return [];
  }

  return entries.map((entry) => normalizeBookmark(entry));
}

function normalizeUser(user?: StoredUser | null): UserRecord | undefined {
  if (!user) {
    return undefined;
  }

  return {
    ...user,
    recentCars: normalizeBookmarkArray(user.recentCars),
    pinnedCars: normalizeBookmarkArray(user.pinnedCars),
  };
}

export function recordRecentCar(userId: string, car: CarBookmark) {
  const db = readDatabase();
  const user = db.users.find((record) => record.id === userId);

  if (!user) {
    return undefined;
  }

  const existing = normalizeBookmarkArray(user.recentCars);
  const updated = [
    car,
    ...existing.filter((entry) => entry.path !== car.path),
  ].slice(0, 10);

  user.recentCars = updated;
  user.updatedAt = new Date().toISOString();
  writeDatabase(db);
  return normalizeUser(user);
}

export function togglePinnedCar(userId: string, car: CarBookmark) {
  const db = readDatabase();
  const user = db.users.find((record) => record.id === userId);

  if (!user) {
    return undefined;
  }

  const existing = normalizeBookmarkArray(user.pinnedCars);
  const exists = existing.find((entry) => entry.path === car.path);
  let updated: CarBookmark[];

  if (exists) {
    updated = existing.filter((entry) => entry.path !== car.path);
  } else {
    updated = [car, ...existing].slice(0, 10);
  }

  user.pinnedCars = updated;
  user.updatedAt = new Date().toISOString();
  writeDatabase(db);
  return normalizeUser(user);
}
