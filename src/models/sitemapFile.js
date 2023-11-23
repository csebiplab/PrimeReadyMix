import mongoose, { Schema } from "mongoose";

const sitemapSchema = new Schema(
  {
    url: String,
  },
  {
    timestamps: true,
  }
);

const SitemapUrl =
  mongoose.models.SitemapUrl || mongoose.model("SitemapUrl", sitemapSchema); //during create model will follow rest of the time that means get and delete moment it will follow creted models like || mongoose.model("SitemapUrl", sitemapSchema); //during create model will follow rest of the time that means get and delete moment it will follow creted models like
export default SitemapUrl;

//database stored by post api
//also get api applied
