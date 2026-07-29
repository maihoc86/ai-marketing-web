import type { Metadata } from "next";
import Link from "next/link";
import { Shield } from "lucide-react";
import { BusinessIdentityCard } from "@/components/legal/business-identity-card";
import {
  LegalCallout,
  LegalContactCard,
  LegalFooterLinks,
  LegalHero,
  LegalList,
  LegalPageShell,
  LegalSection,
  LegalSubheading,
  LegalToc,
  type LegalTocItem,
} from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy | DSP.ONE - AI Marketing Platform",
  description:
    "DSP.ONE Master Privacy Policy explaining how Tien Phong CDS collects, uses, discloses, stores and protects information across the DSP.one ecosystem.",
  alternates: {
    canonical: "/privacy",
    languages: {
      vi: "/chinh-sach-bao-mat",
      en: "/privacy",
    },
  },
};

const CONTACT_LABELS = {
  address: "Address",
  email: "Email",
  phone: "Hotline",
  website: "Web form",
} as const;

const TOC_ITEMS: readonly LegalTocItem[] = [
  { id: "who", title: "Who This Policy Applies To" },
  { id: "controller", title: "Controller, Processor and Contact Details" },
  { id: "definitions", title: "Key Definitions" },
  { id: "categories", title: "Categories of Data We Collect" },
  { id: "modules", title: "Data Practices by Module" },
  { id: "integrations", title: "AI Marketing and Meta / Google Integrations" },
  { id: "purposes", title: "Purposes and Legal Bases for Processing" },
  { id: "sharing", title: "Data Sharing and Disclosure" },
  { id: "transfers", title: "International Data Transfers" },
  { id: "retention", title: "Data Retention" },
  { id: "security", title: "Security Measures" },
  { id: "cookies", title: "Cookies, Pixels and Similar Technologies" },
  { id: "rights", title: "Your Rights and Controls" },
  { id: "children", title: "Children's Data" },
  { id: "changes", title: "Changes to This Policy" },
  { id: "contact", title: "Contact Us" },
];

export default function PrivacyPolicyEnPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <LegalHero
        theme="emerald"
        icon={<Shield className="w-10 h-10" aria-hidden="true" />}
        title="DSP.ONE Master Privacy Policy"
        subtitle="How we collect, use, disclose, store and protect information across the DSP.one ecosystem."
        meta="Effective date: 24 March 2025 · Last updated: 24 November 2025"
        backHref="/"
        backLabel="Back to homepage"
      />

      <LegalPageShell>
        <div className="prose prose-lg max-w-none">
          <BusinessIdentityCard locale="en" />

          <p className="text-gray-600 leading-relaxed mb-6">
            This Master Privacy Policy (the &quot;Policy&quot;) explains how{" "}
            <strong>TIEN PHONG CDS JOINT STOCK COMPANY</strong> (&quot;Tien
            Phong CDS&quot;, &quot;DSP.one&quot;, &quot;we&quot;,
            &quot;us&quot; or &quot;our&quot;) collects, uses, discloses, stores
            and protects information when you use our digital products and
            services.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our ecosystem includes the DSP.one omnichannel sales platform,
            distribution / field-force solutions, corporate management modules
            (HRM, CRM, Accounting), the AI Marketing &amp; CDP stack, mobile
            applications (including SDO Agent App), public websites and APIs
            (collectively, the &quot;Services&quot;). By accessing or using the
            Services, you acknowledge that you have read and understood this
            Policy.
          </p>

          <LegalCallout tone="blue">
            <strong>Important:</strong> This Policy is designed for B2B
            customers and describes DSP.one&apos;s role as both data controller
            (for merchant account data and platform operations) and data
            processor (for end-user data processed on behalf of merchants). You,
            as a Merchant, remain primarily responsible for your own privacy
            notices and compliance obligations towards your end-users.
          </LegalCallout>

          <LegalToc theme="emerald" title="Contents" items={TOC_ITEMS} />

          <LegalSection id="who" title="1. Who This Policy Applies To">
            <p>
              This Policy applies globally to the following categories of
              individuals:
            </p>
            <LegalList
              variant="disc"
              items={[
                <>
                  <strong>Merchants / Tenants</strong> – Business customers
                  (companies, organisations, sole proprietors) that subscribe to
                  and use DSP.one.
                </>,
                <>
                  <strong>Authorised Users</strong> – Individuals authorised by
                  a Merchant to access the Services under the Merchant&apos;s
                  account (employees, contractors, agents, collaborators).
                </>,
                <>
                  <strong>End-Users / Consumers</strong> – Individuals whose
                  personal data is collected, stored or analysed by Merchants
                  via the Services (for example, buyers, leads, website
                  visitors, social-media audiences).
                </>,
                <>
                  <strong>Visitors</strong> – Individuals who browse our public
                  websites, marketing pages or contact us through forms, chat or
                  email.
                </>,
              ]}
            />
            <p>
              The scope of this Policy covers all DSP.one modules and products
              unless a specific service has its own dedicated privacy notice
              that supplements or overrides this Policy.
            </p>
          </LegalSection>

          <LegalSection
            id="controller"
            title="2. Data Controller, Data Processor and Contact Details"
          >
            <LegalSubheading>
              2.1 Identity of the data controller
            </LegalSubheading>
            <p>
              For most processing activities related to operating and improving
              the DSP.one ecosystem, the data controller is:
            </p>
            <LegalContactCard
              company="TIEN PHONG CDS JOINT STOCK COMPANY"
              address="Floor 01, Building 232 Le Van Luong, Tan Hung Ward, District 7, Ho Chi Minh City, Viet Nam"
              email="mailhoc348@gmail.com"
              labels={CONTACT_LABELS}
              extraRows={[{ label: "Tax code", value: "0316459939" }]}
            />
            <p>We act as data controller for:</p>
            <LegalList
              variant="disc"
              items={[
                "Account registration data and billing information of Merchants and Authorised Users;",
                "Technical and usage data about how the Services are used;",
                "Our own sales, marketing and customer-relationship activities.",
              ]}
            />

            <LegalSubheading>2.2 DSP.one as data processor</LegalSubheading>
            <p>
              When Merchants use DSP.one to manage their customers, leads,
              employees and other individuals, the Merchant is the primary data
              controller and DSP.one acts as data processor. This includes, for
              example, order data, CRM contact lists, CDP events and
              social-media leads that the Merchant imports or collects via the
              Services. In this role we process data strictly on the
              Merchant&apos;s documented instructions.
            </p>
            <p>
              Where required by data-protection law (for example under GDPR or
              Vietnam PDP Decree 13/2023/ND-CP), we may enter into a separate
              Data Processing Agreement (DPA) with Merchants that supplements
              this Policy.
            </p>

            <LegalSubheading>
              2.3 Data Protection Officer and contact
            </LegalSubheading>
            <p>
              For questions, requests or complaints about privacy or data
              protection, you may contact our Data Protection Officer (DPO):
            </p>
            <LegalContactCard
              company="Data Protection Officer – Tien Phong CDS"
              address="Floor 01, Building 232 Le Van Luong, Tan Hung Ward, District 7, Ho Chi Minh City, Viet Nam"
              email="mailhoc348@gmail.com"
              phone="(+84) 378 387 375"
              website="https://tienphongcds.com/vi/contact"
              labels={CONTACT_LABELS}
            />
          </LegalSection>

          <LegalSection id="definitions" title="3. Key Definitions">
            <p>For the purposes of this Policy:</p>
            <LegalList
              items={[
                <>
                  <strong>&quot;Personal data&quot;</strong> means any
                  information relating to an identified or identifiable natural
                  person (for example, name, email, phone number, address,
                  online identifiers, transaction history).
                </>,
                <>
                  <strong>&quot;Customer Data&quot;</strong> means data that a
                  Merchant or its Authorised Users submit to, store on, or
                  collect through the Services in the context of their own
                  business operations (such as product catalogues, order
                  history, CRM contact lists, employee records, tickets,
                  invoices).
                </>,
                <>
                  <strong>&quot;Platform Data&quot;</strong> means data
                  retrieved from external platforms (e.g. Meta / Facebook,
                  Instagram, Google, TikTok, Shopee, Lazada, Tiki, shipping
                  carriers, payment gateways) via APIs that you authorise us to
                  connect to the Services.
                </>,
                <>
                  <strong>&quot;Usage Data&quot;</strong> means telemetry, log
                  and analytics data about how the Services are accessed and
                  used, including device identifiers, browser type, navigation
                  patterns, feature usage and timestamps.
                </>,
                <>
                  <strong>
                    &quot;Generative AI Content&quot; or &quot;AI Output&quot;
                  </strong>{" "}
                  means content such as text, images, ideas or campaign
                  structures produced by the AI Marketing module based on
                  prompts or instructions supplied by the Merchant.
                </>,
                <>
                  <strong>&quot;Processing&quot;</strong> has the meaning given
                  in applicable data-protection laws and includes any operation
                  performed on personal data, such as collection, storage,
                  access, use, disclosure, transfer or deletion.
                </>,
              ]}
            />
          </LegalSection>

          <LegalSection id="categories" title="4. Categories of Data We Collect">
            <p>
              We collect information in three primary ways: (1) information you
              provide directly, (2) information we collect automatically when
              you use the Services, and (3) information we obtain from
              integrated third-party sources.
            </p>

            <LegalSubheading>4.1 Data you provide directly</LegalSubheading>
            <p>
              Depending on how you interact with us, this may include:
            </p>
            <p className="font-medium text-gray-800">
              Account and registration data
            </p>
            <LegalList
              variant="disc"
              items={[
                "Merchant name, legal entity information, tax code, industry vertical.",
                "Contact details of the account owner or administrator (name, email, phone, role).",
                "Login credentials (username, hashed password).",
              ]}
            />
            <p className="font-medium text-gray-800">
              Billing and financial data
            </p>
            <LegalList
              variant="disc"
              items={[
                "Billing address, contact person for invoices.",
                "Bank account details or payment-method information provided to our payment processors (we do not store full card numbers on our own servers).",
              ]}
            />
            <p className="font-medium text-gray-800">
              Customer and operational data
            </p>
            <LegalList
              variant="disc"
              items={[
                "Product catalogues, price lists, inventory data, promotions.",
                "Customer and lead lists, including names, contact details and segmentation tags.",
                "Orders, invoices, shipping details and transaction values.",
                "Employee profiles, attendance data, performance assessments and payroll-related information when using HRM modules.",
              ]}
            />
            <p className="font-medium text-gray-800">
              Support and communication data
            </p>
            <LegalList
              variant="disc"
              items={[
                "Content of messages you send to us, such as support requests, survey responses or feedback.",
                "Files or attachments you choose to upload when contacting support.",
              ]}
            />

            <LegalSubheading>4.2 Data we collect automatically</LegalSubheading>
            <p>
              When you access or use the Services, we automatically collect
              certain technical and usage information, including:
            </p>
            <LegalList
              variant="disc"
              items={[
                "IP address, approximate location derived from IP, browser type and language, operating system, device type and identifiers.",
                "Date and time of access, URLs visited, referrer/exit pages, clickstream data and session duration.",
                "Log events (for example, login attempts, API calls, errors) in order to monitor system performance and security.",
                "When using mobile applications (such as SDO Agent App), we may collect device identifiers and, with appropriate permission, geolocation data.",
              ]}
            />

            <LegalSubheading>
              4.3 Data from third-party and integrated sources
            </LegalSubheading>
            <p>
              With your permission and configuration, we connect to various
              external systems and ingest Platform Data into DSP.one. Examples
              include:
            </p>
            <LegalList
              variant="disc"
              items={[
                <>
                  <strong>E-commerce marketplaces and sales channels</strong> –
                  Shopee, Lazada, TikTok Shop, Tiki and others: order
                  information, buyer details, product and pricing data, shipping
                  and payment status.
                </>,
                <>
                  <strong>Social-media platforms</strong> – Meta (Facebook
                  Pages, Instagram Business accounts), YouTube and Google Ads:
                  page and account identifiers, posts and creatives, campaign
                  performance statistics, lead forms and engagement metrics.
                </>,
                <>
                  <strong>Shipping and logistics providers</strong> – GHN, GHTK
                  and other carriers: sender and receiver information, parcel
                  details, tracking numbers and status updates.
                </>,
                <>
                  <strong>Payment gateways</strong> – Information necessary to
                  confirm successful or failed transactions (amount, currency,
                  masked card details, transaction IDs).
                </>,
                <>
                  <strong>Email and messaging services</strong> – Email
                  addresses, delivery and open-rate statistics, chat logs,
                  depending on the integration.
                </>,
              ]}
            />
            <p>
              We only access Platform Data that you explicitly authorise through
              OAuth flows, API keys or other authentication mechanisms.
            </p>
          </LegalSection>

          <LegalSection id="modules" title="5. Data Practices by Module">
            <p>
              DSP.one is modular and supports multiple business functions.
              Depending on your subscription, some or all of the following
              processing activities may apply.
            </p>

            <LegalSubheading>
              5.1 Sales &amp; Distribution (Omisell and SDO)
            </LegalSubheading>
            <p>
              <strong>Purpose:</strong> To centralise omnichannel sales, manage
              orders and inventory, and support field-sales agents. Data
              processed may include:
            </p>
            <LegalList
              variant="disc"
              items={[
                "Buyer contact details (name, phone number, email, shipping address).",
                "Order details (products purchased, quantities, prices, discounts, payment method, timestamps).",
                "Warehouse and inventory data (SKU information, stock levels, storage locations).",
                "Field-force data such as route plans, check-in/check-out times, and geo-coordinates of SDO agents, if location tracking is activated.",
                "Photos or notes attached by field agents when visiting outlets.",
              ]}
            />

            <LegalSubheading>
              5.2 Corporate governance modules (HRM, CRM, Accounting)
            </LegalSubheading>
            <LegalList
              items={[
                <>
                  <strong>HRM:</strong> We may process employee personal data
                  such as full name, contact details, job title, attendance and
                  timesheets, leave records, salary and benefits, bank account
                  numbers, social-insurance identifiers and performance reviews,
                  as necessary for payroll and workforce management.
                </>,
                <>
                  <strong>CRM:</strong> We store and process information about
                  leads and customers: contact details, communication history
                  (calls, emails, meetings), tags and segmentation attributes,
                  pipeline stage, deal value and outcomes.
                </>,
                <>
                  <strong>Accounting &amp; e-invoicing:</strong> We process
                  transaction data (invoices, receipts, journal entries),
                  customer and supplier details, and other financial records
                  required to generate accounting reports and electronic
                  invoices in line with applicable tax regulations.
                </>,
              ]}
            />

            <LegalSubheading>5.3 Affiliate &amp; referral systems</LegalSubheading>
            <p>
              When you use our affiliate or referral modules, we process:
            </p>
            <LegalList
              variant="disc"
              items={[
                "Affiliate profile information (name, contact, payment details).",
                "Referral links, campaign identifiers and tracking parameters.",
                "Click and conversion events associated with affiliate links.",
                "Commission calculations, payout history and tax documentation, where applicable.",
              ]}
            />
            <p>
              Tracking is typically performed using cookies, unique link
              parameters and, in some cases, non-intrusive fingerprinting
              techniques, in line with applicable law and platform policies.
            </p>

            <LegalSubheading>
              5.4 AI Marketing, CDP and automation
            </LegalSubheading>
            <p>The AI Marketing and CDP modules enable you to:</p>
            <LegalList
              variant="disc"
              items={[
                "Plan campaigns and content strategies.",
                "Generate AI-assisted content (captions, ad copy, email sequences, blog posts).",
                "Orchestrate automation flows (welcome journeys, cart-abandonment reminders, win-back sequences).",
                "Analyse cross-channel performance across social networks, websites, email and messaging platforms.",
              ]}
            />
            <p>
              These modules rely on Customer Data and Platform Data such as
              contact lists, event streams (page views, add-to-cart, purchases),
              interactions with campaigns and metadata from connected channels.
            </p>
          </LegalSection>

          <LegalSection
            id="integrations"
            title="6. AI Marketing Module and Meta / Google Integrations"
          >
            <p>
              This section provides transparency for both users and platform
              reviewers (e.g. Meta App Review) about the permissions we request
              and how we use the data.
            </p>

            <LegalSubheading>
              6.1 Meta (Facebook &amp; Instagram) permissions
            </LegalSubheading>
            <p>
              When you connect your Meta Business account, we may request the
              following permissions (exact names may evolve as Meta updates its
              APIs):
            </p>

            <p className="font-medium text-gray-800">
              pages_show_list and instagram_basic
            </p>
            <LegalList
              variant="disc"
              items={[
                <>
                  <strong>Data accessed:</strong> List of Facebook Pages and
                  Instagram Business accounts you administer (Page/Account name,
                  ID, profile picture).
                </>,
                <>
                  <strong>Purpose:</strong> To display an account selector
                  inside DSP.one so you can choose which Page(s) or Instagram
                  account(s) to connect for publishing and analytics.
                </>,
                <>
                  <strong>Minimisation:</strong> We only persist identifiers for
                  Pages/Accounts you explicitly connect. Pages you do not choose
                  are not stored.
                </>,
              ]}
            />

            <p className="font-medium text-gray-800">
              pages_manage_posts, pages_manage_metadata,
              instagram_content_publish
            </p>
            <LegalList
              variant="disc"
              items={[
                <>
                  <strong>Data accessed:</strong> Content drafts (captions,
                  media, hashtags) that you create or that are generated by our
                  AI based on your prompts.
                </>,
                <>
                  <strong>Purpose:</strong> To publish and schedule posts on
                  your behalf when you click Publish, Schedule or configure an
                  automation rule.
                </>,
                <>
                  <strong>Guarantees:</strong> We never post to your Pages or
                  profiles without a direct action from you or a scheduled
                  automation you configured. You can view, modify or cancel
                  queued posts from within the DSP.one interface.
                </>,
              ]}
            />

            <p className="font-medium text-gray-800">
              pages_read_engagement and read_insights
            </p>
            <LegalList
              variant="disc"
              items={[
                <>
                  <strong>Data accessed:</strong> Aggregated metrics such as
                  reach, impressions, post clicks, reactions, comments, shares
                  and follower statistics.
                </>,
                <>
                  <strong>Purpose:</strong> To power campaign dashboards and
                  content performance reports inside DSP.one so you can see
                  which posts and ads perform best without leaving our platform.
                </>,
                <>
                  <strong>Retention:</strong> We cache key metrics for
                  performance and refresh them periodically (for example every
                  24 hours). We do not use this data for user-profiling
                  unrelated to your account, and we do not sell it to third
                  parties.
                </>,
              ]}
            />

            <p className="font-medium text-gray-800">
              leads_retrieval (where applicable)
            </p>
            <LegalList
              variant="disc"
              items={[
                <>
                  <strong>Data accessed:</strong> Lead forms submitted by
                  individuals via your Facebook or Instagram Lead Ads (e.g.
                  name, email, phone, custom questions).
                </>,
                <>
                  <strong>Purpose:</strong> To push leads into your CRM or CDP
                  in real time so your sales team can follow up promptly.
                </>,
                <>
                  <strong>Handling:</strong> Leads are stored as part of your
                  Customer Data and are subject to your own privacy notices
                  towards the individuals.
                </>,
              ]}
            />
            <p>
              You may revoke these permissions at any time via Facebook&apos;s
              Business Integrations settings or from within DSP.one&apos;s
              integration settings.
            </p>

            <LegalSubheading>6.2 Google and YouTube services</LegalSubheading>
            <p>Depending on your configuration, we may use:</p>
            <LegalList
              variant="disc"
              items={[
                <>
                  <strong>YouTube Data API</strong> – To upload videos you
                  create or manage in DSP.one to your YouTube channels and to
                  retrieve viewership statistics for reporting.
                </>,
                <>
                  <strong>Google Ads API</strong> – To pull campaign metrics
                  (impressions, clicks, CPC, conversions) so that you can
                  analyse ad performance alongside other channels.
                </>,
                <>
                  <strong>Google Analytics or GA4</strong> – To ingest website
                  and event data that you choose to share for CDP segmentation
                  and attribution analysis.
                </>,
              ]}
            />
            <p>
              We comply with the Google API Services User Data Policy and use
              Google-sourced data solely for providing the features you
              configure.
            </p>

            <LegalSubheading>
              6.3 Generative AI and content ownership
            </LegalSubheading>
            <p>
              We leverage advanced large-language models (LLMs) and related AI
              technologies to generate marketing content.
            </p>
            <LegalList
              variant="disc"
              items={[
                "Your prompts may include high-level descriptions of your products, target audience and campaign goals.",
                "We do not use your proprietary business data (such as private customer lists or financial records) to train any public AI models. Where we rely on external AI providers, we configure them, where available, not to retain your data for model training.",
                "As between you and us, you retain any rights you may have in AI Output generated for your campaigns. You are responsible for reviewing AI Output before publication and ensuring it complies with advertising laws, platform policies and your internal guidelines.",
              ]}
            />
          </LegalSection>

          <LegalSection
            id="purposes"
            title="7. Purposes and Legal Bases for Processing"
          >
            <p>
              We process personal data for the following purposes and under the
              legal bases described below (depending on which law applies in
              your jurisdiction):
            </p>
            <LegalList
              items={[
                <>
                  <strong>Providing and operating the Services</strong> –
                  Creating and managing accounts, authenticating users,
                  providing customer support, enabling core features (order
                  management, HRM, CRM, accounting, AI Marketing, dashboards,
                  APIs).
                  <br />
                  <em>Legal basis:</em> Performance of a contract with the
                  Merchant; legitimate interests in operating our platform.
                </>,
                <>
                  <strong>
                    Processing transactions and fulfilling legal obligations
                  </strong>{" "}
                  – Issuing invoices, recording payments, maintaining tax and
                  accounting records, complying with anti-fraud and auditing
                  requirements.
                  <br />
                  <em>Legal basis:</em> Performance of contract; compliance with
                  legal obligations.
                </>,
                <>
                  <strong>
                    Analytics, service improvement and product development
                  </strong>{" "}
                  – Analysing Usage Data to understand how the Services are
                  used, identify problems, improve user experience and develop
                  new features; generating anonymous or aggregated statistics
                  for internal reporting and benchmarking.
                  <br />
                  <em>Legal basis:</em> Legitimate interests in improving and
                  securing our Services.
                </>,
                <>
                  <strong>Marketing and communication</strong> – Sending product
                  updates, feature announcements, newsletters or promotional
                  offers to Merchant contacts, where permitted.
                  <br />
                  <em>Legal basis:</em> Legitimate interests in promoting our
                  Services, or consent where required by
                  electronic-communications laws. You can opt out at any time.
                </>,
                <>
                  <strong>Security, fraud prevention and compliance</strong> –
                  Monitoring for suspicious activity, abuse or policy
                  violations, detecting and preventing fraud, spam and
                  unauthorised access; cooperating with lawful requests from
                  regulators or law-enforcement agencies.
                  <br />
                  <em>Legal basis:</em> Legitimate interests in securing our
                  systems; compliance with legal obligations.
                </>,
                <>
                  <strong>Processing on behalf of Merchants</strong> – When
                  acting as a processor, we handle Customer Data strictly to
                  perform the Services requested by the Merchant (for example,
                  syncing orders, running campaign automations, generating
                  reports).
                  <br />
                  <em>Legal basis:</em> Performance of contract with the
                  Merchant; the Merchant itself is responsible for identifying
                  the legal basis vis-à-vis its end-users.
                </>,
              ]}
            />
            <p>
              Where we rely on consent (e.g. for certain cookies or marketing
              communications), you may withdraw your consent at any time via the
              mechanisms provided in the Services or by contacting us.
            </p>
          </LegalSection>

          <LegalSection id="sharing" title="8. Data Sharing and Disclosure">
            <p>
              <strong>We do not sell personal data to third parties.</strong> We
              only share information in the limited situations described below:
            </p>
            <LegalList
              items={[
                <>
                  <strong>Sub-processors and service providers</strong> – We
                  engage trusted third parties to help us operate the Services,
                  such as cloud infrastructure providers (e.g. AWS, Google Cloud
                  Platform) for hosting and storage; AI service providers (e.g.
                  OpenAI and similar API-based LLM vendors) to generate AI
                  Output; workflow automation tools (e.g. n8n) used to execute
                  integrations and background jobs; and email delivery, SMS,
                  analytics and monitoring vendors. These providers may access
                  personal data only to perform services on our behalf and are
                  bound by contractual confidentiality and security obligations.
                </>,
                <>
                  <strong>User-directed third-party integrations</strong> – When
                  you choose to connect DSP.one with external services (shipping
                  carriers, payment gateways, CRM tools, marketing platforms),
                  we share only the data necessary for the integration to
                  function (for example, order details with a carrier to create
                  a label; payment details with a gateway to process a payment).
                  You control which integrations are enabled.
                </>,
                <>
                  <strong>Corporate transactions</strong> – In the context of a
                  merger, acquisition, restructuring or sale of assets, personal
                  data may be transferred as part of the transaction. In such
                  cases we will ensure that the receiving entity is bound by
                  privacy commitments substantially similar to this Policy.
                </>,
                <>
                  <strong>Legal requirements and protection of rights</strong> –
                  We may disclose information to competent authorities where we
                  believe it is necessary to comply with a legal obligation,
                  court order or regulatory request, or to protect our rights,
                  safety of users or the public.
                </>,
                <>
                  <strong>Aggregated and de-identified data</strong> – We may
                  share anonymised or aggregated insights that do not identify
                  you or any individual, for example to publish benchmark
                  reports or demonstrate patterns in ecommerce or marketing
                  performance.
                </>,
              ]}
            />
          </LegalSection>

          <LegalSection id="transfers" title="9. International Data Transfers">
            <p>
              Our Services are designed for a global user base and may involve
              transferring personal data to countries other than the one in
              which the data was originally collected (for example, to data
              centres in Singapore, the EU or the United States).
            </p>
            <p>
              When transferring data across borders, we take appropriate steps
              to ensure a level of protection consistent with applicable law,
              which may include:
            </p>
            <LegalList
              variant="disc"
              items={[
                "using Standard Contractual Clauses approved by regulators;",
                "relying on adequacy decisions where applicable; and/or",
                "ensuring that our sub-processors implement robust technical and organisational security measures and maintain relevant certifications (such as ISO/IEC 27001).",
              ]}
            />
          </LegalSection>

          <LegalSection id="retention" title="10. Data Retention">
            <p>
              We retain personal data only for as long as reasonably necessary
              to fulfil the purposes described in this Policy or as required by
              law. In general:
            </p>
            <LegalList
              variant="disc"
              items={[
                <>
                  <strong>Active merchant accounts:</strong> Data is kept for
                  the duration of the subscription and for a reasonable period
                  thereafter to handle queries, backups and legal obligations.
                </>,
                <>
                  <strong>
                    Access tokens for social-media and other integrations:
                  </strong>{" "}
                  Stored only while the integration is active. When a token is
                  revoked or expires, we remove or render it unusable.
                </>,
                <>
                  <strong>Financial and accounting records:</strong> Retained
                  for the period required by applicable tax and accounting laws
                  (for example up to 10 years in Viet Nam).
                </>,
                <>
                  <strong>Logs and security records:</strong> Retained for
                  periods appropriate to support security investigations and
                  system integrity.
                </>,
              ]}
            />
            <p>
              When data is no longer needed, we will delete it or anonymise it
              so that individuals can no longer be identified. Following account
              termination, we may keep limited information in backup archives
              for a short period before it is overwritten, consistent with our
              backup policies.
            </p>
          </LegalSection>

          <LegalSection id="security" title="11. Security Measures">
            <p>
              We implement a defence-in-depth security strategy to safeguard
              personal data against unauthorised access, loss, misuse or
              alteration, including:
            </p>
            <LegalList
              variant="disc"
              items={[
                "Encryption of data in transit using up-to-date TLS protocols, and encryption of sensitive data at rest (such as passwords and API tokens) using strong algorithms like AES-256.",
                "Role-based access control (RBAC) and, where applicable, multi-factor authentication (MFA) for internal systems.",
                "Principle of least privilege for employees and contractors, with access granted only where necessary for their role.",
                "Network-level protections, firewalls and intrusion-detection / monitoring systems.",
                "Secure development practices, vulnerability management and regular security reviews.",
                "Physical security protections offered by our data-centre providers, such as restricted access controls and 24/7 surveillance.",
              ]}
            />
            <p>
              While we strive to protect personal data, no system can be
              guaranteed 100% secure. In the event we become aware of a
              personal-data breach that is likely to result in a high risk to
              individuals, we will notify affected Merchants and, where
              required, relevant authorities, and will cooperate to mitigate the
              impact.
            </p>
          </LegalSection>

          <LegalSection
            id="cookies"
            title="12. Cookies, Pixels and Similar Technologies"
          >
            <p>
              We and our partners use cookies, web beacons, SDKs and similar
              technologies on our websites and, where configured by Merchants,
              on their own websites and landing pages.
            </p>

            <LegalSubheading>12.1 Types of cookies we use</LegalSubheading>
            <LegalList
              variant="disc"
              items={[
                <>
                  <strong>Strictly necessary cookies</strong> – Required for
                  core functionality such as authentication, security and load
                  balancing. These cannot be disabled via cookie banners.
                </>,
                <>
                  <strong>Functional cookies</strong> – Remember user
                  preferences such as language, time zone or interface settings.
                </>,
                <>
                  <strong>Analytics cookies</strong> – Help us understand how
                  visitors use the Services (for example pages visited, time on
                  page, features used) so we can improve user experience. Tools
                  may include in-house analytics and third-party services such
                  as Google Analytics.
                </>,
                <>
                  <strong>Marketing and affiliate cookies</strong> – Used in the
                  context of our affiliate/referral programmes and retargeting
                  campaigns to measure performance and attribute conversions.
                </>,
              ]}
            />

            <LegalSubheading>12.2 Pixels and CDP tracking</LegalSubheading>
            <p>
              The Omisell CDP and AI Marketing modules may use pixels or scripts
              placed on Merchant websites to track events such as page views,
              product views, add-to-cart, check-out and purchases. These events
              feed into automation workflows, segmentation and attribution
              reporting.
            </p>
            <p>Merchants are responsible for:</p>
            <LegalList
              variant="disc"
              items={[
                "informing their own visitors and customers that such tracking is in place; and",
                "obtaining any required consents under applicable laws (for example under ePrivacy or cookie regulations).",
              ]}
            />
            <p>
              You can manage cookie preferences through browser settings and,
              where provided, our cookie banner. Blocking certain cookies may
              affect functionality.
            </p>
          </LegalSection>

          <LegalSection id="rights" title="13. Your Rights and Controls">
            <p>
              Depending on your location and applicable law (for example GDPR in
              the EU/EEA, CCPA in California, PDP Decree 13 in Viet Nam), you
              may have some or all of the following rights regarding your
              personal data:
            </p>
            <LegalList
              items={[
                <>
                  <strong>Right of access</strong> – To obtain confirmation
                  whether we process your personal data and, if so, to receive a
                  copy.
                </>,
                <>
                  <strong>Right to rectification</strong> – To request
                  correction of inaccurate or incomplete personal data.
                </>,
                <>
                  <strong>Right to erasure</strong> – To request deletion of
                  personal data in certain circumstances (for example where it
                  is no longer needed, or where you withdraw consent).
                </>,
                <>
                  <strong>Right to restriction of processing</strong> – To
                  request that we temporarily limit processing while a complaint
                  is investigated.
                </>,
                <>
                  <strong>Right to data portability</strong> – To receive
                  personal data you provided in a structured, commonly used,
                  machine-readable format and to request that we transmit it to
                  another controller, where technically feasible.
                </>,
                <>
                  <strong>Right to object</strong> – To object to processing
                  based on legitimate interests or to direct marketing,
                  including profiling related to such marketing.
                </>,
                <>
                  <strong>Right to withdraw consent</strong> – Where processing
                  is based on your consent, you can withdraw it at any time
                  without affecting the lawfulness of processing carried out
                  before the withdrawal.
                </>,
              ]}
            />
            <p>
              To exercise these rights, please contact us using the details in
              Section 2.3. We may need to verify your identity before acting on
              your request. If you are an end-user of a Merchant, we may
              redirect your request to the relevant Merchant (data controller),
              and will support them in responding as required.
            </p>

            <LegalSubheading>
              13.1 Managing third-party connections (Facebook / Google)
            </LegalSubheading>
            <p>
              You can control our access to your third-party accounts at any
              time:
            </p>
            <LegalList
              variant="disc"
              items={[
                <>
                  <strong>In DSP.one:</strong> go to Settings → Integrations and
                  disconnect the relevant account (e.g. Facebook Page,
                  Instagram, Google Ads). This will revoke stored tokens and
                  stop further data sync.
                </>,
                <>
                  <strong>In the third-party service:</strong> use
                  Facebook&apos;s Apps and Websites settings or Google&apos;s
                  Security → Third-party access settings to remove
                  DSP.one&apos;s access.
                </>,
              ]}
            />

            <LegalSubheading>
              13.2 Data-deletion requests via Facebook
            </LegalSubheading>
            <p>In line with Meta Platform policies, you can:</p>
            <LegalList
              variant="disc"
              items={[
                "Remove the DSP.one app from your Facebook settings. Facebook will send us a signed callback notifying us of the removal.",
                "Our system will then locate the relevant user ID and schedule deletion of associated personal data within a reasonable period (typically within 24–30 days), retaining only minimal records where needed for legal or security purposes.",
                "Alternatively, you can email us directly with the subject \"Data Deletion Request\". Please include sufficient information to identify your account. We will respond in accordance with applicable law.",
              ]}
            />
            <p>
              If you are unsatisfied with our response, you may have the right
              to lodge a complaint with your local data-protection authority.
            </p>
          </LegalSection>

          <LegalSection id="children" title="14. Children's Data">
            <p>
              Our Services are intended for use by businesses and professionals.
              We do not knowingly target or collect personal data from children
              under the age of 13 (or a higher age if required by local law) as
              primary users of the platform.
            </p>
            <p>
              Merchants using DSP.one to sell goods or services that may be
              purchased by minors are responsible for complying with all
              applicable child-protection and consent requirements and for
              configuring their own data-collection practices appropriately.
            </p>
            <p>
              If you believe that we have inadvertently collected personal data
              from a child without appropriate consent, please contact us and we
              will take steps to delete such data as required by law.
            </p>
          </LegalSection>

          <LegalSection id="changes" title="15. Changes to This Policy">
            <p>
              We may update this Policy from time to time to reflect changes in
              technology, our Services, legal requirements or other factors.
              When we make material changes, we will:
            </p>
            <LegalList
              variant="disc"
              items={[
                'update the "Last Updated" date at the top of this Policy; and',
                "provide additional notice where appropriate, such as by email to account owners or by prominent notice within the Services.",
              ]}
            />
            <p>
              Your continued use of the Services after the effective date of an
              updated Policy constitutes your acceptance of the changes. If you
              do not agree with the updated Policy, you should discontinue use
              of the Services and, where you are a Merchant, terminate your
              account in accordance with the{" "}
              <Link href="/terms" className="text-emerald-600 hover:underline">
                Terms of Service
              </Link>
              .
            </p>
          </LegalSection>

          <LegalSection id="contact" title="16. Contact Us">
            <p>
              If you have any questions, concerns or requests relating to this
              Policy or our handling of personal data, please contact us at:
            </p>
            <LegalContactCard
              company="TIEN PHONG CDS JOINT STOCK COMPANY"
              address="Floor 01, Building 232 Le Van Luong, Tan Hung Ward, District 7, Ho Chi Minh City, Viet Nam"
              email="mailhoc348@gmail.com"
              phone="(+84) 378 387 375"
              website="https://tienphongcds.com/vi/contact"
              labels={CONTACT_LABELS}
            />
            <p>
              By using the DSP.one Services, you acknowledge that you have read
              and understood this Master Privacy Policy and agree that your
              information may be processed as described herein.
            </p>
          </LegalSection>
        </div>
      </LegalPageShell>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
        <LegalFooterLinks
          theme="emerald"
          links={[
            { href: "/terms", label: "Read the Terms of Service" },
            { href: "/chinh-sach-bao-mat", label: "Xem bản tiếng Việt" },
            { href: "/dang-ky", label: "Start free trial", primary: true },
          ]}
        />
      </div>
    </main>
  );
}
