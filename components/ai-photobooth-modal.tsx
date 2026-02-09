"use client";

import { X, Sparkles, Hand } from "lucide-react";
import Image from "next/image";

interface AIPhotoboothModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const styles = [
  {
    name: "Classic",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC_Z8EPlBfqn7KDCVTpbIoTRpMgSt_Q3t-UjMQv6rLsgRo2K456Y3bK1YX__2UDW36epdQaRUtW8exj2YFeyG3rwCmjJQK8s4PGzJOUOaocSg_dJwP7WVn8mI587V8mZAB_K6rKHPSKFtOsJ0jPa6W2DwVwFJFQ39-S60QQDnIerwgkHPtJdu9d4VEgfrMztXSBcJ6MyhEKUiFHiWH8ZGFXAmPUBNTm9VJj5av7qCC1ePxBWRIT1sp8q1NZ99nV8_Jd5_CBKFQS1_RZ",
  },
  {
    name: "Modern",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD3k01TyKpOvsWwYqRA6AAat4ZsPSPbiDcTdrvZid-rY-B9Z93BTWB-mAOIckT9r1vCqImVXUnEyyWcmo2UUSAf7h19547mOs9jnGpCf7Iivw6H0HNtjtBg51TCffxblCjJr3yL_HwYsi4_IZhjrjGi1Mm1OiAdeFgBYyCj9--usfE12cEPG69HFW5_9gRcjyuYV_XK0I54d3OYfZ8DoIXgVhwzT_9bFF3AH-cIru0sGj8U3X9U95wb7w7tRb5XwwFVg6IOrQUCmllw",
  },
  {
    name: "Cartoon",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDv0XdZPUtOS5xluWpG-zmNF3NUPdvk6vqnX4FIKG3D6kxU5y6DqeAvNdYrPGZR2cpxvAl7ntSsI0BzfDsMFFqLMtjVlQHB-2OVhlpnHLmdBETz2ksTstdJ5mxcQjaJUCshEcP1wPvAfBwAPOKkrUvc-2cyEhfUfaPcXVMIRZFe03oiG-iJwZzUG6JeIXzo45OtTL43ZwD_Ahqr6yc59nArTDNyT9xXMsIsCm0WKt2PWyqaWepJ0meTm9SG31KvO7KEyf4gB-ViPT-P",
  },
  {
    name: "Cute",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLV0XPy7ol7vdxPaaAjWs9mf-YgWDrdk2gnyUIX7B2LndIMOYqgL0v3gZNamdwxI74R_k05Be9akOzsOOVnnMAOlzOCbcNMsFGi-ok_MC7bacqci0YSIo4U2I7wYNp-0YLNYMOLUkXr_4pO_gktyLLXakyM464rbOjKrOe8_pHL3lNRADn78MIS2wE6LxH130NWoxceQ-Gc2J1ibCQSZ5UUzmm-AdZlTgD6tS80uz8y9VSSOe_phVNprcZUy1abIYSA8k9cHRshUGO",
  },
];

const trending = [
  {
    name: "Zootopia",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDQYkjdS47my0_ZRCd7nOKldZ205vOfnPzxPSDBF8XtWw9J7Vr1NnaTfQqSbR7Irk8JlntHRjUUVNFXRU4vmjDPJhoudn3MK_PFTNQwyKVhEcIjdI7BmpjCJ4TSNPOtGtd8Ls5Ry-Amb4cSGdSRZWn-dNnykeoMcufDE77PebakXOka_pwCcsOkOrvFZC7MNYyvnsfJfRcraCcMb4LNHrttakGY_8qshc-YazJEI-CnaZe2IURkmZr8clRcWXmzykVWhbIHR0_mSQOT",
  },
  {
    name: "Halloween",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCN4G9J8FasvbslK4oTYzfEnmYGgOkoIGCVuNnsnXv-WREPKKy1GY_CJepe3-pMQe1DFwmpw7fdBz1WweJLmkTLtnMWV76FzNV-LkMbxM39CCRoBgYNWgnCSRj5ntI8pQFJ2F5zyULymUPr8KEA6HD8KGy2kqe6S7Kwtd1gMDyBcnA4T9LipPVbgrYt78sVVnHcUW-8x_ERz1sWM6v3UcgmvMF4O2RIXayMTSMtsXeUlboYyIf5U5U9UW2cLDqexa2ulCrw5MH7WeBN",
  },
  {
    name: "Tet Holiday",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDUGCdIo53wdYqZK47Aor6OmUi5hvZ6KSAkYwQbYzLBcomGD6xgKjWtCRIqnJltQCxzYsbaqZz4zYOtvkhkMQwzMVJH1sp4ombm_HaTctT9KKl-XkGDOlLvtWPagffCInJFIAjXa5LjJbyo6uUgrXIFxvtanu2ldvS9KZnGx_D0Y20Z8LtbatWun4al2mbxMc1fDszKVXc9h-WAKWWWYm4MsLzRfsZgVPPJnluFd9LCVrXHmgaXKoP7w9Yo0vgo6wsruKB7ZjESXOJU",
  },
  {
    name: "Trends",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCd6ZQ6O0vQz0kRRzu2zx8lemZTif9194RhQtYfrIKfv-gzeu-KJhF5-GWiqGRwEbNsEadRu3BGfAd7Oz8pwj1s3xSVvtv0y8nQBrDFaLv9irFn4xZOc88Fc1fGN4jETTRkpxpnHNc_pnYltH_lFkEf5BoALiCbZoIAKfJRTpMXMmsyCoaR3G176Wws7AKBvh2a8N58USeuLnL9MeypSVxXxJu-65uyfAaov1_NAYrEgBQA6NH3o7xtPwyGo8aitlHCRpDtGlAx6VGt",
  },
];

const results = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA_8f1zhaL6MH9ixGGenVJJMaapGQBc9kzvsmuGZQ_uc2yef8gLVxNX9Ti-43jY9eoAi3JgTZeuqt971sX9b2JUS-jGBiQlpLm7j1uDxa8N-rkklrQvPPRVLChXDVVhWJdcseDVui36s6Hx54zdLBf3oU4K1jVVAtUk4QvIW26MntzOaFoip74CUbQewQV-fJD9pJwmIysCbxVgsxVY6BWXxtrz0K6yTn97QC4lsM0_sSYO5BaReP1K-xZa-X_iOQ65Ob4pSp1nDNtl",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD09TkRATkob0_8HHSN0u5oQmvAsdOdfZXOs0m-N_ylYH0txk0w1NcDiXov8uvnkTbS_TZT2oWC5jFWD7qBZcnPn8J-s8dPva24VNVIMFM8nuDMHRfL8MNcqLrX1XNb2CJLMQ8EBntCThQrxX-xU6x0Io-_iEfrjtIsx2XFtaEIab4TwlJ6CzfwgIFo-HrNzGR-AnTYaw6MCnmjlFrAm2j8SsgDQn25lYDv6mK6SDdJogjZ9kLzoPNigJ4SRabOlxD7shQguPHpIV9W",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAkch1yi2nGaddcxnz1aqfC-fjtoO892071v77RGiIQecAtZUb05xgO4rmUe2LDQfoz1fbSTxKrxEMBbsFeEXNOrZNl_qk6GJBxCv9nPZkSZe78QZgprlmTus5l4H_0WrhZ36i_ZnvPFtzm9_PBMe5uoYzfUAIZ76rBzzGToj27uuv58ozwrMHLx6cWramN2l2pdEGWSG_uOqPoUezifeVZ0UNhPMa79C_yjGQONhRsGb6dfW7sJujOZUamj2gKLg4rgoDcM-M-U-b6",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBZmmgLaDXVTXoMZUc1MLS2fVgMwG2wBNn0ufE8KRhqo5QAqQmt5mNfuOCE2a5By1bbl61Q2fcyrmvZn3JSkG4FfQGrYTDa2i53fgawHAlkPBunXo_F6a5ibPW_mZu0oMjmMztwVTEtKdwpENeVe0Mohc9x6hKtH6aVITgBNN7MbdO5GTi2gOrHWvElU8QLpYiV0OLGp4CzKzcP9nePfk0EIqAmKkD5Jr_fzTss9jV6S8avqmzCbn6oMEKOhDlcuSSgAECBVAiYv5b7",
];

export default function AIPhotoboothModal({
  isOpen,
  onClose,
}: AIPhotoboothModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs z-[-1]"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-160 h-[90vh] bg-charcoal rounded-[2.5rem] border border-primary/25 shadow-[inset_0_0_20px_rgba(34,181,248,0.03),0_25px_50px_-12px_rgba(0,0,0,0.7)] flex flex-col my-auto overflow-hidden">
        {/* Header */}
        <div className="relative flex items-center justify-between px-8 pt-8 pb-4 shrink-0">
          <button
            onClick={onClose}
            className="flex items-center justify-center size-10 rounded-full hover:bg-white/5 transition-colors text-white/40 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="px-4 py-1.5 rounded-full flex items-center gap-2 bg-linear-to-br from-primary to-primary-dark shadow-[0_0_15px_rgba(34,181,248,0.2)]">
            <span className="text-[11px] text-charcoal font-display font-bold tracking-[0.2em] flex items-center gap-1.5 uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              AI POWERED
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 pt-2 pb-8 flex flex-col h-full overflow-y-auto no-scrollbar">
          {/* Scan Area */}
          <div className="w-full aspect-[16/9] rounded-[24px] flex flex-col items-center justify-center gap-4 group cursor-pointer transition-all duration-500 hover:bg-charcoal/80 mb-6 relative overflow-hidden shrink-0 border border-dashed border-primary/30 bg-[#0a1628] shadow-[inset_0_0_40px_rgba(34,181,248,0.08)]">
            <div className="relative z-10 flex flex-col items-center justify-center">
              <div className="relative">
                <Hand className="w-16 h-16 text-primary/70 group-hover:text-primary transition-colors duration-500 drop-shadow-[0_0_12px_rgba(34,181,248,0.25)]" />
                <div className="absolute -inset-6 border border-primary/10 rounded-full"></div>
              </div>
              <p className="mt-4 text-white/60 font-display font-light text-base tracking-[0.05em] group-hover:text-white transition-colors duration-500">
                Place your hand here to scan
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
          </div>

          {/* Style Selection */}
          <div className="mb-8">
            <h3 className="font-display text-primary text-xs font-bold tracking-[0.25em] mb-5 flex items-center gap-3 opacity-90 uppercase">
              <span className="text-base">✨</span> Select your style
            </h3>
            <div className="grid grid-cols-4 gap-4">
              {styles.map((style) => (
                <div
                  key={style.name}
                  className="flex flex-col gap-2 group cursor-pointer"
                >
                  <div className="aspect-square bg-[#0a1628] rounded-xl border border-white/5 group-hover:border-primary/40 transition-all duration-300 overflow-hidden shadow-xl relative">
                    <Image
                      alt={`${style.name} Style Nail Art`}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      src={style.image}
                      width={150}
                      height={150}
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-charcoal/80 to-transparent opacity-60"></div>
                  </div>
                  <span className="text-center text-[11px] font-display uppercase tracking-wider text-white/50 group-hover:text-primary transition-colors font-bold">
                    {style.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Trending */}
          {/* <div className="mb-8">
            <h4 className="font-display text-primary text-xs font-bold tracking-[0.25em] mb-4 uppercase opacity-90">
              Trending
            </h4>
            <div className="grid grid-cols-4 gap-4">
              {trending.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col gap-2 group cursor-pointer"
                >
                  <div className="aspect-square bg-[#0a1628] rounded-xl border border-white/5 group-hover:border-primary/40 transition-all duration-300 overflow-hidden shadow-xl relative">
                    <Image
                      alt={`${item.name} Nails`}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      src={item.image}
                      width={150}
                      height={150}
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-charcoal/80 to-transparent opacity-60"></div>
                  </div>
                  <span className="text-center text-[11px] font-display uppercase tracking-wider text-white/50 group-hover:text-primary transition-colors font-bold">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div> */}

          {/* Generate Button */}
          <button className="w-full bg-linear-to-br from-primary to-primary-dark py-4 rounded-xl text-charcoal font-display font-bold tracking-[0.15em] uppercase text-sm flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition-transform duration-200 mb-8 shrink-0 shadow-[0_4px_20px_rgba(34,181,248,0.25)] hover:shadow-[0_6px_25px_rgba(34,181,248,0.35)]">
            <Sparkles className="w-4 h-4" />
            GENERATE DESIGN
          </button>

          {/* Results */}
          <div className="mb-2">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-display font-bold text-primary text-xs tracking-[0.25em] uppercase opacity-90">
                Results
              </h4>
              <span className="text-[10px] text-primary/60 uppercase tracking-widest font-bold cursor-pointer hover:text-primary transition-colors font-display">
                View All
              </span>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {results.map((src, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-xl border border-white/10 bg-[#0a1628]/50 flex items-center justify-center hover:border-primary/50 transition-colors cursor-pointer group overflow-hidden relative"
                >
                  <Image
                    alt={`Generated Nail Art ${index + 1}`}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                    src={src}
                    width={150}
                    height={150}
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Gradient Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-primary/30 to-transparent"></div>
      </div>
    </div>
  );
}
