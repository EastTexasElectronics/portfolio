// src/components/CaseStudyTool/pricing.tsx
'use client';

import React, { useState } from 'react';

interface Plan {
  name: string;
  creditsPerMonth: number;
  discountPercentage: number;
  features: string[];
}

interface CreditOption {
  credits: number;
  discountPercentage: number;
}

const BASE_SUBSCRIPTION_FEE = 0.99;
const COST_PER_10_CREDITS = 3.99;

const plans: Plan[] = [
  {
    name: 'Basic Plan',
    creditsPerMonth: 0,
    discountPercentage: 15,
    features: [
      'Access to the platform',
      '0 credits included, credits must be purchased separately',
    ],
  },
  {
    name: 'Standard Plan',
    creditsPerMonth: 20,
    discountPercentage: 15,
    features: ['20 credits per month', 'Full platform access', 'Basic support'],
  },
  {
    name: 'Premium Plan',
    creditsPerMonth: 40,
    discountPercentage: 20,
    features: ['40 credits per month', 'Full platform access', 'Priority support'],
  },
];

const creditOptions: CreditOption[] = [
  {
    credits: 10,
    discountPercentage: 0,
  },
  {
    credits: 50,
    discountPercentage: 10,
  },
  {
    credits: 100,
    discountPercentage: 25,
  },
];

const calculateMonthlyPrice = (credits: number) => {
  const creditCost = (credits / 10) * COST_PER_10_CREDITS;
  return BASE_SUBSCRIPTION_FEE + creditCost;
};

const calculateYearlyPrice = (creditsPerMonth: number, discountPercentage: number) => {
  const monthlyPrice = calculateMonthlyPrice(creditsPerMonth);
  const yearlyPrice = monthlyPrice * 12;
  const discountAmount = (yearlyPrice * discountPercentage) / 100;
  return Math.round((yearlyPrice - discountAmount) * 100) / 100;
};

const calculateDiscountedPrice = (basePrice: number, discountPercentage: number) => {
  const discountAmount = (basePrice * discountPercentage) / 100;
  return Math.round((basePrice - discountAmount) * 100) / 100;
};

const calculatePricePerCaseStudy = (credits: number, basePrice: number) => {
  return Math.round((basePrice / (credits / 10)) * 100) / 100;
};

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const toggleBillingCycle = () => {
    setBillingCycle((prev) => (prev === 'monthly' ? 'yearly' : 'monthly'));
  };

  const basicPlanMonthlyPrice = calculateMonthlyPrice(0);

  return (
    <section className="bg-neutral-800 text-neutral-200 py-12">
      <div className="max-w-6xl mx-auto p-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Subscription Plans</h2>

        <div className="flex justify-center mb-8">
          <button
            onClick={toggleBillingCycle}
            className="bg-neutral-700 text-white px-4 py-2 rounded-full focus:outline-none flex items-center"
          >
            {billingCycle === 'monthly' ? 'Switch to Yearly Billing' : 'Switch to Monthly Billing'}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {plans.map((plan) => {
            const monthlyPrice = calculateMonthlyPrice(plan.creditsPerMonth);
            const yearlyPrice = calculateYearlyPrice(plan.creditsPerMonth, plan.discountPercentage);
            const savings = (monthlyPrice * 12) - yearlyPrice;
            const pricePerCaseStudy = plan.creditsPerMonth > 0
              ? calculatePricePerCaseStudy(plan.creditsPerMonth * 12, yearlyPrice)
              : calculatePricePerCaseStudy(10, COST_PER_10_CREDITS); // For basic plan, use credit option price
            const savingsComparedToBasic = monthlyPrice - basicPlanMonthlyPrice;
            return (
              <div key={plan.name} className="p-6 bg-neutral-900 rounded-lg shadow-lg relative flex flex-col justify-between">
                <div>
                  <div className="absolute top-0 right-0 p-2 bg-fuchsia-600 text-white rounded-bl-lg text-xs font-semibold">
                    {billingCycle === 'monthly' ? 'MONTHLY' : 'YEARLY'}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 mt-8">{plan.name}</h3>
                  <p className="text-neutral-400 mb-6">{plan.features.join(', ')}</p>
                  {billingCycle === 'yearly' && (
                    <p className="text-xl font-semibold text-neutral-500 line-through">
                      ${Math.round(monthlyPrice * 12 * 100) / 100}
                    </p>
                  )}
                  <p className="text-4xl font-bold">
                    ${billingCycle === 'monthly' ? monthlyPrice.toFixed(2) : yearlyPrice.toFixed(2)}
                  </p>
                  {billingCycle === 'yearly' && (
                    <p className="mt-2 text-sm text-green-400">
                      Save ${savings.toFixed(2)} ({plan.discountPercentage}% off)
                    </p>
                  )}
                  {billingCycle === 'monthly' && plan.creditsPerMonth > 0 && (
                    <p className="mt-2 text-sm text-green-400">
                      Save ${savingsComparedToBasic.toFixed(2)} compared to Basic Plan
                    </p>
                  )}
                  {plan.creditsPerMonth > 0 ? (
                    <p className="mt-2 text-sm text-neutral-400">
                      {plan.creditsPerMonth * 12 / 10} case studies - ${pricePerCaseStudy.toFixed(2)} per case study
                    </p>
                  ) : (
                    <p className="mt-2 text-sm text-neutral-400">
                      0 case studies - ${pricePerCaseStudy.toFixed(2)} per case study
                    </p>
                  )}
                  <ul className="mt-6 space-y-2 text-sm text-neutral-400">
                    {plan.features.map((feature, index) => (
                      <li key={index}>✔️ {feature}</li>
                    ))}
                  </ul>
                </div>
                <button className="mt-8 w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white py-2 rounded-full">
                  Get the {plan.name}
                </button>
              </div>
            );
          })}
        </div>

        {/* Credit Pricing Section */}
        <h2 className="text-3xl font-bold mt-12 mb-8">Credit Pricing</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {creditOptions.map((option) => {
            const basePrice = (option.credits / 10) * COST_PER_10_CREDITS;
            const discountedPrice = calculateDiscountedPrice(basePrice, option.discountPercentage);
            const savings = basePrice - discountedPrice;
            const pricePerCaseStudy = calculatePricePerCaseStudy(option.credits, discountedPrice);
            return (
              <div key={option.credits} className="p-6 bg-neutral-900 rounded-lg shadow-lg flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-4">{option.credits} Credits</h3>
                  {option.discountPercentage > 0 && (
                    <p className="text-xl font-semibold text-neutral-500 line-through">
                      ${basePrice.toFixed(2)}
                    </p>
                  )}
                  <p className="text-4xl font-bold">${discountedPrice.toFixed(2)}</p>
                  {option.discountPercentage > 0 && (
                    <p className="mt-2 text-sm text-green-400">
                      Save ${savings.toFixed(2)} ({option.discountPercentage}% off)
                    </p>
                  )}
                  <p className="mt-2 text-sm text-neutral-400">
                    {Math.floor(option.credits / 10)} case studies - ${pricePerCaseStudy.toFixed(2)} per case study
                  </p>
                </div>
                <button className="mt-8 w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white py-2 rounded-full">
                  Purchase {option.credits} Credits
                </button>
              </div>
            );
          })}
        </div>

        {/* Credit Usage Section */}
        <h2 className="text-3xl font-bold mt-12 mb-8">Credit Usage</h2>
        <div className="p-6 bg-neutral-900 rounded-lg shadow-lg text-left max-w-4xl mx-auto">
          <p className="mb-4 text-lg font-semibold">How Credits are Used</p>
          <p className="mb-4">Case Study Generation: <strong>10 credits per case study.</strong></p>
          <p className="mb-4">Revisions: <strong>2 credits per revision</strong>, up to 5 revisions.</p>
          <p>After 5 revisions, users must either:</p>
          <ul className="list-disc list-inside mt-2 space-y-2 text-sm text-neutral-400">
            <li>Create a new case study (<strong>10 credits</strong>)</li>
            <li>Pay an additional 10 credits to allow further revisions on the existing case study.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
