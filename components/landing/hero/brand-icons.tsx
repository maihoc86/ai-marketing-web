"use client"

import { memo } from "react"
import {
  SiOpenai,
  SiGooglegemini,
  SiAnthropic,
  SiMeta,
  SiMailchimp,
  SiHubspot,
  SiCanva,
  SiFigma,
  SiNotion,
  SiZapier,
  SiFacebook,
  SiInstagram,
} from "react-icons/si"

interface BrandIcon {
  name: string
  Icon: React.ComponentType<{ style?: React.CSSProperties; className?: string }>
  color: string
  top: string
  left: string
  size: number
  opacity: number
  duration: number
  delay: number
  hideOnMobile?: boolean
  hideOnTablet?: boolean
}

export const brandIcons: BrandIcon[] = [
  {
    name: "OpenAI",
    Icon: SiOpenai,
    color: "#10A37F",
    top: "62%",
    left: "3%",
    size: 24,
    opacity: 0.85,
    duration: 6,
    delay: 0,
  },
  {
    name: "Gemini",
    Icon: SiGooglegemini,
    color: "#8E75B2",
    top: "70%",
    left: "10%",
    size: 22,
    opacity: 0.8,
    duration: 6.5,
    delay: 0.3,
  },
  {
    name: "Claude",
    Icon: SiAnthropic,
    color: "#D97706",
    top: "56%",
    left: "8%",
    size: 20,
    opacity: 0.75,
    duration: 5.5,
    delay: 0.5,
  },
  {
    name: "Meta",
    Icon: SiMeta,
    color: "#0668E1",
    top: "78%",
    left: "5%",
    size: 20,
    opacity: 0.7,
    duration: 7,
    delay: 0.8,
  },
  {
    name: "Mailchimp",
    Icon: SiMailchimp,
    color: "#FFE01B",
    top: "64%",
    left: "90%",
    size: 22,
    opacity: 0.8,
    duration: 6,
    delay: 0.2,
  },
  {
    name: "HubSpot",
    Icon: SiHubspot,
    color: "#FF7A59",
    top: "72%",
    left: "94%",
    size: 20,
    opacity: 0.75,
    duration: 7,
    delay: 0.6,
  },
  {
    name: "Canva",
    Icon: SiCanva,
    color: "#00C4CC",
    top: "58%",
    left: "92%",
    size: 20,
    opacity: 0.7,
    duration: 5.5,
    delay: 0.9,
  },
  {
    name: "Zapier",
    Icon: SiZapier,
    color: "#FF4A00",
    top: "80%",
    left: "88%",
    size: 18,
    opacity: 0.65,
    duration: 8,
    delay: 1.2,
  },
  {
    name: "Notion",
    Icon: SiNotion,
    color: "#000000",
    top: "18%",
    left: "4%",
    size: 18,
    opacity: 0.5,
    duration: 7,
    delay: 1,
    hideOnMobile: true,
  },
  {
    name: "Figma",
    Icon: SiFigma,
    color: "#F24E1E",
    top: "15%",
    left: "93%",
    size: 18,
    opacity: 0.5,
    duration: 6.5,
    delay: 1.5,
    hideOnMobile: true,
  },
  {
    name: "Facebook",
    Icon: SiFacebook,
    color: "#1877F2",
    top: "45%",
    left: "2%",
    size: 16,
    opacity: 0.4,
    duration: 8,
    delay: 2,
    hideOnTablet: true,
  },
  {
    name: "Instagram",
    Icon: SiInstagram,
    color: "#E4405F",
    top: "42%",
    left: "96%",
    size: 16,
    opacity: 0.4,
    duration: 7.5,
    delay: 2.3,
    hideOnTablet: true,
  },
]

const BrandIconItem = memo(({ brand }: { brand: BrandIcon }) => (
  <div
    className={`absolute ${brand.hideOnMobile ? "hidden md:block" : ""} ${brand.hideOnTablet ? "hidden lg:block" : ""}`}
    style={{
      top: brand.top,
      left: brand.left,
      opacity: brand.opacity,
      animation: `floatBrand ${brand.duration}s ease-in-out infinite`,
      animationDelay: `${brand.delay}s`,
    }}
    aria-hidden="true"
    role="presentation"
  >
    <div
      className="p-2.5 rounded-xl bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg hover:scale-110 transition-transform duration-300"
      style={{
        boxShadow: `0 4px 16px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.5)`,
      }}
    >
      <brand.Icon
        aria-hidden="true"
        style={{
          width: brand.size,
          height: brand.size,
          color: brand.color,
          filter: `drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))`,
        }}
      />
    </div>
  </div>
))

BrandIconItem.displayName = "BrandIconItem"

export function BrandIcons() {
  return (
    <>
      {/* Background effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute rounded-full"
          style={{
            width: "500px",
            height: "500px",
            background: "rgba(37, 99, 235, 0.25)",
            top: "-10%",
            left: "-5%",
            filter: "blur(100px)",
            animation: "floatSlow 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "400px",
            height: "400px",
            background: "rgba(59, 130, 246, 0.2)",
            top: "0%",
            left: "70%",
            filter: "blur(80px)",
            animation: "floatSlowReverse 10s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "600px",
            height: "600px",
            background: "rgba(96, 165, 250, 0.15)",
            top: "60%",
            left: "10%",
            filter: "blur(120px)",
            animation: "floatMedium 12s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "450px",
            height: "450px",
            background: "rgba(29, 78, 216, 0.12)",
            top: "70%",
            left: "80%",
            filter: "blur(90px)",
            animation: "floatSlow 8s ease-in-out infinite",
          }}
        />
      </div>

      {/* Brand icons */}
      <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
        {brandIcons.map((brand) => (
          <BrandIconItem key={brand.name} brand={brand} />
        ))}
      </div>

      {/* Dot pattern */}
      <div className="absolute inset-0 z-2">
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `radial-gradient(circle, #94a3b8 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <style jsx>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes floatSlowReverse {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
        }
        @keyframes floatMedium {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-25px) translateX(-10px); }
        }
        @keyframes floatBrand {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </>
  )
}
