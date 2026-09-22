import Link from 'next/link';
import { Search, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <button className="p-2 -ml-2 hover:bg-gray-100 rounded-full md:hidden">
              <Menu className="w-5 h-5 text-gray-700" />
            </button>
            <div className="hidden md:flex items-center space-x-6 text-sm font-semibold text-gray-700">
              <Link href="/search" className="flex items-center hover:text-[#02a95c] transition-colors">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Link>
              <Link href="/donate" className="hover:text-[#02a95c] transition-colors">Donate</Link>
              <Link href="/fundraise" className="hover:text-[#02a95c] transition-colors">Fundraise</Link>
            </div>
          </div>
          
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-black text-[#02a95c] tracking-tighter hover:opacity-80 transition-opacity">
              fenna
            </Link>
          </div>

          <div className="flex items-center space-x-4 text-sm font-semibold text-gray-700">
            <Link href="/about" className="hidden md:block hover:text-[#02a95c] transition-colors">How it works</Link>
            <Link href="/dashboard" className="hover:text-[#02a95c] transition-colors">Sign In</Link>
            <Link href="/dashboard" className="bg-[#02a95c] text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors shadow-sm">
              Start a Fenna
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
