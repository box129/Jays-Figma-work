'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '../components/Sidebar';

// Header icons
const iconNotification = "https://www.figma.com/api/mcp/asset/ded7a757-2476-491a-9144-f622c9a20cd2";
const iconDropdown = "https://www.figma.com/api/mcp/asset/9d7abf7c-db72-4890-8ebe-89d12f8c8b7b";
const iconLogout = "https://www.figma.com/api/mcp/asset/e7b2ee4d-0d56-47bd-b57a-c17f490cc555";

// Quick actions icons
const iconAddCert = "https://www.figma.com/api/mcp/asset/52303320-aa98-4c81-82c5-99ef8d190f5a";
const iconUpload = "https://www.figma.com/api/mcp/asset/26a9b5e4-4267-4ead-8dc8-5a2d887ede69";
const iconSearch = "https://www.figma.com/api/mcp/asset/1e0e94bc-c108-4254-9b1d-52818660d321";
const iconViewAll = "https://www.figma.com/api/mcp/asset/31865b3c-aa6b-40ae-9586-f0c864b1b7ef";

// Dashboard background
const dashboardBgImage = "https://www.figma.com/api/mcp/asset/4361388a-77b9-4018-a1d9-8fc93116461b";

// Activity icons
const iconActivityLicense = "https://www.figma.com/api/mcp/asset/54aa23a3-2619-4fc7-a28c-dd34424445f7";
const iconActivityCert = "https://www.figma.com/api/mcp/asset/5e2ac18d-a852-4f6c-932a-bbbc74e4836b";

// Sample activity data
const activities = [
  {
    id: 1,
    type: 'expiry',
    title: 'License Expiry Reminder',
    description: 'Your license "NJ PE License" will expire in 12 days. Renew soon to stay compliant.',
    time: '6:48PM',
    icon: iconActivityLicense,
  },
  {
    id: 2,
    type: 'added',
    title: 'New Certificate Added',
    description: 'Admin added a new certificate: "OH PE License". View details to verify or assign ownership.',
    time: '6:48PM',
    icon: iconActivityCert,
  },
  {
    id: 3,
    type: 'expired',
    title: 'Certificate Auto-Expired',
    description: 'System automatically marked the certificate "PA PE License 2023" as expired based on the expiry date.',
    time: '6:48PM',
    icon: iconActivityCert,
  },
  {
    id: 4,
    type: 'renewed',
    title: 'License Successfully Renewed',
    description: 'Our license "MBE License" has been successfully updated and marked as Active.',
    time: '6:48PM',
    icon: iconActivityLicense,
  },
];

export default function DashboardPage() {
  const router = useRouter();
  const [showAllActivities, setShowAllActivities] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    // TODO: Implement logout functionality
    router.push('/login');
  };

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [sidebarOpen]);

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
    };

    if (userMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [userMenuOpen]);

  const displayedActivities = showAllActivities ? activities : activities.slice(0, 4);

  return (
    <div className="min-h-screen bg-white flex">
      {/* SIDEBAR */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* MAIN CONTENT */}
      <div className="flex-1 md:ml-80 w-full">
        {/* HEADER */}
        <header className="bg-white border-b border-[#e6e6e6] px-4 md:px-10 py-4 md:py-7 flex items-center justify-between shadow-sm sticky top-0 z-30">
          <div className="flex items-center gap-3 md:gap-4">
            {/* Hamburger Menu Button (Mobile Only) */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 active:bg-gray-200 transition"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="font-unbounded font-semibold text-xl md:text-2xl text-black">Dashboard</h1>
          </div>

          <div className="flex items-center gap-3 md:gap-7">
            {/* Notification Icon */}
            <button className="relative min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-gray-100 rounded-lg transition active:bg-gray-200">
              <img src={iconNotification} alt="Notifications" className="w-6 md:w-8 h-6 md:h-8" />
            </button>

            {/* User Profile Dropdown */}
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="bg-[#f6f6f6] flex items-center gap-2 md:gap-4 px-2 md:px-3 py-1.5 md:py-2 rounded-full hover:bg-gray-100 active:bg-gray-200 transition min-h-[44px]"
              >
                <div className="flex items-center gap-2 md:gap-3.5">
                  {/* Avatar */}
                  <div className="w-10 md:w-14 h-10 md:h-14 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-montserrat font-normal text-sm md:text-xl text-black">JA</span>
                  </div>
                  {/* Name and Role - Hidden on mobile */}
                  <div className="text-left hidden md:block">
                    <p className="font-montserrat font-medium text-base text-black">Jeremiah Alalade</p>
                    <p className="font-montserrat font-normal text-sm text-black">Admin</p>
                  </div>
                </div>
                {/* Dropdown Arrow */}
                <img src={iconDropdown} alt="Menu" className="w-6 md:w-9 h-6 md:h-9 flex-shrink-0" />
              </button>

              {/* Dropdown Menu */}
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-[calc(100vw-2rem)] max-w-[320px] md:w-80 bg-white border border-[#c9c9c9] rounded-lg shadow-lg z-50 overflow-hidden">
                  {/* User Info */}
                  <div className="px-6 md:px-8 py-4 md:py-5 border-b border-gray-300">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-16 md:w-20 h-16 md:h-20 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-montserrat font-normal text-white text-sm md:text-base">JA</span>
                      </div>
                      <div>
                        <p className="font-montserrat font-normal text-xs md:text-sm text-black">jalalade@axiomblack.com</p>
                        <p className="font-montserrat font-normal text-xs md:text-sm text-black mt-2 md:mt-3">Admin</p>
                      </div>
                    </div>
                  </div>

                  {/* Logout Button */}
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-[#e8e8e8] hover:bg-gray-300 transition font-montserrat font-medium text-sm md:text-base text-black"
                  >
                    <img src={iconLogout} alt="Logout" className="w-5 md:w-7 h-5 md:h-7 flex-shrink-0" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="p-4 md:p-8 lg:p-10 overflow-x-hidden">
          {!showAllActivities ? (
            // Main Dashboard View
            <div className="space-y-6 md:space-y-8 max-w-[1800px] mx-auto">
              {/* Dashboard Overview Section */}
              <div
                className="bg-cover bg-center rounded-xl p-6 md:p-10 lg:p-12 relative overflow-hidden shadow-lg"
                style={{ backgroundImage: `url(${dashboardBgImage})` }}
              >
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10">
                  <h2 className="font-montserrat font-semibold text-xl md:text-2xl text-white mb-6 md:mb-8">Dashboard Overview</h2>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                    {/* Total Certificates */}
                    <div className="bg-white rounded-lg p-6 lg:p-8 transition-all duration-200 hover:shadow-lg hover:scale-105">
                      <p className="font-montserrat font-medium text-sm md:text-base text-black mb-4 md:mb-5">Total Certificates</p>
                      <p className="font-montserrat font-semibold text-3xl md:text-4xl text-black">42</p>
                    </div>

                    {/* Active */}
                    <div className="bg-white rounded-lg p-6 lg:p-8 transition-all duration-200 hover:shadow-lg hover:scale-105">
                      <p className="font-montserrat font-medium text-sm md:text-base text-black mb-4 md:mb-5">Active</p>
                      <p className="font-montserrat font-semibold text-3xl md:text-4xl text-black">35</p>
                    </div>

                    {/* Expiring Soon */}
                    <div className="bg-white rounded-lg p-6 lg:p-8 transition-all duration-200 hover:shadow-lg hover:scale-105">
                      <p className="font-montserrat font-medium text-sm md:text-base text-black mb-4 md:mb-5">Expiring Soon (30 Days)</p>
                      <p className="font-montserrat font-semibold text-3xl md:text-4xl text-black">05</p>
                    </div>

                    {/* Expired */}
                    <div className="bg-white rounded-lg p-6 lg:p-8 transition-all duration-200 hover:shadow-lg hover:scale-105">
                      <p className="font-montserrat font-medium text-sm md:text-base text-black mb-4 md:mb-5">Expired</p>
                      <p className="font-montserrat font-semibold text-3xl md:text-4xl text-black">02</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8 max-w-[1600px]">
                {/* Recent Activities - Wider */}
                <div className="xl:col-span-2 bg-white border border-[#e6e6e6] rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center justify-between mb-6 md:mb-8 flex-wrap gap-3">
                    <h3 className="font-geist font-semibold text-xl md:text-2xl text-black">Recent Activities</h3>
                    <button
                      onClick={() => setShowAllActivities(true)}
                      className="bg-[#f0f0f0] flex items-center gap-2 px-5 md:px-7 py-2 md:py-3 rounded-full hover:bg-gray-200 transition font-geist font-normal text-xs md:text-sm text-black whitespace-nowrap"
                    >
                      See All
                      <img src={iconViewAll} alt="Arrow" className="w-3 md:w-4 h-3 md:h-4" />
                    </button>
                  </div>

                  {/* Activities List */}
                  <div className="space-y-0">
                    {activities.length === 0 ? (
                      <div className="flex flex-col items-center justify-center py-12 md:py-16">
                        <div className="w-20 md:w-24 h-20 md:h-24 rounded-full border-2 border-gray-300 flex items-center justify-center mb-3 md:mb-4">
                          <span className="text-xl md:text-2xl text-gray-400">✕</span>
                        </div>
                        <p className="font-montserrat font-semibold text-sm md:text-base text-gray-400">No Recent Activities. Check Back Later.</p>
                      </div>
                    ) : (
                      activities.slice(0, 4).map((activity, index) => (
                        <div key={activity.id} className={index < 3 ? 'border-b border-[#e6e6e6]' : ''}>
                          <div className="flex items-start gap-3 md:gap-5 py-4 md:py-5">
                            <img src={activity.icon} alt={activity.type} className="w-12 md:w-16 h-12 md:h-16 flex-shrink-0 rounded" />
                            <div className="flex-1 min-w-0">
                              <p className="font-montserrat font-semibold text-sm md:text-base text-black">{activity.title}</p>
                              <p className="font-montserrat font-normal text-xs md:text-base text-black mt-1 md:mt-2 line-clamp-2 md:line-clamp-none">{activity.description}</p>
                            </div>
                            <p className="font-montserrat font-semibold text-xs md:text-base text-black flex-shrink-0 whitespace-nowrap ml-2">{activity.time}</p>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white border border-[#e6e6e6] rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <h3 className="font-unbounded font-medium text-xl md:text-2xl text-black mb-4 md:mb-6">Quick Actions</h3>

                  <div className="space-y-2 md:space-y-3">
                    {/* Add Certificate */}
                    <div className="bg-white border border-[#dedede] rounded-lg p-3 md:p-4 hover:shadow-md transition cursor-pointer">
                      <div className="flex gap-3 md:gap-4">
                        <div className="bg-[#d5ffda] w-14 md:w-16 h-14 md:h-16 rounded flex items-center justify-center flex-shrink-0">
                          <img src={iconAddCert} alt="Add" className="w-7 md:w-9 h-7 md:h-9" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-montserrat font-semibold text-xs md:text-sm text-black line-clamp-1">Add New Certificate/Licenses</p>
                          <p className="font-montserrat font-normal text-xs text-black mt-1 md:mt-2 line-clamp-2">Create a new certificate/license record with issue and expiry details.</p>
                        </div>
                      </div>
                    </div>

                    {/* Upload PDF */}
                    <div className="bg-white border border-[#dedede] rounded-lg p-3 md:p-4 hover:shadow-md transition cursor-pointer">
                      <div className="flex gap-3 md:gap-4">
                        <div className="bg-[#ffedc8] w-14 md:w-16 h-14 md:h-16 rounded flex items-center justify-center flex-shrink-0">
                          <img src={iconUpload} alt="Upload" className="w-7 md:w-9 h-7 md:h-9" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-montserrat font-semibold text-xs md:text-sm text-black line-clamp-1">Upload License PDF</p>
                          <p className="font-montserrat font-normal text-xs text-black mt-1 md:mt-2 line-clamp-2">Attach your digital license or certification document (PDF format).</p>
                        </div>
                      </div>
                    </div>

                    {/* Search */}
                    <div className="bg-white border border-[#dedede] rounded-lg p-3 md:p-4 hover:shadow-md transition cursor-pointer">
                      <div className="flex gap-3 md:gap-4">
                        <div className="bg-[#ffdad5] w-14 md:w-16 h-14 md:h-16 rounded flex items-center justify-center flex-shrink-0">
                          <img src={iconSearch} alt="Search" className="w-7 md:w-9 h-7 md:h-9" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-montserrat font-semibold text-xs md:text-sm text-black line-clamp-1">Search Certificates</p>
                          <p className="font-montserrat font-normal text-xs text-black mt-1 md:mt-2 line-clamp-2">Find any certificate instantly by name, number, or owner.</p>
                        </div>
                      </div>
                    </div>

                    {/* View All */}
                    <div
                      onClick={() => setShowAllActivities(true)}
                      className="bg-white border border-[#dedede] rounded-lg p-3 md:p-4 hover:shadow-md transition cursor-pointer"
                    >
                      <div className="flex gap-3 md:gap-4">
                        <div className="bg-[#ffd5f2] w-14 md:w-16 h-14 md:h-16 rounded flex items-center justify-center flex-shrink-0">
                          <img src={iconViewAll} alt="View All" className="w-7 md:w-9 h-7 md:h-9" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-montserrat font-semibold text-xs md:text-sm text-black line-clamp-1">View All</p>
                          <p className="font-montserrat font-normal text-xs text-black mt-1 md:mt-2 line-clamp-2">See the full list of all active, expiring, and expired certificates.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Expanded Activities View
            <div className="bg-white border border-[#e6e6e6] rounded-lg p-6 md:p-8 max-w-[1400px] mx-auto shadow-sm">
              <div className="flex items-center justify-between mb-6 md:mb-8 flex-wrap gap-3">
                <h2 className="font-montserrat font-semibold text-xl md:text-2xl text-black">Notifications / Recent Activities</h2>
                <button
                  onClick={() => setShowAllActivities(false)}
                  className="font-montserrat font-normal text-sm text-black hover:text-gray-600 transition whitespace-nowrap"
                >
                  ← Back
                </button>
              </div>

              <div className="border-b border-[#e6e6e6] mb-4" />

              {/* Full Activities List */}
              <div className="space-y-0">
                {displayedActivities.map((activity, index) => (
                  <div key={activity.id} className={index < displayedActivities.length - 1 ? 'border-b border-[#e6e6e6]' : ''}>
                    <div className="flex items-start gap-3 md:gap-5 py-5 md:py-6">
                      <img src={activity.icon} alt={activity.type} className="w-12 md:w-16 h-12 md:h-16 flex-shrink-0 rounded" />
                      <div className="flex-1 min-w-0">
                        <p className="font-montserrat font-semibold text-sm md:text-base text-black">{activity.title}</p>
                        <p className="font-montserrat font-normal text-xs md:text-base text-black mt-1 md:mt-2">{activity.description}</p>
                      </div>
                      <p className="font-montserrat font-semibold text-xs md:text-base text-black flex-shrink-0 whitespace-nowrap ml-2">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>

              {activities.length > 4 && showAllActivities && (
                <button className="mt-6 md:mt-8 font-montserrat font-semibold text-sm text-black hover:text-gray-600 transition">
                  Load More
                </button>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
