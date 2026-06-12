

import Link from 'next/link';
import Image from 'next/image';
import { PROJECT_INFO } from '@/project';
import { LINK_MAP } from '@/linkMap';

export default function Navbar() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center">
            <Image src={PROJECT_INFO.logo} alt="GitOpen Tools" className='rounded-xl' width={40} height={40} />
          </div>
          <span className="text-2xl font-bold gradient-text">{PROJECT_INFO.name}</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="#home" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Home</Link>
          <Link href="#tools" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Tools</Link>
          <Link href="#features" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Features</Link>
          <Link href="#about" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">About</Link>
        </div>

        <Link href={LINK_MAP.tools.textConverter} className="gradient-bg text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">
          Get Started
        </Link>
      </div>
    </div>
  );
} 