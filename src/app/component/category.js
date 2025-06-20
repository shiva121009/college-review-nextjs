'use client';

import React from 'react';
import { MdCode } from "react-icons/md";
import { FaBriefcaseMedical } from "react-icons/fa";
import { PiOfficeChairBold } from "react-icons/pi";
import { VscLaw } from "react-icons/vsc";
import { HiDotsHorizontal } from "react-icons/hi";
import { HiPaintBrush } from "react-icons/hi2";

export default function CategorySection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Explore by Category</h2>
          <p className="text-gray-600">Find colleges and courses based on your interests</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <a href="#" className="category-card bg-white rounded-lg p-6 text-center transition-all duration-300 shadow hover:shadow-lg">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-blue-50 rounded-full text-blue-600">
              <MdCode className="ri-code-line h-20 " />
            </div>
            <h3 className="font-medium text-gray-800">Engineering</h3>
            <p className="text-sm text-gray-500 mt-1">1,245 Colleges</p>
          </a>

          
          <a href="#" className="category-card bg-white rounded-lg p-6 text-center transition-all duration-300 shadow hover:shadow-lg">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-green-50 rounded-full text-green-600">
              <FaBriefcaseMedical className="ri-medicine-bottle-line ri-xl"/>
            </div>
            <h3 className="font-medium text-gray-800">Medical</h3>
            <p className="text-sm text-gray-500 mt-1">856 Colleges</p>
          </a>

          <a href="#" className="category-card bg-white rounded-lg p-6 text-center transition-all duration-300 shadow hover:shadow-lg">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-purple-50 rounded-full text-purple-600">
              <PiOfficeChairBold className="ri-briefcase-line ri-xl"/>
            </div>
            <h3 className="font-medium text-gray-800">Business</h3>
            <p className="text-sm text-gray-500 mt-1">1,089 Colleges</p>
          </a>

          
          <a href="#" className="category-card bg-white rounded-lg p-6 text-center transition-all duration-300 shadow hover:shadow-lg">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-red-50 rounded-full text-red-600">
              <VscLaw className="ri-scales-3-line ri-xl"/>
            </div>
            <h3 className="font-medium text-gray-800">Law</h3>
            <p className="text-sm text-gray-500 mt-1">478 Colleges</p>
          </a>

      
          <a href="#" className="category-card bg-white rounded-lg p-6 text-center transition-all duration-300 shadow hover:shadow-lg">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-yellow-50 rounded-full text-yellow-600">
              <HiPaintBrush className="ri-palette-line ri-xl"/>
            </div>
            <h3 className="font-medium text-gray-800">Arts</h3>
            <p className="text-sm text-gray-500 mt-1">923 Colleges</p>
          </a>

        
          <a href="#" className="category-card bg-white rounded-lg p-6 text-center transition-all duration-300 shadow hover:shadow-lg">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-indigo-50 rounded-full text-indigo-600">
              <HiDotsHorizontal className="ri-more-line ri-xl"/>
            </div>
            <h3 className="font-medium text-gray-800">More</h3>
            <p className="text-sm text-gray-500 mt-1">View All</p>
          </a>
        </div>
      </div>
    </section>
  );
}
