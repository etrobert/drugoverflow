import { pgTable, timestamp, serial, text } from 'drizzle-orm/pg-core';

export const drugs = pgTable('drugs', {
  id: serial('id').primaryKey(),
  name: text('name'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});
