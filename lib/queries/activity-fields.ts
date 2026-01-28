import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export type ActivityField = { id: string; name: string };

export async function fetchActivityFields(
  language: string,
): Promise<ActivityField[]> {
  const query = `{ activityFields(page: 1, perPage: 20, status: "active", language_code: "${language}") { data { id name description } } }`;

  const res = await axios.post(
    `https://api-ai-code.dsp.one/graphql?language_code=${language}`,
    { query },
    { headers: { "Content-Type": "application/json" } },
  );

  const json = res.data;
  const data = json?.data?.activityFields?.data ?? [];
  const unique = data.filter(
    (f: { id: string }, i: number, s: { id: string }[]) =>
      i === s.findIndex((x) => x.id === f.id),
  );

  return unique.length
    ? unique.map((f: { id: string; name: string }) => ({
        id: f.id,
        name: f.name,
      }))
    : [
        { id: "enterprise", name: "Công ty TNHH/CP" },
        { id: "household", name: "Hộ kinh doanh" },
        { id: "other", name: "Tổ chức khác" },
      ];
}

export function useActivityFields(language: string) {
  return useQuery({
    queryKey: ["activityFields", language],
    queryFn: () => fetchActivityFields(language),
    staleTime: 1000 * 60 * 5,
  });
}
