// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import category from "./category";

import dish from "./dish";
import resturant from "./resturant";
import featured from "./featured";

export default createSchema({
  // We name our schema
  name: "default",

  types: schemaTypes.concat([resturant, dish, featured, category]),
});
