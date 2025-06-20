'use client';

import React from 'react';
import { AiOutlineHeart, AiFillStar } from 'react-icons/ai';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

export default function TopFeaturedColleges() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Top Featured Colleges</h2>
            <p className="text-gray-600">Discover the best colleges across the country</p>
          </div>
          <div className="hidden md:flex space-x-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50">
              <RiArrowLeftSLine size={20} />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50">
              <RiArrowRightSLine size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="college-card bg-white rounded-lg overflow-hidden shadow transition-all duration-300">
            <div className="h-48 bg-gray-200 relative">
              <img
                src="https://readdy.ai/api/search-image?query=modern%20university%20campus%20with%20impressive%20architecture%2C%20large%20buildings%2C%20green%20spaces%2C%20students%20walking%20around%2C%20professional%20photography%2C%20bright%20daylight%2C%20clear%20blue%20sky&width=600&height=400&seq=12346&orientation=landscape"
                alt="University Campus"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute top-4 right-4 bg-white rounded-full p-2">
                <AiOutlineHeart size={20} className="text-gray-600" />
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Stanford University</h3>
                  <p className="text-gray-600 text-sm">Stanford, California</p>
                </div>
                <div className="flex items-center bg-green-50 text-green-700 px-2 py-1 rounded text-sm font-medium">
                  <AiFillStar size={14} className="mr-1" />
                  4.8/5
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">NAAC A++</span>
                <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">Top Ranked</span>
                <span className="bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium">Private</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-gray-500 text-sm">Courses:</span>
                  <span className="text-gray-700 text-sm font-medium"> 120+</span>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap">View Details</button>
              </div>
            </div>
          </div>


          <div className="college-card bg-white rounded-lg overflow-hidden shadow transition-all duration-300">
            <div className="h-48 bg-gray-200 relative">
              <img
                src="https://readdy.ai/api/search-image?query=prestigious%20university%20campus%20with%20historic%20buildings%2C%20ivy%20covered%20walls%2C%20students%20studying%2C%20professional%20photography%2C%20sunny%20day%2C%20vibrant%20campus%20life&width=600&height=400&seq=12347&orientation=landscape"
                alt="University Campus"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute top-4 right-4 bg-white rounded-full p-2">
                <AiOutlineHeart size={20} className="text-gray-600" />
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Harvard University</h3>
                  <p className="text-gray-600 text-sm">Cambridge, Massachusetts</p>
                </div>
                <div className="flex items-center bg-green-50 text-green-700 px-2 py-1 rounded text-sm font-medium">
                  <AiFillStar size={14} className="mr-1" />
                  4.9/5
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">Ivy League</span>
                <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">#1 Ranked</span>
                <span className="bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium">Private</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-gray-500 text-sm">Courses:</span>
                  <span className="text-gray-700 text-sm font-medium"> 150+</span>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap">View Details</button>
              </div>
            </div>
          </div>

          
          <div className="college-card bg-white rounded-lg overflow-hidden shadow transition-all duration-300">
            <div className="h-48 bg-gray-200 relative">
              <img
                src="https://readdy.ai/api/search-image?query=modern%20technical%20university%20campus%20with%20engineering%20buildings%2C%20laboratories%2C%20students%20working%20on%20projects%2C%20professional%20photography%2C%20clear%20day%2C%20technology%20focused%20environment&width=600&height=400&seq=12348&orientation=landscape"
                alt="University Campus"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute top-4 right-4 bg-white rounded-full p-2">
                <AiOutlineHeart size={20} className="text-gray-600" />
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">MIT</h3>
                  <p className="text-gray-600 text-sm">Cambridge, Massachusetts</p>
                </div>
                <div className="flex items-center bg-green-50 text-green-700 px-2 py-1 rounded text-sm font-medium">
                  <AiFillStar size={14} className="mr-1" />
                  4.9/5
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">Top Tech</span>
                <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">#1 Engineering</span>
                <span className="bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium">Private</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-gray-500 text-sm">Courses:</span>
                  <span className="text-gray-700 text-sm font-medium"> 110+</span>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap">View Details</button>
              </div>
            </div>
          </div>
        </div>

       
        <div className="text-center mt-8">
          <button className="border border-gray-300 text-gray-700 px-6 py-2.5 rounded-lg font-medium hover:bg-gray-50 whitespace-nowrap">
            View All Colleges
          </button>
        </div>
      </div>
    </section>
  );
}
