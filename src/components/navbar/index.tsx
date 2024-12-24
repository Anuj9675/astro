'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaShoppingBag, FaSignOutAlt } from 'react-icons/fa';

export function Navbar() {
  const handleLogout = () => {
    
    alert('Logged out successfully!');
   
  };

  return (
    <nav className="bg-orange-300 border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                width={165}
                height={75}
             
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            <Link
              href="/orders"
              className="text-gray-600 hover:text-gray-900 flex items-center bg-white px-3 py-2 rounded-md "
            >
              <FaShoppingBag className="mr-1" />
              <span>Orders</span>
            </Link>
            <Link
              href="/logout"
              className="text-orange-700 hover:text-red-700 flex items-center"
              onClick={(e) => {
                e.preventDefault();
                handleLogout();
              }}
            >
              <FaSignOutAlt className="mr-2" />
              <span>Logout</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

