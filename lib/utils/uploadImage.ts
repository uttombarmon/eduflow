export async function uploadImage(file: File): Promise<string> {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  // 1. Fail-fast explicitly with a helpful debugging error
  if (!cloudName || !uploadPreset) {
    console.error(
      "❌ Cloudinary configuration missing inside environment variables:",
      {
        cloudName: cloudName ? "✅ Loaded" : "❌ UNDEFINED",
        uploadPreset: uploadPreset ? "✅ Loaded" : "❌ UNDEFINED",
      },
    );
    throw new Error(
      "Missing Cloudinary environment variables. Check your .env.local configuration.",
    );
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);
  formData.append("folder", "eduflow/courses");

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Cloudinary API Reject:", errorData);
      throw new Error(
        errorData?.error?.message ||
          "Failed to stream asset to Cloudinary storage buckets.",
      );
    }

    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.error("Network runtime fault during Cloudinary deployment:", error);
    throw error;
  }
}
