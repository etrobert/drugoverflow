import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { drugs, facts } from './schema';

const { DATABASE_URL } = process.env;

if (!DATABASE_URL) throw new Error('DATABASE_URL is required');

const sql = neon(DATABASE_URL);

const db = drizzle(sql);

await db.delete(drugs);

await db.insert(drugs).values([
  { id: 1, name: 'Tylenol' },
  { id: 2, name: 'Advil' },
  { id: 3, name: 'Aspirin' },
]);

await db.insert(facts).values([
  { id: 1, drugId: 1, description: 'I once had a seizure using this drug.' },
  { id: 2, drugId: 2, description: 'I once vomited after using this drug.' },
  {
    id: 3,
    drugId: 2,
    description: 'I once saw hallucinations after using this drug.',
  },
  {
    id: 4,
    drugId: 3,
    description: 'I once got pregnant after using this drug.',
  },
]);

console.log('Seeding complete');
