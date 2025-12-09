'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '../components/Sidebar';

// Header icons
const iconNotification = "https://www.figma.com/api/mcp/asset/ded7a757-2476-491a-9144-f622c9a20cd2";
const iconDropdown = "https://www.figma.com/api/mcp/asset/9d7abf7c-db72-4890-8ebe-89d12f8c8b7b";
const iconLogout = "https://www.figma.com/api/mcp/asset/e7b2ee4d-0d56-47bd-b57a-c17f490cc555";

// Page icons
const iconSearch = "https://www.figma.com/api/mcp/asset/1e0e94bc-c108-4254-9b1d-52818660d321";
const iconAdd = "https://www.figma.com/api/mcp/asset/52303320-aa98-4c81-82c5-99ef8d190f5a";
const iconUser = "https://www.figma.com/api/mcp/asset/ca0a3a7f-26f1-430c-922d-6142583ae2bd";
const iconMoreVertical = "https://www.figma.com/api/mcp/asset/3629d960-4e61-4811-be95-d2b6be794e59";

interface Credential {
  id: string;
  name: string;
  entity: string;
  entityType: 'Individual' | 'Company';
  expireIn30Days: number;
  status: 'Active' | 'Expired';
  credentialNumber?: string;
  dateOfIssue?: string;
  expiryDate?: string;
  issuingInstitute?: string;
  state?: string;
  country?: string;
}

// Sample credentials data
const credentialsData: Credential[] = [
  {
    id: '1',
    name: 'CT PE License',
    entity: 'Jeremiah Alalaide',
    entityType: 'Individual',
    expireIn30Days: 0,
    status: 'Active',
    credentialNumber: '2583 - 7348 - 7483 - 5838',
    dateOfIssue: '02/09/2023',
    expiryDate: '02/09/2028',
    issuingInstitute: 'Engineering Council of New Jersey',
    state: 'New Jersey',
    country: 'United States of America',
  },
  { id: '2', name: 'OH PE License', entity: 'AxiomBlack', entityType: 'Company', expireIn30Days: 0, status: 'Active' },
  { id: '3', name: 'SBE', entity: 'AxiomBlack', entityType: 'Company', expireIn30Days: 0, status: 'Active' },
  { id: '4', name: 'PA PE License', entity: 'Jeremiah Alalaide', entityType: 'Individual', expireIn30Days: 0, status: 'Active' },
  { id: '5', name: 'PA PE License', entity: 'AxiomBlack', entityType: 'Company', expireIn30Days: 0, status: 'Expired' },
  { id: '6', name: 'PA PE License', entity: 'Jeremiah Alalaide', entityType: 'Individual', expireIn30Days: 0, status: 'Expired' },
  { id: '7', name: 'PA PE License', entity: 'AxiomBlack', entityType: 'Company', expireIn30Days: 0, status: 'Expired' },
  { id: '8', name: 'PA PE License', entity: 'Jeremiah Alalaide', entityType: 'Individual', expireIn30Days: 0, status: 'Expired' },
  { id: '9', name: 'NJ BRC Business', entity: 'Jeremiah Alalaide', entityType: 'Individual', expireIn30Days: 0, status: 'Active' },
];

type Modal = 'add' | 'edit' | 'view' | 'delete' | 'createOwner' | 'createType' | null;

interface FormData {
  credentialType: string;
  credentialNumber: string;
  dateOfIssue: string;
  expiryDate: string;
  assignedEmployee: string;
  certificateExpires: string;
  issuingInstitute: string;
  state: string;
  country: string;
  additionalNotes: string;
  companyName?: string;
  credentialOwner?: string;
}

export default function CredentialsPage() {
  const router = useRouter();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [activeModal, setActiveModal] = useState<Modal>(null);
  const [selectedCredential, setSelectedCredential] = useState<Credential | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [, setToastType] = useState<'success' | 'error'>('success');
  const [showActionMenu, setShowActionMenu] = useState<string | null>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<FormData>({
    credentialType: '',
    credentialNumber: '',
    dateOfIssue: '',
    expiryDate: '',
    assignedEmployee: '',
    certificateExpires: 'Yes',
    issuingInstitute: '',
    state: '',
    country: '',
    additionalNotes: '',
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

  const filteredCredentials = credentialsData.filter(cred => {
    const matchesSearch = cred.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'All Status' || cred.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const openModal = (modal: Modal, credential?: Credential) => {
    setActiveModal(modal);
    if (credential) {
      setSelectedCredential(credential);
      if (modal === 'edit') {
        setFormData({
          credentialType: credential.name,
          credentialNumber: credential.credentialNumber || '',
          dateOfIssue: credential.dateOfIssue || '',
          expiryDate: credential.expiryDate || '',
          assignedEmployee: credential.entity,
          certificateExpires: 'Yes',
          issuingInstitute: credential.issuingInstitute || '',
          state: credential.state || '',
          country: credential.country || '',
          additionalNotes: '',
        });
      }
    }
  };

  const closeModal = () => {
    setActiveModal(null);
    setSelectedCredential(null);
    setShowActionMenu(null);
    setFormData({
      credentialType: '',
      credentialNumber: '',
      dateOfIssue: '',
      expiryDate: '',
      assignedEmployee: '',
      certificateExpires: 'Yes',
      issuingInstitute: '',
      state: '',
      country: '',
      additionalNotes: '',
    });
  };

  const showSuccessToast = (message: string) => {
    setToastMessage(message);
    setToastType('success');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleSaveCredential = () => {
    showSuccessToast('Credential saved successfully');
    closeModal();
  };

  const handleDeleteCredential = () => {
    showSuccessToast('Credential deleted successfully');
    closeModal();
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
            <h1 className="font-unbounded font-semibold text-xl md:text-2xl text-black">
              Certificate/License Management
            </h1>
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
          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center justify-between mb-6 md:mb-8 flex-wrap">
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
              {/* Search Input */}
              <div className="bg-white border border-[#e6e6e6] rounded-lg px-4 md:px-6 py-3 md:py-4 flex items-center gap-4 w-full md:w-80">
                <img src={iconSearch} alt="Search" className="w-6 md:w-8 h-6 md:h-8" />
                <input
                  type="text"
                  placeholder="Search for credentials"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 font-montserrat text-base text-gray-700 placeholder-gray-500 focus:outline-none"
                />
              </div>

              {/* Status Filter */}
              <div className="relative w-full md:w-auto">
                <button
                  onClick={() => setShowStatusDropdown(!showStatusDropdown)}
                  className="bg-white border border-[#e6e6e6] rounded-lg px-4 md:px-6 py-3 md:py-4 flex items-center gap-3 w-full md:w-auto font-montserrat text-base text-black"
                >
                  {statusFilter}
                  <span>▼</span>
                </button>

                {showStatusDropdown && (
                  <div className="absolute top-full mt-2 w-full md:w-48 bg-white border border-[#e6e6e6] rounded-lg shadow-lg z-10">
                    {['All Status', 'Active', 'Expired', 'Expiring in 30 Days'].map((status) => (
                      <button
                        key={status}
                        onClick={() => {
                          setStatusFilter(status);
                          setShowStatusDropdown(false);
                        }}
                        className={`block w-full text-left px-4 md:px-6 py-2 md:py-3 text-sm ${
                          statusFilter === status ? 'bg-gray-100 font-semibold' : 'hover:bg-gray-50'
                        }`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Add New Credentials Button */}
            <button
              onClick={() => openModal('add')}
              className="bg-black text-white flex items-center gap-3 px-6 md:px-12 py-3 md:py-4 rounded-xl font-montserrat font-medium text-base hover:bg-gray-900 transition whitespace-nowrap"
            >
              <img src={iconAdd} alt="Add" className="w-5 md:w-6 h-5 md:h-6" />
              <span>Add New Credentials</span>
            </button>
          </div>

          {/* Credentials Table */}
          <div className="bg-white border-2 border-[rgba(0,0,0,0.2)] rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#f1f1f1] border-b border-[#e6e6e6]">
                    <th className="px-4 md:px-6 py-4 md:py-5 text-left">
                      <div className="flex items-center gap-2">
                        <p className="font-montserrat font-normal text-lg md:text-xl text-black">Credentials</p>
                      </div>
                    </th>
                    <th className="px-4 md:px-6 py-4 md:py-5 text-left">
                      <div className="flex items-center gap-2">
                        <p className="font-montserrat font-normal text-lg md:text-xl text-black">Entity Type</p>
                      </div>
                    </th>
                    <th className="px-4 md:px-6 py-4 md:py-5 text-left">
                      <p className="font-montserrat font-normal text-lg md:text-xl text-black">Expire in 30 Days</p>
                    </th>
                    <th className="px-4 md:px-6 py-4 md:py-5 text-left">
                      <p className="font-geist font-normal text-lg md:text-xl text-black">Status</p>
                    </th>
                    <th className="px-4 md:px-6 py-4 md:py-5 text-center">
                      <p className="font-montserrat font-medium text-lg md:text-xl text-black">Actions</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCredentials.map((credential) => (
                    <tr key={credential.id} className="border-b border-[#e6e6e6] hover:bg-gray-50 transition">
                      <td className="px-4 md:px-6 py-4 md:py-5">
                        <p className="font-montserrat font-medium text-base md:text-lg text-black">{credential.name}</p>
                      </td>
                      <td className="px-4 md:px-6 py-4 md:py-5">
                        <div className="flex items-center gap-3">
                          <img src={iconUser} alt="User" className="w-8 md:w-9 h-8 md:h-9" />
                          <div className="font-montserrat font-normal text-base md:text-lg text-black">
                            <p>{credential.entity}</p>
                            <p className="text-sm text-gray-600">({credential.entityType})</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 md:px-6 py-4 md:py-5 text-center">
                        <p className="font-geist font-normal text-base md:text-lg text-black">{credential.expireIn30Days}</p>
                      </td>
                      <td className="px-4 md:px-6 py-4 md:py-5">
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-montserrat font-medium text-sm md:text-base ${
                          credential.status === 'Active'
                            ? 'bg-[#f1fef1] text-[#006500]'
                            : 'bg-[#ffdddd] text-[#a30000]'
                        }`}>
                          <div className={`w-3 h-3 rounded-full ${credential.status === 'Active' ? 'bg-[#006500]' : 'bg-[#a30000]'}`}></div>
                          {credential.status}
                        </div>
                      </td>
                      <td className="px-4 md:px-6 py-4 md:py-5 text-center relative">
                        <button
                          onClick={() => setShowActionMenu(showActionMenu === credential.id ? null : credential.id)}
                          className="hover:opacity-70 transition"
                        >
                          <img src={iconMoreVertical} alt="Actions" className="w-6 md:w-8 h-6 md:h-8 mx-auto" />
                        </button>

                        {showActionMenu === credential.id && (
                          <div className="absolute right-0 top-full mt-2 w-40 bg-white border border-[#e6e6e6] rounded-lg shadow-lg z-20">
                            <button
                              onClick={() => {
                                openModal('view', credential);
                                setShowActionMenu(null);
                              }}
                              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 font-montserrat"
                            >
                              👁️ View Details
                            </button>
                            <button
                              onClick={() => {
                                openModal('edit', credential);
                                setShowActionMenu(null);
                              }}
                              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 border-t border-[#e6e6e6] font-montserrat"
                            >
                              ✎ Edit
                            </button>
                            <button
                              onClick={() => {
                                openModal('delete', credential);
                                setShowActionMenu(null);
                              }}
                              className="block w-full text-left px-4 py-2 text-sm text-[#a30000] hover:bg-red-50 border-t border-[#e6e6e6] font-montserrat"
                            >
                              🗑️ Delete
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Footer */}
            <div className="bg-white border-t border-[#e6e6e6] px-4 md:px-6 py-3 md:py-4 flex items-center justify-between flex-wrap gap-4">
              <p className="font-montserrat font-semibold text-sm md:text-base text-gray-700">
                {filteredCredentials.length} results
              </p>
              <div className="flex items-center gap-4">
                <p className="font-montserrat font-medium text-sm md:text-base text-gray-700">
                  1-2 of 2 entries
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Toast Notifications */}
      {showToast && (
        <div className="fixed top-6 right-6 bg-[#d4f5d4] border border-[#36743D] text-[#36743D] px-4 py-3 rounded-lg flex items-center gap-3 shadow-lg z-50 max-w-sm">
          <span className="text-lg">✓</span>
          <div>
            <p className="font-montserrat font-semibold text-sm">Success</p>
            <p className="font-montserrat text-sm">{toastMessage}</p>
          </div>
          <button onClick={() => setShowToast(false)} className="ml-auto text-[#36743D] text-lg">
            ✕
          </button>
        </div>
      )}

      {/* MODALS */}

      {/* Add New Credentials Modal */}
      {activeModal === 'add' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-unbounded font-semibold text-black mb-6">Add New Credentials</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {/* Credential Owner */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">
                    Credential Owner *
                  </label>
                  <select className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg text-sm font-montserrat bg-white">
                    <option>Select Owner</option>
                    <option>Jeremiah Alalaide</option>
                    <option>AxiomBlack</option>
                  </select>
                  <button className="text-blue-600 text-sm mt-2 flex items-center gap-1 font-montserrat">
                    + Add New Owner
                  </button>
                </div>

                {/* Credential Type */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">
                    Credential Type *
                  </label>
                  <select className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg text-sm font-montserrat bg-white">
                    <option>Select Type</option>
                    <option>CT PE License</option>
                    <option>OH PE License</option>
                  </select>
                  <button className="text-blue-600 text-sm mt-2 flex items-center gap-1 font-montserrat">
                    + Create New
                  </button>
                </div>

                {/* Credential Number */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">
                    Credential Number
                  </label>
                  <input
                    type="text"
                    value={formData.credentialNumber}
                    onChange={(e) => setFormData({ ...formData, credentialNumber: e.target.value })}
                    className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg text-sm font-montserrat"
                  />
                </div>

                {/* Certificate Expires */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">
                    Certificate Expires?
                  </label>
                  <select className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg text-sm font-montserrat bg-white">
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>

                {/* Date of Issue */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">
                    Date of Issue *
                  </label>
                  <input
                    type="date"
                    value={formData.dateOfIssue}
                    onChange={(e) => setFormData({ ...formData, dateOfIssue: e.target.value })}
                    className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg text-sm font-montserrat"
                  />
                </div>

                {/* Expiry Date */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">
                    Expiry Date *
                  </label>
                  <input
                    type="date"
                    value={formData.expiryDate}
                    onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                    className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg text-sm font-montserrat"
                  />
                </div>

                {/* Issuing Institute */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">
                    Issuing Institute
                  </label>
                  <select className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg text-sm font-montserrat bg-white">
                    <option>Select Institute</option>
                    <option>Engineering Council of New Jersey</option>
                  </select>
                </div>

                {/* State */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">
                    State
                  </label>
                  <select className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg text-sm font-montserrat bg-white">
                    <option>Select State</option>
                    <option>New Jersey</option>
                    <option>Pennsylvania</option>
                  </select>
                </div>

                {/* Country */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">
                    Country
                  </label>
                  <select className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg text-sm font-montserrat bg-white">
                    <option>Select Country</option>
                    <option>United States of America</option>
                    <option>Canada</option>
                  </select>
                </div>

                {/* File Upload */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">
                    Upload Credential File
                  </label>
                  <div className="border-2 border-dashed border-[#e6e6e6] rounded-lg p-4 text-center">
                    <button className="px-4 py-2 bg-white border border-[#e6e6e6] rounded text-sm font-montserrat font-medium">
                      Choose File
                    </button>
                    <p className="text-xs font-montserrat text-gray-500 mt-2">No file chosen</p>
                    <p className="text-xs font-montserrat text-gray-500 mt-1">Note: Only PDF, JPG or PNG files are supported</p>
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    value={formData.additionalNotes}
                    onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                    className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg text-sm font-montserrat"
                    rows={3}
                  />
                </div>
              </div>

              <div className="flex gap-3 justify-end mt-6">
                <button
                  onClick={closeModal}
                  className="px-6 py-2 border border-[#e6e6e6] rounded-lg text-sm font-montserrat font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveCredential}
                  className="px-6 py-2 bg-black text-white rounded-lg text-sm font-montserrat font-medium hover:bg-gray-900 transition"
                >
                  Save Credentials
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Credentials Modal */}
      {activeModal === 'edit' && selectedCredential && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-unbounded font-semibold text-black mb-6">Edit Credentials</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {/* Credential Owner */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">
                    Credential Owner *
                  </label>
                  <select className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg text-sm font-montserrat bg-white">
                    <option>{selectedCredential.entity}</option>
                  </select>
                </div>

                {/* Credential Type */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">
                    Credential Type *
                  </label>
                  <select className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg text-sm font-montserrat bg-white">
                    <option>{selectedCredential.name}</option>
                  </select>
                </div>

                {/* Credential Number */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">
                    Credential Number
                  </label>
                  <input
                    type="text"
                    value={formData.credentialNumber}
                    onChange={(e) => setFormData({ ...formData, credentialNumber: e.target.value })}
                    className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg text-sm font-montserrat bg-gray-50"
                  />
                </div>

                {/* Certificate Expires */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">
                    Certificate Expires?
                  </label>
                  <select className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg text-sm font-montserrat bg-white">
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>

                {/* Date of Issue */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">
                    Date of Issue *
                  </label>
                  <input
                    type="date"
                    value={formData.dateOfIssue}
                    onChange={(e) => setFormData({ ...formData, dateOfIssue: e.target.value })}
                    className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg text-sm font-montserrat"
                  />
                </div>

                {/* Expiry Date */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">
                    Expiry Date *
                  </label>
                  <input
                    type="date"
                    value={formData.expiryDate}
                    onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                    className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg text-sm font-montserrat"
                  />
                </div>

                {/* Issuing Institute */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">
                    Issuing Institute
                  </label>
                  <select className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg text-sm font-montserrat bg-white">
                    <option>Select Institute</option>
                    <option>Engineering Council of New Jersey</option>
                  </select>
                </div>

                {/* State */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">
                    State
                  </label>
                  <select className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg text-sm font-montserrat bg-white">
                    <option>Select State</option>
                    <option>New Jersey</option>
                    <option>Pennsylvania</option>
                  </select>
                </div>

                {/* Country */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">
                    Country
                  </label>
                  <select className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg text-sm font-montserrat bg-white">
                    <option>Select Country</option>
                    <option>United States of America</option>
                    <option>Canada</option>
                  </select>
                </div>

                {/* File Upload */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">
                    Upload Credential File
                  </label>
                  <div className="border-2 border-dashed border-[#e6e6e6] rounded-lg p-4 text-center">
                    <button className="px-4 py-2 bg-white border border-[#e6e6e6] rounded text-sm font-montserrat font-medium">
                      Choose File
                    </button>
                    <p className="text-xs font-montserrat text-gray-500 mt-2">No file chosen</p>
                    <p className="text-xs font-montserrat text-gray-500 mt-1">Note: Only PDF, JPG or PNG files are supported</p>
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    value={formData.additionalNotes}
                    onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                    className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg text-sm font-montserrat"
                    rows={3}
                  />
                </div>
              </div>

              <div className="flex gap-3 justify-end mt-6">
                <button
                  onClick={closeModal}
                  className="px-6 py-2 border border-[#e6e6e6] rounded-lg text-sm font-montserrat font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveCredential}
                  className="px-6 py-2 bg-black text-white rounded-lg text-sm font-montserrat font-medium hover:bg-gray-900 transition"
                >
                  Save Credentials
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* View Credential Details Modal */}
      {activeModal === 'view' && selectedCredential && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 md:p-8">
              <button
                onClick={closeModal}
                className="text-black font-montserrat font-semibold mb-4 flex items-center gap-1 hover:opacity-70"
              >
                ← Back
              </button>

              <h2 className="text-2xl font-unbounded font-semibold text-black mb-6">{selectedCredential.name}</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="w-full h-40 bg-black rounded-lg mb-4"></div>
                </div>

                <div>
                  <div className="mb-4">
                    <p className="text-xs font-montserrat font-semibold text-gray-600 mb-1">Assigned Employees</p>
                    <p className="text-sm font-montserrat font-medium text-black">{selectedCredential.entity}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-montserrat font-semibold text-gray-600 mb-1">Credential Number</p>
                    <p className="text-sm font-montserrat font-medium text-black">{selectedCredential.credentialNumber || 'N/A'}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-montserrat font-semibold text-gray-600 mb-1">Status</p>
                    <p className="text-sm font-montserrat font-medium text-black">{selectedCredential.status}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-montserrat font-semibold text-gray-600 mb-1">Date of Issue</p>
                    <p className="text-sm font-montserrat font-medium text-black">{selectedCredential.dateOfIssue || 'N/A'}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-montserrat font-semibold text-gray-600 mb-1">Expiry Date</p>
                    <p className="text-sm font-montserrat font-medium text-black">{selectedCredential.expiryDate || 'N/A'}</p>
                  </div>

                  <div>
                    <p className="text-xs font-montserrat font-semibold text-gray-600 mb-1">Remaining Days</p>
                    <p className="text-sm font-montserrat font-medium text-black">68</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-xs font-montserrat font-semibold text-gray-600 mb-1">Issuing Institute</p>
                  <p className="text-sm font-montserrat font-medium text-black">{selectedCredential.issuingInstitute || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-xs font-montserrat font-semibold text-gray-600 mb-1">State</p>
                  <p className="text-sm font-montserrat font-medium text-black">{selectedCredential.state || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-xs font-montserrat font-semibold text-gray-600 mb-1">Country</p>
                  <p className="text-sm font-montserrat font-medium text-black">{selectedCredential.country || 'N/A'}</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-xs font-montserrat font-semibold text-gray-600 mb-1">Additional Notes</p>
                <p className="text-sm font-montserrat font-medium text-black">No additional notes</p>
              </div>

              <button
                onClick={closeModal}
                className="px-6 py-2 bg-black text-white rounded-lg text-sm font-montserrat font-medium hover:bg-gray-900 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {activeModal === 'delete' && selectedCredential && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-sm text-center">
            <h2 className="text-xl font-montserrat font-semibold text-black mb-4">Confirm credential deletion</h2>
            <div className="flex gap-3 justify-center">
              <button
                onClick={closeModal}
                className="px-6 py-2 border border-[#e6e6e6] rounded-lg text-sm font-montserrat font-medium"
              >
                No
              </button>
              <button
                onClick={handleDeleteCredential}
                className="px-6 py-2 bg-black text-white rounded-lg text-sm font-montserrat font-medium hover:bg-gray-900 transition"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
