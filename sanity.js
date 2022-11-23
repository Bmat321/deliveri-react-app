import sanityClient from "@sanity/client";
import imageUrlBulder from "@sanity/image-url";

const client = sanityClient({
  projectId: "ssllmh20",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: false,
  token:
    "sk8EmTBBV2tYALVshW91ofWZPijEe2m3xnDNCAtizlsjz7h983cSQwTHnE7J2so08nqrzhGw6d5kyPABgQ9NQssTVaA8a5otV6FwaOSV8lYZGrtD1mq6CJpHnMKnaq7OHSqRJc97hDTEARrgMinAiO1otzHaEp2KEL3pbGlSNKkEyITbVGRM",
});

const builder = imageUrlBulder(client);
export const urlFor = (source) => builder.image(source);

export default client;
