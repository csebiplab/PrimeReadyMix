import mongoose, { Schema } from "mongoose";

const metaDataSchema = new Schema({
  homePage: {
    title: String,
    description: String,
    keywords: String,
  },
  concrete_delivery: {
    title: String,
    description: String,
    keywords: String,
  },
  blog: {
    title: String,
    description: String,
    keywords: String,
  },
  testimonials: {
    title: String,
    description: String,
    keywords: String,
  },
  contact_us: {
    title: String,
    description: String,
    keywords: String,
  },
});

const RouteMetaData =
  mongoose.models.routeMetaData ||
  mongoose.model("routeMetaData", metaDataSchema);
export default RouteMetaData;

//database stored by post api
//also get api applied
