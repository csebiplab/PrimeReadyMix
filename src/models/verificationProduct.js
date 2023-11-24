import mongoose, { Schema } from "mongoose";

const verificationOwnershipSchema = new Schema(
  {
    url: String,
  },
  {
    timestamps: true,
  }
);

const VerificationOwnershipUrl =
  mongoose.models.VerificationOwnershipUrl ||
  mongoose.model("VerificationOwnershipUrl", verificationOwnershipSchema);
export default VerificationOwnershipUrl;
