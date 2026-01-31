### trip table schema

create table trip (
  id UUID primary key default GEN_RANDOM_UUID (),
  customer_id UUID not null references users2 (id),
  vehicle_id UUID not null references users2 (id),
  start_date TIMESTAMP, 
  end_date TIMESTAMP,
  location TEXT NOT NULL,
  distance_km NUMERIC NOT NULL,
  passengers INT NOT NULL,
  tripCost INT NOT NULL,
  isCompleted text default false ,
  created_at TIMESTAMP
);