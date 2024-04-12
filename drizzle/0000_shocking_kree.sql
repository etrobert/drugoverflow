CREATE TABLE IF NOT EXISTS "drugs" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
