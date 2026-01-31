## USER TABLE SCHEMA 
CREATE TABLE users2(
  id UUID PRIMARY KEY DEFAULT GEN_RANDOM_UUID(),
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  role TEXT NOT NULL CHECK(ROLE IN('customer','owner','driver')),
  created_at TIMESTAMP 
);