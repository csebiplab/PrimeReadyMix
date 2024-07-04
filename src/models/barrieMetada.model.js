import mongoose, { Schema } from "mongoose";

const BarrieMetadataSchema = new Schema(
    {
        title: String,
        description: String,
        keywords: String,
    },
    {
        timestamps: true,
    }
);

const BarriePageMetadata =
    mongoose.models.BarriePageMetadata ||
    mongoose.model("BarriePageMetadata", BarrieMetadataSchema);
export default BarriePageMetadata;
