import type { Metadata } from "next";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | DSP.ONE - Uniksmart",
  description:
    "Privacy policy of DSP.ONE - Committed to protecting user data and privacy.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <FileText className="w-8 h-8 text-[#22b5f8]" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                DSP.ONE Master Privacy Policy
              </h1>
              <p className="text-sm text-gray-500">
                Effective Date: 24 March 2025
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Last Updated: 24 November 2025
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col gap-12">
          <div className="prose prose-lg max-w-none mb-6">
            <p className="text-gray-700 leading-relaxed">
              This Master Privacy Policy (the “Policy”) explains how UNIKSMART
              COMPANY (&quot;UNIKSMART&quot;, &quot;DSP.one&quot;,
              &quot;we&quot;, &quot;us&quot; or &quot;our&quot;) collects, uses,
              discloses, stores and protects information when you use our
              digital products and services.
            </p>
            <p className="text-gray-700">
              Our ecosystem includes the DSP.one omnichannel sales platform,
              distribution / field‑force solutions, corporate management modules
              (HRM, CRM, Accounting), the AI Marketing & CDP stack, mobile
              applications (including SDO Agent App), public websites and APIs
              (collectively, the “Services”). By accessing or using the
              Services, you acknowledge that you have read and understood this
              Policy.
            </p>
            <p className="text-gray-700">
              Important: This Policy is designed for B2B customers and describes
              DSP.one’s role as both data controller (for merchant account data
              and platform operations) and data processor (for end‑user data
              processed on behalf of merchants). You, as a Merchant, remain
              primarily responsible for your own privacy notices and compliance
              obligations towards your end‑users.
            </p>
          </div>

          <section id="who-applies" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. WHO THIS POLICY APPLIES TO
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>The Policy applies globally to the following categories:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  <strong>Merchants / Tenants</strong> – Business customers
                  (companies, organisations, sole proprietors) that subscribe to
                  and use DSP.one.
                </li>
                <li>
                  <strong>Authorised Users</strong> – Individuals authorised by
                  a Merchant to access the Services under the Merchant’s account
                  (employees, contractors, agents, collaborators).
                </li>
                <li>
                  <strong>End‑Users / Consumers</strong> – Individuals whose
                  personal data is collected, stored or analysed by Merchants
                  via the Services (for example, buyers, leads, website
                  visitors, social‑media audiences).
                </li>
                <li>
                  <strong>Visitors</strong> – Individuals who browse our public
                  websites, marketing pages or contact us through forms, chat or
                  email.
                </li>
              </ol>
              <p>
                The scope of this Policy covers all DSP.one modules and products
                unless a specific service has its own dedicated privacy notice
                that supplements or overrides this Policy.
              </p>
            </div>
          </section>

          <section id="controller-processor" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. DATA CONTROLLER, DATA PROCESSOR AND CONTACT DETAILS
            </h2>

            <div className="text-gray-700 space-y-4">
              <h3 className="font-semibold">
                2.1 Identity of the data controller
              </h3>
              <p>
                For most processing activities related to operating and
                improving the DSP.one ecosystem, the data controller is:
              </p>
              <div className="bg-gray-50 border border-gray-100 p-4 rounded">
                <p className="font-semibold">UNIKSMART COMPANY</p>
                <p>
                  Floor 01, Building 232 Le Van Luong, Tan Hung Ward, District
                  7,
                </p>
                <p>Ho Chi Minh City, Viet Nam</p>
                <p>Tax Code: 0316459939</p>
                <p>Email: hoc.thai@tienphongcds.com</p>
              </div>

              <p>We act as data controller for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Account registration data and billing information of Merchants
                  and Authorised Users;
                </li>
                <li>
                  Technical and usage data about how the Services are used;
                </li>
                <li>
                  Our own sales, marketing and customer‑relationship activities.
                </li>
              </ul>

              <h3 className="font-semibold">2.2 DSP.one as data processor</h3>
              <p>
                When Merchants use DSP.one to manage their customers, leads,
                employees and other individuals, the Merchant is the primary
                data controller and DSP.one acts as data processor. This
                includes, for example, order data, CRM contact lists, CDP events
                and social‑media leads that the Merchant imports or collects via
                the Services. In this role we process data strictly on the
                Merchant’s documented instructions.
              </p>
              <p>
                Where required by data‑protection law (for example under GDPR or
                Vietnam PDP Decree 13/2023/ND‑CP), we may enter into a separate
                Data Processing Agreement (DPA) with Merchants that supplements
                this Policy.
              </p>

              <h3 className="font-semibold">
                2.3 Data Protection Officer and contact
              </h3>
              <p>
                For questions, requests or complaints about privacy or data
                protection, you may contact our Data Protection Officer (DPO):
              </p>
              <div className="bg-gray-50 border border-gray-100 p-4 rounded">
                <p className="font-semibold">
                  Data Protection Officer – Uniksmart
                </p>
                <p>
                  Floor 01, Building 232 Le Van Luong, Tan Hung Ward, District
                  7, Ho Chi Minh City, Viet Nam
                </p>
                <p>Email: hoc.thai@tienphongcds.com</p>
                <p>Hotline: (+84) 378 387 375</p>
                <p>Web form: https://uniksmark.dsp.one/en#contact</p>
              </div>
            </div>
          </section>

          <section id="key-definitions" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. KEY DEFINITIONS
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>For the purposes of this Policy:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>“Personal data”</strong> means any information
                  relating to an identified or identifiable natural person (for
                  example, name, email, phone number, address, online
                  identifiers, transaction history).
                </li>
                <li>
                  <strong>“Customer Data”</strong> means data that a Merchant or
                  its Authorised Users submit to, store on, or collect through
                  the Services in the context of their own business operations
                  (such as product catalogues, order history, CRM contact lists,
                  employee records, tickets, invoices).
                </li>
                <li>
                  <strong>“Platform Data”</strong> means data retrieved from
                  external platforms (e.g. Meta / Facebook, Instagram, Google,
                  TikTok, Shopee, Lazada, Tiki, shipping carriers, payment
                  gateways) via APIs that you authorise us to connect to the
                  Services.
                </li>
                <li>
                  <strong>“Usage Data”</strong> means telemetry, log and
                  analytics data about how the Services are accessed and used,
                  including device identifiers, browser type, navigation
                  patterns, feature usage and timestamps.
                </li>
                <li>
                  <strong>“Generative AI Content”</strong> or{" "}
                  <strong>“AI Output”</strong>
                  means content such as text, images, ideas or campaign
                  structures produced by the AI Marketing module based on
                  prompts or instructions supplied by the Merchant.
                </li>
                <li>
                  <strong>“Processing”</strong> has the meaning given in
                  applicable data‑protection laws and includes any operation
                  performed on personal data, such as collection, storage,
                  access, use, disclosure, transfer or deletion.
                </li>
              </ul>
            </div>
          </section>

          <section id="data-categories" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. CATEGORIES OF DATA WE COLLECT
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                We collect information in three primary ways: (1) information
                you provide directly, (2) information we collect automatically
                when you use the Services, and (3) information we obtain from
                integrated third‑party sources.
              </p>

              <h3 className="font-semibold">4.1 Data you provide directly</h3>
              <p>Depending on how you interact with us, this may include:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  <strong>Account and registration data</strong>
                  <div className="pl-4">
                    <p>
                      Merchant name, legal entity information, tax code,
                      industry vertical.
                    </p>
                    <p>
                      Contact details of the account owner or administrator
                      (name, email, phone, role).
                    </p>
                    <p>Login credentials (username, hashed password).</p>
                  </div>
                </li>
                <li>
                  <strong>Billing and financial data</strong>
                  <div className="pl-4">
                    <p>Billing address, contact person for invoices.</p>
                    <p>
                      Bank account details or payment‑method information
                      provided to our payment processors (we do not store full
                      card numbers on our own servers).
                    </p>
                  </div>
                </li>
                <li>
                  <strong>Customer and operational data</strong>
                  <div className="pl-4">
                    <p>
                      Product catalogues, price lists, inventory data,
                      promotions.
                    </p>
                    <p>
                      Customer and lead lists, including names, contact details
                      and segmentation tags.
                    </p>
                    <p>
                      Orders, invoices, shipping details and transaction values.
                    </p>
                    <p>
                      Employee profiles, attendance data, performance
                      assessments and payroll‑related information when using HRM
                      modules.
                    </p>
                  </div>
                </li>
                <li>
                  <strong>Support and communication data</strong>
                  <div className="pl-4">
                    <p>
                      Content of messages you send to us, such as support
                      requests, survey responses or feedback.
                    </p>
                    <p>
                      Files or attachments you choose to upload when contacting
                      support.
                    </p>
                  </div>
                </li>
              </ol>

              <h3 className="font-semibold">
                4.2 Data we collect automatically
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  IP address, approximate location derived from IP, browser type
                  and language, operating system, device type and identifiers.
                </li>
                <li>
                  Date and time of access, URLs visited, referrer/exit pages,
                  clickstream data and session duration.
                </li>
                <li>
                  Log events (for example, login attempts, API calls, errors) to
                  monitor system performance and security.
                </li>
                <li>
                  When using mobile applications (such as SDO Agent App), we may
                  collect device identifiers and, with appropriate permission,
                  geolocation data.
                </li>
              </ul>

              <h3 className="font-semibold">
                4.3 Data from third‑party and integrated sources
              </h3>
              <p>
                With your permission and configuration, we connect to various
                external systems and ingest Platform Data into DSP.one. Examples
                include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  e‑commerce marketplaces and sales channels – Shopee, Lazada,
                  TikTok Shop, Tiki and others: order information, buyer
                  details, product and pricing data, shipping and payment
                  status.
                </li>
                <li>
                  Social‑media platforms – Meta (Facebook Pages, Instagram
                  Business accounts), YouTube and Google Ads: page and account
                  identifiers, posts and creatives, campaign performance
                  statistics, lead forms and engagement metrics.
                </li>
                <li>
                  Shipping and logistics providers – GHN, GHTK and other
                  carriers: sender and receiver information, parcel details,
                  tracking numbers and status updates.
                </li>
                <li>
                  Payment gateways – Information necessary to confirm successful
                  or failed transactions (amount, currency, masked card details,
                  transaction IDs).
                </li>
                <li>
                  Email and messaging services – Email addresses, delivery and
                  open‑rate statistics, chat logs, depending on the integration.
                </li>
              </ul>
              <p>
                We only access Platform Data that you explicitly authorise
                through OAuth flows, API keys or other authentication
                mechanisms.
              </p>
            </div>
          </section>

          <section id="data-practices" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. DATA PRACTICES BY MODULE
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                DSP.one is modular and supports multiple business functions.
                Depending on your subscription, some or all of the following
                processing activities may apply.
              </p>

              <h3 className="font-semibold">
                5.1 Sales &amp; Distribution (Omisell and SDO)
              </h3>
              <p className="italic">
                Purpose: To centralise omnichannel sales, manage orders and
                inventory, and support field‑sales agents.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Buyer contact details (name, phone number, email, shipping
                  address).
                </li>
                <li>
                  Order details (products purchased, quantities, prices,
                  discounts, payment method, timestamps).
                </li>
                <li>
                  Warehouse and inventory data (SKU information, stock levels,
                  storage locations).
                </li>
                <li>
                  Field‑force data such as route plans, check‑in/check‑out
                  times, and geo‑coordinates of SDO agents, if location tracking
                  is activated.
                </li>
                <li>
                  Photos or notes attached by field agents when visiting
                  outlets.
                </li>
              </ul>

              <h3 className="font-semibold">
                5.2 Corporate governance modules (HRM, CRM, Accounting)
              </h3>
              <div className="space-y-2">
                <p className="font-semibold">HRM:</p>
                <p>
                  We may process employee personal data such as full name,
                  contact details, job title, attendance and timesheets, leave
                  records, salary and benefits, bank account numbers,
                  social‑insurance identifiers and performance reviews, as
                  necessary for payroll and workforce management.
                </p>
                <p className="font-semibold">CRM:</p>
                <p>
                  We store and process information about leads and customers:
                  contact details, communication history (calls, emails,
                  meetings), tags and segmentation attributes, pipeline stage,
                  deal value and outcomes.
                </p>
                <p className="font-semibold">Accounting &amp; e‑invoicing:</p>
                <p>
                  We process transaction data (invoices, receipts, journal
                  entries), customer and supplier details, and other financial
                  records required to generate accounting reports and electronic
                  invoices in line with applicable tax regulations.
                </p>
              </div>

              <h3 className="font-semibold">
                5.3 Affiliate &amp; referral systems
              </h3>
              <p>When you use our affiliate or referral modules, we process:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Affiliate profile information (name, contact, payment
                  details).
                </li>
                <li>
                  Referral links, campaign identifiers and tracking parameters.
                </li>
                <li>
                  Click and conversion events associated with affiliate links.
                </li>
                <li>
                  Commission calculations, payout history and tax documentation,
                  where applicable.
                </li>
              </ul>
              <p>
                Tracking is typically performed using cookies, unique link
                parameters and, in some cases, non‑intrusive fingerprinting
                techniques, in line with applicable law and platform policies.
              </p>

              <h3 className="font-semibold">
                5.4 AI Marketing, CDP and automation
              </h3>
              <p>The AI Marketing and CDP modules enable you to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Plan campaigns and content strategies.</li>
                <li>
                  Generate AI‑assisted content (captions, ad copy, email
                  sequences, blog posts).
                </li>
                <li>
                  Orchestrate automation flows (welcome journeys,
                  cart‑abandonment reminders, win‑back sequences).
                </li>
                <li>
                  Analyse cross‑channel performance across social networks,
                  websites, email and messaging platforms.
                </li>
              </ul>
              <p>
                These modules rely on Customer Data and Platform Data such as
                contact lists, event streams (page views, add‑to‑cart,
                purchases), interactions with campaigns and metadata from
                connected channels.
              </p>
            </div>
          </section>

          <section
            id="ai-marketing-integrations"
            className="mb-12 scroll-mt-32"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. AI MARKETING MODULE AND META / GOOGLE INTEGRATIONS
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                This section provides transparency for both users and platform
                reviewers (e.g. Meta App Review) about the permissions we
                request and how we use the data.
              </p>

              <h3 className="font-semibold">
                6.1 Meta (Facebook &amp; Instagram) permissions
              </h3>
              <p>
                When you connect your Meta Business account, we may request the
                following permissions (exact names may evolve as Meta updates
                its APIs):
              </p>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <p className="font-semibold">
                    pages_show_list and instagram_basic
                  </p>
                  <div className="pl-4 space-y-1">
                    <p>
                      <strong>Data accessed:</strong> List of Facebook Pages and
                      Instagram Business accounts you administer (Page/Account
                      name, ID, profile picture).
                    </p>
                    <p>
                      <strong>Purpose:</strong> To display an account selector
                      inside DSP.one so you can choose which Page(s) or
                      Instagram account(s) to connect for publishing and
                      analytics.
                    </p>
                    <p>
                      <strong>Minimisation:</strong> We only persist identifiers
                      for Pages/Accounts you explicitly connect. Pages you do
                      not choose are not stored.
                    </p>
                  </div>
                </li>

                <li>
                  <p className="font-semibold">
                    pages_manage_posts, pages_manage_metadata,
                    instagram_content_publish
                  </p>
                  <div className="pl-4 space-y-1">
                    <p>
                      <strong>Data accessed:</strong> Content drafts (captions,
                      media, hashtags) that you create or that are generated by
                      our AI based on your prompts.
                    </p>
                    <p>
                      <strong>Purpose:</strong> To publish and schedule posts on
                      your behalf when you click Publish, Schedule or configure
                      an automation rule.
                    </p>
                    <p>
                      <strong>Guarantees:</strong> We never post to your Pages
                      or profiles without a direct action from you or a
                      scheduled automation you configured. You can view, modify
                      or cancel queued posts from within the DSP.one interface.
                    </p>
                  </div>
                </li>

                <li>
                  <p className="font-semibold">
                    pages_read_engagement and read_insights
                  </p>
                  <div className="pl-4 space-y-1">
                    <p>
                      <strong>Data accessed:</strong> Aggregated metrics such as
                      reach, impressions, post clicks, reactions, comments,
                      shares and follower statistics.
                    </p>
                    <p>
                      <strong>Purpose:</strong> To power campaign dashboards and
                      content performance reports inside DSP.one so you can see
                      which posts and ads perform best without leaving our
                      platform.
                    </p>
                    <p>
                      <strong>Retention:</strong> We cache key metrics for
                      performance and refresh them periodically (for example
                      every 24 hours). We do not use this data for
                      user‑profiling unrelated to your account, and we do not
                      sell it to third parties.
                    </p>
                  </div>
                </li>

                <li>
                  <p className="font-semibold">
                    leads_retrieval (where applicable)
                  </p>
                  <div className="pl-4 space-y-1">
                    <p>
                      <strong>Data accessed:</strong> Lead forms submitted by
                      individuals via your Facebook or Instagram Lead Ads (e.g.
                      name, email, phone, custom questions).
                    </p>
                    <p>
                      <strong>Purpose:</strong> To push leads into your CRM or
                      CDP in real time so your sales team can follow up
                      promptly.
                    </p>
                    <p>
                      <strong>Handling:</strong> Leads are stored as part of
                      your Customer Data and are subject to your own privacy
                      notices towards the individuals.
                    </p>
                  </div>
                </li>
              </ol>

              <p>
                You may revoke these permissions at any time via Facebook’s
                Business Integrations settings or from within DSP.one’s
                integration settings.
              </p>

              <h3 className="font-semibold">6.2 Google and YouTube services</h3>
              <div className="pl-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>YouTube Data API</strong> – To upload videos you
                    create or manage in DSP.one to your YouTube channels and to
                    retrieve viewership statistics for reporting.
                  </li>
                  <li>
                    <strong>Google Ads API</strong> – To pull campaign metrics
                    (impressions, clicks, CPC, conversions) so that you can
                    analyse ad performance alongside other channels.
                  </li>
                  <li>
                    <strong>Google Analytics or GA4</strong> – To ingest website
                    and event data that you choose to share for CDP segmentation
                    and attribution analysis.
                  </li>
                </ul>
                <p>
                  We comply with the Google API Services User Data Policy and
                  use Google‑sourced data solely for providing the features you
                  configure.
                </p>
              </div>

              <h3 className="font-semibold">
                6.3 Generative AI and content ownership
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  We leverage advanced large‑language models (LLMs) and related
                  AI technologies to generate marketing content.
                </li>
                <li>
                  Your prompts may include high‑level descriptions of your
                  products, target audience and campaign goals.
                </li>
                <li>
                  We do not use your proprietary business data (such as private
                  customer lists or financial records) to train any public AI
                  models. Where we rely on external AI providers, we configure
                  them, where available, not to retain your data for model
                  training.
                </li>
                <li>
                  As between you and us, you retain any rights you may have in
                  AI Output generated for your campaigns. You are responsible
                  for reviewing AI Output before publication and ensuring it
                  complies with advertising laws, platform policies and your
                  internal guidelines.
                </li>
              </ul>
            </div>
          </section>

          <section id="purposes-legal-bases" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. PURPOSES AND LEGAL BASES FOR PROCESSING
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                We process personal data for the following purposes and under
                the legal bases described below (depending on which law applies
                in your jurisdiction):
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Providing and operating the Services</strong>
                  <div className="pl-4">
                    <p>
                      Creating and managing accounts, authenticating users,
                      providing customer support, enabling core features (order
                      management, HRM, CRM, accounting, AI Marketing,
                      dashboards, APIs).
                    </p>
                    <p>
                      <strong>Legal basis:</strong> Performance of a contract
                      with the Merchant; legitimate interests in operating our
                      platform.
                    </p>
                  </div>
                </li>
                <li>
                  <strong>
                    Processing transactions and fulfilling legal obligations
                  </strong>
                  <div className="pl-4">
                    <p>
                      Issuing invoices, recording payments, maintaining tax and
                      accounting records, complying with anti‑fraud and auditing
                      requirements.
                    </p>
                    <p>
                      <strong>Legal basis:</strong> Performance of contract;
                      compliance with legal obligations.
                    </p>
                  </div>
                </li>
                <li>
                  <strong>
                    Analytics, service improvement and product development
                  </strong>
                  <div className="pl-4">
                    <p>
                      Analysing Usage Data to understand how the Services are
                      used, identify problems, improve user experience and
                      develop new features. Generating anonymous or aggregated
                      statistics for internal reporting and benchmarking.
                    </p>
                    <p>
                      <strong>Legal basis:</strong> Legitimate interests in
                      improving and securing our Services.
                    </p>
                  </div>
                </li>
                <li>
                  <strong>Marketing and communication</strong>
                  <div className="pl-4">
                    <p>
                      Sending product updates, feature announcements,
                      newsletters or promotional offers to Merchant contacts,
                      where permitted.
                    </p>
                    <p>
                      <strong>Legal basis:</strong> Legitimate interests in
                      promoting our Services, or consent where required by
                      electronic‑communications laws. You can opt‑out at any
                      time.
                    </p>
                  </div>
                </li>
                <li>
                  <strong>Security, fraud prevention and compliance</strong>
                  <div className="pl-4">
                    <p>
                      Monitoring for suspicious activity, abuse or policy
                      violations, detecting and preventing fraud, spam and
                      unauthorised access and cooperating with lawful requests
                      from regulators or law‑enforcement agencies.
                    </p>
                    <p>
                      <strong>Legal basis:</strong> Legitimate interests in
                      securing our systems; compliance with legal obligations.
                    </p>
                  </div>
                </li>
                <li>
                  <strong>Processing on behalf of Merchants</strong>
                  <div className="pl-4">
                    <p>
                      When acting as a processor, we handle Customer Data
                      strictly to perform the Services requested by the Merchant
                      (for example, syncing orders, running campaign
                      automations, generating reports).
                    </p>
                    <p>
                      <strong>Legal basis:</strong> Performance of contract with
                      the Merchant; the Merchant itself is responsible for
                      identifying the legal basis vis‑à‑vis its end‑users.
                    </p>
                  </div>
                </li>
              </ul>
              <p>
                Where we rely on <strong>consent</strong> (e.g. for certain
                cookies or marketing communications), you may withdraw your
                consent at any time via the mechanisms provided in the Services
                or by contacting us.
              </p>
            </div>
          </section>

          <section id="data-sharing" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. DATA SHARING AND DISCLOSURE
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                We do <strong>not</strong> sell personal data to third parties.
                We only share information in the limited situations described
                below:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Sub‑processors and service providers</strong>
                  <p className="pl-4">
                    We engage trusted third parties to help us operate the
                    Services, such as Cloud infrastructure providers (e.g. AWS,
                    Google Cloud Platform); AI service providers (e.g. OpenAI)
                    to generate AI Output; workflow automation tools (e.g. n8n);
                    and email delivery, SMS, analytics and monitoring vendors.
                    These providers may access personal data only to perform
                    services on our behalf and are bound by contractual
                    confidentiality and security obligations.
                  </p>
                </li>
                <li>
                  <strong>User‑directed third‑party integrations</strong>
                  <p className="pl-4">
                    When you choose to connect DSP.one with external services
                    (shipping carriers, payment gateways, CRM tools, marketing
                    platforms), we share only the data necessary for the
                    integration to function (for example, order details with a
                    carrier to create a label). You control which integrations
                    are enabled.
                  </p>
                </li>
                <li>
                  <strong>Corporate transactions</strong>
                  <p className="pl-4">
                    In the context of a merger, acquisition, restructuring or
                    sale of assets, personal data may be transferred as part of
                    the transaction. In such cases we will ensure that the
                    receiving entity is bound by privacy commitments
                    substantially similar to this Policy.
                  </p>
                </li>
                <li>
                  <strong>Legal requirements and protection of rights</strong>
                  <p className="pl-4">
                    We may disclose information to competent authorities where
                    we believe it is necessary to comply with a legal
                    obligation, court order or regulatory request, or to protect
                    our rights, safety of users or the public.
                  </p>
                </li>
                <li>
                  <strong>Aggregated and de‑identified data</strong>
                  <p className="pl-4">
                    We may share anonymised or aggregated insights that do not
                    identify you or any individual, for example to publish
                    benchmark reports or demonstrate patterns in ecommerce or
                    marketing performance.
                  </p>
                </li>
              </ul>
            </div>
          </section>

          <section id="international-transfers" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. INTERNATIONAL DATA TRANSFERS
            </h2>
            <div className="text-gray-700 space-y-3">
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
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  using Standard Contractual Clauses approved by regulators;
                </li>
                <li>relying on adequacy decisions where applicable; and/or</li>
                <li>
                  ensuring that our sub‑processors implement robust technical
                  and organisational security measures and maintain relevant
                  certifications (such as ISO/IEC 27001).
                </li>
              </ul>
            </div>
          </section>

          <section id="data-retention" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. DATA RETENTION
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                We retain personal data only for as long as reasonably necessary
                to fulfil the purposes described in this Policy or as required
                by law.
              </p>
              <p>In general:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Active merchant accounts:</strong> Data is kept for
                  the duration of the subscription and for a reasonable period
                  thereafter to handle queries, backups and legal obligations.
                </li>
                <li>
                  <strong>
                    Access tokens for social‑media and other integrations:
                  </strong>{" "}
                  Stored only while the integration is active. When a token is
                  revoked or expires, we remove or render it unusable.
                </li>
                <li>
                  <strong>Financial and accounting records:</strong> Retained
                  for the period required by applicable tax and accounting laws
                  (for example up to 10 years in Viet Nam).
                </li>
                <li>
                  <strong>Logs and security records:</strong> Retained for
                  periods appropriate to support security investigations and
                  system integrity.
                </li>
              </ul>
              <p>
                When data is no longer needed, we will delete it or anonymise it
                so that individuals can no longer be identified. Following
                account termination, we may keep limited information in backup
                archives for a short period before it is overwritten, consistent
                with our backup policies.
              </p>
            </div>
          </section>

          <section id="security-measures" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. SECURITY MEASURES
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                We implement a <strong>defence‑in‑depth</strong> security
                strategy to safeguard personal data against unauthorised access,
                loss, misuse or alteration, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Encryption of data in transit using up‑to‑date TLS protocols,
                  and encryption of sensitive data at rest (such as passwords
                  and API tokens) using strong algorithms like AES‑256.
                </li>
                <li>
                  Role‑based access control (RBAC) and, where applicable,
                  multi‑factor authentication (MFA) for internal systems.
                </li>
                <li>
                  Principle of least privilege for employees and contractors,
                  with access granted only where necessary for their role.
                </li>
                <li>
                  Network‑level protections, firewalls and intrusion‑detection /
                  monitoring systems.
                </li>
                <li>
                  Secure development practices, vulnerability management and
                  regular security reviews.
                </li>
                <li>
                  Physical security protections offered by our data‑centre
                  providers, such as restricted access controls and 24/7
                  surveillance.
                </li>
              </ul>
              <p>
                While we strive to protect personal data, no system can be
                guaranteed 100% secure. In the event we become aware of a
                personal‑data breach that is likely to result in a high risk to
                individuals, we will notify affected Merchants and, where
                required, relevant authorities, and will cooperate to mitigate
                the impact.
              </p>
            </div>
          </section>

          <section id="cookies-tracking" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              12. COOKIES, PIXELS AND SIMILAR TECHNOLOGIES
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                We and our partners use cookies, web beacons, SDKs and similar
                technologies on our websites and, where configured by Merchants,
                on their own websites and landing pages.
              </p>
              <h3 className="font-semibold">12.1 Types of cookies we use</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Strictly necessary cookies</strong> – Required for
                  core functionality such as authentication, security and load
                  balancing. These cannot be disabled via cookie banners.
                </li>
                <li>
                  <strong>Functional cookies</strong> – Remember user
                  preferences such as language, time zone or interface settings.
                </li>
                <li>
                  <strong>Analytics cookies</strong> – Help us understand how
                  visitors use the Services (for example pages visited, time on
                  page, features used) so we can improve user experience. Tools
                  may include in‑house analytics and third‑party services such
                  as Google Analytics.
                </li>
                <li>
                  <strong>Marketing and affiliate cookies</strong> – Used in the
                  context of our affiliate/referral programmes and retargeting
                  campaigns to measure performance and attribute conversions.
                </li>
              </ul>
              <h3 className="font-semibold">12.2 Pixels and CDP tracking</h3>
              <p>
                The Omisell CDP and AI Marketing modules may use{" "}
                <strong>pixels or scripts</strong> placed on Merchant websites
                to track events such as page views, product views, add‑to‑cart,
                check‑out and purchases. These events feed into automation
                workflows, segmentation and attribution reporting.
              </p>
              <p>
                Merchants are responsible for informing their own visitors and
                customers that such tracking is in place and for obtaining any
                required consents under applicable laws (for example under
                ePrivacy or cookie regulations). You can manage cookie
                preferences through browser settings and, where provided, our
                cookie banner. Blocking certain cookies may affect
                functionality.
              </p>
            </div>
          </section>

          <section id="rights-controls" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              13. YOUR RIGHTS AND CONTROLS
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                Depending on your location and applicable law (for example GDPR
                in the EU/EEA, CCPA in California, PDP Decree 13 in Viet Nam),
                you may have some or all of the following rights regarding your
                personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Right of access</strong> – To obtain confirmation
                  whether we process your personal data and, if so, to receive a
                  copy.
                </li>
                <li>
                  <strong>Right to rectification</strong> – To request
                  correction of inaccurate or incomplete personal data.
                </li>
                <li>
                  <strong>Right to erasure</strong> – To request deletion of
                  personal data in certain circumstances (for example where it
                  is no longer needed, or where you withdraw consent).
                </li>
                <li>
                  <strong>Right to restriction of processing</strong> – To
                  request that we temporarily limit processing while a complaint
                  is investigated.
                </li>
                <li>
                  <strong>Right to data portability</strong> – To receive
                  personal data you provided in a structured, commonly used,
                  machine‑readable format and to request that we transmit it to
                  another controller, where technically feasible.
                </li>
                <li>
                  <strong>Right to object</strong> – To object to processing
                  based on legitimate interests or to direct marketing,
                  including profiling related to such marketing.
                </li>
                <li>
                  <strong>Right to withdraw consent</strong> – Where processing
                  is based on your consent, you can withdraw it at any time
                  without affecting the lawfulness of processing carried out
                  before the withdrawal.
                </li>
              </ul>
              <p>
                To exercise these rights, please contact us using the details in
                Section 2.3. We may need to verify your identity before acting
                on your request. If you are an end‑user of a Merchant, we may
                redirect your request to the relevant Merchant (data
                controller), and will support them in responding as required.
              </p>
              <h3 className="font-semibold">
                13.1 Managing third‑party connections (Facebook / Google)
              </h3>
              <p>
                You can control our access to your third‑party accounts at any
                time: In DSP.one go to <strong>Settings → Integrations</strong>{" "}
                and disconnect the relevant account (e.g. Facebook Page,
                Instagram, Google Ads). This will revoke stored tokens and stop
                further data sync. In the third‑party service use their Apps and
                Websites or Security → Third‑party access settings to remove
                DSP.one’s access.
              </p>
              <h3 className="font-semibold">
                13.2 Data‑deletion requests via Facebook
              </h3>
              <p>
                Remove the DSP.one app from your Facebook settings. Facebook
                will send us a signed callback notifying us of the removal. Our
                system will then locate the relevant user ID and schedule
                deletion of associated personal data within a reasonable period
                (typically within 24–30 days), retaining only minimal records
                where needed for legal or security purposes. Alternatively, you
                can email us directly with the subject &quot;Data Deletion
                Request&quot; and include sufficient information to identify
                your account.
              </p>
            </div>
          </section>

          <section id="childrens-data" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              14. CHILDREN’S DATA
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                Our Services are intended for use by businesses and
                professionals. We do not knowingly target or collect personal
                data from children under the age of 13 (or a higher age if
                required by local law) as primary users of the platform.
              </p>
              <p>
                Merchants using DSP.one to sell goods or services that may be
                purchased by minors are responsible for complying with all
                applicable child‑protection and consent requirements and for
                configuring their own data‑collection practices appropriately.
              </p>
              <p>
                If you believe that we have inadvertently collected personal
                data from a child without appropriate consent, please contact us
                and we will take steps to delete such data as required by law.
              </p>
            </div>
          </section>

          <section id="changes-policy" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              15. CHANGES TO THIS POLICY
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                We may update this Policy from time to time to reflect changes
                in technology, our Services, legal requirements or other
                factors.
              </p>
              <p>When we make material changes, we will:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  update the <strong>“Last Updated”</strong> date at the top of
                  this Policy; and
                </li>
                <li>
                  provide additional notice where appropriate, such as by email
                  to account owners or by prominent notice within the Services.
                </li>
              </ul>
              <p>
                Your continued use of the Services after the effective date of
                an updated Policy constitutes your acceptance of the changes. If
                you do not agree with the updated Policy, you should discontinue
                use of the Services and, where you are a Merchant, terminate
                your account in accordance with the Terms of Service.
              </p>
            </div>
          </section>

          <section id="contact-us" className="mb-12 scroll-mt-32">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              16. CONTACT US
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                If you have any questions, concerns or requests relating to this
                Policy or our handling of personal data, please contact us at:
              </p>
              <div className="bg-gray-50 border border-gray-100 p-4 rounded">
                <p className="font-semibold">UNIKSMART COMPANY</p>
                <p>
                  Floor 01, Building 232 Le Van Luong, Tan Hung Ward, District
                  7, Ho Chi Minh City, Viet Nam
                </p>
                <p>Email: hoc.thai@tienphongcds.com</p>
                <p>Hotline: (+84) 378 387 375</p>
                <p>
                  Website contact form: https://uniksmark.dsp.one/en#contact
                </p>
              </div>
              <p>
                By using the DSP.one Services, you acknowledge that you have
                read and understood this Master Privacy Policy and agree that
                your information may be processed as described herein.
              </p>
            </div>
          </section>

          <p className="text-sm text-gray-500 text-center">
            © 2025 Uniksmart Company. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
