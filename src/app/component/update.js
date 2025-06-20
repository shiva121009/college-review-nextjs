'use client';

import Link from 'next/link';
import React from 'react';
import { RiArrowRightLine, RiCalendarLine } from 'react-icons/ri';

export default function LatestUpdates() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
       
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Latest Updates</h2>
            <p className="text-gray-600">Stay informed with the latest news and announcements</p>
          </div>
          <Link href="#" className="hidden md:flex items-center text-yellow-500 font-medium">
            View All
            <div className="w-5 h-5 flex items-center justify-center ml-1">
              <RiArrowRightLine size={20} />
            </div>
          </Link>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
          <div className="bg-white rounded-lg overflow-hidden shadow transition-all duration-300">
            <div className="h-48 bg-gray-200">
              <img
                src="https://readdy.ai/api/search-image?query=students%20attending%20college%20admission%20event%2C%20information%20booths%2C%20counselors%20helping%20students%2C%20professional%20photography%2C%20bright%20indoor%20setting&width=600&height=400&seq=12349&orientation=landscape"
                alt="College Admission"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <RiCalendarLine size={16} className="mr-1" />
                May 2, 2025
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">2025 Admission Season Begins</h3>
              <p className="text-gray-600 mb-4">
                Top universities announce application dates and new admission criteria for the upcoming academic year.
              </p>
              <Link href="#" className="text-yellow-500 font-medium flex items-center">
                Read More
                <RiArrowRightLine size={18} className="ml-1" />
              </Link>
            </div>
          </div>

         
          <div className="bg-white rounded-lg overflow-hidden shadow transition-all duration-300">
            <div className="h-48 bg-gray-200">
              <img
                src="https://readdy.ai/api/search-image?query=students%20taking%20standardized%20test%20in%20classroom%2C%20focused%20on%20exam%20papers%2C%20professional%20photography%2C%20bright%20classroom%20setting&width=600&height=400&seq=12350&orientation=landscape"
                alt="Exam Preparation"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <RiCalendarLine size={16} className="mr-1" />
                April 28, 2025
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">SAT Announces Format Changes</h3>
              <p className="text-gray-600 mb-4">
                The College Board unveils significant changes to the SAT format effective from 2026.
              </p>
              <Link href="#" className="text-yellow-500 font-medium flex items-center">
                Read More
                <RiArrowRightLine size={18} className="ml-1" />
              </Link>
            </div>
          </div>

        
          <div className="bg-white rounded-lg overflow-hidden shadow transition-all duration-300">
            <div className="h-48 bg-gray-200">
              <img
                src="https://readdy.ai/api/search-image?query=students%20receiving%20scholarship%20awards%2C%20ceremony%20with%20certificates%2C%20happy%20students%2C%20professional%20photography%2C%20formal%20event%20setting&width=600&height=400&seq=12351&orientation=landscape"
                alt="Scholarship Awards"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <RiCalendarLine size={16} className="mr-1" />
                May 1, 2025
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">New Scholarship Programs Launched</h3>
              <p className="text-gray-600 mb-4">
                Major foundations announce $50M in new scholarship opportunities for underrepresented students.
              </p>
              <Link href="#" className="text-yellow-500 font-medium flex items-center">
                Read More
                <RiArrowRightLine size={18} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link
            href="#"
            className="border border-gray-300 text-gray-700 px-6 py-2.5 rounded-lg font-medium hover:bg-gray-50 whitespace-nowrap inline-block"
          >
            View All Updates
          </Link>
        </div>
      </div>
    </section>
  );
}
