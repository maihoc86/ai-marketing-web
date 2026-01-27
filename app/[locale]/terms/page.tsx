"use client";

import { FileText } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | DSP.ONE - Uniksmart",
  description:
    "Terms of service of DSP.ONE - Committed to providing clear and fair terms for our users.",
};

export default function TermsPage() {
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
        <div className="flex flex-col gap-12">
          {/* Main Content */}
          <div>
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

            {/* Section 23: Contact */}
            {/* Section 2: Scope of the Agreement */}
            <section id="scope" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#22b5f8]">
                2. SCOPE OF THE AGREEMENT
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  2.1 These Terms constitute a binding agreement between
                  Customer and DSP.one and govern Customer’s use of the
                  Services, except where Customer and DSP.one have signed a
                  separate written agreement that expressly supersedes these
                  Terms.
                </p>
                <p>
                  2.2 In the event of any conflict between these Terms and an
                  Order Form, the Order Form will prevail to the extent of the
                  conflict.
                </p>
                <p>
                  2.3 DSP.one may provide certain additional services (such as
                  consulting, training, custom integrations) under a separate
                  statement of work or professional services agreement. Unless
                  otherwise stated, those services are also subject to these
                  Terms.
                </p>
              </div>
            </section>

            {/* Section 3: Description of the Services */}
            <section id="services" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#22b5f8]">
                3. DESCRIPTION OF THE SERVICES
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  3.1 DSP.one provides a cloud‑based multi‑channel commerce and
                  marketing platform that enables Customer to manage products,
                  orders, customers, websites, online sales channels, and
                  marketing activities from a unified interface.
                </p>
                <p>3.2 The Services may include, without limitation:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Product catalogue, order and inventory management;</li>
                  <li>Customer and contact management (CRM‑style features);</li>
                  <li>Website and landing‑page creation and hosting;</li>
                  <li>
                    AI Marketing Module, including campaign planning,
                    AI‑assisted copywriting, recommendation of content,
                    scheduling and automation of posts and ads, and analysis of
                    results;
                  </li>
                  <li>
                    Integration with Third‑Party Platforms such as Meta (Pages,
                    Ads, Instagram), Google (Analytics, Ads), email and
                    messaging tools;
                  </li>
                  <li>Dashboards, analytics, reporting and metrics; and</li>
                  <li>
                    APIs and webhooks for programmatic access and integration
                    with other systems.
                  </li>
                </ul>
                <p>
                  3.3 DSP.one may update, enhance or modify modules and features
                  from time to time (for example, changing user interface
                  elements, adding new channels, or deprecating legacy
                  functionalities). Where a change materially reduces the core
                  functionality of a paid plan, DSP.one will give reasonable
                  prior notice to Customer, when practicable.
                </p>
                <p>
                  3.4 Certain new features, beta modules or experimental AI
                  capabilities may be labelled as “beta”, “preview”,
                  “experimental” or similar. Such features are provided for
                  evaluation only, may contain bugs or errors, may be subject to
                  additional terms or limitations, and may be changed or
                  discontinued at any time. DSP.one provides no service level or
                  performance commitments for beta features.
                </p>
              </div>
            </section>

            {/* Section 4: Account Registration and Security */}
            <section id="account" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#22b5f8]">
                4. ACCOUNT REGISTRATION AND SECURITY
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  4.1 To access the Services, Customer must create an Account
                  and provide accurate, current and complete information.
                  Customer must promptly update its Account information to keep
                  it accurate and complete.
                </p>
                <p>
                  4.2 Customer may create separate logins for its Authorized
                  Users up to the number permitted by the applicable
                  subscription plan. Each login is personal to one user and may
                  not be shared with any other individual.
                </p>
                <p>
                  4.3 Customer is responsible for maintaining the
                  confidentiality of all login credentials associated with its
                  Account and for all activities that occur under its Account,
                  whether or not authorised by Customer. Customer must ensure
                  that its Authorized Users keep their passwords secure and do
                  not disclose them to any third party, including DSP.one
                  personnel.
                </p>
                <p>
                  4.4 Customer must promptly notify DSP.one at the contact
                  details provided on the Website if it becomes aware of any
                  unauthorised access to or use of its Account, any compromise
                  of login credentials, or any other security incident related
                  to the Services.
                </p>
                <p>
                  4.5 DSP.one may suspend or disable any login credentials or
                  Account where DSP.one reasonably believes there has been or
                  may be unauthorised access or misuse of the Services, or where
                  required for security or legal reasons. DSP.one will, where
                  practicable, notify Customer in advance or as soon as
                  reasonably possible thereafter.
                </p>
              </div>
            </section>

            {/* Section 5: Orders, Subscription Term and Renewal */}
            <section id="subscription" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#22b5f8]">
                5. ORDERS, SUBSCRIPTION TERM AND RENEWAL
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  5.1 Customer’s subscription to the Services is specified in
                  the applicable Order Form or online plan selection. The
                  Subscription Term begins on the Effective Date or such other
                  start date set out in the Order Form.
                </p>
                <p>
                  5.2 Unless otherwise stated in the Order Form, subscriptions:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    run for the initial period selected by Customer (for
                    example, monthly, quarterly or annually); and
                  </li>
                  <li>
                    automatically renew for successive periods of the same
                    length (each a <b>“Renewal Term”</b>) unless either party
                    gives written notice of non‑renewal at least thirty (30)
                    days before the end of the then‑current Subscription Term.
                  </li>
                </ul>
                <p>
                  5.3 Customer may upgrade its subscription plan, add modules or
                  increase usage limits (for example, additional users, channels
                  or volumes) during a Subscription Term by placing a new Order
                  Form or changing plans via the Website. Unless otherwise
                  agreed, any such changes will be charged at the then‑current
                  rates and prorated for the remainder of the Subscription Term.
                </p>
                <p>
                  5.4 Downgrades or reductions of plan level may take effect
                  only at the start of the next Renewal Term and may require
                  prior notice as set out on the Website or in the Order Form.
                  Downgrading may result in loss of features, capacity or
                  Customer Content.
                </p>
                <p>
                  5.5 Customer is not entitled to cancel or terminate a
                  Subscription Term for convenience before its expiry except as
                  expressly permitted in these Terms or in the Order Form.
                </p>
              </div>
            </section>

            {/* Section 6: Fees, Billing and Payment */}
            <section id="fees" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#22b5f8]">
                6. FEES, BILLING AND PAYMENT
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  6.1 Customer shall pay all fees specified in the Order Form or
                  otherwise presented at the time of purchase
                  <b>(&quot;Fees&quot;)</b>. Fees are based on the Services
                  purchased, not actual usage, unless the applicable plan
                  explicitly states that usage‑based billing applies.
                </p>
                <p>6.2 Unless otherwise specified in the Order Form:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Fees are quoted and payable in the currency indicated on the
                    Website or Order Form;
                  </li>
                  <li>
                    Fees are exclusive of any applicable value‑added, sales,
                    use, or similar taxes <b>(&quot;Taxes&quot;)</b>. Customer
                    is responsible for all Taxes associated with its purchases,
                    except for taxes on DSP.one’s net income;
                  </li>
                  <li>
                    Fees for each Subscription Term are billed in advance and
                    are non‑refundable, except as expressly provided in these
                    Terms.
                  </li>
                </ul>
                <p>
                  6.3 Customer authorises DSP.one or its payment processing
                  provider to charge Customer’s designated payment method (such
                  as a credit card or bank account) for all Fees due. Customer
                  must provide accurate and current billing information and keep
                  this information up to date.
                </p>
                <p>
                  6.4 If Customer elects to pay by invoice, payment is due
                  within the payment term stated on the invoice, or, if none is
                  stated, within fourteen (14) calendar days from the invoice
                  date.
                </p>
                <p>
                  6.5 If Customer fails to pay any Fees when due, DSP.one may,
                  without limiting its other rights and remedies:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    charge late interest at the maximum rate permitted by law on
                    the unpaid amounts; and/or
                  </li>
                  <li>
                    suspend Customer’s access to some or all of the Services
                    until all outstanding amounts are paid.
                  </li>
                </ul>
                <p>
                  6.6 Customer may not withhold or set off any amounts due under
                  these Terms.
                </p>
                <p>
                  6.7 All amounts paid are non‑refundable and non‑cancellable,
                  except where these Terms expressly provide a refund right or
                  where required by applicable law.
                </p>
              </div>
            </section>

            {/* Section 7: Free Trials and Evaluation Use */}
            <section id="trial" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#22b5f8]">
                7. FREE TRIALS AND EVALUATION USE
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  7.1 DSP.one may offer Customer access to the Services or
                  certain modules on a free or reduced‑charge trial basis
                  <b>(&quot;Trial&quot;)</b>. DSP.one may determine the duration
                  and scope of any Trial at its sole discretion.
                </p>
                <p>
                  7.2 During a Trial, the Services are provided “as is” with no
                  warranties, support, service level commitments or data backup
                  obligations of any kind. DSP.one may terminate a Trial at any
                  time without notice.
                </p>
                <p>
                  7.3 At the end of the Trial, Customer’s access to the Trial
                  Services will automatically cease unless Customer purchases a
                  paid subscription. DSP.one may delete or anonymise any
                  Customer Content or Customer Data stored in Trial accounts
                  after a reasonable period, unless Customer converts to a paid
                  plan.
                </p>
              </div>
            </section>

            {/* Section 8: Customer Responsibilities */}
            <section id="responsibilities" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#22b5f8]">
                8. CUSTOMER RESPONSIBILITIES
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>8.1 Customer is responsible for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>the configuration and use of the Services;</li>
                  <li>
                    ensuring that its Authorized Users comply with these Terms
                    and with all applicable laws and regulations;
                  </li>
                  <li>
                    the accuracy, quality and legality of Customer Content and
                    Customer Data;
                  </li>
                  <li>
                    obtaining all rights, permissions and consents necessary to
                    collect, store and process Customer Data and to use the
                    Services (including any consents required under data
                    protection, privacy, electronic communications and marketing
                    laws);
                  </li>
                  <li>
                    compliance with the terms and policies of any Third‑Party
                    Platforms with which Customer uses the Services (for
                    example, Meta, Google, email providers, messaging
                    platforms).
                  </li>
                </ul>
                <p>8.2 Customer must not:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    use the Services in any way that is unlawful, harmful,
                    defamatory, infringing, invasive of privacy, offensive or
                    otherwise objectionable;
                  </li>
                  <li>
                    attempt to gain unauthorised access to the Services,
                    accounts, systems or networks of DSP.one or any third party;
                  </li>
                  <li>
                    interfere with or disrupt the integrity or performance of
                    the Services or underlying infrastructure;
                  </li>
                  <li>
                    reverse engineer, decompile, disassemble or attempt to
                    derive source code or underlying ideas from the Services,
                    except to the extent that such restriction is prohibited by
                    law;
                  </li>
                  <li>
                    use the Services to send unsolicited bulk communications
                    (spam) or to conduct abusive or deceptive advertising
                    practices; or
                  </li>
                  <li>
                    use the Services in any manner that would cause DSP.one to
                    violate applicable laws or third‑party rights.
                  </li>
                </ul>
                <p>
                  8.3 If DSP.one reasonably believes that Customer’s use of the
                  Services (a) violates these Terms, (b) poses a security risk,
                  (c) could subject DSP.one or any third party to liability, or
                  (d) is fraudulent or abusive, DSP.one may suspend or restrict
                  Customer’s access to the Services, in whole or in part.
                  DSP.one will, where practicable, provide prior notice and an
                  opportunity to cure.
                </p>
              </div>
            </section>

            {/* Section 9: Customer Content and Customer Data */}
            <section id="content" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#22b5f8]">
                9. CUSTOMER CONTENT AND CUSTOMER DATA
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  9.1 As between the parties, Customer retains all rights, title
                  and interest in and to Customer Content and Customer Data,
                  subject to the limited rights granted to DSP.one in this
                  Section.
                </p>
                <p>
                  9.2 Customer grants DSP.one and its Affiliates a worldwide,
                  non‑exclusive, royalty‑free licence, for the duration of the
                  Subscription Term, to host, store, copy, use, transmit,
                  display, perform and modify Customer Content and Customer Data
                  solely to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>provide, maintain, secure and improve the Services;</li>
                  <li>
                    fulfil DSP.one’s obligations under these Terms and any Order
                    Forms;
                  </li>
                  <li>
                    prevent or address service, security or technical issues;
                    and
                  </li>
                  <li>as otherwise instructed by Customer in writing.</li>
                </ul>
                <p>
                  9.3 Customer represents and warrants that it has obtained and
                  will maintain all permissions, consents and rights necessary
                  for DSP.one to process Customer Content and Customer Data
                  under these Terms, and that such processing will not violate
                  any applicable law or third‑party rights.
                </p>
                <p>
                  9.4 DSP.one does not monitor Customer Content or Customer Data
                  for legal compliance, and is not responsible for Customer
                  Content or Customer Data. Customer is solely responsible for
                  backing up and exporting its Customer Content and Customer
                  Data.
                </p>
                <p>
                  9.5 DSP.one may generate aggregated, de‑identified statistics,
                  metrics or insights derived from Customer’s use of the
                  Services <b>(“Aggregate Data”)</b>. Aggregate Data will not
                  identify Customer or any individual. DSP.one may use Aggregate
                  Data for its legitimate business purposes, including
                  analytics, Service improvement, and marketing, provided that
                  such use complies with applicable law.
                </p>
              </div>
            </section>

            {/* Section 10: AI‑Generated Content */}
            <section id="ai-content" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#22b5f8]">
                10. AI‑GENERATED CONTENT
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  10.1 The AI Marketing Module may generate content or
                  suggestions (such as ad copy, headlines, post captions,
                  campaign ideas) based on prompts, instructions or Customer
                  Content supplied by Customer <b>(“AI Output”)</b>.
                </p>
                <p>
                  10.2 As between the parties, and to the extent permitted by
                  law, DSP.one assigns to Customer any rights DSP.one may have
                  in AI Output generated specifically for Customer’s campaigns.
                  Customer is solely responsible for reviewing, verifying and
                  approving all AI Output before using it in production, and for
                  ensuring that AI Output complies with applicable laws,
                  platform policies, advertising standards and internal
                  guidelines.
                </p>
                <p>
                  10.3 AI Output may be inaccurate, incomplete, biased or
                  unsuitable for Customer’s purposes. DSP.one does not guarantee
                  that AI Output will be free from errors, infringement or legal
                  risk. Customer should not rely on AI Output as a substitute
                  for professional advice.
                </p>
                <p>
                  10.4 Customer must not prompt the AI Marketing Module with
                  personal data or other sensitive information unless it has a
                  lawful basis and has implemented appropriate safeguards.
                </p>
              </div>
            </section>

            {/* Section 11: Third‑Party Platforms and Integrations */}
            <section id="third-party" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#22b5f8]">
                11. THIRD‑PARTY PLATFORMS AND INTEGRATIONS
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  11.1 The Services may enable Customer to integrate with and
                  publish, sync or exchange data with Third‑Party Platforms,
                  such as Meta (Facebook/Instagram Pages and Ads), Google
                  Analytics or Ads, email services, messaging platforms and
                  CRM/CDP tools.
                </p>
                <p>
                  11.2 Customer’s use of any Third‑Party Platform is governed
                  solely by the terms and policies of that third party. DSP.one
                  does not control and is not responsible for Third‑Party
                  Platforms. DSP.one does not endorse and has no liability for
                  Third‑Party Platforms, their content, or how they use Customer
                  Data.
                </p>
                <p>
                  11.3 Customer is responsible for configuring integrations and
                  managing permissions and access tokens. Customer authorises
                  DSP.one to access, retrieve and process data from Third‑Party
                  Platforms on Customer’s behalf, and to send data to such
                  platforms, as necessary to provide the Services.
                </p>
                <p>
                  11.4 DSP.one may suspend or terminate integrations with any
                  Third‑Party Platform if the third party ceases to make the
                  integration available, if maintaining the integration would
                  impose significant cost or risk, or if required by law or by
                  the third party’s terms.
                </p>
                <p>
                  11.5 Customer acknowledges that use of the Services with
                  certain Third‑Party Platforms (for example Meta) may require
                  DSP.one to obtain and maintain approval for specific
                  permissions (such as access to lists of pages managed by the
                  user). DSP.one will use such permissions only to provide the
                  Services and will abide by the relevant platform policies.
                </p>
              </div>
            </section>

            {/* Section 12: Intellectual Property Rights */}
            <section id="ip" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#22b5f8]">
                12. INTELLECTUAL PROPERTY RIGHTS
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  12.1 Except for the limited rights expressly granted to
                  Customer in these Terms, DSP.one and its licensors retain all
                  rights, title and interest in and to the Services,
                  Documentation, Website, underlying software, algorithms, AI
                  models, user interface designs, trademarks, logos and all
                  related intellectual property rights.
                </p>
                <p>
                  12.2 Subject to Customer’s compliance with these Terms and
                  payment of all applicable Fees, DSP.one grants Customer a
                  limited, non‑exclusive, non‑transferable, non‑sublicensable
                  licence, during the Subscription Term, to access and use the
                  Services for Customer’s internal business purposes and in
                  accordance with these Terms and the Documentation.
                </p>
                <p>
                  12.3 Customer must not remove, obscure or alter any
                  proprietary notices displayed in the Services or
                  Documentation, or claim any ownership interest in the
                  Services.
                </p>
                <p>
                  12.4 If Customer provides feedback, comments, suggestions or
                  ideas regarding the Services <b>(“Feedback”)</b>, Customer
                  grants DSP.one a perpetual, irrevocable, worldwide,
                  royalty‑free licence to use, copy, modify, distribute and
                  otherwise exploit such Feedback for any purpose, without
                  restriction or obligation to Customer.
                </p>
              </div>
            </section>

            {/* Section 13: Confidentiality */}
            <section id="confidentiality" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#22b5f8]">
                13. CONFIDENTIALITY
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  13.1 Confidential Information. Each party{" "}
                  <b>(“Receiving Party”)</b>
                  may receive confidential or proprietary information from the
                  other party <b>(“Disclosing Party”)</b> in connection with
                  these Terms and the Services, including but not limited to
                  business plans, financial information, technical data, product
                  designs, security information and Customer Data{" "}
                  <b>(“Confidential Information”)</b>.
                </p>
                <p>
                  13.2 <b>Obligations.</b> The Receiving Party will:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    use Confidential Information solely for the purposes of
                    performing its obligations or exercising its rights under
                    these Terms;
                  </li>
                  <li>
                    protect the Confidential Information with at least the same
                    degree of care it uses to protect its own similar
                    information, and in no event less than reasonable care; and
                  </li>
                  <li>
                    not disclose Confidential Information to any third party
                    except to its Affiliates, employees, contractors and
                    professional advisers who need to know it and who are bound
                    by obligations of confidentiality at least as protective as
                    those in these Terms.
                  </li>
                </ul>
                <p>
                  13.3 <b>Exclusions.</b> Confidential Information does not
                  include information that:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    is or becomes publicly available through no breach of these
                    Terms by the Receiving Party;
                  </li>
                  <li>
                    was lawfully known to the Receiving Party before disclosure
                    by the Disclosing Party;
                  </li>
                  <li>
                    is received from a third party without breach of any duty of
                    confidentiality; or
                  </li>
                  <li>
                    is independently developed by the Receiving Party without
                    use of or reference to the Disclosing Party’s Confidential
                    Information.
                  </li>
                </ul>
                <p>
                  13.4 <b>Required disclosure.</b> The Receiving Party may
                  disclose Confidential Information to the extent required by
                  law or by a competent authority, provided that, where legally
                  permitted, it gives the Disclosing Party reasonable prior
                  notice and cooperates with any efforts to limit or challenge
                  the disclosure.
                </p>
                <p>
                  13.5 The obligations in this Section survive termination of
                  these Terms for so long as the information remains
                  confidential.
                </p>
              </div>
            </section>

            {/* Section 14: Data Protection and Security */}
            <section id="data-protection" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#22b5f8]">
                14. DATA PROTECTION AND SECURITY
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  14.1 Each party shall comply with applicable data protection
                  and privacy laws in relation to its processing of personal
                  data under these Terms.
                </p>
                <p>
                  14.2 Details about how DSP.one collects, uses and protects
                  personal data are set out in DSP.one’s <b>Privacy Policy</b>,
                  as amended from time to time and available on the Website. By
                  using the Services, Customer acknowledges the Privacy Policy.
                  In the event of a conflict between these Terms and the Privacy
                  Policy regarding data processing by DSP.one as a processor on
                  behalf of Customer, any applicable data processing agreement
                  between the parties will prevail.
                </p>
                <p>
                  14.3 DSP.one implements reasonable technical and
                  organisational security measures designed to protect Customer
                  Data against accidental or unlawful destruction, loss,
                  alteration, unauthorised disclosure or access. However, no
                  system is completely secure, and DSP.one cannot guarantee
                  absolute security.
                </p>
                <p>
                  14.4 If DSP.one becomes aware of a personal data breach
                  affecting Customer Data, DSP.one will notify Customer without
                  undue delay and will provide information and cooperation
                  reasonably requested by Customer, to the extent required under
                  applicable law.
                </p>
              </div>
            </section>

            {/* Section 15: Service Availability, Support and Changes */}
            <section id="availability" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#22b5f8]">
                15. SERVICE AVAILABILITY, SUPPORT AND CHANGES
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  15.1 DSP.one will use commercially reasonable efforts to make
                  the core components of the Services available in accordance
                  with any service level targets published on the Website or
                  agreed in writing. The Services may be temporarily unavailable
                  due to planned maintenance or unscheduled emergency
                  maintenance, either by DSP.one or by third‑party providers.
                </p>
                <p>
                  15.2 DSP.one provides standard technical support for the
                  Services through channels described on the Website (for
                  example, email or ticketing system) during normal business
                  hours in DSP.one’s main operating time zone, unless otherwise
                  agreed in writing.
                </p>
                <p>
                  15.3 DSP.one may modify the Services, Documentation or Website
                  from time to time to improve functionality, add features,
                  ensure security, or comply with applicable law or platform
                  requirements. If a modification materially reduces the core
                  functionality of a paid Service, DSP.one will provide
                  reasonable advance notice where practicable and, if Customer
                  does not agree to the modification, Customer may terminate the
                  affected Service as of the date the modification takes effect.
                </p>
              </div>
            </section>

            {/* Section 16: Term and Termination */}
            <section id="termination" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#22b5f8]">
                16. TERM AND TERMINATION
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  16.1 These Terms commence on the Effective Date and continue
                  for as long as Customer has an active Subscription Term,
                  unless terminated earlier in accordance with this Section.
                </p>
                <p>
                  16.2 Either party may terminate these Terms and all related
                  subscriptions for cause by giving written notice to the other
                  party if:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    the other party materially breaches these Terms and fails to
                    cure the breach within thirty (30) days after receiving
                    written notice describing the breach; or
                  </li>
                  <li>
                    the other party becomes insolvent, enters into bankruptcy,
                    liquidation or similar proceedings, or ceases to conduct
                    business in the ordinary course.
                  </li>
                </ul>
                <p>
                  16.3 DSP.one may terminate these Terms and Customer’s
                  subscriptions immediately upon written notice if:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Customer fails to pay undisputed Fees within thirty (30)
                    days after receiving a written reminder; or
                  </li>
                  <li>
                    DSP.one reasonably determines that Customer’s continued use
                    of the Services would cause significant legal or security
                    risk.
                  </li>
                </ul>
                <p>
                  16.4 Customer may terminate these Terms for convenience by
                  giving written notice of non‑renewal in accordance with
                  Section 5.2, effective at the end of the then‑current
                  Subscription Term.
                </p>
                <p>
                  16.5 Upon termination or expiry of these Terms or any
                  Subscription Term:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Customer’s right to access and use the terminated Services
                    will cease; and
                  </li>
                  <li>
                    Customer will promptly pay any outstanding Fees accrued up
                    to the effective date of termination.
                  </li>
                </ul>
                <p>
                  16.6 For a limited period after termination (for example
                  thirty (30) days), DSP.one may allow Customer to export or
                  download certain Customer Content or Customer Data, as
                  described in the Documentation. After such period, DSP.one may
                  delete or anonymise Customer Content and Customer Data from
                  its active systems, subject to any retention obligations under
                  law.
                </p>
                <p>
                  16.7 Sections that by their nature should survive termination
                  (including but not limited to payment obligations,
                  intellectual property, confidentiality, data protection,
                  limitations of liability, indemnities and governing law) shall
                  survive termination of these Terms.
                </p>
              </div>
            </section>

            {/* Section 17: Warranties and Disclaimers */}
            <section id="warranties" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#22b5f8]">
                17. WARRANTIES AND DISCLAIMERS
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  17.1 DSP.one warrants that, during the applicable Subscription
                  Term, the Services will operate in all material respects in
                  accordance with the Documentation, when used in accordance
                  with these Terms.
                </p>
                <p>
                  17.2 Customer’s exclusive remedy and DSP.one’s entire
                  liability for any breach of the warranty in Section 17.1 will
                  be, at DSP.one’s option and cost, either: (a) to repair or
                  modify the Services so that they conform to the warranty; or
                  (b) if DSP.one is unable to achieve such conformity within a
                  reasonable time, to permit Customer to terminate the affected
                  Service and receive a prorated refund of prepaid Fees for the
                  remainder of the Subscription Term for the affected Service.
                </p>
                <p>
                  17.3 Except as expressly provided in these Terms, the Services
                  and all related materials are provided “as is” and “as
                  available” without any warranties of any kind, whether
                  express, implied, statutory or otherwise. DSP.one specifically
                  disclaims any implied warranties of merchantability, fitness
                  for a particular purpose, non‑infringement, and any warranties
                  arising out of course of dealing or usage of trade.
                </p>
                <p>
                  17.4 DSP.one does not warrant that the Services will be
                  uninterrupted, error‑free, completely secure, or free of
                  harmful components, or that all defects will be corrected.
                </p>
                <p>17.5 Customer acknowledges that:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    data transmission over the internet and Third‑Party
                    Platforms involves inherent risks;
                  </li>
                  <li>
                    AI‑generated content may be inaccurate, incomplete or
                    inappropriate; and
                  </li>
                  <li>
                    Customer is solely responsible for verifying the accuracy
                    and legality of any outputs before relying on them.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 18: Limitation of Liability */}
            <section id="liability" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#22b5f8]">
                18. LIMITATION OF LIABILITY
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  18.1 To the maximum extent permitted by applicable law,
                  neither party will be liable for any indirect, incidental,
                  special, consequential, exemplary or punitive damages, or for
                  any loss of profits, revenue, goodwill, data or business
                  opportunities, arising out of or in connection with these
                  Terms or the use of or inability to use the Services, even if
                  advised of the possibility of such damages.
                </p>
                <p>
                  18.2 To the maximum extent permitted by applicable law, each
                  party’s aggregate total liability arising out of or in
                  connection with these Terms, whether in contract, tort
                  (including negligence), strict liability or otherwise, shall
                  not exceed the total Fees actually paid by Customer to DSP.one
                  for the Services giving rise to the claim during the twelve
                  (12) months immediately preceding the event giving rise to the
                  claim.
                </p>
                <p>
                  18.3 The limitations in this Section 18 do not apply to (a)
                  Customer’s payment obligations; (b) either party’s liability
                  for death or personal injury caused by its negligence; (c)
                  either party’s liability for fraud or wilful misconduct; or
                  (d) any other liability that cannot be excluded or limited by
                  applicable law.
                </p>
              </div>
            </section>

            {/* Section 19: Indemnification */}
            <section id="indemnification" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#22b5f8]">
                19. INDEMNIFICATION
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  19.1 <b>Customer indemnity.</b> Customer shall indemnify,
                  defend and hold harmless DSP.one and its Affiliates, and their
                  respective directors, officers, employees and agents, from and
                  against any claims, damages, losses, liabilities, costs and
                  expenses (including reasonable legal fees) arising out of or
                  relating to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Customer Content or Customer Data, including any allegation
                    that such content or data infringes, misappropriates or
                    violates any intellectual property right, privacy right or
                    other right of any person, or violates applicable law;
                  </li>
                  <li>
                    Customer’s use of the Services in violation of these Terms,
                    platform policies or applicable law; or
                  </li>
                  <li>
                    any communications, campaigns, advertisements or other
                    materials created or distributed by Customer using the
                    Services.
                  </li>
                </ul>
                <p>
                  19.2 <b>DSP.one indemnity for IP infringement.</b> DSP.one
                  shall defend Customer against any third‑party claim alleging
                  that Customer’s authorised use of the Services infringe any
                  intellectual property right of that third party, and shall
                  indemnify Customer for reasonable damages and costs finally
                  awarded by a court of competent jurisdiction or agreed in
                  settlement, provided that Customer:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>promptly notifies DSP.one in writing of the claim;</li>
                  <li>
                    gives DSP.one sole control of the defence and settlement of
                    the claim; and
                  </li>
                  <li>
                    provides all reasonable cooperation and assistance at
                    DSP.one’s expense.
                  </li>
                </ul>
                <p>
                  19.3 If a claim of infringement described in Section 19.2
                  occurs or in DSP.one’s reasonable opinion is likely to occur,
                  DSP.one may at its option and expense:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    procure for Customer the right to continue using the
                    Services; or
                  </li>
                  <li>
                    modify or replace the Services so that they become
                    non‑infringing while substantially preserving their
                    functionality; or
                  </li>
                  <li>
                    if the above options are not reasonably available, terminate
                    the affected Service and refund to Customer any prepaid Fees
                    for the unused portion of the Subscription Term for that
                    Service.
                  </li>
                </ul>
                <p>
                  19.4 DSP.one will have no liability under Section 19.2 for any
                  claim to the extent it arises from:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Customer Content or Customer Data;</li>
                  <li>
                    use of the Services in combination with hardware, software,
                    data or processes not provided by DSP.one, where the claim
                    would not have arisen but for such combination;
                  </li>
                  <li>
                    modifications to the Services made by anyone other than
                    DSP.one; or
                  </li>
                  <li>
                    use of the Services in breach of these Terms or the
                    Documentation.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 20: Force Majeure */}
            <section id="force-majeure" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#22b5f8]">
                20. FORCE MAJEURE
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Neither party will be liable for any failure or delay in
                  performing its obligations (other than payment obligations) to
                  the extent caused by events beyond its reasonable control,
                  including but not limited to natural disasters, wars, acts of
                  terrorism, civil disturbances, strikes, labour disputes,
                  failure of public utilities or telecommunications networks,
                  acts of government or regulatory bodies, or other events of a
                  similar nature <b>(“Force Majeure Events”)</b>. The affected
                  party shall promptly notify the other party and use
                  commercially reasonable efforts to mitigate the impact of the
                  Force Majeure Event.
                </p>
              </div>
            </section>

            {/* Section 21: Governing Law and Dispute Resolution */}
            <section id="governing-law" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#22b5f8]">
                21. GOVERNING LAW AND DISPUTE RESOLUTION
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  21.1 These Terms and any dispute, claim or controversy arising
                  out of or relating to them or to the Services shall be
                  governed by and construed in accordance with the laws of the
                  Socialist Republic of Viet Nam, without regard to its conflict
                  of laws principles.
                </p>
                <p>
                  21.2 The parties shall first attempt to resolve any dispute
                  amicably through good‑faith negotiations. If the parties are
                  unable to resolve the dispute within thirty (30) days, either
                  party may submit the dispute to the competent courts located
                  in Ho Chi Minh City, Viet Nam, which shall have exclusive
                  jurisdiction, without prejudice to any mandatory rights under
                  applicable law.
                </p>
              </div>
            </section>

            {/* Section 22: Miscellaneous */}
            <section id="miscellaneous" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#22b5f8]">
                22. MISCELLANEOUS
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  22.1 <b>Entire agreement.</b> These Terms, together with any
                  applicable Order Forms, data processing agreement, and
                  policies referenced in these Terms, constitute the entire
                  agreement between the parties regarding the subject matter
                  hereof and supersede all prior or contemporaneous agreements,
                  proposals or representations, whether written or oral.
                </p>
                <p>
                  22.2 <b>Amendments.</b> DSP.one may update these Terms from
                  time to time. When DSP.one makes material changes, it will
                  post the updated Terms on the Website and may notify Customer
                  by email or in‑app notice. The updated Terms will take effect
                  from the start of the next Renewal Term or earlier if Customer
                  accepts them (for example by clicking to accept or by
                  continuing to use the Services after notice). If Customer does
                  not agree to the updated Terms, Customer may terminate its
                  subscriptions as of the effective date of the changes by
                  giving written notice before that date.
                </p>
                <p>
                  22.3 <b>Assignment.</b> Customer may not assign, transfer or
                  delegate any of its rights or obligations under these Terms
                  without DSP.one’s prior written consent, except to an
                  Affiliate or in connection with a merger, acquisition or sale
                  of all or substantially all of Customer’s assets, provided
                  that the assignee agrees in writing to be bound by these
                  Terms. DSP.one may assign or transfer these Terms without
                  Customer’s consent to an Affiliate or in connection with a
                  corporate transaction.
                </p>
                <p>
                  22.4 <b>Independent contractors.</b> The parties are
                  independent contractors, and nothing in these Terms creates a
                  partnership, joint venture, agency or employment relationship
                  between the parties.
                </p>
                <p>
                  22.5 <b>Severability.</b> If any provision of these Terms is
                  held to be invalid or unenforceable, the remaining provisions
                  will remain in full force and effect, and the invalid or
                  unenforceable provision will be deemed modified to the minimum
                  extent necessary to make it valid and enforceable.
                </p>
                <p>
                  22.6 <b>No waiver.</b> The failure of either party to enforce
                  any right or provision of these Terms will not constitute a
                  waiver of such right or provision.
                </p>
                <p>
                  22.7 <b>Notices.</b> All notices under these Terms shall be in
                  writing and will be deemed given when delivered personally,
                  sent by reputable courier, or sent by email to the contact
                  details specified in the Order Form or on the Website.
                  Customer is responsible for keeping its contact information up
                  to date.
                </p>
                <p>
                  22.8 <b>Language.</b> These Terms are drafted in English. If
                  they are translated into another language, the English version
                  shall prevail in case of any conflict.
                </p>
              </div>
            </section>

            {/* Section 23: Contact */}
            <section id="contact" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#22b5f8]">
                23. CONTACT
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  If you have any questions about these Terms or the Services,
                  please contact DSP.one at:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <b>Company:</b> Uniksmart Company
                  </li>
                  <li>
                    <b>Email:</b> hoc.thai@tienphongcds.com
                  </li>
                  <li>
                    <b>Website:</b> https://uniksmark.dsp.one/en
                  </li>
                  <li>
                    <b>Address:</b> Floor 01, 232 Le Van Luong Street, Tan Hung
                    Ward, District 7, Ho Chi Minh City, Viet Nam.
                  </li>
                </ul>
              </div>
            </section>
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
