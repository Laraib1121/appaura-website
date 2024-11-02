import React from 'react';
import { FiZap, FiCheckCircle, FiSettings } from 'react-icons/fi';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <FiZap className="h-8 w-8 text-blue-600" />,
    title: 'Quick Launch',
    description: 'Go live with your mobile app in weeks, not months'
  },
  {
    icon: <FiCheckCircle className="h-8 w-8 text-blue-600" />,
    title: 'Best Practices',
    description: 'Built with established mobile patterns and optimized for performance'
  },
  {
    icon: <FiSettings className="h-8 w-8 text-blue-600" />,
    title: 'Full Control',
    description: 'Custom features without managing infrastructure'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Everything you need to succeed on mobile
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Launch your mobile app with confidence using our comprehensive solution
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-lg" />
                <div>
                  {feature.icon}
                  <h3 className="mt-4 text-xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;