/**
 * Single source of truth for the legal-entity identity published on the
 * Terms and Privacy pages.
 *
 * Meta App Review (Platform Terms 4.a) requires the privacy policy page to
 * contain enough business information for a reviewer to establish that the
 * policy belongs to the company that owns the app. Keep these values in sync
 * with the Business Manager record and the Facebook app settings.
 */

export interface FacebookAppIdentity {
  /**
   * The app's "Display Name" exactly as it appears in the Meta Developer
   * console. Reviewers match this string against the privacy page.
   */
  readonly displayName: string;
  /** Numeric App ID from the Meta Developer console. */
  readonly appId: string;
}

export interface BusinessIdentity {
  readonly legalNameVi: string;
  readonly legalNameEn: string;
  readonly taxCode: string;
  readonly addressVi: string;
  readonly addressEn: string;
  /** Corporate email — prefer a domain-backed address over free webmail. */
  readonly email: string;
  readonly hotline: string;
  readonly corporateWebsite: string;
  /** Canonical origin serving these legal pages. Must match the URL
   *  registered in the Facebook app's Privacy Policy URL field. */
  readonly platformOrigin: string;
  /** Products and domains this policy covers. */
  readonly productNames: readonly string[];
  readonly coveredDomains: readonly string[];
  /**
   * Set once the Facebook app's display name and ID are known.
   * While this is null the identity card omits the app rows — which is the
   * single most important element for passing Meta App Review, so fill it in
   * before resubmitting.
   */
  readonly facebookApp: FacebookAppIdentity | null;
}

export const BUSINESS_IDENTITY: BusinessIdentity = {
  legalNameVi: "CÔNG TY CỔ PHẦN TIÊN PHONG CDS",
  legalNameEn: "TIEN PHONG CDS JOINT STOCK COMPANY",
  taxCode: "0316459939",
  addressVi:
    "Tầng 01, Tòa nhà 232 Lê Văn Lương, Phường Tân Hưng, Quận 7, TP. Hồ Chí Minh, Việt Nam",
  addressEn:
    "Floor 01, Building 232 Le Van Luong, Tan Hung Ward, District 7, Ho Chi Minh City, Viet Nam",
  email: "salesmarketing@tienphongcds.com",
  hotline: "(+84) 378 387 375",
  corporateWebsite: "https://tienphongcds.com",
  platformOrigin: "https://dsp.one",
  productNames: ["DSP.one", "DXAI Marketing Platform"],
  coveredDomains: ["dsp.one", "admin-ai-code.dsp.one", "api-ai-code.dsp.one"],

  // TODO(meta-review): fill in from the Meta Developer console before resubmitting.
  // Example: { displayName: "DXAI Marketing", appId: "1234567890123456" }
  facebookApp: null,
};
