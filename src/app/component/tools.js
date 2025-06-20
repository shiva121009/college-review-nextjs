'use client';

import React from 'react';
import { RiCalculatorLine, RiCompareLine, RiCalendarCheckLine, RiUserSearchLine } from 'react-icons/ri';
import { FaCodeCompare } from "react-icons/fa6";
import Link from 'next/link';
export default function HelpfulTools() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Helpful Tools & Resources</h2>
          <p className="text-gray-600">Make informed decisions with our specialized tools</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <Link
            href="#"
            className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg text-blue-600 mb-4">
              <RiCalculatorLine size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">College Predictor</h3>
            <p className="text-gray-600 text-sm">
              Predict your chances of admission based on your scores and preferences
            </p>
         </Link>

          
          <Link
            href="#"
            className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg text-green-600 mb-4">
              <FaCodeCompare size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">College Comparison</h3>
            <p className="text-gray-600 text-sm">
              Compare colleges side by side to find your best match
            </p>
          </Link>

        
          <Link
            href="#"
            className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-lg text-purple-600 mb-4">
              <RiCalendarCheckLine size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Exam Calendar</h3>
            <p className="text-gray-600 text-sm">
              Keep track of important exam dates and application deadlines
            </p>
          </Link>

       
          <Link
            href="#"
            className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-lg text-yellow-600 mb-4">
              <RiUserSearchLine size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Career Assessment</h3>
            <p className="text-gray-600 text-sm">
              Discover the right career path based on your skills and interests
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
