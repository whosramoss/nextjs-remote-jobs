import * as z from "zod";

export const geometrySchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  image: z.string(),
  route: z.string(),
});

export const geometryListSchema = z.array(geometrySchema);

export type GeometryModel = z.infer<typeof geometrySchema>;

export const geometryApiResponseSchema = z.object({
  data: z.array(geometrySchema),
});
export type GeometryApiResponseModel = z.infer<
  typeof geometryApiResponseSchema
>;
