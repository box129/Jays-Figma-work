'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '../components/Sidebar';

// Header icons
const iconNotification = "https://www.figma.com/api/mcp/asset/ded7a757-2476-491a-9144-f622c9a20cd2";
const iconDropdown = "https://www.figma.com/api/mcp/asset/9d7abf7c-db72-4890-8ebe-89d12f8c8b7b";
const iconLogout = "https://www.figma.com/api/mcp/asset/e7b2ee4d-0d56-47bd-b57a-c17f490cc555";
const iconSearch = "https://www.figma.com/api/mcp/asset/1e0e94bc-c108-4254-9b1d-52818660d321";
const iconAdd = "https://www.figma.com/api/mcp/asset/52303320-aa98-4c81-82c5-99ef8d190f5a";
const iconMoreVertical = "https://www.figma.com/api/mcp/asset/3629d960-4e61-4811-be95-d2b6be794e59";

interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'Admin' | 'Employee';
  dateOfBirth?: string;
  jobTitle?: string;
  cellPhone?: string;
  sendTextNotification?: string;
  additionalNotes?: string;
  lastLogin: string;
}

const sampleEmployees: Employee[] = [
  {
    id: '1',
    firstName: 'Tosin',
    lastName: 'Adetutu',
    email: 'tadetutu@axiomblack.com',
    role: 'Admin',
    lastLogin: '2025-11-13 04:21:44',
  },
  {
    id: '2',
    firstName: 'Chioma',
    lastName: 'Onicha',
    email: 'conicha@axiomblack.com',
    role: 'Employee',
    lastLogin: '2025-11-13 04:21:44',
  },
  {
    id: '3',
    firstName: 'Jeremiah',
    lastName: 'Alalaide',
    email: 'jalalaide@axiomblack.com',
    role: 'Admin',
    lastLogin: '2025-11-13 04:21:44',
  },
  {
    id: '4',
    firstName: 'Jeremiah',
    lastName: 'Alalaide',
    email: 'jalalaide@axiomblack.com',
    role: 'Employee',
    lastLogin: '2025-11-13 04:21:44',
  },
  {
    id: '5',
    firstName: 'Jeremiah',
    lastName: 'Alalaide',
    email: 'jalalaide@axiomblack.com',
    role: 'Employee',
    lastLogin: '2025-11-13 04:21:44',
  },
  {
    id: '6',
    firstName: 'Jeremiah',
    lastName: 'Alalaide',
    email: 'jalalaide@axiomblack.com',
    role: 'Admin',
    lastLogin: '2025-11-13 04:21:44',
  },
  {
    id: '7',
    firstName: 'Jeremiah',
    lastName: 'Alalaide',
    email: 'jalalaide@axiomblack.com',
    role: 'Employee',
    lastLogin: '2025-11-13 04:21:44',
  },
  {
    id: '8',
    firstName: 'Jeremiah',
    lastName: 'Alalaide',
    email: 'jalalaide@axiomblack.com',
    role: 'Admin',
    lastLogin: '2025-11-13 04:21:44',
  },
  {
    id: '9',
    firstName: 'Jeremiah',
    lastName: 'Alalaide',
    email: 'jalalaide@axiomblack.com',
    role: 'Employee',
    lastLogin: '2025-11-13 04:21:44',
  },
];

type Modal = 'add' | 'edit' | 'delete' | null;

interface FormData {
  email: string;
  role: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  jobTitle: string;
  cellPhone: string;
  sendTextNotification: string;
  additionalNotes: string;
}

export default function EntityPage() {
  const router = useRouter();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModal, setActiveModal] = useState<Modal>(null);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showActionMenu, setShowActionMenu] = useState<string | null>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    role: 'Employee',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    jobTitle: '',
    cellPhone: '',
    sendTextNotification: 'No',
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

  const filteredEmployees = sampleEmployees.filter(emp =>
    `${emp.firstName} ${emp.lastName}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openModal = (modal: Modal, employee?: Employee) => {
    setActiveModal(modal);
    if (employee) {
      setSelectedEmployee(employee);
      if (modal === 'edit') {
        setFormData({
          email: employee.email,
          role: employee.role,
          firstName: employee.firstName,
          lastName: employee.lastName,
          dateOfBirth: employee.dateOfBirth || '',
          jobTitle: employee.jobTitle || '',
          cellPhone: employee.cellPhone || '',
          sendTextNotification: employee.sendTextNotification || 'No',
          additionalNotes: employee.additionalNotes || '',
        });
      }
    } else if (modal === 'add') {
      setFormData({
        email: '',
        role: 'Employee',
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        jobTitle: '',
        cellPhone: '',
        sendTextNotification: 'No',
        additionalNotes: '',
      });
    }
  };

  const closeModal = () => {
    setActiveModal(null);
    setSelectedEmployee(null);
    setShowActionMenu(null);
  };

  const showSuccessToast = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleSaveEmployee = () => {
    showSuccessToast('Employee details saved successfully');
    closeModal();
  };

  const handleDeleteEmployee = () => {
    showSuccessToast('Employee deleted successfully');
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
              Employee Management
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
          {/* Search and Add Button */}
          <div className="flex flex-col md:flex-row gap-4 mb-6 md:mb-8 items-start md:items-center justify-between flex-wrap">
            <div className="bg-white border border-[#e6e6e6] rounded-lg px-4 md:px-6 py-3 md:py-4 flex items-center gap-4 w-full md:w-80">
              <img src={iconSearch} alt="Search" className="w-6 md:w-8 h-6 md:h-8" />
              <input
                type="text"
                placeholder="Search for employee"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 font-montserrat text-base text-gray-700 placeholder-gray-500 focus:outline-none"
              />
            </div>

            <button
              onClick={() => openModal('add')}
              className="bg-black text-white flex items-center gap-3 px-6 md:px-12 py-3 md:py-4 rounded-xl font-montserrat font-medium text-base hover:bg-gray-900 transition whitespace-nowrap"
            >
              <img src={iconAdd} alt="Add" className="w-5 md:w-6 h-5 md:h-6" />
              <span>Add New Employee</span>
            </button>
          </div>

          {/* Employees Table */}
          <div className="bg-white border-2 border-[rgba(0,0,0,0.2)] rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#f1f1f1] border-b border-[#e6e6e6]">
                    <th className="px-4 md:px-6 py-4 md:py-5 text-left">
                      <input type="checkbox" className="w-4 h-4" />
                    </th>
                    <th className="px-4 md:px-6 py-4 md:py-5 text-left">
                      <p className="font-montserrat font-normal text-lg md:text-xl text-black">Employees</p>
                    </th>
                    <th className="px-4 md:px-6 py-4 md:py-5 text-left">
                      <p className="font-montserrat font-normal text-lg md:text-xl text-black">Role</p>
                    </th>
                    <th className="px-4 md:px-6 py-4 md:py-5 text-left">
                      <p className="font-montserrat font-normal text-lg md:text-xl text-black">Email</p>
                    </th>
                    <th className="px-4 md:px-6 py-4 md:py-5 text-left">
                      <p className="font-montserrat font-normal text-lg md:text-xl text-black">Last Login</p>
                    </th>
                    <th className="px-4 md:px-6 py-4 md:py-5 text-center">
                      <p className="font-montserrat font-medium text-lg md:text-xl text-black">Actions</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEmployees.map((employee) => (
                    <tr key={employee.id} className="border-b border-[#e6e6e6] hover:bg-gray-50 transition">
                      <td className="px-4 md:px-6 py-4 md:py-5">
                        <input type="checkbox" className="w-4 h-4" />
                      </td>
                      <td className="px-4 md:px-6 py-4 md:py-5">
                        <p className="font-montserrat font-medium text-base md:text-lg text-black">
                          {employee.firstName} {employee.lastName}
                        </p>
                      </td>
                      <td className="px-4 md:px-6 py-4 md:py-5">
                        <p className="font-montserrat font-normal text-base md:text-lg text-black">{employee.role}</p>
                      </td>
                      <td className="px-4 md:px-6 py-4 md:py-5">
                        <p className="font-montserrat font-normal text-base md:text-lg text-black">{employee.email}</p>
                      </td>
                      <td className="px-4 md:px-6 py-4 md:py-5">
                        <p className="font-montserrat font-normal text-base md:text-lg text-black">{employee.lastLogin}</p>
                      </td>
                      <td className="px-4 md:px-6 py-4 md:py-5 text-center relative">
                        <button
                          onClick={() => setShowActionMenu(showActionMenu === employee.id ? null : employee.id)}
                          className="hover:opacity-70 transition"
                        >
                          <img src={iconMoreVertical} alt="Actions" className="w-6 md:w-8 h-6 md:h-8 mx-auto" />
                        </button>

                        {showActionMenu === employee.id && (
                          <div className="absolute right-0 top-full mt-2 w-40 bg-white border border-[#e6e6e6] rounded-lg shadow-lg z-20">
                            <button
                              onClick={() => {
                                openModal('edit', employee);
                                setShowActionMenu(null);
                              }}
                              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 font-montserrat flex items-center gap-2"
                            >
                              ✎ Edit
                            </button>
                            <button
                              onClick={() => {
                                openModal('delete', employee);
                                setShowActionMenu(null);
                              }}
                              className="block w-full text-left px-4 py-2 text-sm text-[#a30000] hover:bg-red-50 border-t border-[#e6e6e6] font-montserrat flex items-center gap-2"
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
                {filteredEmployees.length} results
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

      {/* Add New Employee Modal */}
      {activeModal === 'add' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-unbounded font-semibold text-black mb-6">Add New Employee</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {/* Account Information */}
                <div className="md:col-span-2">
                  <h3 className="text-lg font-montserrat font-semibold text-black mb-4">Account Information</h3>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="Input email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg text-sm font-montserrat"
                  />
                </div>

                {/* Role */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">Role</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg text-sm font-montserrat bg-white"
                  >
                    <option>Select role</option>
                    <option>Admin</option>
                    <option>Employee</option>
                  </select>
                </div>

                {/* Personal Information */}
                <div className="md:col-span-2">
                  <h3 className="text-lg font-montserrat font-semibold text-black mb-4">Personal Information</h3>
                </div>

                {/* First Name */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">First Name</label>
                  <input
                    type="text"
                    placeholder="Input first name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg text-sm font-montserrat"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">Last Name</label>
                  <input
                    type="text"
                    placeholder="Input last name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg text-sm font-montserrat"
                  />
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">Date of Birth</label>
                  <input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                    className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg text-sm font-montserrat"
                  />
                </div>

                {/* Job Title */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">Job Title</label>
                  <input
                    type="text"
                    placeholder="Input job title"
                    value={formData.jobTitle}
                    onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                    className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg text-sm font-montserrat"
                  />
                </div>

                {/* Cell Phone */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">Cell Phone</label>
                  <input
                    type="tel"
                    placeholder="Input cell phone"
                    value={formData.cellPhone}
                    onChange={(e) => setFormData({ ...formData, cellPhone: e.target.value })}
                    className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg text-sm font-montserrat"
                  />
                </div>

                {/* Send Text Notification */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">Send Text Notification</label>
                  <select
                    value={formData.sendTextNotification}
                    onChange={(e) => setFormData({ ...formData, sendTextNotification: e.target.value })}
                    className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg text-sm font-montserrat bg-white"
                  >
                    <option>Select option</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>

                {/* Additional Notes */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">Additional Notes</label>
                  <textarea
                    value={formData.additionalNotes}
                    onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                    className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg text-sm font-montserrat"
                    rows={4}
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
                  onClick={handleSaveEmployee}
                  className="px-6 py-2 bg-black text-white rounded-lg text-sm font-montserrat font-medium hover:bg-gray-900 transition"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Employee Modal */}
      {activeModal === 'edit' && selectedEmployee && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-unbounded font-semibold text-black mb-6">Edit Employee Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {/* Account Information */}
                <div className="md:col-span-2">
                  <h3 className="text-lg font-montserrat font-semibold text-black mb-4">Account Information</h3>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg text-sm font-montserrat bg-gray-50"
                  />
                </div>

                {/* Role */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">Role</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg text-sm font-montserrat bg-white"
                  >
                    <option>Admin</option>
                    <option>Employee</option>
                  </select>
                </div>

                {/* Personal Information */}
                <div className="md:col-span-2">
                  <h3 className="text-lg font-montserrat font-semibold text-black mb-4">Personal Information</h3>
                </div>

                {/* First Name */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">First Name</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg text-sm font-montserrat"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">Last Name</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg text-sm font-montserrat"
                  />
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">Date of Birth</label>
                  <input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                    className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg text-sm font-montserrat"
                  />
                </div>

                {/* Job Title */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">Job Title</label>
                  <input
                    type="text"
                    value={formData.jobTitle}
                    onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                    className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg text-sm font-montserrat"
                  />
                </div>

                {/* Cell Phone */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">Cell Phone</label>
                  <input
                    type="tel"
                    value={formData.cellPhone}
                    onChange={(e) => setFormData({ ...formData, cellPhone: e.target.value })}
                    className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg text-sm font-montserrat"
                  />
                </div>

                {/* Send Text Notification */}
                <div>
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">Send Text Notification</label>
                  <select
                    value={formData.sendTextNotification}
                    onChange={(e) => setFormData({ ...formData, sendTextNotification: e.target.value })}
                    className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg text-sm font-montserrat bg-white"
                  >
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>

                {/* Additional Notes */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-montserrat font-medium text-black mb-2">Additional Notes</label>
                  <textarea
                    value={formData.additionalNotes}
                    onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                    className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg text-sm font-montserrat"
                    rows={4}
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
                  onClick={handleSaveEmployee}
                  className="px-6 py-2 bg-black text-white rounded-lg text-sm font-montserrat font-medium hover:bg-gray-900 transition"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {activeModal === 'delete' && selectedEmployee && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-sm text-center">
            <h2 className="text-xl font-montserrat font-semibold text-black mb-6">Confirm credential deletion</h2>
            <div className="flex gap-3 justify-center">
              <button
                onClick={closeModal}
                className="px-6 py-2 border border-[#e6e6e6] rounded-lg text-sm font-montserrat font-medium"
              >
                No
              </button>
              <button
                onClick={handleDeleteEmployee}
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
