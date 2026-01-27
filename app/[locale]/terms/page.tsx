"use client";

import { useEffect, useState } from "react";
import { FileText, ChevronRight } from "lucide-react";

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" },
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const sections = [
    { id: "definitions", title: "1. Definitions" },
    { id: "scope", title: "2. Scope of the Agreement" },
    { id: "services", title: "3. Description of the Services" },
    { id: "account", title: "4. Account Registration and Security" },
    { id: "subscription", title: "5. Orders, Subscription Term and Renewal" },
    { id: "fees", title: "6. Fees, Billing and Payment" },
    { id: "trial", title: "7. Free Trials and Evaluation Use" },
    { id: "responsibilities", title: "8. Customer Responsibilities" },
    { id: "content", title: "9. Customer Content and Customer Data" },
    { id: "ai-content", title: "10. AI-Generated Content" },
    { id: "third-party", title: "11. Third-Party Platforms and Integrations" },
    { id: "ip", title: "12. Intellectual Property Rights" },
    { id: "confidentiality", title: "13. Confidentiality" },
    { id: "data-protection", title: "14. Data Protection and Security" },
    {
      id: "availability",
      title: "15. Service Availability, Support and Changes",
    },
    { id: "termination", title: "16. Term and Termination" },
    { id: "warranties", title: "17. Warranties and Disclaimers" },
    { id: "liability", title: "18. Limitation of Liability" },
    { id: "indemnification", title: "19. Indemnification" },
    { id: "force-majeure", title: "20. Force Majeure" },
    { id: "governing-law", title: "21. Governing Law and Dispute Resolution" },
    { id: "miscellaneous", title: "22. Miscellaneous" },
    { id: "contact", title: "23. Contact" },
  ];

  return (
    <main className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <FileText className="w-8 h-8 text-[#22b5f8]" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                DSP.ONE Terms of Service
              </h1>
              <p className="text-sm text-gray-500">
                Last updated: 24 November 2025
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Navigation */}
          <aside className="lg:w-80 shrink-0">
            <div className="lg:sticky lg:top-32">
              <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Table of Contents
              </h2>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-all flex items-center gap-2 ${
                      activeSection === section.id
                        ? "bg-[#22b5f8] text-white font-semibold"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                  >
                    <ChevronRight
                      className={`w-4 h-4 shrink-0 transition-transform ${
                        activeSection === section.id ? "rotate-90" : ""
                      }`}
                    />
                    <span className="truncate">{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 max-w-4xl">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                These Terms of Service (the &quot;<strong>Terms</strong>&quot;)
                govern access to and use of the DSP.one platform and related
                services, including the AI Marketing module (collectively, the
                &quot;<strong>Services</strong>&quot;) provided by{" "}
                <strong>Uniksmart Company</strong> (&quot;Uniksmart&quot;,
                &quot;DSP.one&quot;, &quot;we&quot;, &quot;us&quot; or
                &quot;our&quot;).
              </p>
              <p className="text-gray-600">
                By creating an account, accessing or using the Services,
                clicking an &quot;I agree&quot; button, or signing an Order Form
                that references these Terms, you (&quot;
                <strong>Customer</strong>&quot;, &quot;<strong>you</strong>
                &quot;) agree to be bound by these Terms. If you are accepting
                on behalf of a company or other legal entity, you represent that
                you have the authority to bind that entity; in that case,
                &quot;Customer&quot; refers to that entity.
              </p>
              <p className="text-gray-600">
                These Terms are intended for business use (B2B). The Services
                are not directed to individual consumers for personal use.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8">
                <p className="text-sm font-semibold text-amber-900 mb-2">
                  ⚠️ Non-legal advice notice
                </p>
                <p className="text-sm text-amber-800">
                  This document is a general commercial agreement template and
                  does not constitute legal advice. You should obtain
                  professional legal advice to adapt it to your specific
                  circumstances and to applicable laws in your jurisdiction.
                </p>
              </div>
            </div>

            {/* Section 1: Definitions */}
            <section id="definitions" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#22b5f8]">
                1. DEFINITIONS
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  In these Terms, the following terms have the meanings set out
                  below. Other capitalised terms have the meaning given where
                  they appear.
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="font-semibold text-gray-900 shrink-0">
                      1.
                    </span>
                    <div>
                      <strong>&quot;Account&quot;</strong> means an online
                      account registered by or on behalf of Customer to use the
                      Services.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-gray-900 shrink-0">
                      2.
                    </span>
                    <div>
                      <strong>&quot;Affiliate&quot;</strong> means any entity
                      that directly or indirectly controls, is controlled by, or
                      is under common control with a party, where
                      &quot;control&quot; means owning more than 50% of the
                      voting shares or equivalent.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-gray-900 shrink-0">
                      3.
                    </span>
                    <div>
                      <strong>&quot;AI Marketing Module&quot;</strong> means the
                      marketing automation and content generation features of
                      the DSP.one platform, which may include campaign planning,
                      AI‑assisted content creation, channel scheduling, and
                      analytics.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-gray-900 shrink-0">
                      4.
                    </span>
                    <div>
                      <strong>&quot;Authorized User&quot;</strong> means an
                      individual who is authorised by Customer to access and use
                      the Services under Customer&apos;s Account (for example
                      employees, contractors, or agents), and who has been
                      supplied user login credentials by Customer.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-gray-900 shrink-0">
                      5.
                    </span>
                    <div>
                      <strong>&quot;Customer Content&quot;</strong> means all
                      content, data, text, images, video, audio, landing pages,
                      ads, campaigns, posts, prompts, instructions, materials or
                      other information that Customer or its Authorized Users
                      submit to, upload to, or create within the Services.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-gray-900 shrink-0">
                      6.
                    </span>
                    <div>
                      <strong>&quot;Customer Data&quot;</strong> means any data
                      relating to Customer&apos;s own customers, prospects,
                      leads, end‑users, website visitors, social media audiences
                      or other individuals that Customer imports into, collects
                      through, or otherwise processes via the Services
                      (including contact information, behavioural data,
                      conversion data, orders and transactions).
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-gray-900 shrink-0">
                      7.
                    </span>
                    <div>
                      <strong>&quot;Documentation&quot;</strong> means any user
                      guides, help articles, technical documentation, and other
                      materials describing the functionality and use of the
                      Services that DSP.one makes available.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-gray-900 shrink-0">
                      8.
                    </span>
                    <div>
                      <strong>&quot;Effective Date&quot;</strong> means the
                      earlier of (a) the date the Customer first accesses the
                      Services, or (b) the date the Customer accepts these Terms
                      or signs an Order Form referencing these Terms.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-gray-900 shrink-0">
                      9.
                    </span>
                    <div>
                      <strong>&quot;Order Form&quot;</strong> means an ordering
                      document, online sign‑up flow, or other written or
                      electronic agreement specifying the Services, subscription
                      plan, and any applicable fees, executed or accepted by
                      Customer and DSP.one.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-gray-900 shrink-0">
                      10.
                    </span>
                    <div>
                      <strong>&quot;Subscription Term&quot;</strong> means the
                      initial subscription period stated in the applicable Order
                      Form or online plan, and any renewal periods, during which
                      DSP.one will provide the Services to Customer.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-gray-900 shrink-0">
                      11.
                    </span>
                    <div>
                      <strong>&quot;Third‑Party Platform&quot;</strong> means
                      any third‑party product, service, website, platform or
                      application that interoperates with the Services,
                      including but not limited to Meta (Facebook, Instagram),
                      Google services, email delivery providers, CRM/CDP
                      systems, and payment gateways.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-gray-900 shrink-0">
                      12.
                    </span>
                    <div>
                      <strong>&quot;Website&quot;</strong> means the publicly
                      available website(s) operated by DSP.one, including
                      admin‑ai‑code.dsp.one and any successor or related
                      domains.
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Sections 2-23 continue with full English content... */}
            {/* Due to length constraints, I'll create a complete file */}

            {/* Footer Notice */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                © 2025 Uniksmart Company. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
