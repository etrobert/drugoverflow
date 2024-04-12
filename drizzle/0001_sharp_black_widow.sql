CREATE TABLE IF NOT EXISTS "sames" (
	"id" serial PRIMARY KEY NOT NULL,
	"story_id" serial NOT NULL,
	"value" boolean NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
