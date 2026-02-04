"use client";

import { LocaleLink } from "@/components/locale-link";
import { useI18n } from "@/lib/i18n";
import { ArrowRight, PlayCircle, TrendingUp } from "lucide-react";

export function AdsHeroSection() {
  const { t } = useI18n();

  return (
    <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 px-6 overflow-hidden">
      <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full w-fit border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-primary text-xs font-bold uppercase tracking-wide">
              {t("featurePage.ads.hero.badge")}
            </span>
          </div>
          <h1 className="text-[#0d0d1c] dark:text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.03em]">
            {t("featurePage.ads.hero.title")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {t("featurePage.ads.hero.titleHighlight")}
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-lg">
            {t("featurePage.ads.hero.description")}
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <LocaleLink
              href="/register"
              className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-xl text-base font-bold shadow-xl shadow-primary/30 transition-all hover:scale-105"
            >
              {t("featurePage.ads.hero.primaryButton")}
              <ArrowRight className="w-5 h-5" />
            </LocaleLink>
            <button className="flex items-center justify-center gap-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-[#0d0d1c] dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 px-8 py-3.5 rounded-xl text-base font-bold transition-all">
              <PlayCircle className="w-5 h-5 text-primary" />
              {t("featurePage.ads.hero.secondaryButton")}
            </button>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500 mt-4">
            <div className="flex -space-x-2">
              <div
                className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAD1Bu4QsZfgouI87Xn9GOWqt0NbSSri8AyUnZwawM27sYRjogwjTP9GbgkAbwrr9ar2eNOB_dA2Scjkw6XpX42epbTE0OotlVQkX0OBEKjC3gJzdT0v6gI0eenO10ko460P735ZfjI4CSDDJvva8Z-x480kHWug2uPYA7azHQFKEU9Hn8EovaMGz4Jy32Gmc47SxLahGGZbT4tA1L38fhxROPg3TCteO1hdsQSu3fbS1kalRU89zz4o5bRX_jOgAcrbJ7UcQf37A')",
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCA_Orf6GlTW5xfHh1yfcQ6tau-iOd4IuFllVMUkVdt1MJjN7eeUCjzatS7HV8hY5RZqcXpkyOs9CrUibGnb7jij9k72h1HI6cMIEXl_KzXqHGgX1-qcZGIeUHf4FbLlybt3rG6PeCQDPxeUOlr6ftAxrJxrznU1-v1LC9C065GOpmOz4q0WGZzretX5roVehY96rdYupefMAJs5fIrXs3O_-1d8qjaOOtdRgZHKnjeBcPnb5EXZ0RDhB2CN2yDm23rWyPXTY83QA')",
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAamdQTIKdB8LBbYUBkT-xaQujc_LF3H6NO9KgLiXCo88ruvvJ0Xc8rq2WQzouEnZX_C0AaCvRQ0AEM6QXftoDq3U4k_QzqlcdWeKqbV7OGGgT87KUKRF8mG2pOxaQSEiom2qV4Dll6gTyR3EvpRATpTVgtHkweQbm5X9RXqs7Rqtu5UCxGkd4aKC6wkNN1YB3iEBpuOsqHC1kxPM_MiFa-_Nj4_8PJIj3XOuB40qB43LO73Dm_L2vii9UtYTEWdtcX86gqX3EbrQ')",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
            <p>{t("featurePage.ads.hero.trustedBy")}</p>
          </div>
        </div>
        <div className="relative z-10 lg:ml-auto w-full max-w-[600px]">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-3xl opacity-30 -z-10"></div>
          <div className="bg-white dark:bg-[#1a192e] rounded-2xl shadow-2xl border border-gray-100 dark:border-white/5 overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <div className="p-4 border-b border-gray-100 dark:border-white/5 flex items-center gap-2 bg-gray-50/50 dark:bg-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="ml-4 h-6 w-full max-w-[200px] bg-gray-100 dark:bg-white/10 rounded-md"></div>
            </div>
            <div
              className="aspect-[4/3] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBQiK0mYmU6QdMaTCDvHNmpXDvYw1z76zr_3oFq3v6-VlT9lhHEs7emWpPLVTR84kmAC4ePAaaY5wCPK00_gX8X-5QWjS99PrD0go6F7C7Ewj7wQrab7otTH0wEBVu2QXpmxXBEqxfQLIsUTpBqeJYWly7UG67Sh3CoH8k1yguq4IVR4OhAUiSFzBPIs7VPHa6FycYSfwc_-3AP6vCIP0gVahFa2ujuKABl-qICeTk3hqOWzNmt11o4JBUTFyVnkuV2rbmnCOAkDQ')",
              }}
            >
              <div className="w-full h-full bg-gradient-to-t from-white/10 to-transparent"></div>
            </div>
          </div>
          {/* Floating ROAS Card */}
          <div
            className="absolute -bottom-10 -left-10 bg-white dark:bg-[#201e38] p-4 rounded-xl shadow-xl border border-gray-100 dark:border-white/5 w-48 animate-bounce"
            style={{ animationDuration: "3s" }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-gray-500">ROAS</p>
                <p className="text-sm font-bold text-[#0d0d1c] dark:text-white">
                  +324%
                </p>
              </div>
            </div>
            <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
              <div className="w-[75%] h-full bg-green-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
