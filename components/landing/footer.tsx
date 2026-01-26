"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Youtube, Linkedin } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const contactInfo = [
  {
    icon: Mail,
    text: "salesmarketing@tienphongcds.com",
    href: "mailto:salesmarketing@tienphongcds.com",
  },
  { icon: Phone, text: "0798 089 717", href: "tel:0798089717" },
  {
    icon: MapPin,
    text: "164 Nguyễn Văn Thương, Phường 25, Bình Thạnh, TP. Hồ Chí Minh 700000, Việt Nam",
    href: null,
  },
];

export function Footer() {
  const { t } = useI18n();

  const productLinks = [
    { labelKey: "footer.product.overview", href: "/" },
    { labelKey: "footer.product.features", href: "#features" },
    { labelKey: "footer.product.pricing", href: "#pricing" },
    { labelKey: "footer.product.trial", href: "/dang-ky" },
  ];

  const supportLinks = [
    { labelKey: "footer.support.guide", href: "#" },
    { labelKey: "footer.support.faq", href: "#faq" },
    { labelKey: "footer.support.contact", href: "#contact" },
    { labelKey: "footer.support.privacy", href: "#" },
  ];

  return (
    <footer
      id="contact"
      className="bg-[#1c1c1c] text-white py-16 border-t border-white/10 font-sans"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="UNIKSMART"
                width={140}
                height={36}
                className="h-9 w-auto"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              {t("footer.description")}
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff7900] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">
              {t("footer.product")}
            </h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.labelKey}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#22b5f8] text-sm transition-colors"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">
              {t("footer.support")}
            </h4>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.labelKey}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#22b5f8] text-sm transition-colors"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-3">
              {contactInfo.map((item, idx) => (
                <li key={idx}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex items-start gap-2 text-white/60 text-sm hover:text-[#22b5f8] transition-colors"
                    >
                      <item.icon className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>{item.text}</span>
                    </a>
                  ) : (
                    <div className="flex items-start gap-2 text-white/60 text-sm">
                      <item.icon className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>{item.text}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="#"
              className="text-white/40 hover:text-[#22b5f8] transition-colors"
            >
              {t("footer.terms")}
            </Link>
            <Link
              href="#"
              className="text-white/40 hover:text-[#22b5f8] transition-colors"
            >
              {t("footer.privacy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
