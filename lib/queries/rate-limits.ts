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
  // Call Next.js API route instead of external API directly to avoid CORS issues
  const response = await fetch("/api/rate-limits", {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result: RateLimitResponse = await response.json();

  if (result.status !== "success") {
    throw new Error(result.message || "API call failed");
  }

  return result.data;
}

export async function incrementRateLimit(): Promise<void> {
  // Call Next.js API route to increment rate limit usage
  const response = await fetch("/api/rate-limits/increment", {
    method: "POST",
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result: RateLimitResponse = await response.json();

  if (result.status !== "success") {
    throw new Error(result.message || "Failed to increment rate limit");
  }
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
