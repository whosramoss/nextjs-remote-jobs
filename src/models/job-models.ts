import { z } from "zod"

export const SJobItem = z.object({
  id: z.number(),
  badgeLetters: z.string(),
  title: z.string(),
  company: z.string(),
  date: z.string().nullable().optional(),
  relevanceScore: z.number(),
  daysAgo: z.number()
})

export const SJobItemExpanded = SJobItem.and(
  z.object({
    description: z.string(),
    qualifications: z.array(z.string()),
    reviews: z.array(z.string()),
    duration: z.string(),
    location: z.string(),
    salary: z.string(),
    coverImgURL: z.string(),
    companyURL: z.string()
  })
)

export const sPageDirection = z.union([
  z.literal("next"),
  z.literal("previous")
])

export const SSortBy = z.union([
  z.literal("relevant"),
  z.literal("recent")
])

export const SApiJobItens = z.object({
  jobItems: z.array(SJobItem),
});
export const SApiJobItensExpanded = z.object({
  jobItems: z.array(SJobItemExpanded),
});

export type ApiJobItens = z.infer<typeof SApiJobItens>;
export type ApiJobItensExpanded = z.infer<typeof SApiJobItensExpanded>;
export type JobItem = z.infer<typeof SJobItem>;
export type JobItemExpanded = z.infer<typeof SJobItemExpanded>;
export type PageDirection = z.infer<typeof sPageDirection>;
export type SortBy = z.infer<typeof SSortBy>;
