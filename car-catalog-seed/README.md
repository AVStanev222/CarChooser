# Car Catalog Seed

This folder contains a TypeScript-based seeding tool for your Supabase Postgres database.

## Setup

1. Copy `.env.example` to `.env` and fill in:
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `DATABASE_URL` (Postgres connection string from Supabase)
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the seed script:
   ```bash
   npm run build
   ```
4. Run the migrations + seed data:
   ```bash
   npm run seed
   ```

## Notes
- `migration.sql` creates lookup tables and adds structured columns to `public.cars`.
- `seed.sql` inserts the lookup data plus initial Toyota entries. Add other brands to this file when ready.
- The script prefers `DATABASE_URL`. Without it, the script currently throws because raw SQL execution via the Supabase client isn't implemented (for safety).
