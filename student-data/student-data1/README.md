# Student Year Management System

React + Vite student management project for a Diploma CSE project.

## Features
- Dashboard
- 1st Year, 2nd Year and 3rd Year student data
- Add / Edit / Delete / View student
- Search
- Year filter
- Branch filter
- Pagination
- LocalStorage persistence
- Dark / Light mode
- Responsive laptop/tablet/mobile UI
- Form validation and duplicate Roll Number checking
- Demo data reset

## Run
```bash
npm install
npm run dev
```

Open the localhost URL shown by Vite.

## Build
```bash
npm run build
```


## Multi-device database setup

The original version used browser `localStorage`. That means each phone/laptop had its own separate student data. This version uses Supabase so the same student records can be accessed from every device.

1. Create a Supabase project.
2. Open the Supabase SQL Editor and run `supabase.sql`.
3. In Supabase Project Settings → API, copy the Project URL and the `anon` public key.
4. In Vercel → your project → Settings → Environment Variables, add:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
5. Redeploy the Vercel project.
6. Install dependencies and build locally with `npm install` then `npm run build`.

Do not put a Supabase `service_role` key in this frontend. Only use the public `anon` key with the RLS policies in `supabase.sql`.

### Important
The included RLS policies allow anyone with the site URL to read/add/edit/delete student records. For a real college system, add Supabase Authentication and restrict these policies to logged-in users/admins.
