'use client';

import React, { useState } from 'react';

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    // Add your email subscription logic here (API call, etc.)
  };

  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Stay Updated</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for the latest college news, exam updates, and admission tips
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:border-primary focus:ring-primary text-gray-700"
              required
            />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-400 text-white px-6 py-3 rounded-md font-medium whitespace-nowrap hover:bg-primary/90 transition-colors"
            >
              Subscribe Now
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from us.
          </p>
        </div>
      </div>
    </section>
  );
}
