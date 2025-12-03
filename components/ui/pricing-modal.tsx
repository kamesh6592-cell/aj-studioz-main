'use client'

import React from 'react';
import { X } from 'lucide-react';
import { PricingInteraction } from './pricing-interaction';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PricingModal({ isOpen, onClose }: PricingModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-4xl mx-4 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-3xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-2">Choose Your Plan</h2>
              <p className="text-blue-100">Select the perfect plan for your AI chatbot needs</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Pricing Component */}
          <div className="flex justify-center mb-12">
            <PricingInteraction 
              starterMonth={29}
              starterAnnual={24}
              proMonth={99}
              proAnnual={79}
            />
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Free Plan Features */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Free Plan</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Up to 100 messages/month</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Basic AI responses</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Email support</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-400">✗</span>
                  <span className="text-gray-400">Advanced analytics</span>
                </li>
              </ul>
            </div>

            {/* Starter Plan Features */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 border-2 border-yellow-400 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-medium">
                  Popular
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Starter Plan</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Up to 5,000 messages/month</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Advanced AI responses</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Priority support</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Basic analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Custom branding</span>
                </li>
              </ul>
            </div>

            {/* Pro Plan Features */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Pro Plan</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Unlimited messages</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Premium AI models</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">24/7 phone support</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Advanced analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">API access</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">White-label solution</span>
                </li>
              </ul>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                  Can I upgrade or downgrade my plan anytime?
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Yes, you can change your plan at any time. Changes will be prorated and reflected in your next billing cycle.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                  What happens if I exceed my message limit?
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Your chatbot will continue to work, but additional messages will be charged at our overage rate. We'll notify you before you reach your limit.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                  Do you offer custom enterprise plans?
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Yes, we offer custom enterprise solutions with dedicated support, custom integrations, and volume discounts. Contact our sales team for more information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}