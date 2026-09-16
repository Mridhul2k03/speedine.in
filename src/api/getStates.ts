import axiosInstance from "./axiosInstance";

/**
 * Fetch the list of available states for delivery.
 * API returns: ["Kerala", "Tamil Nadu", ...]
 */
const getStates = async (): Promise<string[]> => {
  const response = await axiosInstance.get("users/states/");
  return response.data;
};

export default getStates;
