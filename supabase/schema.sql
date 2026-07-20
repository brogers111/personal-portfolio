-- Run this once in your Supabase project's SQL editor (Database -> SQL Editor -> New query).
-- Safe to re-run: each statement is idempotent-ish, but on a fresh project just run it top to bottom once.

create table if not exists public.athletes (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id),
  name text not null,
  phone text,
  email text,
  emergency_contact_name text,
  emergency_contact_phone text,
  emergency_contact_relationship text,
  notes text,
  created_at timestamptz not null default now()
);

-- Each row = one purchase (e.g. "bought a 12-session bundle").
create table if not exists public.payments (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id),
  athlete_id uuid not null references public.athletes(id) on delete cascade,
  sessions_purchased integer not null check (sessions_purchased > 0),
  amount numeric(10,2),
  payment_method text check (payment_method in ('venmo', 'paypal', 'cash', 'check', 'other')),
  paid_at date not null default current_date,
  notes text,
  created_at timestamptz not null default now()
);

-- Each row = one session actually trained.
create table if not exists public.session_logs (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id),
  athlete_id uuid not null references public.athletes(id) on delete cascade,
  trained_at date not null default current_date,
  hours numeric(4,2) not null default 1,
  notes text,
  created_at timestamptz not null default now()
);

create index if not exists payments_athlete_id_idx on public.payments(athlete_id);
create index if not exists session_logs_athlete_id_idx on public.session_logs(athlete_id);

alter table public.athletes enable row level security;
alter table public.payments enable row level security;
alter table public.session_logs enable row level security;

drop policy if exists "Owner can manage their athletes" on public.athletes;
create policy "Owner can manage their athletes" on public.athletes
  for all using (owner_id = auth.uid()) with check (owner_id = auth.uid());

drop policy if exists "Owner can manage their payments" on public.payments;
create policy "Owner can manage their payments" on public.payments
  for all using (owner_id = auth.uid()) with check (owner_id = auth.uid());

drop policy if exists "Owner can manage their session logs" on public.session_logs;
create policy "Owner can manage their session logs" on public.session_logs
  for all using (owner_id = auth.uid()) with check (owner_id = auth.uid());

-- security_invoker makes this view respect the querying user's RLS policies
-- (the Postgres default for views would otherwise bypass RLS).
drop view if exists public.athlete_summary;
create view public.athlete_summary
  with (security_invoker = on) as
select
  a.id as athlete_id,
  a.owner_id,
  a.name,
  coalesce(p.total_purchased, 0)::int as total_purchased,
  coalesce(s.total_used, 0)::int as total_used,
  coalesce(p.total_purchased, 0)::int - coalesce(s.total_used, 0)::int as sessions_remaining
from public.athletes a
left join (
  select athlete_id, sum(sessions_purchased) as total_purchased
  from public.payments
  group by athlete_id
) p on p.athlete_id = a.id
left join (
  select athlete_id, count(*) as total_used
  from public.session_logs
  group by athlete_id
) s on s.athlete_id = a.id;
