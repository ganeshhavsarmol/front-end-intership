-- Student Management: shared multi-device database
create table if not exists public.students (
  id text primary key,
  enrollment_no text not null unique,
  name text not null,
  roll_no text not null unique,
  branch text not null check (branch in ('CSE', 'IT', 'ENTC')),
  year text not null check (year in ('1st Year', '2nd Year', '3rd Year')),
  phone text not null,
  email text not null default '',
  city text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists students_year_idx on public.students(year);
create index if not exists students_branch_idx on public.students(branch);

alter table public.students enable row level security;

drop policy if exists "students_public_select" on public.students;
drop policy if exists "students_public_insert" on public.students;
drop policy if exists "students_public_update" on public.students;
drop policy if exists "students_public_delete" on public.students;

create policy "students_public_select" on public.students for select to anon, authenticated using (true);
create policy "students_public_insert" on public.students for insert to anon, authenticated with check (true);
create policy "students_public_update" on public.students for update to anon, authenticated using (true) with check (true);
create policy "students_public_delete" on public.students for delete to anon, authenticated using (true);

create or replace function public.set_students_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists students_updated_at on public.students;
create trigger students_updated_at
before update on public.students
for each row execute function public.set_students_updated_at();
