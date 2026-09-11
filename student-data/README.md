# Student Year Management System

React + Vite student management project with optional Supabase cloud storage for multi-device sharing.

## Run
```bash
npm install
npm run dev
```

## Multi-device setup
1. Create a Supabase project.
2. In Supabase SQL Editor, run `supabase.sql` from this project.
3. Copy `.env.example` to `.env.local`.
4. Put your Supabase project URL in `VITE_SUPABASE_URL`.
5. Put your Supabase anon/publishable key in `VITE_SUPABASE_ANON_KEY`.
6. Restart Vite after changing environment variables.

## Vercel
In Vercel Project Settings → Environment Variables, add the same two variables and redeploy.

The app stores Add/Edit/Delete changes in Supabase, so other phones and laptops using the deployed site see the same records. It refreshes shared data automatically every few seconds. If Supabase is not configured, it falls back to localStorage.

Never put a Supabase `service_role` key in this frontend.
