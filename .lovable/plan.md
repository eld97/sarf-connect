

## Store Beta Signups in Database

### What we'll build
A `beta_signups` table to persist every signup form submission, and update the `SignupModal` to insert into it on submit.

### Database table

```
beta_signups
├── id (uuid, primary key)
├── name (text)
├── email (text, unique)
├── organization (text)
├── currency (text)
├── created_at (timestamptz, default now())
```

No RLS restrictions needed — this is a public-facing lead capture form (no auth required). We'll add an INSERT policy for anonymous users and a SELECT policy restricted to authenticated admins later if needed.

### Code change

Update `SignupModal.tsx` to call `supabase.from('beta_signups').insert(...)` on form submit, with basic error handling via toast.

### Files affected
1. **New migration** — create `beta_signups` table with open INSERT policy
2. **`src/components/SignupModal.tsx`** — add Supabase insert on submit

