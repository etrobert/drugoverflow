'use server';

import { db } from '@/db';
import { sames } from '@/db/schema';
import { revalidatePath } from 'next/cache';

export default async function same(storyId: number, value: boolean) {
  await db.insert(sames).values({ storyId, value });
  revalidatePath('/');
}
