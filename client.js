import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: "1uvyyb5a",
  dataset: "production",
  apiVersion: "2024-09-17",
  useCdn: true,
  token: import.meta.env.SANITY_API_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
