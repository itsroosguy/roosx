import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PRICING_TIERS } from '../data/agencyData';
import { Check, ArrowRight, DollarSign } from 'lucide-react';

interface PricingProps {
  onOpenInquiry: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenInquiry }) => {
  const [annualBilling, setAnnualBilling] = useState(false);

  return (
    <section id="pricing" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-sky-200 text-xs font-semibold text-sky-700 mb-4 bg-white">
            <DollarSign className="w-3.5 h-3.5" /> Transparent Investment
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900">
            Simple, Transparent <span className="text-gradient">Engagement Models</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Choose the model that fits your product trajectory. Zero hidden fees, clear milestones.
          </p>

          {/* Monthly / Annual Billing Toggle */}
          <div className="mt-8 inline-flex items-center gap-4 glass-card p-1.5 rounded-full border border-slate-200 bg-white">
            <button
              onClick={() => setAnnualBilling(false)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                !annualBilling ? 'bg-slate-900 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setAnnualBilling(true)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-2 ${
                annualBilling ? 'bg-slate-900 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Annual Partnership</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-purple-100 text-purple-800 font-bold uppercase border border-purple-200">
                Save 15%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier, idx) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-card rounded-3xl p-8 border flex flex-col justify-between relative overflow-hidden transition-all duration-300 bg-white ${
                tier.popular
                  ? 'border-purple-600 ring-2 ring-purple-600/20 shadow-2xl scale-105 z-10'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 left-0 bg-gradient-to-r from-purple-600 to-sky-600 py-1 text-center text-[11px] font-bold uppercase tracking-wider text-white">
                  ★ Most Popular Engagement
                </div>
              )}

              <div>
                {/* Tier Title & Tagline */}
                <div className="pt-2">
                  <h3 className="font-display text-2xl font-bold text-slate-900">
                    {tier.name}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 min-h-[36px]">
                    {tier.tagline}
                  </p>
                </div>

                {/* Price Display */}
                <div className="my-6 pt-6 border-t border-slate-100">
                  <span className="font-display text-4xl font-extrabold text-slate-900">
                    {annualBilling ? tier.priceAnnual : tier.priceMonthly}
                  </span>
                  <span className="text-xs text-slate-500 font-mono"> / engagement</span>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                      <Check className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={onOpenInquiry}
                className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                  tier.popular
                    ? 'bg-slate-900 text-white shadow-lg hover:bg-purple-700 hover:scale-105 active:scale-95'
                    : 'glass-card border border-slate-200 text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span>{tier.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
