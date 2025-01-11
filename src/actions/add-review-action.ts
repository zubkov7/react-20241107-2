'use server'

import { revalidatePath, revalidateTag } from "next/cache";

export async function addReviewAction({ headphoneId, pathname, review }) {
    const result = await fetch(`http://localhost:3001/api/review/${headphoneId}`, {
        method: "POST",
        body: JSON.stringify(review),
        headers: {'Content-Type': 'application/json'},
      });

    const data = await result.json();

    // revalidateTag('getReviewsByHeadphoneId');
    revalidatePath(pathname);
}