import getShippingCharge from "../api/getShipping";
import { useQuery } from "@tanstack/react-query";

/**
 * Fetch shipping charge for a given state.
 * Pass "" when no state/address is selected yet.
 */
export const useShippingCharge = (state: string = "") => {
  const { data, isLoading, isError } = useQuery<number, Error>({
    queryKey: ["shippingCharge", state],
    queryFn: () => getShippingCharge(state),
    staleTime: 1000 * 60 * 5,
  });

  return { shippingCharge: data ?? 0, loading: isLoading, error: isError };
};
