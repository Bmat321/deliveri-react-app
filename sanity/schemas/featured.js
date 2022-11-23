export default {
    name: 'featured',
    title: 'Featured Menu Categories',
    type: 'document',
    fields: [
      {
        name: "name",
        type: "string",
        title: "Featured Name",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "short_description",
        type: "string",
        title: "Short description",
        validation: (Rule) => Rule.max(200),
      },
      {
        name: "resturant",
        type: "array",
        title: "Resturant",
        of: [{ type: "reference", to: [{ type: "resturant" }] }],
      },
      
    ],
  }
  