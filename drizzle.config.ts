import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
import { config } from 'dotenv';
// Import the dotenv package to load environment variables

config({ path: '.env.local' });

export default defineConfig({
  out: './drizzle',
  schema: './db/schema.ts',
  dialect: 'postgresql',
  migrations: {
    prefix: "supabase"
  },
  dbCredentials: {
    url: process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/postgres',
  },
});
