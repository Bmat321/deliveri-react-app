export default {
  name: "resturant",
  title: "Resturant",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Resturant",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "address",
      type: "string",
      title: "Address",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "image",
      type: "image",
      title: "Image of the Resturant",
    },
    {
      name: "long",
      type: "number",
      title: "Longitude of the Resturant",
    },
    {
      name: "lat",
      type: "number",
      title: "Latitude of the Resturant",
    },
    {
      name: "rating",
      type: "number",
      title: "Enter a Rating from (1-5 star)",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error("Please enter a Value between 1 and 5"),
    },
    {
      name: "type",
      type: "reference",
      title: "Category",
      validation: (Rule) => Rule.required(),
      to: [{ type: "category" }],
    },
    {
      name: "dishes",
      type: "array",
      title: "Dishes",
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    },
  ],
};
