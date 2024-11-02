import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Transform Your Store?
          </h2>
          <p className="mt-4 text-xl text-gray-100">
            Join thousands of merchants who've grown their business with Appora
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full hover:shadow-lg transition duration-300">
              Schedule a Demo
            </button>
            <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-blue-600 transition duration-300">
              Contact Sales
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;