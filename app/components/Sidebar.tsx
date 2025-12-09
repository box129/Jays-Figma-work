'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Sidebar icons
const iconLogo = "https://www.figma.com/api/mcp/asset/ef58a6a9-cdb4-47d5-be4a-14a7a3de89e7";
const iconDashboard = "https://www.figma.com/api/mcp/asset/56421e28-3443-433c-b7ce-c95531f2ca06";
const iconCredentials = "https://www.figma.com/api/mcp/asset/b7da7900-d7f6-4002-8d91-5c129fa50ae8";
const iconEntity = "https://www.figma.com/api/mcp/asset/16e94b51-7199-4bc9-a096-df9712ae03c6";
const iconSettings = "https://www.figma.com/api/mcp/asset/25f47940-a32e-407c-9339-a8eecb18e21b";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/dashboard') {
      return pathname === '/dashboard';
    }
    if (path === '/credentials') {
      return pathname === '/credentials';
    }
    if (path === '/entity') {
      return pathname === '/entity';
    }
    if (path === '/settings') {
      return pathname === '/settings';
    }
    return false;
  };

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 bottom-0 w-80 bg-white border-r border-[#e6e6e6] flex flex-col z-50
          transform transition-transform duration-300 ease-in-out
          md:translate-x-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Close Button (Mobile Only) */}
        <button
          onClick={onClose}
          className="md:hidden absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition"
          aria-label="Close menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Logo */}
        <div className="flex flex-col items-center gap-2 pt-10 pb-12 md:pb-16">
          <img src={iconLogo} alt="Axiom Tracker" className="w-16 md:w-20 h-16 md:h-20" />
          <p className="font-montserrat font-semibold text-lg md:text-xl text-black">Axiom Tracker</p>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-4 md:px-6 space-y-2 md:space-y-3 overflow-y-auto">
          {/* Dashboard */}
          <Link
            href="/dashboard"
            onClick={onClose}
            className={`flex items-center gap-5 md:gap-6 px-5 md:px-6 py-4 rounded-lg font-geist font-medium text-base md:text-xl transition min-h-[56px] ${
              isActive('/dashboard')
                ? 'bg-black text-white'
                : 'text-black hover:bg-gray-50 active:bg-gray-100'
            }`}
          >
            <img src={iconDashboard} alt="Dashboard" className="w-7 md:w-8 h-7 md:h-8 shrink-0" />
            <span>Dashboard</span>
          </Link>

          {/* Credentials */}
          <Link
            href="/credentials"
            onClick={onClose}
            className={`flex items-center gap-5 md:gap-6 px-5 md:px-6 py-4 rounded-lg font-geist font-medium text-base md:text-xl transition min-h-[56px] ${
              isActive('/credentials')
                ? 'bg-black text-white'
                : 'text-black hover:bg-gray-50 active:bg-gray-100'
            }`}
          >
            <img src={iconCredentials} alt="Credentials" className="w-7 md:w-8 h-7 md:h-8 shrink-0" />
            <span>Credentials</span>
          </Link>

          {/* Entity */}
          <Link
            href="/entity"
            onClick={onClose}
            className={`flex items-center gap-5 md:gap-6 px-5 md:px-6 py-4 rounded-lg font-geist font-medium text-base md:text-xl transition min-h-[56px] ${
              isActive('/entity')
                ? 'bg-black text-white'
                : 'text-black hover:bg-gray-50 active:bg-gray-100'
            }`}
          >
            <img src={iconEntity} alt="Entity" className="w-7 md:w-8 h-7 md:h-8 shrink-0" />
            <span>Entity</span>
          </Link>

          {/* Settings */}
          <Link
            href="/settings"
            onClick={onClose}
            className={`flex items-center gap-5 md:gap-6 px-5 md:px-6 py-4 rounded-lg font-geist font-medium text-base md:text-xl transition min-h-[56px] ${
              isActive('/settings')
                ? 'bg-black text-white'
                : 'text-black hover:bg-gray-50 active:bg-gray-100'
            }`}
          >
            <img src={iconSettings} alt="Settings" className="w-7 md:w-8 h-7 md:h-8 shrink-0" />
            <span>Settings</span>
          </Link>
        </nav>
      </aside>
    </>
  );
}
