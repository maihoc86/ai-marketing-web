export interface RateLimitData {
  used: number;
  limit: number;
  remaining: number;
  reset_at: string | null;
  is_lifetime: boolean;
  last_attempt_at: string;
}

export interface RateLimitResponse {
  status: string;
  message: string;
  data: RateLimitData;
}

export async function getRateLimits(): Promise<RateLimitData> {
  const response = await fetch(
    "https://api-ai-code.dsp.one/api/rate-limits/status/ai_image_generate",
    {
      method: "GET",
      headers: {
        "x-api-key":
          "7e7a0271c6f5482e886a8cd47f0d41e36fb0a2258fabfd2f01bb8ea4a1db743e",
        "Content-Type": "application/json",
      },
    },
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result: RateLimitResponse = await response.json();

  if (result.status !== "success") {
    throw new Error(result.message || "API call failed");
  }

  return result.data;
}

// React Query options
export const rateLimitsQueryKey = ["rateLimits", "ai_image_generate"];

export const rateLimitsQueryOptions = {
  queryKey: rateLimitsQueryKey,
  queryFn: getRateLimits,
  staleTime: 1000 * 60 * 5, // 5 minutes
  refetchInterval: 1000 * 60 * 2, // refetch every 2 minutes
  retry: 2,
};
