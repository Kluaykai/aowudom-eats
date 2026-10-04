import { defineCollection, z } from 'astro:content';

const reviewsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    shopName: z.string(),
    category: z.enum(['ร้านปิดดึก', 'งบประหยัด', 'คาเฟ่', 'อาหารจานด่วน', 'ซีฟู้ด-ริมทะเล', 'บุฟเฟต์-หมูกระทะ']),
    tags: z.array(z.string()),
    coverImage: z.string(),
    rating: z.number().min(1).max(5),
    priceRange: z.string(),
    openingHours: z.string(),
    googleMapsUrl: z.string(),
    recommendedMenus: z.array(z.string()),
    pubDate: z.date(),
    author: z.string().default('Foodie ม.เกษตร ศรีราชา'),
  }),
});

export const collections = {
  reviews: reviewsCollection,
};
