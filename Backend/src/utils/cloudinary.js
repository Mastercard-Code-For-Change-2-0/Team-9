import { v2 as cloudinary } from "cloudinary";
import fs from "fs/promises";
import path from "path"; // ✅ import path module
import dotenv from "dotenv";
dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localpath) => {
  try {
    if (!localpath) return null;

    const absolutePath = path.resolve(localpath); // ✅ convert to absolute path
    const response = await cloudinary.uploader.upload(absolutePath, {
      resource_type: "auto",
    });
    

   // console.log("File uploaded to Cloudinary:", response.url);

    // ✅ Clean up local file after upload
    await fs.unlink(absolutePath);

    return {
      url:response.secure_url,
      public_id:response.public_id
    };
  } catch (error) {
    console.error("Upload failed:", error);
    try {
      await fs.unlink(localpath); // cleanup if error
    } catch (_) {}
    return null;
  }
};
const deleteFromCloudinary = async (publicId) => {
  try {
    if (!publicId) return false;

    const response = await cloudinary.uploader.destroy(publicId);
    // response.result === 'ok' means it was successfully deleted
    return response;
  } catch (error) {
    console.error("Cloudinary deletion failed:", error);
    return null;
  }
};

export { uploadOnCloudinary ,deleteFromCloudinary};
