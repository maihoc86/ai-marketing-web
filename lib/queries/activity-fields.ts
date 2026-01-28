import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export type ActivityField = { id: string; name: string };

export async function fetchActivityFields(
  language: string,
  opts?: {
    token?: string;
    companyId?: string | number;
    perPage?: number;
    page?: number;
    orderBy?: string;
    orderDirection?: string;
  },
): Promise<ActivityField[]> {
  const {
    token,
    companyId = 19,
    perPage = -1,
    page = 1,
    orderBy = "created_at",
    orderDirection = "asc",
  } = opts ?? {};

  const query = `{
    activityFields(page: ${page}, perPage: ${perPage}, status: "active", orderBy: "${orderBy}", orderDirection: "${orderDirection}", language_code: "${language}") {
      current_page
      has_more_pages
      last_page
      per_page
      total
      data {
        id
        name
        description
        language_id
        status
        file {
          id
          url
        }
        language {
          language_name
          language_code
        }
        created_at
        created_at_formatted
        updated_at
      }
    }
  }`;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "accept-language": `${language},en;q=0.9`,
  };

  if (token) headers["authorization"] = `Bearer ${token}`;
  if (companyId !== undefined) headers["x-company-id"] = String(companyId);

  const res = await axios.post(
    `https://api-ai-code.dsp.one/graphql`,
    { query, variables: {} },
    { headers },
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
