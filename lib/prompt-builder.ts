export function buildFinalPrompt(opts: {
  base: string;
  selectedPreset: string | null;
  activeField: string;
  ratio: string;
  uploadedImages: string[];
  variationSeed: string;
}) {
  const {
    base,
    selectedPreset,
    activeField,
    ratio,
    uploadedImages,
    variationSeed,
  } = opts;

  const ratioMap: Record<string, string> = {
    square: "square (1:1)",
    landscape: "landscape (4:3)",
    portrait: "portrait (3:4)",
  };
  const ratioText = ratioMap[ratio] || ratio;

  const styleDescriptors: Record<string, string> = {
    minimalist:
      "minimalist composition, clean negative space, soft natural shadows, muted color palette",
    organic:
      "natural tones, warm ambient light, textured materials, soft highlights",
    cinematic:
      "dramatic cinematic lighting, high contrast, shallow depth of field, rich color grading",
  };

  const fieldDescriptors: Record<string, string> = {
    product:
      "studio product shot: centered composition, product fills most of the frame, sharp details, neutral background",
    lifestyle:
      "lifestyle scene: contextual props, subtle human interaction, environmental storytelling, natural poses",
    ecom: "e-commerce white-background product photo: pure white background, even lighting, crisp shadows, 3/4 angle",
  };

  const presetLabels: Record<string, string> = {
    minimalist: "Minimalist",
    organic: "Organic",
    cinematic: "Cinematic",
  };
  const presetLabel = selectedPreset
    ? presetLabels[selectedPreset] || capitalize(selectedPreset)
    : "";
  const styleHint = selectedPreset
    ? styleDescriptors[selectedPreset] || presetLabel
    : "photorealistic, high-quality";

  const fieldLabels: Record<string, string> = {
    product: "Product",
    lifestyle: "Lifestyle",
    ecom: "E-commerce",
  };
  const fieldLabel = activeField
    ? fieldLabels[activeField] || capitalize(activeField)
    : "";
  const fieldHint = activeField
    ? fieldDescriptors[activeField] || fieldLabel
    : fieldLabel || "general product imagery";

  const negativeInstructions =
    "No watermarks, no visible text, no logos, no brand names, no UI overlays, avoid hands covering the product unless specified.";

  // If multiple reference images are supplied, instruct the model how to use them
  let referenceNote = "";
  if (uploadedImages && uploadedImages.length > 0) {
    if (uploadedImages.length === 1) {
      referenceNote =
        "Use the provided reference image to inform composition, materials and color; prioritize its details where relevant.";
    } else {
      referenceNote = `Use the provided ${uploadedImages.length} reference images as visual guides. Treat image 1 as primary for composition; blend attributes from other images (color, texture, props) as appropriate.`;
    }
  }

  const variationNote = `Variation seed: ${variationSeed}. Produce a visually different composition and details from previous generations.`;

  const parts = [
    base,
    `Style: ${presetLabel || selectedPreset || "photorealistic"}. ${styleHint}.`,
    `Field: ${fieldLabel || activeField || "general"}. ${fieldHint}.`,
    `Aspect Ratio: ${ratioText}.`,
    referenceNote,
    `Output: high resolution, prioritize sharp detail and realistic materials.`,
    negativeInstructions,
    variationNote,
  ].filter(Boolean);

  return parts.join(" ").trim();
}

function capitalize(s: string) {
  if (!s) return s;
  return s.charAt(0).toUpperCase() + s.slice(1);
}
