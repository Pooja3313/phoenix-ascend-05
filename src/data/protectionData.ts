export interface ServiceItem {
  slug: string;
  title: string;
  category: string;
  heroSubtitle: string;
  heroDescription: string;
  whyTitle: string;
  whyContent: string[];
  features: { title: string; description: string }[];
  ctaTitle: string;
  ctaDescription: string;
}

export const personalProtectionServices: ServiceItem[] = [
  {
    slug: "life-cover",
    title: "Life Cover",
    category: "Personal Protection",
    heroSubtitle: "Protection",
    heroDescription: "Protect your family's financial future with comprehensive life insurance that provides a tax-free lump sum or regular income upon death, ensuring your loved ones are supported when they need it most.",
    whyTitle: "Why Choose Phoenix Finserv for Life Cover?",
    whyContent: [
      "Life cover is one of the most important financial decisions you can make. It ensures that if the worst were to happen, your family would be financially supported. Whether you're looking to cover a mortgage, provide for dependants, or leave a financial legacy, life cover gives you peace of mind.",
      "At Phoenix Finserv, we take the time to understand your personal circumstances and help you find a policy that offers the right level of cover at a price that works for you. We work with a wide range of leading UK insurers to ensure you get the best possible deal.",
      "Our advisers will guide you through the different types of life cover available — including level term, decreasing term, whole of life, and family income benefit — and help you choose the option that best suits your needs."
    ],
    features: [
      { title: "Level Term Life Insurance", description: "A fixed payout amount throughout the policy term, ideal for protecting your family against the unexpected." },
      { title: "Decreasing Term Life Insurance", description: "Cover that reduces over time, typically used alongside a repayment mortgage to ensure the loan is paid off if you pass away." },
      { title: "Whole of Life Insurance", description: "Lifetime cover that guarantees a payout whenever you pass away, providing certainty for your loved ones and estate planning." },
      { title: "Family Income Benefit", description: "Provides a regular tax-free income to your family rather than a lump sum, helping them maintain their standard of living." },
    ],
    ctaTitle: "Looking for Life Cover?",
    ctaDescription: "Our advisers are experienced in helping individuals and families find the right life cover. Contact us today for a free, no-obligation consultation."
  },
  {
    slug: "critical-illness",
    title: "Critical Illness Cover",
    category: "Personal Protection",
    heroSubtitle: "Protection",
    heroDescription: "Receive a tax-free lump sum if you're diagnosed with a specified critical illness, helping you focus on recovery without the added stress of financial worries.",
    whyTitle: "Why Choose Phoenix Finserv for Critical Illness Cover?",
    whyContent: [
      "A critical illness can strike at any time, and the financial impact can be devastating. Critical illness cover provides a tax-free lump sum payment if you're diagnosed with one of a specified list of serious conditions, such as cancer, heart attack, or stroke.",
      "This money can be used however you choose — to pay off your mortgage, cover medical expenses, fund lifestyle changes, or simply to give you breathing space while you focus on your recovery.",
      "At Phoenix Finserv, we help you navigate the complexities of critical illness policies. We compare plans from leading UK insurers and explain the key differences, so you can make an informed decision about your protection."
    ],
    features: [
      { title: "Standalone Critical Illness", description: "A dedicated policy that pays out a lump sum on diagnosis of a covered condition, independent of any life cover." },
      { title: "Combined Life & Critical Illness", description: "A single policy that covers both life insurance and critical illness, offering comprehensive protection at a competitive price." },
      { title: "Children's Critical Illness", description: "Some policies include free cover for your children, protecting the whole family against the financial impact of a serious diagnosis." },
      { title: "Enhanced Cover Options", description: "Access policies that cover a wider range of conditions and offer additional benefits such as second opinion services and rehabilitation support." },
    ],
    ctaTitle: "Need Critical Illness Cover?",
    ctaDescription: "Protect yourself and your family from the financial impact of a serious illness. Speak to our advisers today for expert guidance."
  },
  {
    slug: "income-protection",
    title: "Income Protection",
    category: "Personal Protection",
    heroSubtitle: "Protection",
    heroDescription: "Replace a portion of your income if you're unable to work due to illness or injury, ensuring your financial commitments are met during the most difficult times.",
    whyTitle: "Why Choose Phoenix Finserv for Income Protection?",
    whyContent: [
      "Your income is your most valuable asset. If illness or injury prevents you from working, income protection insurance ensures you still receive a regular monthly payment — typically between 50% and 70% of your gross salary — until you're able to return to work or reach retirement age.",
      "Unlike critical illness cover, which pays a one-off lump sum, income protection provides ongoing financial support for as long as you're unable to work. This makes it an essential part of any comprehensive financial plan.",
      "At Phoenix Finserv, we help you find an income protection policy that fits your budget and provides the level of cover you need. We explain the different options available, including short-term and long-term policies, and help you understand deferred periods, benefit amounts, and policy terms."
    ],
    features: [
      { title: "Long-Term Income Protection", description: "Pays out until you return to work, reach retirement age, or the policy ends — providing sustained financial security." },
      { title: "Short-Term Income Protection", description: "Covers you for a defined period (typically 1-2 years), ideal if you want lower premiums or have other savings to fall back on." },
      { title: "Own Occupation Cover", description: "Pays out if you're unable to perform your specific job, offering the strongest level of protection for professionals." },
      { title: "Day One Cover", description: "Some policies can be arranged to pay from the first day of incapacity, though most have a deferred period to keep premiums affordable." },
    ],
    ctaTitle: "Looking for Income Protection?",
    ctaDescription: "Don't leave your income unprotected. Our advisers can help you find the right policy to safeguard your finances if you're unable to work."
  },
];

export const businessProtectionServices: ServiceItem[] = [
  {
    slug: "keyman-cover",
    title: "Keyman Cover",
    category: "Business Protection",
    heroSubtitle: "Business Protection",
    heroDescription: "Protect your business against the financial impact of losing a key employee. Keyman cover ensures business continuity and stability when it matters most.",
    whyTitle: "Why Choose Phoenix Finserv for Keyman Cover?",
    whyContent: [
      "Every business has individuals whose skills, knowledge, or leadership are critical to its success. If one of these key people were to become seriously ill or pass away, the impact on the business could be devastating — from lost revenue and client relationships to difficulty meeting financial commitments.",
      "Keyman cover (also known as key person insurance) provides a financial safety net, paying out a lump sum that can be used to cover the costs of finding and training a replacement, repaying business debts, or simply keeping the business afloat during a difficult period.",
      "At Phoenix Finserv, we help businesses of all sizes assess their exposure to key person risk and find appropriate cover. We work with leading insurers to ensure you get comprehensive protection at a competitive price."
    ],
    features: [
      { title: "Death Cover", description: "Pays out a lump sum if your key person passes away, helping the business manage the financial impact and fund recruitment costs." },
      { title: "Critical Illness Cover", description: "Provides a payout if your key person is diagnosed with a serious illness, giving your business the resources to adapt and continue operating." },
      { title: "Revenue Protection", description: "Cover can be structured to replace lost revenue attributable to the key person, helping maintain cash flow during the transition period." },
      { title: "Loan & Debt Protection", description: "Ensures that any business loans or financial commitments tied to the key person can be repaid if they are no longer able to contribute." },
    ],
    ctaTitle: "Need Keyman Cover for Your Business?",
    ctaDescription: "Protect your business from the unexpected. Our advisers can help you assess your key person risk and find the right level of cover."
  },
  {
    slug: "shareholder-protection",
    title: "Shareholder Protection",
    category: "Business Protection",
    heroSubtitle: "Business Protection",
    heroDescription: "Ensure business continuity and financial security in unforeseen events. Shareholder protection provides the means to buy out a deceased or critically ill partner's shares.",
    whyTitle: "Why Choose Phoenix Finserv for Shareholder Protection?",
    whyContent: [
      "If a business partner or shareholder were to die or become critically ill, without proper planning their shares could pass to someone outside the business — potentially a family member with no interest in or knowledge of the company. This could create serious problems for the remaining shareholders.",
      "Shareholder protection insurance, combined with a suitable legal agreement, ensures that the remaining shareholders have the funds to purchase the outgoing shareholder's shares at an agreed value, while the deceased's family receives fair compensation.",
      "At Phoenix Finserv, we work with business owners to put the right shareholder protection arrangements in place. We help you understand the options available and connect you with specialist legal advisers to draft the necessary agreements."
    ],
    features: [
      { title: "Cross Option Agreement", description: "A legal arrangement that gives surviving shareholders the option to buy, and the deceased's estate the option to sell, the shares at an agreed price." },
      { title: "Life Cover for Shareholders", description: "Each shareholder takes out a life policy for the value of their shares, ensuring funds are available when needed." },
      { title: "Critical Illness Add-On", description: "Extends protection to cover shareholders who are diagnosed with a critical illness, not just those who pass away." },
      { title: "Business Valuation Support", description: "We help you establish a fair market value for the shares, ensuring all parties are treated equitably." },
    ],
    ctaTitle: "Need Shareholder Protection?",
    ctaDescription: "Protect your business partnership with the right agreements and insurance in place. Speak to our advisers today."
  },
  {
    slug: "relevant-life-cover",
    title: "Relevant Life Cover",
    category: "Business Protection",
    heroSubtitle: "Business Protection",
    heroDescription: "Tax-efficient life insurance for company directors and employees. A cost-effective way for businesses to provide death-in-service benefits outside of a registered group life scheme.",
    whyTitle: "Why Choose Phoenix Finserv for Relevant Life Cover?",
    whyContent: [
      "Relevant life cover is a tax-efficient way for employers to provide life insurance for individual employees or directors. Premiums are paid by the company and are typically treated as an allowable business expense for corporation tax purposes, while the benefit is not treated as a P11D benefit for the employee.",
      "This makes it an attractive alternative to group life schemes, particularly for small businesses with just one or two directors, or for high-earning employees who may exceed the lifetime allowance for pension contributions.",
      "At Phoenix Finserv, we help businesses understand the tax advantages of relevant life cover and find the most suitable policy for their needs. We ensure the arrangements are set up correctly to maximise the tax benefits for both the company and the individual."
    ],
    features: [
      { title: "Corporation Tax Relief", description: "Premiums are usually deductible as a business expense, reducing your company's tax bill." },
      { title: "No P11D Benefit", description: "The employee doesn't pay income tax or National Insurance on the premiums, making it genuinely tax-free cover." },
      { title: "Written in Trust", description: "Policies are automatically written into trust, ensuring fast and tax-efficient payment to the employee's beneficiaries." },
      { title: "Flexible Cover Levels", description: "Cover can be tailored to the individual's salary and circumstances, with no requirement for a minimum number of employees." },
    ],
    ctaTitle: "Looking for Relevant Life Cover?",
    ctaDescription: "Provide tax-efficient life cover for your directors and employees. Contact our advisers to find out how your business can benefit."
  },
  {
    slug: "business-loan-protection",
    title: "Business Loan Protection",
    category: "Business Protection",
    heroSubtitle: "Business Protection",
    heroDescription: "Provides financial protection against losses, legal claims and property damage. Ensure your business loans are covered if a key individual passes away or becomes critically ill.",
    whyTitle: "Why Choose Phoenix Finserv for Business Loan Protection?",
    whyContent: [
      "Many business owners take out personal guarantees when securing business loans. If the guarantor were to die or become critically ill, the lender could call in the debt, putting the business and the individual's family at serious financial risk.",
      "Business loan protection insurance ensures that if the worst happens, the loan can be repaid in full, protecting both the business and the guarantor's personal assets and family.",
      "At Phoenix Finserv, we help business owners identify their loan protection needs and find appropriate cover. We assess the level of outstanding debt, the terms of any personal guarantees, and recommend a policy that provides the right level of protection."
    ],
    features: [
      { title: "Loan Repayment Cover", description: "Ensures outstanding business loans are repaid if the guarantor dies or is diagnosed with a critical illness." },
      { title: "Personal Guarantee Protection", description: "Protects the personal assets of directors who have provided guarantees for business borrowing." },
      { title: "Decreasing or Level Cover", description: "Choose between cover that reduces in line with the loan balance or remains fixed throughout the term." },
      { title: "Multiple Loan Cover", description: "Policies can be structured to cover multiple loans and financial commitments under a single arrangement." },
    ],
    ctaTitle: "Need Business Loan Protection?",
    ctaDescription: "Don't let a business loan become a personal liability. Our advisers can help you find the right protection for your business borrowing."
  },
];

export const homeInsuranceServices: ServiceItem[] = [
  {
    slug: "buildings-and-contents",
    title: "Buildings & Contents Insurance",
    category: "Home Insurance",
    heroSubtitle: "Home Insurance",
    heroDescription: "Protect your home and everything in it with comprehensive buildings and contents insurance. Cover your property structure and personal belongings against damage, theft and unexpected events.",
    whyTitle: "Why Choose Phoenix Finserv for Home Insurance?",
    whyContent: [
      "Your home is likely your most valuable asset, and protecting it should be a priority. Buildings insurance covers the structure of your home — walls, roof, floors, and permanent fixtures — against risks such as fire, flood, subsidence, and storm damage. Contents insurance protects your personal belongings, from furniture and electronics to jewellery and clothing.",
      "Many homeowners are underinsured because they underestimate the cost of rebuilding their home or replacing their possessions. At Phoenix Finserv, we help you assess the true value of your property and belongings to ensure you have adequate cover.",
      "We work with leading UK insurers to find competitive home insurance policies that provide comprehensive protection. Whether you're a homeowner, landlord, or tenant, we can help you find the right policy for your needs."
    ],
    features: [
      { title: "Buildings Insurance", description: "Covers the cost of repairing or rebuilding your home if it's damaged by an insured event such as fire, flood, storm or subsidence." },
      { title: "Contents Insurance", description: "Protects your personal belongings inside the home against theft, accidental damage, fire and other covered events." },
      { title: "Combined Policies", description: "Get both buildings and contents cover in a single policy for convenience and often a better price than buying separately." },
      { title: "Accidental Damage Cover", description: "Optional add-on that covers unexpected damage to your home and belongings, such as spilling paint on a carpet or putting your foot through the ceiling." },
    ],
    ctaTitle: "Looking for Home Insurance?",
    ctaDescription: "Protect your home and belongings with comprehensive insurance cover. Speak to our advisers today for a tailored quote."
  },
];

export const allProtectionServices = [
  ...personalProtectionServices,
  ...businessProtectionServices,
  ...homeInsuranceServices,
];
