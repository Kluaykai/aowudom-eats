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

const dormitoriesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.enum(['หอพัก', 'คอนโด']),
    priceRange: z.string(),
    electricityRate: z.string(),
    waterRate: z.string(),
    zone: z.enum(['ซอยอ่าวอุดม', 'ประตู 1', 'ประตู 2', 'ประตู 3', 'เขาน้ำซับ']),
    distanceToKU: z.string(),
    petFriendly: z.boolean(),
    facilities: z.array(z.string()),
    studentReviews: z.array(
      z.object({
        author: z.string(),
        comment: z.string(),
        rating: z.number().min(1).max(5),
      })
    ),
    googleMapsUrl: z.string(),
    coverImage: z.string(),
  }),
});

const nightlifeCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    style: z.string(),
    pricePerPerson: z.string(),
    zone: z.string(),
    openHours: z.string(),
    highlightPromo: z.string(),
    facilities: z.array(z.string()),
    studentReviews: z.array(
      z.object({
        author: z.string(),
        comment: z.string(),
        rating: z.number().min(1).max(5),
      })
    ),
    googleMapsUrl: z.string(),
    coverImage: z.string(),
  }),
});

export const collections = {
  reviews: reviewsCollection,
  dormitories: dormitoriesCollection,
  nightlife: nightlifeCollection,
};
