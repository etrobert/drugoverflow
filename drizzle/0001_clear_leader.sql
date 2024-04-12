CREATE TABLE IF NOT EXISTS "facts" (
	"id" serial PRIMARY KEY NOT NULL,
	"drug_id" integer NOT NULL,
	"description" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "facts" ADD CONSTRAINT "facts_drug_id_drugs_id_fk" FOREIGN KEY ("drug_id") REFERENCES "drugs"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
