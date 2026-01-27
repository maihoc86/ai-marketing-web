/**
 * GraphQL API Client for DSP.ONE
 *
 * Handles all GraphQL queries and mutations
 */

const GRAPHQL_ENDPOINT = "https://api-ai-code.dsp.one/graphql";

export interface ActivityField {
  id: string;
  name: string;
  description: string;
}

export interface ActivityFieldsResponse {
  data: {
    activityFields: {
      data: ActivityField[];
    };
  };
}

/**
 * Fetch activity fields from API
 * @param language - Language code ('vi' or 'en')
 * @returns Array of activity fields
 */
export async function fetchActivityFields(
  language: string = "vi",
): Promise<ActivityField[]> {
  try {
    const response = await fetch(
      `${GRAPHQL_ENDPOINT}?language_code=${language}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `{
            activityFields(page: 1, perPage: 20, status: "active", language_code: "${language}") {
              data {
                id
                name
                description
              }
            }
          }`,
        }),
      },
    );

    const result: ActivityFieldsResponse = await response.json();

    if (result.data?.activityFields?.data) {
      return result.data.activityFields.data;
    }

    throw new Error("Invalid API response format");
  } catch (error) {
    console.error("Error fetching activity fields:", error);
    // Return fallback data based on language
    return getFallbackActivityFields(language);
  }
}

/**
 * Get fallback activity fields when API fails
 * @param language - Language code
 * @returns Default activity fields
 */
function getFallbackActivityFields(language: string): ActivityField[] {
  if (language === "en") {
    return [
      { id: "enterprise", name: "LLC/JSC", description: "" },
      { id: "household", name: "Household business", description: "" },
      { id: "other", name: "Other organization", description: "" },
    ];
  }

  return [
    { id: "enterprise", name: "Công ty TNHH/CP", description: "" },
    { id: "household", name: "Hộ kinh doanh", description: "" },
    { id: "other", name: "Tổ chức khác", description: "" },
  ];
}
