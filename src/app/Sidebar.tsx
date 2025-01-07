'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation'; // Import usePathname hook
import {
  CircleUser,
  ShoppingBag,
  MapPin,
  Heart,
  CreditCard,
  HeadphonesIcon,
  FileText,
  Menu,
  X,
} from 'lucide-react';
import Link from 'next/link';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current route path

  const links = [
    { href: '/', icon: CircleUser, label: 'Profile' },
    { href: '/orders', icon: ShoppingBag, label: 'Orders' },
    { href: '/adress', icon: MapPin, label: 'Address' },
    { href: '/fav', icon: Heart, label: 'Favorite' },
    { href: '/upiid', icon: CreditCard, label: 'Saved Payments' },
    { href: '/customer', icon: HeadphonesIcon, label: 'Customer Care' },
    { href: '/refund', icon: FileText, label: 'General Terms' },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden p-4 text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-white border-r transform md:transform-none md:relative md:translate-x-0 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="flex flex-col h-full">
          {links.map(({ href, icon: Icon, label }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 p-4 border-b hover:bg-gray-50 ${
                pathname === href
                  ? 'bg-orange-500 text-black' // Active link styles
                  : ''
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
