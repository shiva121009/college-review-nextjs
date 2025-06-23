'use client';

import React from 'react';
import { RiBookOpenLine, RiMapPinLine,RiPhoneLine } from 'react-icons/ri';
import { FaRegCircle } from "react-icons/fa6";
export default function HeroSection() {
  return (
    <>
      <div className="h-[88px] lg:h-[132px]"></div>
      
      
      <section className="hero-section w-full ">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Find Your Perfect College & Course
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Discover 25,000+ colleges, 250+ exams and 1,200+ courses to find your best fit
            </p>

          
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4">
                
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Course/Program</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <RiBookOpenLine className="text-gray-400 w-5 h-5" />
                    </div>
                    <input
                      type="text"
                      placeholder="e.g. Engineering, MBA, Medicine"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded text-sm focus:border-primary"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <RiMapPinLine className="text-gray-400 w-5 h-5" />
                    </div>
                    <input
                      type="text"
                      placeholder="City or State"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded text-sm focus:border-primary"
                    />
                  </div>
                </div>

              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <label className="custom-switch">
                    <input type="checkbox" defaultChecked />
                    <span className="slider"></span>
                  </label>
                  <span className="text-sm text-gray-700">Include nearby locations</span>
                </div>

           <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg font-medium whitespace-nowrap">
  Search Colleges
</button>

              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="flex items-center justify-center bg-white border border-gray-300 text-gray-700 px-5 py-2.5 rounded-button font-medium whitespace-nowrap hover:bg-gray-50">
                <RiPhoneLine className="w-5 h-5 mr-2" />
                
                Get Free Counselling
              </button>

              <button className="flex items-center justify-center bg-white border border-gray-300 text-gray-700 px-5 py-2.5 rounded-button font-medium whitespace-nowrap hover:bg-gray-50">
               <FaRegCircle className="w-5 h-5 mr-2" />
                Compare Colleges
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
