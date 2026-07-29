import type { Metadata } from "next";
import Link from "next/link";
import { FileText } from "lucide-react";
import { BusinessIdentityCard } from "@/components/legal/business-identity-card";
import {
  LegalCallout,
  LegalContactCard,
  LegalFooterLinks,
  LegalHero,
  LegalList,
  LegalPageShell,
  LegalSection,
  LegalToc,
  type LegalTocItem,
} from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service | DSP.ONE - AI Marketing Platform",
  description:
    "DSP.ONE Terms of Service governing access to and use of the DSP.one platform and related services, including the AI Marketing module.",
  alternates: {
    canonical: "/terms",
    languages: {
      vi: "/dieu-khoan",
      en: "/terms",
    },
  },
};

const CONTACT_LABELS = {
  address: "Address",
  email: "Email",
  phone: "Hotline",
  website: "Website",
} as const;

const TOC_ITEMS: readonly LegalTocItem[] = [
  { id: "definitions", title: "Definitions" },
  { id: "scope", title: "Scope of the Agreement" },
  { id: "description", title: "Description of the Services" },
  { id: "account", title: "Account Registration and Security" },
  { id: "orders", title: "Orders, Subscription Term and Renewal" },
  { id: "fees", title: "Fees, Billing and Payment" },
  { id: "trials", title: "Free Trials and Evaluation Use" },
  { id: "responsibilities", title: "Customer Responsibilities" },
  { id: "customer-data", title: "Customer Content and Customer Data" },
  { id: "ai-content", title: "AI-Generated Content" },
  { id: "third-party", title: "Third-Party Platforms and Integrations" },
  { id: "ip", title: "Intellectual Property Rights" },
  { id: "confidentiality", title: "Confidentiality" },
  { id: "data-protection", title: "Data Protection and Security" },
  { id: "availability", title: "Service Availability, Support and Changes" },
  { id: "termination", title: "Term and Termination" },
  { id: "warranties", title: "Warranties and Disclaimers" },
  { id: "liability", title: "Limitation of Liability" },
  { id: "indemnification", title: "Indemnification" },
  { id: "force-majeure", title: "Force Majeure" },
  { id: "governing-law", title: "Governing Law and Dispute Resolution" },
  { id: "miscellaneous", title: "Miscellaneous" },
  { id: "contact", title: "Contact" },
];

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <LegalHero
        theme="blue"
        icon={<FileText className="w-10 h-10" aria-hidden="true" />}
        title="DSP.ONE Terms of Service"
        subtitle="These Terms govern access to and use of the DSP.one platform and related services, including the AI Marketing module."
        meta="Last updated: 24 November 2025"
        backHref="/"
        backLabel="Back to homepage"
      />

      <LegalPageShell>
        <div className="prose prose-lg max-w-none">
          <BusinessIdentityCard locale="en" />

          <p className="text-gray-600 leading-relaxed mb-6">
            These Terms of Service (the &quot;Terms&quot;) govern access to and
            use of the DSP.one platform and related services, including the AI
            Marketing module (collectively, the &quot;Services&quot;) provided
            by <strong>Tien Phong CDS Joint Stock Company</strong> (&quot;Tien
            Phong CDS&quot;, &quot;DSP.one&quot;, &quot;we&quot;, &quot;us&quot;
            or &quot;our&quot;).
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            By creating an account, accessing or using the Services, clicking an
            &quot;I agree&quot; button, or signing an Order Form that references
            these Terms, you (&quot;Customer&quot;, &quot;you&quot;) agree to be
            bound by these Terms. If you are accepting on behalf of a company or
            other legal entity, you represent that you have the authority to
            bind that entity; in that case, &quot;Customer&quot; refers to that
            entity.
          </p>

          <LegalCallout tone="amber">
            <p className="mb-2">
              <strong>Business use (B2B).</strong> These Terms are intended for
              business use. The Services are not directed to individual
              consumers for personal use.
            </p>
            <p>
              <strong>Non-legal advice notice.</strong> This document is a
              general commercial agreement template and does not constitute
              legal advice. You should obtain professional legal advice to adapt
              it to your specific circumstances and to applicable laws in your
              jurisdiction.
            </p>
          </LegalCallout>

          <LegalToc theme="blue" title="Contents" items={TOC_ITEMS} />

          <LegalSection id="definitions" title="1. Definitions">
            <p>
              In these Terms, the following terms have the meanings set out
              below. Other capitalised terms have the meaning given where they
              appear.
            </p>
            <LegalList
              items={[
                <>
                  <strong>&quot;Account&quot;</strong> means an online account
                  registered by or on behalf of Customer to use the Services.
                </>,
                <>
                  <strong>&quot;Affiliate&quot;</strong> means any entity that
                  directly or indirectly controls, is controlled by, or is under
                  common control with a party, where &quot;control&quot; means
                  owning more than 50% of the voting shares or equivalent.
                </>,
                <>
                  <strong>&quot;AI Marketing Module&quot;</strong> means the
                  marketing automation and content generation features of the
                  DSP.one platform, which may include campaign planning,
                  AI-assisted content creation, channel scheduling, and
                  analytics.
                </>,
                <>
                  <strong>&quot;Authorized User&quot;</strong> means an
                  individual who is authorised by Customer to access and use the
                  Services under Customer&apos;s Account (for example employees,
                  contractors, or agents), and who has been supplied user login
                  credentials by Customer.
                </>,
                <>
                  <strong>&quot;Customer Content&quot;</strong> means all
                  content, data, text, images, video, audio, landing pages, ads,
                  campaigns, posts, prompts, instructions, materials or other
                  information that Customer or its Authorized Users submit to,
                  upload to, or create within the Services.
                </>,
                <>
                  <strong>&quot;Customer Data&quot;</strong> means any data
                  relating to Customer&apos;s own customers, prospects, leads,
                  end-users, website visitors, social media audiences or other
                  individuals that Customer imports into, collects through, or
                  otherwise processes via the Services (including contact
                  information, behavioural data, conversion data, orders and
                  transactions).
                </>,
                <>
                  <strong>&quot;Documentation&quot;</strong> means any user
                  guides, help articles, technical documentation, and other
                  materials describing the functionality and use of the Services
                  that DSP.one makes available.
                </>,
                <>
                  <strong>&quot;Effective Date&quot;</strong> means the earlier
                  of (a) the date the Customer first accesses the Services, or
                  (b) the date the Customer accepts these Terms or signs an
                  Order Form referencing these Terms.
                </>,
                <>
                  <strong>&quot;Order Form&quot;</strong> means an ordering
                  document, online sign-up flow, or other written or electronic
                  agreement specifying the Services, subscription plan, and any
                  applicable fees, executed or accepted by Customer and DSP.one.
                </>,
                <>
                  <strong>&quot;Subscription Term&quot;</strong> means the
                  initial subscription period stated in the applicable Order
                  Form or online plan, and any renewal periods, during which
                  DSP.one will provide the Services to Customer.
                </>,
                <>
                  <strong>&quot;Third-Party Platform&quot;</strong> means any
                  third-party product, service, website, platform or application
                  that interoperates with the Services, including but not
                  limited to Meta (Facebook, Instagram), Google services, email
                  delivery providers, CRM/CDP systems, and payment gateways.
                </>,
                <>
                  <strong>&quot;Website&quot;</strong> means the publicly
                  available website(s) operated by DSP.one, including
                  admin-ai-code.dsp.one and any successor or related domains.
                </>,
              ]}
            />
          </LegalSection>

          <LegalSection id="scope" title="2. Scope of the Agreement">
            <LegalList
              items={[
                "2.1 These Terms constitute a binding agreement between Customer and DSP.one and govern Customer's use of the Services, except where Customer and DSP.one have signed a separate written agreement that expressly supersedes these Terms.",
                "2.2 In the event of any conflict between these Terms and an Order Form, the Order Form will prevail to the extent of the conflict.",
                "2.3 DSP.one may provide certain additional services (such as consulting, training, custom integrations) under a separate statement of work or professional services agreement. Unless otherwise stated, those services are also subject to these Terms.",
              ]}
            />
          </LegalSection>

          <LegalSection id="description" title="3. Description of the Services">
            <p>
              3.1 DSP.one provides a cloud-based multi-channel commerce and
              marketing platform that enables Customer to manage products,
              orders, customers, websites, online sales channels, and marketing
              activities from a unified interface.
            </p>
            <p>3.2 The Services may include, without limitation:</p>
            <LegalList
              variant="disc"
              items={[
                "Product catalogue, order and inventory management;",
                "Customer and contact management (CRM-style features);",
                "Website and landing-page creation and hosting;",
                "AI Marketing Module, including campaign planning, AI-assisted copywriting, recommendation of content, scheduling and automation of posts and ads, and analysis of results;",
                "Integration with Third-Party Platforms such as Meta (Pages, Ads, Instagram), Google (Analytics, Ads), email and messaging tools;",
                "Dashboards, analytics, reporting and metrics; and",
                "APIs and webhooks for programmatic access and integration with other systems.",
              ]}
            />
            <p>
              3.3 DSP.one may update, enhance or modify modules and features
              from time to time (for example, changing user interface elements,
              adding new channels, or deprecating legacy functionalities). Where
              a change materially reduces the core functionality of a paid plan,
              DSP.one will give reasonable prior notice to Customer, when
              practicable.
            </p>
            <p>
              3.4 Certain new features, beta modules or experimental AI
              capabilities may be labelled as &quot;beta&quot;,
              &quot;preview&quot;, &quot;experimental&quot; or similar. Such
              features are provided for evaluation only, may contain bugs or
              errors, may be subject to additional terms or limitations, and may
              be changed or discontinued at any time. DSP.one provides no
              service level or performance commitments for beta features.
            </p>
          </LegalSection>

          <LegalSection id="account" title="4. Account Registration and Security">
            <LegalList
              items={[
                "4.1 To access the Services, Customer must create an Account and provide accurate, current and complete information. Customer must promptly update its Account information to keep it accurate and complete.",
                "4.2 Customer may create separate logins for its Authorized Users up to the number permitted by the applicable subscription plan. Each login is personal to one user and may not be shared with any other individual.",
                "4.3 Customer is responsible for maintaining the confidentiality of all login credentials associated with its Account and for all activities that occur under its Account, whether or not authorised by Customer. Customer must ensure that its Authorized Users keep their passwords secure and do not disclose them to any third party, including DSP.one personnel.",
                "4.4 Customer must promptly notify DSP.one at the contact details provided on the Website if it becomes aware of any unauthorised access to or use of its Account, any compromise of login credentials, or any other security incident related to the Services.",
                "4.5 DSP.one may suspend or disable any login credentials or Account where DSP.one reasonably believes there has been or may be unauthorised access or misuse of the Services, or where required for security or legal reasons. DSP.one will, where practicable, notify Customer in advance or as soon as reasonably possible thereafter.",
              ]}
            />
          </LegalSection>

          <LegalSection
            id="orders"
            title="5. Orders, Subscription Term and Renewal"
          >
            <p>
              5.1 Customer&apos;s subscription to the Services is specified in
              the applicable Order Form or online plan selection. The
              Subscription Term begins on the Effective Date or such other start
              date set out in the Order Form.
            </p>
            <p>
              5.2 Unless otherwise stated in the Order Form, subscriptions:
            </p>
            <LegalList
              variant="disc"
              items={[
                "run for the initial period selected by Customer (for example, monthly, quarterly or annually); and",
                "automatically renew for successive periods of the same length (each a \"Renewal Term\") unless either party gives written notice of non-renewal at least thirty (30) days before the end of the then-current Subscription Term.",
              ]}
            />
            <LegalList
              items={[
                "5.3 Customer may upgrade its subscription plan, add modules or increase usage limits (for example, additional users, channels or volumes) during a Subscription Term by placing a new Order Form or changing plans via the Website. Unless otherwise agreed, any such changes will be charged at the then-current rates and prorated for the remainder of the Subscription Term.",
                "5.4 Downgrades or reductions of plan level may take effect only at the start of the next Renewal Term and may require prior notice as set out on the Website or in the Order Form. Downgrading may result in loss of features, capacity or Customer Content.",
                "5.5 Customer is not entitled to cancel or terminate a Subscription Term for convenience before its expiry except as expressly permitted in these Terms or in the Order Form.",
              ]}
            />
          </LegalSection>

          <LegalSection id="fees" title="6. Fees, Billing and Payment">
            <p>
              6.1 Customer shall pay all fees specified in the Order Form or
              otherwise presented at the time of purchase (&quot;Fees&quot;).
              Fees are based on the Services purchased, not actual usage, unless
              the applicable plan explicitly states that usage-based billing
              applies.
            </p>
            <p>6.2 Unless otherwise specified in the Order Form:</p>
            <LegalList
              variant="disc"
              items={[
                "Fees are quoted and payable in the currency indicated on the Website or Order Form;",
                "Fees are exclusive of any applicable value-added, sales, use, or similar taxes (\"Taxes\"). Customer is responsible for all Taxes associated with its purchases, except for taxes on DSP.one's net income;",
                "Fees for each Subscription Term are billed in advance and are non-refundable, except as expressly provided in these Terms.",
              ]}
            />
            <p>
              6.3 Customer authorises DSP.one or its payment processing provider
              to charge Customer&apos;s designated payment method (such as a
              credit card or bank account) for all Fees due. Customer must
              provide accurate and current billing information and keep this
              information up to date.
            </p>
            <p>
              6.4 If Customer elects to pay by invoice, payment is due within
              the payment term stated on the invoice, or, if none is stated,
              within fourteen (14) calendar days from the invoice date.
            </p>
            <p>
              6.5 If Customer fails to pay any Fees when due, DSP.one may,
              without limiting its other rights and remedies:
            </p>
            <LegalList
              variant="disc"
              items={[
                "charge late interest at the maximum rate permitted by law on the unpaid amounts; and/or",
                "suspend Customer's access to some or all of the Services until all outstanding amounts are paid.",
              ]}
            />
            <p>
              6.6 Customer may not withhold or set off any amounts due under
              these Terms.
            </p>
            <p>
              6.7 All amounts paid are non-refundable and non-cancellable,
              except where these Terms expressly provide a refund right or where
              required by applicable law.
            </p>
          </LegalSection>

          <LegalSection id="trials" title="7. Free Trials and Evaluation Use">
            <LegalList
              items={[
                "7.1 DSP.one may offer Customer access to the Services or certain modules on a free or reduced-charge trial basis (\"Trial\"). DSP.one may determine the duration and scope of any Trial at its sole discretion.",
                "7.2 During a Trial, the Services are provided \"as is\" with no warranties, support, service level commitments or data backup obligations of any kind. DSP.one may terminate a Trial at any time without notice.",
                "7.3 At the end of the Trial, Customer's access to the Trial Services will automatically cease unless Customer purchases a paid subscription. DSP.one may delete or anonymise any Customer Content or Customer Data stored in Trial accounts after a reasonable period, unless Customer converts to a paid plan.",
              ]}
            />
          </LegalSection>

          <LegalSection id="responsibilities" title="8. Customer Responsibilities">
            <p>8.1 Customer is responsible for:</p>
            <LegalList
              variant="disc"
              items={[
                "the configuration and use of the Services;",
                "ensuring that its Authorized Users comply with these Terms and with all applicable laws and regulations;",
                "the accuracy, quality and legality of Customer Content and Customer Data;",
                "obtaining all rights, permissions and consents necessary to collect, store and process Customer Data and to use the Services (including any consents required under data protection, privacy, electronic communications and marketing laws);",
                "compliance with the terms and policies of any Third-Party Platforms with which Customer uses the Services (for example, Meta, Google, email providers, messaging platforms).",
              ]}
            />
            <p>8.2 Customer must not:</p>
            <LegalList
              variant="disc"
              items={[
                "use the Services in any way that is unlawful, harmful, defamatory, infringing, invasive of privacy, offensive or otherwise objectionable;",
                "attempt to gain unauthorised access to the Services, accounts, systems or networks of DSP.one or any third party;",
                "interfere with or disrupt the integrity or performance of the Services or underlying infrastructure;",
                "reverse engineer, decompile, disassemble or attempt to derive source code or underlying ideas from the Services, except to the extent that such restriction is prohibited by law;",
                "use the Services to send unsolicited bulk communications (spam) or to conduct abusive or deceptive advertising practices; or",
                "use the Services in any manner that would cause DSP.one to violate applicable laws or third-party rights.",
              ]}
            />
            <p>
              8.3 If DSP.one reasonably believes that Customer&apos;s use of the
              Services (a) violates these Terms, (b) poses a security risk, (c)
              could subject DSP.one or any third party to liability, or (d) is
              fraudulent or abusive, DSP.one may suspend or restrict
              Customer&apos;s access to the Services, in whole or in part.
              DSP.one will, where practicable, provide prior notice and an
              opportunity to cure.
            </p>
          </LegalSection>

          <LegalSection
            id="customer-data"
            title="9. Customer Content and Customer Data"
          >
            <p>
              9.1 As between the parties, Customer retains all rights, title and
              interest in and to Customer Content and Customer Data, subject to
              the limited rights granted to DSP.one in this Section.
            </p>
            <p>
              9.2 Customer grants DSP.one and its Affiliates a worldwide,
              non-exclusive, royalty-free licence, for the duration of the
              Subscription Term, to host, store, copy, use, transmit, display,
              perform and modify Customer Content and Customer Data solely to:
            </p>
            <LegalList
              variant="disc"
              items={[
                "provide, maintain, secure and improve the Services;",
                "fulfil DSP.one's obligations under these Terms and any Order Forms;",
                "prevent or address service, security or technical issues; and",
                "as otherwise instructed by Customer in writing.",
              ]}
            />
            <LegalList
              items={[
                "9.3 Customer represents and warrants that it has obtained and will maintain all permissions, consents and rights necessary for DSP.one to process Customer Content and Customer Data under these Terms, and that such processing will not violate any applicable law or third-party rights.",
                "9.4 DSP.one does not monitor Customer Content or Customer Data for legal compliance, and is not responsible for Customer Content or Customer Data. Customer is solely responsible for backing up and exporting its Customer Content and Customer Data.",
                "9.5 DSP.one may generate aggregated, de-identified statistics, metrics or insights derived from Customer's use of the Services (\"Aggregate Data\"). Aggregate Data will not identify Customer or any individual. DSP.one may use Aggregate Data for its legitimate business purposes, including analytics, Service improvement, and marketing, provided that such use complies with applicable law.",
              ]}
            />
          </LegalSection>

          <LegalSection id="ai-content" title="10. AI-Generated Content">
            <LegalList
              items={[
                "10.1 The AI Marketing Module may generate content or suggestions (such as ad copy, headlines, post captions, campaign ideas) based on prompts, instructions or Customer Content supplied by Customer (\"AI Output\").",
                "10.2 As between the parties, and to the extent permitted by law, DSP.one assigns to Customer any rights DSP.one may have in AI Output generated specifically for Customer's campaigns. Customer is solely responsible for reviewing, verifying and approving all AI Output before using it in production, and for ensuring that AI Output complies with applicable laws, platform policies, advertising standards and internal guidelines.",
                "10.3 AI Output may be inaccurate, incomplete, biased or unsuitable for Customer's purposes. DSP.one does not guarantee that AI Output will be free from errors, infringement or legal risk. Customer should not rely on AI Output as a substitute for professional advice.",
                "10.4 Customer must not prompt the AI Marketing Module with personal data or other sensitive information unless it has a lawful basis and has implemented appropriate safeguards.",
              ]}
            />
          </LegalSection>

          <LegalSection
            id="third-party"
            title="11. Third-Party Platforms and Integrations"
          >
            <LegalList
              items={[
                "11.1 The Services may enable Customer to integrate with and publish, sync or exchange data with Third-Party Platforms, such as Meta (Facebook/Instagram Pages and Ads), Google Analytics or Ads, email services, messaging platforms and CRM/CDP tools.",
                "11.2 Customer's use of any Third-Party Platform is governed solely by the terms and policies of that third party. DSP.one does not control and is not responsible for Third-Party Platforms. DSP.one does not endorse and has no liability for Third-Party Platforms, their content, or how they use Customer Data.",
                "11.3 Customer is responsible for configuring integrations and managing permissions and access tokens. Customer authorises DSP.one to access, retrieve and process data from Third-Party Platforms on Customer's behalf, and to send data to such platforms, as necessary to provide the Services.",
                "11.4 DSP.one may suspend or terminate integrations with any Third-Party Platform if the third party ceases to make the integration available, if maintaining the integration would impose significant cost or risk, or if required by law or by the third party's terms.",
                "11.5 Customer acknowledges that use of the Services with certain Third-Party Platforms (for example Meta) may require DSP.one to obtain and maintain approval for specific permissions (such as access to lists of pages managed by the user). DSP.one will use such permissions only to provide the Services and will abide by the relevant platform policies.",
              ]}
            />
          </LegalSection>

          <LegalSection id="ip" title="12. Intellectual Property Rights">
            <LegalList
              items={[
                "12.1 Except for the limited rights expressly granted to Customer in these Terms, DSP.one and its licensors retain all rights, title and interest in and to the Services, Documentation, Website, underlying software, algorithms, AI models, user interface designs, trademarks, logos and all related intellectual property rights.",
                "12.2 Subject to Customer's compliance with these Terms and payment of all applicable Fees, DSP.one grants Customer a limited, non-exclusive, non-transferable, non-sublicensable licence, during the Subscription Term, to access and use the Services for Customer's internal business purposes and in accordance with these Terms and the Documentation.",
                "12.3 Customer must not remove, obscure or alter any proprietary notices displayed in the Services or Documentation, or claim any ownership interest in the Services.",
                "12.4 If Customer provides feedback, comments, suggestions or ideas regarding the Services (\"Feedback\"), Customer grants DSP.one a perpetual, irrevocable, worldwide, royalty-free licence to use, copy, modify, distribute and otherwise exploit such Feedback for any purpose, without restriction or obligation to Customer.",
              ]}
            />
          </LegalSection>

          <LegalSection id="confidentiality" title="13. Confidentiality">
            <p>
              <strong>13.1 Confidential Information.</strong> Each party
              (&quot;Receiving Party&quot;) may receive confidential or
              proprietary information from the other party (&quot;Disclosing
              Party&quot;) in connection with these Terms and the Services,
              including but not limited to business plans, financial
              information, technical data, product designs, security information
              and Customer Data (&quot;Confidential Information&quot;).
            </p>
            <p>
              <strong>13.2 Obligations.</strong> The Receiving Party will:
            </p>
            <LegalList
              variant="disc"
              items={[
                "use Confidential Information solely for the purposes of performing its obligations or exercising its rights under these Terms;",
                "protect the Confidential Information with at least the same degree of care it uses to protect its own similar information, and in no event less than reasonable care; and",
                "not disclose Confidential Information to any third party except to its Affiliates, employees, contractors and professional advisers who need to know it and who are bound by obligations of confidentiality at least as protective as those in these Terms.",
              ]}
            />
            <p>
              <strong>13.3 Exclusions.</strong> Confidential Information does not
              include information that:
            </p>
            <LegalList
              variant="disc"
              items={[
                "is or becomes publicly available through no breach of these Terms by the Receiving Party;",
                "was lawfully known to the Receiving Party before disclosure by the Disclosing Party;",
                "is received from a third party without breach of any duty of confidentiality; or",
                "is independently developed by the Receiving Party without use of or reference to the Disclosing Party's Confidential Information.",
              ]}
            />
            <p>
              <strong>13.4 Required disclosure.</strong> The Receiving Party may
              disclose Confidential Information to the extent required by law or
              by a competent authority, provided that, where legally permitted,
              it gives the Disclosing Party reasonable prior notice and
              cooperates with any efforts to limit or challenge the disclosure.
            </p>
            <p>
              13.5 The obligations in this Section survive termination of these
              Terms for so long as the information remains confidential.
            </p>
          </LegalSection>

          <LegalSection id="data-protection" title="14. Data Protection and Security">
            <LegalList
              items={[
                "14.1 Each party shall comply with applicable data protection and privacy laws in relation to its processing of personal data under these Terms.",
                <>
                  14.2 Details about how DSP.one collects, uses and protects
                  personal data are set out in DSP.one&apos;s{" "}
                  <Link
                    href="/privacy"
                    className="text-blue-600 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  , as amended from time to time and available on the Website.
                  By using the Services, Customer acknowledges the Privacy
                  Policy. In the event of a conflict between these Terms and the
                  Privacy Policy regarding data processing by DSP.one as a
                  processor on behalf of Customer, any applicable data
                  processing agreement between the parties will prevail.
                </>,
                "14.3 DSP.one implements reasonable technical and organisational security measures designed to protect Customer Data against accidental or unlawful destruction, loss, alteration, unauthorised disclosure or access. However, no system is completely secure, and DSP.one cannot guarantee absolute security.",
                "14.4 If DSP.one becomes aware of a personal data breach affecting Customer Data, DSP.one will notify Customer without undue delay and will provide information and cooperation reasonably requested by Customer, to the extent required under applicable law.",
              ]}
            />
          </LegalSection>

          <LegalSection
            id="availability"
            title="15. Service Availability, Support and Changes"
          >
            <LegalList
              items={[
                "15.1 DSP.one will use commercially reasonable efforts to make the core components of the Services available in accordance with any service level targets published on the Website or agreed in writing. The Services may be temporarily unavailable due to planned maintenance or unscheduled emergency maintenance, either by DSP.one or by third-party providers.",
                "15.2 DSP.one provides standard technical support for the Services through channels described on the Website (for example, email or ticketing system) during normal business hours in DSP.one's main operating time zone, unless otherwise agreed in writing.",
                "15.3 DSP.one may modify the Services, Documentation or Website from time to time to improve functionality, add features, ensure security, or comply with applicable law or platform requirements. If a modification materially reduces the core functionality of a paid Service, DSP.one will provide reasonable advance notice where practicable and, if Customer does not agree to the modification, Customer may terminate the affected Service as of the date the modification takes effect.",
              ]}
            />
          </LegalSection>

          <LegalSection id="termination" title="16. Term and Termination">
            <p>
              16.1 These Terms commence on the Effective Date and continue for
              as long as Customer has an active Subscription Term, unless
              terminated earlier in accordance with this Section.
            </p>
            <p>
              16.2 Either party may terminate these Terms and all related
              subscriptions for cause by giving written notice to the other
              party if:
            </p>
            <LegalList
              variant="disc"
              items={[
                "the other party materially breaches these Terms and fails to cure the breach within thirty (30) days after receiving written notice describing the breach; or",
                "the other party becomes insolvent, enters into bankruptcy, liquidation or similar proceedings, or ceases to conduct business in the ordinary course.",
              ]}
            />
            <p>
              16.3 DSP.one may terminate these Terms and Customer&apos;s
              subscriptions immediately upon written notice if:
            </p>
            <LegalList
              variant="disc"
              items={[
                "Customer fails to pay undisputed Fees within thirty (30) days after receiving a written reminder; or",
                "DSP.one reasonably determines that Customer's continued use of the Services would cause significant legal or security risk.",
              ]}
            />
            <p>
              16.4 Customer may terminate these Terms for convenience by giving
              written notice of non-renewal in accordance with Section 5.2,
              effective at the end of the then-current Subscription Term.
            </p>
            <p>
              16.5 Upon termination or expiry of these Terms or any Subscription
              Term:
            </p>
            <LegalList
              variant="disc"
              items={[
                "Customer's right to access and use the terminated Services will cease; and",
                "Customer will promptly pay any outstanding Fees accrued up to the effective date of termination.",
              ]}
            />
            <p>
              16.6 For a limited period after termination (for example thirty
              (30) days), DSP.one may allow Customer to export or download
              certain Customer Content or Customer Data, as described in the
              Documentation. After such period, DSP.one may delete or anonymise
              Customer Content and Customer Data from its active systems,
              subject to any retention obligations under law.
            </p>
            <p>
              16.7 Sections that by their nature should survive termination
              (including but not limited to payment obligations, intellectual
              property, confidentiality, data protection, limitations of
              liability, indemnities and governing law) shall survive
              termination of these Terms.
            </p>
          </LegalSection>

          <LegalSection id="warranties" title="17. Warranties and Disclaimers">
            <LegalList
              items={[
                "17.1 DSP.one warrants that, during the applicable Subscription Term, the Services will operate in all material respects in accordance with the Documentation, when used in accordance with these Terms.",
                "17.2 Customer's exclusive remedy and DSP.one's entire liability for any breach of the warranty in Section 17.1 will be, at DSP.one's option and cost, either: (a) to repair or modify the Services so that they conform to the warranty; or (b) if DSP.one is unable to achieve such conformity within a reasonable time, to permit Customer to terminate the affected Service and receive a prorated refund of prepaid Fees for the remainder of the Subscription Term for the affected Service.",
                "17.3 Except as expressly provided in these Terms, the Services and all related materials are provided \"as is\" and \"as available\" without any warranties of any kind, whether express, implied, statutory or otherwise. DSP.one specifically disclaims any implied warranties of merchantability, fitness for a particular purpose, non-infringement, and any warranties arising out of course of dealing or usage of trade.",
                "17.4 DSP.one does not warrant that the Services will be uninterrupted, error-free, completely secure, or free of harmful components, or that all defects will be corrected.",
              ]}
            />
            <p>17.5 Customer acknowledges that:</p>
            <LegalList
              variant="disc"
              items={[
                "data transmission over the internet and Third-Party Platforms involves inherent risks;",
                "AI-generated content may be inaccurate, incomplete or inappropriate; and",
                "Customer is solely responsible for verifying the accuracy and legality of any outputs before relying on them.",
              ]}
            />
          </LegalSection>

          <LegalSection id="liability" title="18. Limitation of Liability">
            <LegalList
              items={[
                "18.1 To the maximum extent permitted by applicable law, neither party will be liable for any indirect, incidental, special, consequential, exemplary or punitive damages, or for any loss of profits, revenue, goodwill, data or business opportunities, arising out of or in connection with these Terms or the use of or inability to use the Services, even if advised of the possibility of such damages.",
                "18.2 To the maximum extent permitted by applicable law, each party's aggregate total liability arising out of or in connection with these Terms, whether in contract, tort (including negligence), strict liability or otherwise, shall not exceed the total Fees actually paid by Customer to DSP.one for the Services giving rise to the claim during the twelve (12) months immediately preceding the event giving rise to the claim.",
                "18.3 The limitations in this Section 18 do not apply to (a) Customer's payment obligations; (b) either party's liability for death or personal injury caused by its negligence; (c) either party's liability for fraud or wilful misconduct; or (d) any other liability that cannot be excluded or limited by applicable law.",
              ]}
            />
          </LegalSection>

          <LegalSection id="indemnification" title="19. Indemnification">
            <p>
              <strong>19.1 Customer indemnity.</strong> Customer shall
              indemnify, defend and hold harmless DSP.one and its Affiliates,
              and their respective directors, officers, employees and agents,
              from and against any claims, damages, losses, liabilities, costs
              and expenses (including reasonable legal fees) arising out of or
              relating to:
            </p>
            <LegalList
              variant="disc"
              items={[
                "Customer Content or Customer Data, including any allegation that such content or data infringes, misappropriates or violates any intellectual property right, privacy right or other right of any person, or violates applicable law;",
                "Customer's use of the Services in violation of these Terms, platform policies or applicable law; or",
                "any communications, campaigns, advertisements or other materials created or distributed by Customer using the Services.",
              ]}
            />
            <p>
              <strong>19.2 DSP.one indemnity for IP infringement.</strong>{" "}
              DSP.one shall defend Customer against any third-party claim
              alleging that Customer&apos;s authorised use of the Services
              infringe any intellectual property right of that third party, and
              shall indemnify Customer for reasonable damages and costs finally
              awarded by a court of competent jurisdiction or agreed in
              settlement, provided that Customer:
            </p>
            <LegalList
              variant="disc"
              items={[
                "promptly notifies DSP.one in writing of the claim;",
                "gives DSP.one sole control of the defence and settlement of the claim; and",
                "provides all reasonable cooperation and assistance at DSP.one's expense.",
              ]}
            />
            <p>
              19.3 If a claim of infringement described in Section 19.2 occurs
              or in DSP.one&apos;s reasonable opinion is likely to occur,
              DSP.one may at its option and expense:
            </p>
            <LegalList
              variant="disc"
              items={[
                "procure for Customer the right to continue using the Services; or",
                "modify or replace the Services so that they become non-infringing while substantially preserving their functionality; or",
                "if the above options are not reasonably available, terminate the affected Service and refund to Customer any prepaid Fees for the unused portion of the Subscription Term for that Service.",
              ]}
            />
            <p>
              19.4 DSP.one will have no liability under Section 19.2 for any
              claim to the extent it arises from:
            </p>
            <LegalList
              variant="disc"
              items={[
                "Customer Content or Customer Data;",
                "use of the Services in combination with hardware, software, data or processes not provided by DSP.one, where the claim would not have arisen but for such combination;",
                "modifications to the Services made by anyone other than DSP.one; or",
                "use of the Services in breach of these Terms or the Documentation.",
              ]}
            />
          </LegalSection>

          <LegalSection id="force-majeure" title="20. Force Majeure">
            <p>
              Neither party will be liable for any failure or delay in
              performing its obligations (other than payment obligations) to the
              extent caused by events beyond its reasonable control, including
              but not limited to natural disasters, wars, acts of terrorism,
              civil disturbances, strikes, labour disputes, failure of public
              utilities or telecommunications networks, acts of government or
              regulatory bodies, or other events of a similar nature
              (&quot;Force Majeure Events&quot;). The affected party shall
              promptly notify the other party and use commercially reasonable
              efforts to mitigate the impact of the Force Majeure Event.
            </p>
          </LegalSection>

          <LegalSection
            id="governing-law"
            title="21. Governing Law and Dispute Resolution"
          >
            <LegalList
              items={[
                <>
                  21.1 These Terms and any dispute, claim or controversy arising
                  out of or relating to them or to the Services shall be
                  governed by and construed in accordance with the laws of the{" "}
                  <strong>Socialist Republic of Viet Nam</strong>, without
                  regard to its conflict of laws principles.
                </>,
                <>
                  21.2 The parties shall first attempt to resolve any dispute
                  amicably through good-faith negotiations. If the parties are
                  unable to resolve the dispute within thirty (30) days, either
                  party may submit the dispute to the competent courts located
                  in <strong>Ho Chi Minh City, Viet Nam</strong>, which shall
                  have exclusive jurisdiction, without prejudice to any
                  mandatory rights under applicable law.
                </>,
              ]}
            />
          </LegalSection>

          <LegalSection id="miscellaneous" title="22. Miscellaneous">
            <LegalList
              items={[
                <>
                  <strong>22.1 Entire agreement.</strong> These Terms, together
                  with any applicable Order Forms, data processing agreement,
                  and policies referenced in these Terms, constitute the entire
                  agreement between the parties regarding the subject matter
                  hereof and supersede all prior or contemporaneous agreements,
                  proposals or representations, whether written or oral.
                </>,
                <>
                  <strong>22.2 Amendments.</strong> DSP.one may update these
                  Terms from time to time. When DSP.one makes material changes,
                  it will post the updated Terms on the Website and may notify
                  Customer by email or in-app notice. The updated Terms will
                  take effect from the start of the next Renewal Term or earlier
                  if Customer accepts them (for example by clicking to accept or
                  by continuing to use the Services after notice). If Customer
                  does not agree to the updated Terms, Customer may terminate
                  its subscriptions as of the effective date of the changes by
                  giving written notice before that date.
                </>,
                <>
                  <strong>22.3 Assignment.</strong> Customer may not assign,
                  transfer or delegate any of its rights or obligations under
                  these Terms without DSP.one&apos;s prior written consent,
                  except to an Affiliate or in connection with a merger,
                  acquisition or sale of all or substantially all of
                  Customer&apos;s assets, provided that the assignee agrees in
                  writing to be bound by these Terms. DSP.one may assign or
                  transfer these Terms without Customer&apos;s consent to an
                  Affiliate or in connection with a corporate transaction.
                </>,
                <>
                  <strong>22.4 Independent contractors.</strong> The parties are
                  independent contractors, and nothing in these Terms creates a
                  partnership, joint venture, agency or employment relationship
                  between the parties.
                </>,
                <>
                  <strong>22.5 Severability.</strong> If any provision of these
                  Terms is held to be invalid or unenforceable, the remaining
                  provisions will remain in full force and effect, and the
                  invalid or unenforceable provision will be deemed modified to
                  the minimum extent necessary to make it valid and enforceable.
                </>,
                <>
                  <strong>22.6 No waiver.</strong> The failure of either party
                  to enforce any right or provision of these Terms will not
                  constitute a waiver of such right or provision.
                </>,
                <>
                  <strong>22.7 Notices.</strong> All notices under these Terms
                  shall be in writing and will be deemed given when delivered
                  personally, sent by reputable courier, or sent by email to the
                  contact details specified in the Order Form or on the Website.
                  Customer is responsible for keeping its contact information up
                  to date.
                </>,
                <>
                  <strong>22.8 Language.</strong> These Terms are drafted in
                  English. If they are translated into another language, the
                  English version shall prevail in case of any conflict.
                </>,
              ]}
            />
          </LegalSection>

          <LegalSection id="contact" title="23. Contact">
            <p>
              If you have any questions about these Terms or the Services,
              please contact DSP.one at:
            </p>
            <LegalContactCard
              company="TIEN PHONG CDS JOINT STOCK COMPANY"
              address="Floor 01, 232 Le Van Luong Street, Tan Hung Ward, District 7, Ho Chi Minh City, Viet Nam"
              email="mailhoc348@gmail.com"
              website="https://tienphongcds.com"
              labels={CONTACT_LABELS}
            />
          </LegalSection>
        </div>
      </LegalPageShell>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
        <LegalFooterLinks
          theme="blue"
          links={[
            { href: "/privacy", label: "Read the Privacy Policy" },
            { href: "/dieu-khoan", label: "Xem bản tiếng Việt" },
            { href: "/dang-ky", label: "Start free trial", primary: true },
          ]}
        />
      </div>
    </main>
  );
}
