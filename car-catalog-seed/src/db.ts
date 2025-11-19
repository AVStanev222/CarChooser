import { createClient } from "npm:@supabase/supabase-js@2.25.0";
import { Client as PgClient } from "pg";
import dotenv from "dotenv";

dotenv.config();

export const supabaseUrl = process.env.SUPABASE_URL!;
export const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
export const supabase = createClient(supabaseUrl, supabaseKey);

export const pgClient = process.env.DATABASE_URL
  ? new PgClient({ connectionString: process.env.DATABASE_URL })
  : null;
