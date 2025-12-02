create table if not exists challenges (
  id bigint generated always as identity primary key,
  user_id uuid references auth.users(id),
  challenge_id text,
  completed boolean default false,
  completed_at timestamp with time zone
);