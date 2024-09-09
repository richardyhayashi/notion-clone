//import { relations } from 'drizzle-orm';
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const notesTable = pgTable('note', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  imageUrl: text('imageUrl'),
  userId: text('user_id').notNull(),
  editorTate: text('editor_state'),
});

export type InsertNote = typeof notesTable.$inferInsert;
export type SelectNote = typeof notesTable.$inferSelect;

// drizzle-orm
// drizzle-kit