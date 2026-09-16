import axiosInstance from "./axiosInstance";

/**
 * Fetch shipping charge for a given state.
 * Pass an empty string ("") when no state is known.
 */
const getShippingCharge = async (state: string = ""): Promise<number> => {
  const response = await axiosInstance.get("users/state-shipping-charge/", {
    params: { state },
  });
  // API returns { charge: 55.0 }
  return response.data?.charge ?? 0;
};

export default getShippingCharge;