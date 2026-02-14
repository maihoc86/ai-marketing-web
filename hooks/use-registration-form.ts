"use client";

import { useState, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { registerTrial } from "@/lib/api/registration";
import type {
  PackageType,
  RegistrationFormData,
  RegistrationFormErrors,
} from "@/types/registration";
import { initialFormData, phoneCodes } from "@/types/registration";

interface UseRegistrationFormOptions {
  initialPackage?: PackageType;
  onSuccess?: () => void;
}

export function useRegistrationForm(options: UseRegistrationFormOptions = {}) {
  const { initialPackage = "starter", onSuccess } = options;
  const router = useRouter();
  const pathname = usePathname();

  const [formData, setFormData] = useState<RegistrationFormData>({
    ...initialFormData,
    selected_package: initialPackage,
  });

  const [errors, setErrors] = useState<RegistrationFormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // React Query mutation for registration
  const mutation = useMutation({
    mutationFn: registerTrial,
    onSuccess: () => {
      setIsSubmitted(true);
      setErrors({});
      onSuccess?.();
    },
    onError: (error: Error) => {
      setErrors({
        general: error.message || "Registration failed. Please try again.",
      });
    },
  });

  // Validation function
  const validateForm = useCallback((): boolean => {
    const newErrors: RegistrationFormErrors = {};

    // Package validation
    if (!formData.selected_package) {
      newErrors.selected_package = "Please select an account type";
    }

    // Business package required fields
    if (formData.selected_package === "business") {
      if (!formData.company_name.trim()) {
        newErrors.company_name =
          "Company name is required for business package";
      }
      if (!formData.tax_id.trim()) {
        newErrors.tax_id = "TAX ID is required for business package";
      }
      if (!formData.office_address.trim()) {
        newErrors.office_address =
          "Office address is required for business package";
      }
    }

    // Required fields validation
    if (!formData.full_name.trim()) {
      newErrors.full_name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone_number.trim()) {
      newErrors.phone_number = "Phone number is required";
    } else {
      // Validate phone number format based on selected phone code
      const selectedPhoneCode = phoneCodes.find(
        (pc) => pc.code === formData.phone_code,
      );

      if (selectedPhoneCode) {
        // Remove all non-digit characters for validation
        const cleanedPhone = formData.phone_number.replace(/\D/g, "");

        // Check length
        if (
          cleanedPhone.length < selectedPhoneCode.minLength ||
          cleanedPhone.length > selectedPhoneCode.maxLength
        ) {
          newErrors.phone_number = `Phone number must be ${selectedPhoneCode.minLength}-${selectedPhoneCode.maxLength} digits for ${selectedPhoneCode.country}`;
        }
        // Check pattern
        else if (!selectedPhoneCode.pattern.test(formData.phone_number)) {
          newErrors.phone_number = `Invalid format. ${selectedPhoneCode.description}`;
        }
      }
    }

    if (!formData.job_position) {
      newErrors.job_position = "Please select your job position";
    }

    // Social URL validation (only if enabled)
    if (formData.socials.facebook) {
      const invalidUrls = formData.facebook_urls.filter(
        (url) =>
          url.trim() &&
          !url.includes("facebook.com") &&
          !url.startsWith("https://"),
      );
      if (invalidUrls.length > 0) {
        newErrors.facebook_urls = invalidUrls.map(
          () => "Please enter a valid Facebook URL",
        );
      }
    }

    if (formData.socials.instagram) {
      const invalidUrls = formData.instagram_urls.filter(
        (url) =>
          url.trim() &&
          !url.includes("instagram.com") &&
          !url.startsWith("https://"),
      );
      if (invalidUrls.length > 0) {
        newErrors.instagram_urls = invalidUrls.map(
          () => "Please enter a valid Instagram URL",
        );
      }
    }

    if (formData.socials.tiktok) {
      const invalidUrls = formData.tiktok_urls.filter(
        (url) =>
          url.trim() &&
          !url.includes("tiktok.com") &&
          !url.startsWith("https://"),
      );
      if (invalidUrls.length > 0) {
        newErrors.tiktok_urls = invalidUrls.map(
          () => "Please enter a valid TikTok URL",
        );
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  // Handle input changes
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
      // Clear error for this field
      if (errors[name as keyof RegistrationFormErrors]) {
        setErrors((prev) => ({
          ...prev,
          [name]: undefined,
        }));
      }
    },
    [errors],
  );

  // Handle package selection
  const handlePackageSelect = useCallback(
    (packageId: PackageType) => {
      setFormData((prev) => ({
        ...prev,
        selected_package: packageId,
      }));
      setErrors((prev) => ({
        ...prev,
        selected_package: undefined,
      }));

      // Update URL params
      router.push(`${pathname}?package=${packageId}`, { scroll: false });
    },
    [router, pathname],
  );

  // Handle social toggle
  const handleSocialToggle = useCallback(
    (social: keyof RegistrationFormData["socials"]) => {
      setFormData((prev) => ({
        ...prev,
        socials: {
          ...prev.socials,
          [social]: !prev.socials[social],
        },
      }));
    },
    [],
  );

  // Handle additional info toggle
  const handleAdditionalInfoToggle = useCallback(
    (field: keyof RegistrationFormData["additionalInfo"]) => {
      setFormData((prev) => ({
        ...prev,
        additionalInfo: {
          ...prev.additionalInfo,
          [field]: !prev.additionalInfo[field],
        },
      }));
    },
    [],
  );

  // Handle adding a new URL input for a platform
  const handleAddUrl = useCallback(
    (
      social: "facebook" | "instagram" | "tiktok" | "google_maps" | "website",
    ) => {
      const urlKey = `${social}_urls` as keyof RegistrationFormData;
      setFormData((prev) => ({
        ...prev,
        [urlKey]: [...(prev[urlKey] as string[]), ""],
      }));
    },
    [],
  );

  // Handle removing a URL input for a platform
  const handleRemoveUrl = useCallback(
    (
      social: "facebook" | "instagram" | "tiktok" | "google_maps" | "website",
      index: number,
    ) => {
      const urlKey = `${social}_urls` as keyof RegistrationFormData;
      setFormData((prev) => ({
        ...prev,
        [urlKey]: (prev[urlKey] as string[]).filter((_, i) => i !== index),
      }));
    },
    [],
  );

  // Handle URL input changes
  const handleUrlChange = useCallback(
    (
      social: "facebook" | "instagram" | "tiktok" | "google_maps" | "website",
      index: number,
      value: string,
    ) => {
      const urlKey = `${social}_urls` as keyof RegistrationFormData;
      setFormData((prev) => {
        const urls = [...(prev[urlKey] as string[])];
        urls[index] = value;
        return {
          ...prev,
          [urlKey]: urls,
        };
      });

      // Clear error for this field
      const errorKey = `${social}_urls` as keyof RegistrationFormErrors;
      if (errors[errorKey]) {
        setErrors((prev) => ({
          ...prev,
          [errorKey]: undefined,
        }));
      }
    },
    [errors],
  );

  // Handle form submission
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (!validateForm()) {
        return;
      }

      mutation.mutate(formData);
    },
    [formData, mutation, validateForm],
  );

  // Reset form
  const resetForm = useCallback(() => {
    setFormData({
      ...initialFormData,
      selected_package: initialPackage,
    });
    setErrors({});
    setIsSubmitted(false);
  }, [initialPackage]);

  return {
    formData,
    errors,
    isLoading: mutation.isPending,
    isSubmitted,
    successMessage: mutation.isSuccess
      ? "Registration successful! Check your email."
      : "",
    setIsSubmitted,
    handleInputChange,
    handlePackageSelect,
    handleSocialToggle,
    handleAdditionalInfoToggle,
    handleAddUrl,
    handleRemoveUrl,
    handleUrlChange,
    handleSubmit,
    resetForm,
  };
}
