export const getErrorMessage = (error: any) => {
  if ("status" in error) {
    return "error" in error ? error.error : JSON.stringify(error.data);
  }
  return error.message || "An unknown error occurred";
};