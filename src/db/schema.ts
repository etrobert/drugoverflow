import { relations } from 'drizzle-orm';
import { pgTable, timestamp, serial, text, boolean } from 'drizzle-orm/pg-core';

export const stories = pgTable('stories', {
  id: serial('id').primaryKey(),
  description: text('description').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const sames = pgTable('sames', {
  id: serial('id').primaryKey(),
  storyId: serial('story_id').notNull(),
  value: boolean('value').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const storiesRelations = relations(stories, ({ many }) => ({
  sames: many(sames),
}));

export const sameRelations = relations(sames, ({ one }) => ({
  stories: one(stories, { fields: [sames.storyId], references: [stories.id] }),
}));
