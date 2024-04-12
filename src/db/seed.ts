import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { drugs } from './schema';

const { DATABASE_URL } = process.env;

if (!DATABASE_URL) throw new Error('DATABASE_URL is required');

const sql = neon(DATABASE_URL);

const db = drizzle(sql);

await db.delete(drugs);

await db
  .insert(drugs)
  .values([{ name: 'Tylenol' }, { name: 'Advil' }, { name: 'Aspirin' }]);

console.log('Seeding complete');
