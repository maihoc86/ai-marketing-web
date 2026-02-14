import { MapPin, Globe } from "lucide-react";
import type {
  RegistrationFormData,
  RegistrationFormErrors,
} from "@/types/registration";
import GoogleMap from "../common/icons/GoogleMap";

interface AdditionInformationProps {
  formData: RegistrationFormData;
  errors: RegistrationFormErrors;
  onToggle: (field: keyof RegistrationFormData["additionalInfo"]) => void;
  onAddUrl: (field: "google_maps" | "website") => void;
  onRemoveUrl: (field: "google_maps" | "website", index: number) => void;
  onUrlChange: (
    field: "google_maps" | "website",
    index: number,
    value: string,
  ) => void;
}

export function AdditionInformation({
  formData,
  errors,
  onToggle,
  onAddUrl,
  onRemoveUrl,
  onUrlChange,
}: AdditionInformationProps) {
  return (
    <section className="mb-16">
      <h3 className="text-sm font-extrabold uppercase tracking-widest text-text-main mb-8 flex items-center gap-4">
        <span className="w-8 h-0.5 bg-primary" /> Addition Information
      </h3>
      <div className="space-y-5">
        {/* Google Maps */}
        <div className="border border-gray-200 rounded-sm py-3 px-5 bg-gray-50/50 transition-colors hover:bg-white hover:border-primary/40">
          <div className="flex items-center flex-wrap">
            <input
              type="checkbox"
              id="additional-google_maps"
              checked={formData.additionalInfo.google_maps}
              onChange={() => onToggle("google_maps")}
              className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary cursor-pointer bg-white"
            />
            <label
              htmlFor="additional-google_maps"
              className="ml-2 flex items-center gap-2 text-sm font-bold text-text-main cursor-pointer select-none flex-1"
            >
              <GoogleMap className="size-6 text-red-500" />
              Google Maps
            </label>
            {formData.additionalInfo.google_maps && (
              <div className="w-full basis-full pl-0 mt-4 space-y-3 animate-fade-in-up">
                <label className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-1.5">
                  Link Google Maps
                </label>
                {formData.google_maps_urls.map((url, index) => (
                  <div key={index} className="flex gap-2 items-start">
                    <input
                      type="text"
                      value={url}
                      onChange={(e) =>
                        onUrlChange("google_maps", index, e.target.value)
                      }
                      placeholder="https://maps.google.com/..."
                      className={`flex-1 bg-white border focus:border-primary focus:ring-1 focus:ring-primary/50 placeholder-gray-400 text-text-main py-3.5 px-4 outline-none transition-all text-sm rounded-sm font-medium ${
                        errors.google_maps_urls?.[index]
                          ? "border-red-500"
                          : "border-gray-200"
                      }`}
                    />
                    {formData.google_maps_urls.length > 1 && (
                      <button
                        type="button"
                        onClick={() => onRemoveUrl("google_maps", index)}
                        className="px-3 py-3.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-sm transition-colors"
                        title="Remove URL"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                ))}
                {errors.google_maps_urls &&
                  errors.google_maps_urls.some((err) => err) && (
                    <p className="text-xs text-red-500">
                      {errors.google_maps_urls.find((err) => err)}
                    </p>
                  )}
                <button
                  type="button"
                  onClick={() => onAddUrl("google_maps")}
                  className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors my-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Add another link
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Website */}
        <div className="border border-gray-200 rounded-sm py-3 px-5 bg-gray-50/50 transition-colors hover:bg-white hover:border-primary/40">
          <div className="flex items-center flex-wrap">
            <input
              type="checkbox"
              id="additional-website"
              checked={formData.additionalInfo.website}
              onChange={() => onToggle("website")}
              className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary cursor-pointer bg-white"
            />
            <label
              htmlFor="additional-website"
              className="ml-2 flex items-center gap-2 text-sm font-bold text-text-main cursor-pointer select-none flex-1"
            >
              <Globe className="size-6 text-blue-500" />
              Website
            </label>
            {formData.additionalInfo.website && (
              <div className="w-full basis-full pl-0 mt-4 space-y-3 animate-fade-in-up">
                <label className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-1.5">
                  Link Website
                </label>
                {formData.website_urls.map((url, index) => (
                  <div key={index} className="flex gap-2 items-start">
                    <input
                      type="text"
                      value={url}
                      onChange={(e) =>
                        onUrlChange("website", index, e.target.value)
                      }
                      placeholder="https://yourwebsite.com"
                      className={`flex-1 bg-white border focus:border-primary focus:ring-1 focus:ring-primary/50 placeholder-gray-400 text-text-main py-3.5 px-4 outline-none transition-all text-sm rounded-sm font-medium ${
                        errors.website_urls?.[index]
                          ? "border-red-500"
                          : "border-gray-200"
                      }`}
                    />
                    {formData.website_urls.length > 1 && (
                      <button
                        type="button"
                        onClick={() => onRemoveUrl("website", index)}
                        className="px-3 py-3.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-sm transition-colors"
                        title="Remove URL"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                ))}
                {errors.website_urls &&
                  errors.website_urls.some((err) => err) && (
                    <p className="text-xs text-red-500">
                      {errors.website_urls.find((err) => err)}
                    </p>
                  )}
                <button
                  type="button"
                  onClick={() => onAddUrl("website")}
                  className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors my-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Add another link
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
