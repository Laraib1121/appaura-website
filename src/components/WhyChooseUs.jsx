import React from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiRefreshCw, FiCode, FiSmartphone } from 'react-icons/fi';

const reasons = [
  {
    icon: <FiShield className="h-8 w-8 text-blue-600" />,
    title: 'Lifetime Warranty',
    description: 'Rest easy with our comprehensive lifetime warranty coverage'
  },
  {
    icon: <FiRefreshCw className="h-8 w-8 text-blue-600" />,
    title: 'Unlimited Revisions',
    description: "We'll keep refining until your app is perfect"
  },
  {
    icon: <FiCode className="h-8 w-8 text-blue-600" />,
    title: 'React Native Power',
    description: 'Built on React Native for optimal performance'
  },
  {
    icon: <FiSmartphone className="h-8 w-8 text-blue-600" />,
    title: 'Platform Parity',
    description: 'Consistent experience across iOS and Android'
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose Appora?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            We're committed to your success in the mobile commerce space
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition duration-300"
            >
              <div>{reason.icon}</div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">{reason.title}</h3>
              <p className="mt-2 text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;