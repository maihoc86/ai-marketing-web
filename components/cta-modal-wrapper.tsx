"use client"

import dynamic from "next/dynamic"

const CtaRegisterModal = dynamic(
  () => import("@/components/cta-register-modal").then((m) => ({ default: m.CtaRegisterModal })),
  { ssr: false },
)

export function CtaModalWrapper() {
  return <CtaRegisterModal />
}
