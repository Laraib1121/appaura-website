import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const plans = [
  {
    name: 'Starter',
    price: '199',
    features: [
      'Basic app conversion',
      'Standard features',
      'Email support',
      'Basic analytics',
      '1 revision per month'
    ]
  },
  {
    name: 'Professional',
    price: '399',
    popular: true,
    features: [
      'Advanced features',
      'Priority support',
      'Custom branding',
      'Advanced analytics',
      'Unlimited revisions'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Full customization',
      'Dedicated support',
      'Advanced analytics',
      'Custom integrations',
      'Unlimited everything'
    ]
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect plan for your business
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative p-8 bg-white rounded-lg shadow-lg ${
                plan.popular ? 'ring-2 ring-blue-600' : ''
              }`}
            >
              {plan.popular && (
                <span className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Popular
                </span>
              )}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <div className="mt-4 flex items-baseline justify-center">
                  {plan.price === 'Custom' ? (
                    <span className="text-4xl font-extrabold text-gray-900">Custom</span>
                  ) : (
                    <>
                      <span className="text-4xl font-extrabold text-gray-900">${plan.price}</span>
                      <span className="ml-1 text-xl text-gray-500">/mo</span>
                    </>
                  )}
                </div>
              </div>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <FiCheck className="h-5 w-5 text-blue-600" />
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full py-3 px-6 rounded-full font-medium ${
                plan.popular
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}>
                {plan.price === 'Custom' ? 'Contact Us' : 'Get Started'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;