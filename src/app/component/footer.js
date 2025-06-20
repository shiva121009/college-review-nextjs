
'use client';
import Link from 'next/link';
import React from 'react';

import {
  RiFacebookFill,
  RiTwitterXFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiYoutubeFill,
  RiMapPinLine,
  RiPhoneLine,
  RiMailLine
} from 'react-icons/ri';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-100 h-10 flex items-center justify-center">
                <img src="/images/1-dark.svg" width={300} alt="logo" title="logo" />
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Helping students find their perfect college match since 2010. We've guided over
              500,000 students to make informed decisions about their education.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-primary transition-colors duration-300">
                <RiFacebookFill size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-primary transition-colors duration-300">
                <RiTwitterXFill size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-primary transition-colors duration-300">
                <RiInstagramFill size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-primary transition-colors duration-300">
                <RiLinkedinFill size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-primary transition-colors duration-300">
                <RiYoutubeFill size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Press & Media
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  College Rankings
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Exam Calendar
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Scholarship Finder
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Career Guides
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Study Abroad
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-5 h-5 flex items-center justify-center mt-0.5 mr-2">
                  <RiMapPinLine size={18} />
                </div>
                <span className="text-gray-400">123 Education Ave, San Francisco, CA 94107</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <RiPhoneLine size={18} />
                </div>
                <span className="text-gray-400">+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <RiMailLine size={18} />
                </div>
                <span className="text-gray-400">info@collegenetwork.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 CollegeNetwork. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
