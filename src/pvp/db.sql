create table if not exists pvp_duels (
  id uuid primary key default gen_random_uuid(),
  challenger uuid references profiles(id),
  opponent uuid references profiles(id),
  status text,
  winner uuid references profiles(id),
  created_at timestamp default now()
);
