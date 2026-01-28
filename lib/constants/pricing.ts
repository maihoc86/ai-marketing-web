// Shared pricing constants and helpers
export const VND_RATE = 25000; // use 25,000 per USD for monthly conversion

export const PRICING_USD = {
  starter: 499,
  business: 799,
} as const;

export function usdToVnd(usd: number) {
  return usd * VND_RATE;
}

export const SHARED_PRICING_PLANS = [
  {
    id: "starter",
    priceUSD: PRICING_USD.starter,
    priceVND: usdToVnd(PRICING_USD.starter),
  },
  {
    id: "business",
    priceUSD: PRICING_USD.business,
    priceVND: usdToVnd(PRICING_USD.business),
  },
];

const pricingConstants = {
  VND_RATE,
  PRICING_USD,
  usdToVnd,
  SHARED_PRICING_PLANS,
};

export default pricingConstants;
