"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Youtube, Linkedin } from "lucide-react"
import { useI18n } from "@/lib/i18n"

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

const contactInfo = [
  { icon: Mail, text: "salesmarketing@tienphongcds.com", href: "mailto:salesmarketing@tienphongcds.com" },
  { icon: Phone, text: "0798 089 717", href: "tel:0798089717" },
  { icon: MapPin, text: "164 Nguyễn Văn Thương, Phường 25, Bình Thạnh, TP. Hồ Chí Minh 700000, Việt Nam", href: null },
]

export function Footer() {
  const { t } = useI18n()

  const productLinks = [
    { labelKey: "footer.product.overview", href: "/" },
    { labelKey: "footer.product.features", href: "#features" },
    { labelKey: "footer.product.pricing", href: "#pricing" },
    { labelKey: "footer.product.trial", href: "/dang-ky" },
  ]

  const supportLinks = [
    { labelKey: "footer.support.guide", href: "#" },
    { labelKey: "footer.support.faq", href: "#faq" },
    { labelKey: "footer.support.contact", href: "#contact" },
    { labelKey: "footer.support.privacy", href: "#" },
  ]

  return (
    <footer id="contact" className="bg-foreground text-background py-16 border-t border-background/10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="https://tienphongcds.com/_next/image?url=https%3A%2F%2Fmedia.newweb.vn%2Ffile%2FdoMFbzZ4q&w=256&q=75"
                alt="Tiên Phong CDS"
                width={140}
                height={36}
                className="h-9 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-background/60 text-sm leading-relaxed mb-4">{t("footer.description")}</p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-blue-500 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-background font-bold mb-4 uppercase text-sm tracking-wider">{t("footer.product")}</h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.labelKey}>
                  <Link href={link.href} className="text-background/60 hover:text-blue-400 text-sm transition-colors">
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-background font-bold mb-4 uppercase text-sm tracking-wider">{t("footer.support")}</h4>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.labelKey}>
                  <Link href={link.href} className="text-background/60 hover:text-blue-400 text-sm transition-colors">
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-background font-bold mb-4 uppercase text-sm tracking-wider">{t("footer.contact")}</h4>
            <ul className="space-y-3">
              {contactInfo.map((item, idx) => (
                <li key={idx}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex items-start gap-2 text-background/60 text-sm hover:text-blue-400 transition-colors"
                    >
                      <item.icon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{item.text}</span>
                    </a>
                  ) : (
                    <div className="flex items-start gap-2 text-background/60 text-sm">
                      <item.icon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{item.text}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm">{t("footer.copyright", { year: new Date().getFullYear() })}</p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-background/40 hover:text-blue-400 transition-colors">
              {t("footer.terms")}
            </Link>
            <Link href="#" className="text-background/40 hover:text-blue-400 transition-colors">
              {t("footer.privacy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
