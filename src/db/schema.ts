import { pgTable, timestamp, serial, text } from 'drizzle-orm/pg-core';

export const stories = pgTable('stories', {
  id: serial('id').primaryKey(),
  description: text('description').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});
