"use client";

import type {
  RegistrationFormData,
  RegistrationFormErrors,
} from "@/types/registration";
import IG from "../common/icons/IG";
import Facebook from "../common/icons/Facebook";
import TikTok from "../common/icons/TikTok";

interface SocialChannelsProps {
  formData: RegistrationFormData;
  errors: RegistrationFormErrors;
  onSocialToggle: (social: keyof RegistrationFormData["socials"]) => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface SocialItemProps {
  id: keyof RegistrationFormData["socials"];
  name: string;
  icon: React.ReactNode;
  checked: boolean;
  urlValue: string;
  urlName: string;
  urlPlaceholder: string;
  urlLabel: string;
  error?: string;
  onToggle: () => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SocialItem({
  id,
  name,
  icon,
  checked,
  urlValue,
  urlName,
  urlPlaceholder,
  urlLabel,
  error,
  onToggle,
  onInputChange,
}: SocialItemProps) {
  return (
    <div className="border border-gray-200 rounded-sm py-3 px-5 bg-gray-50/50 transition-colors hover:bg-white hover:border-primary/40">
      <div className="flex items-center flex-wrap">
        <input
          type="checkbox"
          id={`social-${id}`}
          checked={checked}
          onChange={onToggle}
          className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary cursor-pointer bg-white"
        />
        <label
          htmlFor={`social-${id}`}
          className="ml-2 flex items-center gap-2 text-sm font-bold text-text-main cursor-pointer select-none flex-1"
        >
          {icon}
          {name}
        </label>
        {checked && (
          <div className="w-full basis-full pl-0 mt-4 animate-fade-in-up">
            <label className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-1.5">
              {urlLabel}
            </label>
            <input
              type="text"
              name={urlName}
              value={urlValue}
              onChange={onInputChange}
              placeholder={urlPlaceholder}
              className={`w-full bg-white border focus:border-primary focus:ring-1 focus:ring-primary/50 placeholder-gray-400 text-text-main py-3.5 px-4 outline-none transition-all text-sm rounded-sm font-medium ${
                error ? "border-red-500" : "border-gray-200"
              }`}
            />
            {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

export function SocialChannels({
  formData,
  errors,
  onSocialToggle,
  onInputChange,
}: SocialChannelsProps) {
  return (
    <section className="mb-16">
      <h3 className="text-sm font-extrabold uppercase tracking-widest text-text-main mb-8 flex items-center gap-4">
        <span className="w-8 h-0.5 bg-primary" /> Addition Information
      </h3>
      <div className="space-y-5">
        {/* Facebook */}
        <SocialItem
          id="facebook"
          name="Facebook"
          icon={<Facebook className="w-8" />}
          checked={formData.socials.facebook}
          urlValue={formData.facebook_url}
          urlName="facebook_url"
          urlPlaceholder="https://facebook.com/yourpage"
          urlLabel="Link Fanpage"
          error={errors.facebook_url}
          onToggle={() => onSocialToggle("facebook")}
          onInputChange={onInputChange}
        />

        {/* Instagram */}
        <SocialItem
          id="instagram"
          name="Instagram"
          icon={<IG className="w-8" />}
          checked={formData.socials.instagram}
          urlValue={formData.instagram_url}
          urlName="instagram_url"
          urlPlaceholder="https://instagram.com/yourprofile"
          urlLabel="Instagram Profile"
          error={errors.instagram_url}
          onToggle={() => onSocialToggle("instagram")}
          onInputChange={onInputChange}
        />

        {/* TikTok */}
        <SocialItem
          id="tiktok"
          name="TikTok"
          icon={<TikTok className="w-8" />}
          checked={formData.socials.tiktok}
          urlValue={formData.tiktok_url}
          urlName="tiktok_url"
          urlPlaceholder="https://tiktok.com/@yourhandle"
          urlLabel="TikTok Profile"
          error={errors.tiktok_url}
          onToggle={() => onSocialToggle("tiktok")}
          onInputChange={onInputChange}
        />
      </div>
    </section>
  );
}
