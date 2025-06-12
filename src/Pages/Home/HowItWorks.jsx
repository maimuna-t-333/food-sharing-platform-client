import React from 'react';

const HowItWorks = () => {
    return (
        <div className="px-4 py-10 space-y-20">
                {/* How It Works Section */}
      <section className="max-w-7xl mx-auto text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
        >
          🛠️ How It Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              title: 'Sign Up',
              desc: 'Register as a donor or recipient to get started.',
              icon: '👤'
            },
            {
              title: 'Add Food',
              desc: 'List your surplus food with pickup info.',
              icon: '🍛'
            },
            {
              title: 'Request Food',
              desc: 'Find available food and request it easily.',
              icon: '🤝'
            },
            {
              title: 'Pick Up',
              desc: 'Meet up and reduce food waste together.',
              icon: '📦'
            }
          ].map((step, idx) => (
            <motion.div
              key={idx}
              className="bg-white shadow-lg rounded-xl p-6 border"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="font-bold text-lg">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
  
        </div>
    );
};

export default HowItWorks;