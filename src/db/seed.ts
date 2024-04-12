import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { stories } from './schema';

const { DATABASE_URL } = process.env;

if (!DATABASE_URL) throw new Error('DATABASE_URL is required');

const sql = neon(DATABASE_URL);

const db = drizzle(sql);

await db.delete(stories);

// Insert some seed data

console.log('Seeding complete');
