'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdOutlinePhone, MdOutlineTextsms } from "react-icons/md";
import { FaFacebookF,FaTwitter, FaLinkedinIn,FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";



export default function Header() {
  const [collegesOpen, setCollegesOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [examsOpen, setExamsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">

        
        <div className="hidden lg:flex justify-between items-center py-2 border-b border-gray-100">
          <div className="flex items-center space-x-6 text-sm">
            <a href="tel:+1-800-123-4567" className="flex items-center text-gray-600 hover:text-primary hover:text-yellow-500">
              <div className="w-4 h-4 flex items-center justify-center mr-1 hover:text-yellow-500 ">
                <MdOutlinePhone className="ri-phone-line hover:text-yellow-500"/>
              </div >
              +1 (800) 123-4567
            </a>
            <a href="mailto:info@collegenetwork.com" className="flex items-center text-gray-600 hover:text-primary hover:text-yellow-500">
              <div className="w-4 h-4 flex items-center justify-center mr-1">
               <MdOutlineTextsms  className="ri-mail-line"/>
              </div>
              info@collegenetwork.com
            </a>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <a href="#" className="text-gray-600 hover:text-primary hover:text-yellow-500">Blog</a>
            <a href="#" className="text-gray-600 hover:text-primary hover:text-yellow-500">Help Center</a>
            <div className="h-4 w-px bg-gray-200 mx-2"></div>
            <div className="flex items-center space-x-3">
              <a href="#" className="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-primary hover:text-yellow-500">
                <FaFacebookF className="ri-facebook-fill" />
              </a>
              <a href="#" className="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-primary hover:text-yellow-500">
               <FaTwitter  className="ri-twitter-x-fill"/>
              </a>
              <a href="#" className="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-primary hover:text-yellow-500">
               < FaLinkedinIn  className="ri-linkedin-fill" />
              </a>
            </div>
          </div>
        </div>

  
        <nav className="relative flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-100 h-10 flex items-center justify-center">
              <Image src="/1.svg" width={250} height={40} alt="logo" />
            </div>
          </Link>

   
          <div className="hidden lg:flex items-center space-x-8">
           
            <div className="relative group">
              <button onClick={() => setCollegesOpen(!collegesOpen)} className="flex items-center text-gray-700 hover:text-primary hover:text-yellow-500">
                Colleges
                <div className="w-4 h-4 flex items-center justify-center ml-1">
                <IoIosArrowDown  className="ri-arrow-down-s-line"/>
                </div>
              </button>
              {collegesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-3 hover:text-yellow-500">
                  <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-yellow-500">Top Colleges</Link>
                  <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-yellow-500">Engineering Colleges</Link>
                  <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-yellow-500">Medical Colleges</Link>
                  <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-yellow-500">Business Schools</Link>
                </div>
              )}
            </div>

           
            <div className="relative group">
              <button onClick={() => setCoursesOpen(!coursesOpen)} className="flex items-center text-gray-700 hover:text-primary hover:text-yellow-500">
                Courses
                <div className="w-4 h-4 flex items-center justify-center ml-1">
                   <IoIosArrowDown  className="ri-arrow-down-s-line"/>
                </div>
              </button>
              {coursesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-3 hover:text-yellow-500">
                  <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-yellow-500">Engineering</Link>
                  <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-yellow-500">Medical</Link>
                  <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-yellow-500">Business</Link>
                  <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-yellow-500">Arts & Science</Link>
                </div>
              )}
            </div>
     
         <div className="relative group">
              <button onClick={() => setExamsOpen(!examsOpen)} className="flex items-center text-gray-700 hover:text-primary hover:text-yellow-500">
                Exams
                <div className="w-4 h-4 flex items-center justify-center ml-1">
                 <IoIosArrowDown  className="ri-arrow-down-s-line"/>
                </div>
              </button>
              {examsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-3 hover:text-yellow-500">
                  <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-yellow-500">Entrance Exams</Link>
                  <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-yellow-500">Competitive Exams</Link>
                  <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-yellow-500">Study Material</Link>
                </div>
              )}
            </div>

            <Link href="#" className="text-gray-700 hover:text-primary hover:text-yellow-500">Resources</Link>
            <Link href="#" className="text-gray-700 hover:text-primary hover:text-yellow-500">Counselling</Link>
          </div>

        
          <div className="hidden lg:flex items-center space-x-6">
            <button className="flex items-center text-gray-700 hover:text-primary hover:text-yellow-500">
              <div className="w-5 h-5 flex items-center justify-center mr-1">
                <FaSearch  className="ri-search-line"/>
              </div>
              Search
            </button>
            <div className="h-6 w-px bg-gray-200"></div>
            <Link href="#" className="flex items-center text-gray-700 hover:text-primary hover:text-yellow-500">
              <div className="w-5 h-5 flex items-center justify-center mr-1">
                <IoPersonOutline className="ri-user-line"/>
              </div>
              Sign In
            </Link>
           <button className="bg-yellow-500 text-white px-4 py-2 rounded-md font-medium hover:bg-yellow-600 transition-colors duration-300 whitespace-nowrap">Get Started</button>

          </div>

          
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-700">
            <IoIosArrowDown  className="ri-menu-line ri-lg"/>
          </button>
        </nav>

       
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white absolute top-full left-0 right-0 border-t border-gray-100 shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                <div className="relative">
                  <button onClick={() => setCollegesOpen(!collegesOpen)} className="flex items-center justify-between w-full text-gray-700 py-2">
                    Colleges
                   <IoIosArrowDown  className="ri-arrow-down-s-line"/>
                  </button>
                  {collegesOpen && (
                    <div className="pl-4 py-2 space-y-2">
                      <Link href="#" className="block text-gray-600 hover:text-primary py-1">Top Colleges</Link>
                      <Link href="#" className="block text-gray-600 hover:text-primary py-1">Engineering Colleges</Link>
                      <Link href="#" className="block text-gray-600 hover:text-primary py-1">Medical Colleges</Link>
                      <Link href="#" className="block text-gray-600 hover:text-primary py-1">Business Schools</Link>
                    </div>
                  )}
                </div>

                <div className="relative">
                  <button onClick={() => setCoursesOpen(!coursesOpen)} className="flex items-center justify-between w-full text-gray-700 py-2">
                    Courses
                   <IoIosArrowDown className="ri-arrow-down-s-line"/>
                  </button>
                  {coursesOpen && (
                    <div className="pl-4 py-2 space-y-2">
                      <Link href="#" className="block text-gray-600 hover:text-primary py-1">Engineering</Link>
                      <Link href="#" className="block text-gray-600 hover:text-primary py-1">Medical</Link>
                      <Link href="#" className="block text-gray-600 hover:text-primary py-1">Business</Link>
                      <Link href="#" className="block text-gray-600 hover:text-primary py-1">Arts & Science</Link>
                    </div>
                  )}
                </div>

               
                <div className="relative">
                  <button onClick={() => setExamsOpen(!examsOpen)} className="flex items-center justify-between w-full text-gray-700 py-2">
                    Exams
                    <IoIosArrowDown  className="ri-arrow-down-s-line"/>
                  </button>
                  {examsOpen && (
                    <div className="pl-4 py-2 space-y-2">
                      <Link href="#" className="block text-gray-600 hover:text-primary py-1">Entrance Exams</Link>
                      <Link href="#" className="block text-gray-600 hover:text-primary fpy-1">Competitive Exams</Link>
                      <Link href="#" className="block text-gray-600 hover:text-primary py-1">Study Material</Link>
                    </div>
                  )}
                </div>

                <Link href="#" className="text-gray-700 py-2">Resources</Link>
                <Link href="#" className="text-gray-700 py-2">Counselling</Link>
                <div className="pt-4 border-t border-gray-100">
                  <button className="w-full bg-primary text-white px-4 py-2 rounded-button font-medium hover:bg-opacity-90 transition-colors duration-300 ">Sign In</button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
