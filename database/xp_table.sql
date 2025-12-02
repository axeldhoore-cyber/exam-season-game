-- File: database/xp_table.sql
create table xp (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references users(id) on delete cascade,
  amount integer not null,
  created_at timestamp default now()
);
