'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '../components/Sidebar';

// Header icons
const iconNotification = "https://www.figma.com/api/mcp/asset/ded7a757-2476-491a-9144-f622c9a20cd2";
const iconDropdown = "https://www.figma.com/api/mcp/asset/9d7abf7c-db72-4890-8ebe-89d12f8c8b7b";
const iconLogout = "https://www.figma.com/api/mcp/asset/e7b2ee4d-0d56-47bd-b57a-c17f490cc555";

type Tab = 'account' | 'company' | 'notification';

interface AccountFormData {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  department: string;
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

interface CompanyFormData {
  companyName: string;
  companyType: string;
  companyWebsite: string;
  numberOfEmployees: string;
  state: string;
  country: string;
  companyDescription: string;
}

interface NotificationSettings {
  notificationFrequency: string;
  emailNotifications: boolean;
  employeeUpdates: boolean;
  expiryEmails: boolean;
  criticalAlertsOnly: boolean;
}

export default function SettingsPage() {
  const router = useRouter();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('account');
  const [showFrequencyDropdown, setShowFrequencyDropdown] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  
  const [accountForm, setAccountForm] = useState<AccountFormData>({
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    department: 'axiomblack.com',
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [companyForm, setCompanyForm] = useState<CompanyFormData>({
    companyName: 'AxiomBlack',
    companyType: 'Construction',
    companyWebsite: 'axiomblack.com',
    numberOfEmployees: '1-10',
    state: '',
    country: '',
    companyDescription: '',
  });

  const [notificationSettings, setNotificationSettings] = useState<NotificationSettings>({
    notificationFrequency: '7 days before',
    emailNotifications: true,
    employeeUpdates: true,
    expiryEmails: true,
    criticalAlertsOnly: false,
  });

  const handleLogout = () => {
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

  const handleSaveAccount = () => {
    console.log('Account form saved:', accountForm);
  };

  const handleSaveCompany = () => {
    console.log('Company form saved:', companyForm);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log('File uploaded:', file.name);
    }
  };

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
            <h1 className="font-unbounded font-semibold text-xl md:text-2xl text-black">Settings</h1>
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
                  <div className="w-10 md:w-14 h-10 md:h-14 bg-gray-400 rounded-full flex items-center justify-center shrink-0">
                    <span className="font-montserrat font-normal text-sm md:text-xl text-black">JA</span>
                  </div>
                  <div className="text-left hidden md:block">
                    <p className="font-montserrat font-medium text-base text-black">Jeremiah Alalade</p>
                    <p className="font-montserrat font-normal text-sm text-black">Admin</p>
                  </div>
                </div>
                <img src={iconDropdown} alt="Menu" className="w-6 md:w-9 h-6 md:h-9 shrink-0" />
              </button>

              {/* Dropdown Menu */}
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-[calc(100vw-2rem)] max-w-[320px] md:w-80 bg-white border border-[#c9c9c9] rounded-lg shadow-lg z-50 overflow-hidden">
                  <div className="px-6 md:px-8 py-4 md:py-5 border-b border-gray-300">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-16 md:w-20 h-16 md:h-20 bg-gray-400 rounded-full flex items-center justify-center shrink-0">
                        <span className="font-montserrat font-normal text-white text-sm md:text-base">JA</span>
                      </div>
                      <div>
                        <p className="font-montserrat font-normal text-xs md:text-sm text-black">jalalade@axiomblack.com</p>
                        <p className="font-montserrat font-normal text-xs md:text-sm text-black mt-2 md:mt-3">Admin</p>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-[#e8e8e8] hover:bg-gray-300 transition font-montserrat font-medium text-sm md:text-base text-black"
                  >
                    <img src={iconLogout} alt="Logout" className="w-5 md:w-7 h-5 md:h-7 shrink-0" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="p-4 md:p-10">
          {/* TABS */}
          <div className="border-b border-[#e6e6e6] mb-6 md:mb-8">
            <div className="flex gap-6 md:gap-10 overflow-x-auto">
              <button
                onClick={() => setActiveTab('account')}
                className={`pb-4 md:pb-5 font-montserrat font-normal text-base md:text-lg whitespace-nowrap ${
                  activeTab === 'account'
                    ? 'text-black border-b-2 border-black'
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                Account Information
              </button>
              <button
                onClick={() => setActiveTab('company')}
                className={`pb-4 md:pb-5 font-montserrat font-normal text-base md:text-lg whitespace-nowrap ${
                  activeTab === 'company'
                    ? 'text-black border-b-2 border-black'
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                Company Details
              </button>
              <button
                onClick={() => setActiveTab('notification')}
                className={`pb-4 md:pb-5 font-montserrat font-normal text-base md:text-lg whitespace-nowrap ${
                  activeTab === 'notification'
                    ? 'text-black border-b-2 border-black'
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                Notification Preference
              </button>
            </div>
          </div>

          {/* ACCOUNT INFORMATION TAB */}
          {activeTab === 'account' && (
            <div className="max-w-4xl">
              <h2 className="text-lg md:text-xl font-montserrat font-semibold text-black mb-6">Personal Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
                {/* First Name */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">First Name</label>
                  <input
                    type="text"
                    value={accountForm.firstName}
                    onChange={(e) => setAccountForm({ ...accountForm, firstName: e.target.value })}
                    className="w-full px-4 py-2.5 border border-[#e6e6e6] rounded-lg bg-[#f6f6f6] text-sm font-montserrat"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">Last Name</label>
                  <input
                    type="text"
                    value={accountForm.lastName}
                    onChange={(e) => setAccountForm({ ...accountForm, lastName: e.target.value })}
                    className="w-full px-4 py-2.5 border border-[#e6e6e6] rounded-lg bg-[#f6f6f6] text-sm font-montserrat"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">Email</label>
                  <input
                    type="email"
                    value={accountForm.email}
                    onChange={(e) => setAccountForm({ ...accountForm, email: e.target.value })}
                    className="w-full px-4 py-2.5 border border-[#e6e6e6] rounded-lg bg-[#f6f6f6] text-sm font-montserrat"
                  />
                </div>

                {/* Role */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">Role</label>
                  <input
                    type="text"
                    value={accountForm.role}
                    onChange={(e) => setAccountForm({ ...accountForm, role: e.target.value })}
                    className="w-full px-4 py-2.5 border border-[#e6e6e6] rounded-lg bg-[#f6f6f6] text-sm font-montserrat"
                  />
                </div>

                {/* Department */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">Department</label>
                  <input
                    type="text"
                    value={accountForm.department}
                    onChange={(e) => setAccountForm({ ...accountForm, department: e.target.value })}
                    className="w-full px-4 py-2.5 border border-[#e6e6e6] rounded-lg bg-[#f6f6f6] text-sm font-montserrat text-gray-500"
                    disabled
                  />
                </div>
              </div>

              {/* Change Password */}
              <h2 className="text-lg md:text-xl font-montserrat font-semibold text-black mb-6 border-t border-[#e6e6e6] pt-6">Change Password</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
                {/* Old Password */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">Old Password</label>
                  <input
                    type="password"
                    value={accountForm.oldPassword}
                    onChange={(e) => setAccountForm({ ...accountForm, oldPassword: e.target.value })}
                    className="w-full px-4 py-2.5 border border-[#e6e6e6] rounded-lg bg-[#f6f6f6] text-sm font-montserrat"
                  />
                </div>

                {/* New Password */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">New Password</label>
                  <input
                    type="password"
                    value={accountForm.newPassword}
                    onChange={(e) => setAccountForm({ ...accountForm, newPassword: e.target.value })}
                    className="w-full px-4 py-2.5 border border-[#e6e6e6] rounded-lg bg-[#f6f6f6] text-sm font-montserrat"
                  />
                </div>

                {/* Confirm New Password */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">Confirm New Password</label>
                  <input
                    type="password"
                    value={accountForm.confirmPassword}
                    onChange={(e) => setAccountForm({ ...accountForm, confirmPassword: e.target.value })}
                    className="w-full px-4 py-2.5 border border-[#e6e6e6] rounded-lg bg-[#f6f6f6] text-sm font-montserrat"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleSaveAccount}
                  className="px-8 md:px-10 py-2.5 md:py-3 bg-black text-white rounded-lg font-montserrat font-semibold text-base hover:bg-gray-900 transition"
                >
                  Save Changes
                </button>
                <button className="px-6 md:px-8 py-2.5 md:py-3 text-gray-500 font-montserrat font-medium text-base hover:text-black">
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* COMPANY DETAILS TAB */}
          {activeTab === 'company' && (
            <div className="max-w-4xl">
              <h2 className="text-lg md:text-xl font-montserrat font-semibold text-black mb-6">Company Details</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
                {/* Company Name */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">Company Name</label>
                  <input
                    type="text"
                    value={companyForm.companyName}
                    onChange={(e) => setCompanyForm({ ...companyForm, companyName: e.target.value })}
                    className="w-full px-4 py-2.5 border border-[#e6e6e6] rounded-lg bg-[#f6f6f6] text-sm font-montserrat"
                  />
                </div>

                {/* Company Type */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">Company Type</label>
                  <select
                    value={companyForm.companyType}
                    onChange={(e) => setCompanyForm({ ...companyForm, companyType: e.target.value })}
                    className="w-full px-4 py-2.5 border border-[#e6e6e6] rounded-lg bg-white text-sm font-montserrat"
                  >
                    <option>Construction</option>
                    <option>Technology</option>
                    <option>Finance</option>
                  </select>
                </div>

                {/* Company Website */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">Company Website</label>
                  <input
                    type="text"
                    value={companyForm.companyWebsite}
                    onChange={(e) => setCompanyForm({ ...companyForm, companyWebsite: e.target.value })}
                    className="w-full px-4 py-2.5 border border-[#e6e6e6] rounded-lg bg-[#f6f6f6] text-sm font-montserrat"
                  />
                </div>

                {/* Number of Employees */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">Number of Employees</label>
                  <select
                    value={companyForm.numberOfEmployees}
                    onChange={(e) => setCompanyForm({ ...companyForm, numberOfEmployees: e.target.value })}
                    className="w-full px-4 py-2.5 border border-[#e6e6e6] rounded-lg bg-white text-sm font-montserrat"
                  >
                    <option>1-10</option>
                    <option>11-50</option>
                    <option>51-200</option>
                    <option>200+</option>
                  </select>
                </div>

                {/* State */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">State</label>
                  <select
                    value={companyForm.state}
                    onChange={(e) => setCompanyForm({ ...companyForm, state: e.target.value })}
                    className="w-full px-4 py-2.5 border border-[#e6e6e6] rounded-lg bg-white text-sm font-montserrat text-gray-500"
                  >
                    <option value="">Select State</option>
                    <option>California</option>
                    <option>Texas</option>
                    <option>New York</option>
                  </select>
                </div>

                {/* Country */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">Country</label>
                  <select
                    value={companyForm.country}
                    onChange={(e) => setCompanyForm({ ...companyForm, country: e.target.value })}
                    className="w-full px-4 py-2.5 border border-[#e6e6e6] rounded-lg bg-white text-sm font-montserrat text-gray-500"
                  >
                    <option value="">Select Country</option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>

              {/* Company Logo Upload */}
              <div className="mb-8">
                <label className="block text-sm font-montserrat font-medium text-black mb-3">Company Logo</label>
                <div className="border-2 border-dashed border-[#e6e6e6] rounded-lg p-8 text-center hover:bg-gray-50 transition cursor-pointer">
                  <input
                    type="file"
                    accept="image/png,image/jpg"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <p className="font-montserrat font-medium text-base text-black mb-1">Upload</p>
                    <p className="font-montserrat text-sm text-gray-500">It must be png or jpg file</p>
                  </label>
                </div>
              </div>

              {/* Company Description */}
              <div className="mb-8">
                <label className="block text-sm font-montserrat font-medium text-black mb-2">Company Description</label>
                <textarea
                  value={companyForm.companyDescription}
                  onChange={(e) => setCompanyForm({ ...companyForm, companyDescription: e.target.value })}
                  className="w-full px-4 py-2.5 border border-[#e6e6e6] rounded-lg bg-white text-sm font-montserrat"
                  rows={6}
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleSaveCompany}
                  className="px-8 md:px-10 py-2.5 md:py-3 bg-black text-white rounded-lg font-montserrat font-semibold text-base hover:bg-gray-900 transition"
                >
                  Save Changes
                </button>
                <button className="px-6 md:px-8 py-2.5 md:py-3 text-gray-500 font-montserrat font-medium text-base hover:text-black">
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* NOTIFICATION PREFERENCE TAB */}
          {activeTab === 'notification' && (
            <div className="max-w-4xl">
              <h2 className="text-lg md:text-xl font-montserrat font-semibold text-black mb-6">Notification preferences</h2>

              {/* Notification Frequency */}
              <div className="mb-8 pb-8 border-b border-[#e6e6e6]">
                <h3 className="text-base md:text-lg font-montserrat font-medium text-black mb-1">Notification Frequency</h3>
                <p className="text-sm font-montserrat text-gray-500 mb-4">Choose how early you want to receive email reminders before a credential expires.</p>

                <div className="relative w-full md:w-80">
                  <button
                    onClick={() => setShowFrequencyDropdown(!showFrequencyDropdown)}
                    className="w-full px-4 py-2.5 border border-[#e6e6e6] rounded-lg bg-[#f6f6f6] text-sm font-montserrat text-left flex items-center justify-between"
                  >
                    <span>{notificationSettings.notificationFrequency}</span>
                    <span className="text-gray-500">▼</span>
                  </button>

                  {showFrequencyDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#e6e6e6] rounded-lg shadow-lg z-20">
                      <button
                        onClick={() => {
                          setNotificationSettings({ ...notificationSettings, notificationFrequency: '7 days before' });
                          setShowFrequencyDropdown(false);
                        }}
                        className="block w-full text-left px-4 py-2.5 hover:bg-gray-50 font-montserrat text-sm border-b border-[#e6e6e6] last:border-0"
                      >
                        7 days before
                      </button>
                      <button
                        onClick={() => {
                          setNotificationSettings({ ...notificationSettings, notificationFrequency: '15 days before' });
                          setShowFrequencyDropdown(false);
                        }}
                        className="block w-full text-left px-4 py-2.5 hover:bg-gray-50 font-montserrat text-sm border-b border-[#e6e6e6] last:border-0"
                      >
                        15 days before
                      </button>
                      <button
                        onClick={() => {
                          setNotificationSettings({ ...notificationSettings, notificationFrequency: '30 days before (default)' });
                          setShowFrequencyDropdown(false);
                        }}
                        className="block w-full text-left px-4 py-2.5 hover:bg-gray-50 font-montserrat text-sm border-b border-[#e6e6e6] last:border-0"
                      >
                        30 days before (default)
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Email Notifications Toggle */}
              <div className="flex items-start justify-between mb-8 pb-8 border-b border-[#e6e6e6]">
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-montserrat font-medium text-black mb-1">Email Notifications</h3>
                  <p className="text-sm font-montserrat text-gray-500">Receive email alerts about credential updates, expiries, and important system events.</p>
                </div>
                <button
                  onClick={() => setNotificationSettings({ ...notificationSettings, emailNotifications: !notificationSettings.emailNotifications })}
                  className={`ml-4 relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    notificationSettings.emailNotifications ? 'bg-black' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      notificationSettings.emailNotifications ? 'translate-x-5' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Employee Updates Toggle */}
              <div className="flex items-start justify-between mb-8 pb-8 border-b border-[#e6e6e6]">
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-montserrat font-medium text-black mb-1">Employee updates</h3>
                  <p className="text-sm font-montserrat text-gray-500">Stay informed about changes made to employee accounts, roles, or activities.</p>
                </div>
                <button
                  onClick={() => setNotificationSettings({ ...notificationSettings, employeeUpdates: !notificationSettings.employeeUpdates })}
                  className={`ml-4 relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    notificationSettings.employeeUpdates ? 'bg-black' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      notificationSettings.employeeUpdates ? 'translate-x-5' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Expiry Summary Emails Toggle */}
              <div className="flex items-start justify-between mb-8 pb-8 border-b border-[#e6e6e6]">
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-montserrat font-medium text-black mb-1">Receive Expiry Summary Emails</h3>
                  <p className="text-sm font-montserrat text-gray-500">Get a summary email showing all credentials that are expiring soon for easier monitoring.</p>
                </div>
                <button
                  onClick={() => setNotificationSettings({ ...notificationSettings, expiryEmails: !notificationSettings.expiryEmails })}
                  className={`ml-4 relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    notificationSettings.expiryEmails ? 'bg-black' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      notificationSettings.expiryEmails ? 'translate-x-5' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Critical Alerts Only Toggle */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-montserrat font-medium text-black mb-1">Critical Alerts Only</h3>
                  <p className="text-sm font-montserrat text-gray-500">Limit notifications to urgent events such as expired credentials or failed uploads.</p>
                </div>
                <button
                  onClick={() => setNotificationSettings({ ...notificationSettings, criticalAlertsOnly: !notificationSettings.criticalAlertsOnly })}
                  className={`ml-4 relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    notificationSettings.criticalAlertsOnly ? 'bg-black' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      notificationSettings.criticalAlertsOnly ? 'translate-x-5' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
