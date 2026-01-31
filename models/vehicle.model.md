### vehicle SUPABASE SCHEMA

create table vehicles (
  id UUID primary key default GEN_RANDOM_UUID (),
  name TEXT not null,
  registration_number int unique not null,
  allowed_passengers NUMERIC check (allowed_passengers <= 4),
  isAvailable TEXT default true,
  driver_id UUID null references users2 (id),
  rate_per_km NUMERIC,
  owner_id UUID unique not null references users2 (id),
  created_at TIMESTAMP
);