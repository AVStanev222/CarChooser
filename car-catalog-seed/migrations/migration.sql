CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS public.fuel_types (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS public.drive_types (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS public.body_types (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE
);

ALTER TABLE public.cars
  ADD COLUMN IF NOT EXISTS fuel_type_id uuid REFERENCES public.fuel_types(id),
  ADD COLUMN IF NOT EXISTS drive_type_id uuid REFERENCES public.drive_types(id),
  ADD COLUMN IF NOT EXISTS body_type_id uuid REFERENCES public.body_types(id),
  ADD COLUMN IF NOT EXISTS price_new_eur numeric(10, 2),
  ADD COLUMN IF NOT EXISTS price_used_min_eur numeric(10, 2),
  ADD COLUMN IF NOT EXISTS price_used_max_eur numeric(10, 2),
  ADD COLUMN IF NOT EXISTS consumption_value numeric,
  ADD COLUMN IF NOT EXISTS consumption_unit text;

CREATE INDEX IF NOT EXISTS idx_cars_fuel_type_id ON public.cars(fuel_type_id);
CREATE INDEX IF NOT EXISTS idx_cars_drive_type_id ON public.cars(drive_type_id);
CREATE INDEX IF NOT EXISTS idx_cars_body_type_id ON public.cars(body_type_id);
CREATE INDEX IF NOT EXISTS idx_cars_year ON public.cars(year);
