// Import necessary modules from next-sanity and @sanity/image-url
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

// Create a Sanity client with the specified configuration
export const client = createClient({
  projectId: "j3ojy73k",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: true,
});

// Create an image URL builder using the Sanity client
const builder = imageUrlBuilder(client);

// Function to generate image URLs using the builder
export function urlFor(source: any) {
  return builder.image(source);
}
