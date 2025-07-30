// lib/sanity.client.ts
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "4yh8v1vf",
  dataset: "production",
  apiVersion: "2023-07-22",
  useCdn: true,
});
