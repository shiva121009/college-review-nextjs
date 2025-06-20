'use client';

import React from 'react';
import { RiStarFill, RiStarHalfFill } from 'react-icons/ri';

export default function StudentTestimonials() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">What Our Students Say</h2>
          <p className="text-gray-600">Hear from students who found their perfect college match</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 rounded-lg shadow transition-all duration-300">
            <div className="flex items-center text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <RiStarFill key={i} size={20} className="mr-1" />
              ))}
            </div>
            <p className="text-gray-700 mb-6">
              "CollegeNetwork helped me find the perfect engineering program. Their comparison tool made it easy to evaluate different universities based on my priorities."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20young%20male%20student%2C%20neutral%20background%2C%20professional%20photography&width=100&height=100&seq=12352&orientation=squarish"
                  alt="Student"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Michael Richardson</h4>
                <p className="text-sm text-gray-600">Computer Science Student</p>
              </div>
            </div>
          </div>

        
          <div className="bg-white p-6 rounded-lg shadow transition-all duration-300">
            <div className="flex items-center text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <RiStarFill key={i} size={20} className="mr-1" />
              ))}
            </div>
            <p className="text-gray-700 mb-6">
              "The counselling service was a game-changer for me. My counsellor helped me navigate the complex admission process and secure scholarships I didn't know I qualified for."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20young%20female%20student%2C%20neutral%20background%2C%20professional%20photography&width=100&height=100&seq=12353&orientation=squarish"
                  alt="Student"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Sophia Martinez</h4>
                <p className="text-sm text-gray-600">Pre-Med Student</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow transition-all duration-300">
            <div className="flex items-center text-yellow-400 mb-4">
              {[...Array(4)].map((_, i) => (
                <RiStarFill key={i} size={20} className="mr-1" />
              ))}
              <RiStarHalfFill size={20} className="mr-1" />
            </div>
            <p className="text-gray-700 mb-6">
              "As an international student, I was overwhelmed by the US college application process. CollegeNetwork's resources and personalized guidance made everything much clearer."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20young%20asian%20male%20student%2C%20neutral%20background%2C%20professional%20photography&width=100&height=100&seq=12354&orientation=squarish"
                  alt="Student"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium text-gray-800">David Kim</h4>
                <p className="text-sm text-gray-600">Business Administration Student</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
