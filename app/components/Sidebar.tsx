'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Sidebar icons
const iconLogo = "https://www.figma.com/api/mcp/asset/ef58a6a9-cdb4-47d5-be4a-14a7a3de89e7";
const iconDashboard = "https://www.figma.com/api/mcp/asset/56421e28-3443-433c-b7ce-c95531f2ca06";
const iconCredentials = "https://www.figma.com/api/mcp/asset/b7da7900-d7f6-4002-8d91-5c129fa50ae8";
const iconEntity = "https://www.figma.com/api/mcp/asset/16e94b51-7199-4bc9-a096-df9712ae03c6";
const iconSettings = "https://www.figma.com/api/mcp/asset/25f47940-a32e-407c-9339-a8eecb18e21b";

export default function Sidebar() {
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
    <aside className="w-full md:w-80 bg-white border-b md:border-b-0 md:border-r border-[#e6e6e6] md:fixed md:left-0 md:top-0 md:bottom-0 flex flex-col">
      {/* Logo */}
      <div className="flex flex-col items-center gap-2 pt-6 md:pt-10 pb-8 md:pb-16">
        <img src={iconLogo} alt="Axiom Tracker" className="w-14 md:w-20 h-14 md:h-20" />
        <p className="font-montserrat font-semibold text-lg md:text-xl text-black">Axiom Tracker</p>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-3 md:px-6 space-y-2 md:space-y-3 overflow-x-auto md:overflow-auto">
        {/* Dashboard */}
        <Link
          href="/dashboard"
          className={`flex items-center gap-4 md:gap-6 px-4 md:px-6 py-3 md:py-4 rounded-lg font-geist font-medium text-base md:text-xl transition whitespace-nowrap md:whitespace-normal ${
            isActive('/dashboard')
              ? 'bg-black text-white'
              : 'text-black hover:bg-gray-50'
          }`}
        >
          <img src={iconDashboard} alt="Dashboard" className="w-6 md:w-8 h-6 md:h-8 shrink-0" />
          <span>Dashboard</span>
        </Link>

        {/* Credentials */}
        <Link
          href="/credentials"
          className={`flex items-center gap-4 md:gap-6 px-4 md:px-6 py-3 md:py-4 rounded-lg font-geist font-medium text-base md:text-xl transition whitespace-nowrap md:whitespace-normal ${
            isActive('/credentials')
              ? 'bg-black text-white'
              : 'text-black hover:bg-gray-50'
          }`}
        >
          <img src={iconCredentials} alt="Credentials" className="w-6 md:w-8 h-6 md:h-8 shrink-0" />
          <span>Credentials</span>
        </Link>

        {/* Entity */}
        <Link
          href="/entity"
          className={`flex items-center gap-4 md:gap-6 px-4 md:px-6 py-3 md:py-4 rounded-lg font-geist font-medium text-base md:text-xl transition whitespace-nowrap md:whitespace-normal ${
            isActive('/entity')
              ? 'bg-black text-white'
              : 'text-black hover:bg-gray-50'
          }`}
        >
          <img src={iconEntity} alt="Entity" className="w-6 md:w-8 h-6 md:h-8 shrink-0" />
          <span>Entity</span>
        </Link>

        {/* Settings */}
        <Link
          href="/settings"
          className={`flex items-center gap-4 md:gap-6 px-4 md:px-6 py-3 md:py-4 rounded-lg font-geist font-medium text-base md:text-xl transition whitespace-nowrap md:whitespace-normal ${
            isActive('/settings')
              ? 'bg-black text-white'
              : 'text-black hover:bg-gray-50'
          }`}
        >
          <img src={iconSettings} alt="Settings" className="w-6 md:w-8 h-6 md:h-8 shrink-0" />
          <span>Settings</span>
        </Link>
      </nav>
    </aside>
  );
}
