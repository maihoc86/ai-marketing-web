"use client";

import type {
  RegistrationFormData,
  RegistrationFormErrors,
} from "@/types/registration";
import IG from "../common/icons/IG";
import Facebook from "../common/icons/Facebook";
import TikTok from "../common/icons/TikTok";
import { SocialItem } from "./social-item";

interface SocialChannelsProps {
  formData: RegistrationFormData;
  errors: RegistrationFormErrors;
  onSocialToggle: (social: keyof RegistrationFormData["socials"]) => void;
  onAddUrl: (social: "facebook" | "instagram" | "tiktok") => void;
  onRemoveUrl: (
    social: "facebook" | "instagram" | "tiktok",
    index: number,
  ) => void;
  onUrlChange: (
    social: "facebook" | "instagram" | "tiktok",
    index: number,
    value: string,
  ) => void;
}

export function PromotionChannels({
  formData,
  errors,
  onSocialToggle,
  onAddUrl,
  onRemoveUrl,
  onUrlChange,
}: SocialChannelsProps) {
  return (
    <section className="mb-16">
      <h3 className="text-sm font-extrabold uppercase tracking-widest text-text-main mb-8 flex items-center gap-4">
        <span className="w-8 h-0.5 bg-primary" /> Promotions Channels
      </h3>
      <div className="space-y-5">
        {/* Facebook */}
        <SocialItem
          id="facebook"
          name="Facebook"
          icon={<Facebook className="w-8" />}
          checked={formData.socials.facebook}
          urls={formData.facebook_urls}
          urlPlaceholder="https://facebook.com/yourpage"
          urlLabel="Link Fanpage"
          errors={errors.facebook_urls}
          onToggle={() => onSocialToggle("facebook")}
          onAddUrl={() => onAddUrl("facebook")}
          onRemoveUrl={(index) => onRemoveUrl("facebook", index)}
          onUrlChange={(index, value) => onUrlChange("facebook", index, value)}
        />

        {/* Instagram */}
        <SocialItem
          id="instagram"
          name="Instagram"
          icon={<IG className="w-8" />}
          checked={formData.socials.instagram}
          urls={formData.instagram_urls}
          urlPlaceholder="https://instagram.com/yourprofile"
          urlLabel="Instagram Profile"
          errors={errors.instagram_urls}
          onToggle={() => onSocialToggle("instagram")}
          onAddUrl={() => onAddUrl("instagram")}
          onRemoveUrl={(index) => onRemoveUrl("instagram", index)}
          onUrlChange={(index, value) => onUrlChange("instagram", index, value)}
        />

        {/* TikTok */}
        <SocialItem
          id="tiktok"
          name="TikTok"
          icon={<TikTok className="w-8" />}
          checked={formData.socials.tiktok}
          urls={formData.tiktok_urls}
          urlPlaceholder="https://tiktok.com/@yourhandle"
          urlLabel="TikTok Profile"
          errors={errors.tiktok_urls}
          onToggle={() => onSocialToggle("tiktok")}
          onAddUrl={() => onAddUrl("tiktok")}
          onRemoveUrl={(index) => onRemoveUrl("tiktok", index)}
          onUrlChange={(index, value) => onUrlChange("tiktok", index, value)}
        />
      </div>
    </section>
  );
}
