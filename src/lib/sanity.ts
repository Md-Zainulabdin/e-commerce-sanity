import { createClient } from "next-sanity";

const client = createClient({
  projectId: "",
  dataset: "",
  apiVersion: "",
  useCdn: true,
});
