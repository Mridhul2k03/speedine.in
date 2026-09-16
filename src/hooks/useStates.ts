import getStates from "../api/getStates";
import { useQuery } from "@tanstack/react-query";

/**
 * Hook to fetch the list of available delivery states.
 * Returns: { states: string[], loading: boolean, error: boolean }
 */
export const useStates = () => {
  const { data, isLoading, isError } = useQuery<string[], Error>({
    queryKey: ["delivery-states"],
    queryFn: getStates,
    staleTime: 1000 * 60 * 30, // states list rarely changes
  });

  return {
    states: data ?? [],
    loading: isLoading,
    error: isError,
  };
};
