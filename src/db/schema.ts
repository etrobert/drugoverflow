import { pgTable, timestamp, serial, text, integer } from 'drizzle-orm/pg-core';

export const drugs = pgTable('drugs', {
  id: serial('id').primaryKey(),
  name: text('name'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export type Drug = typeof drugs.$inferSelect;

export const facts = pgTable('facts', {
  id: serial('id').primaryKey(),
  drugId: integer('drug_id')
    .references(() => drugs.id)
    .notNull(),
  description: text('description').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});
