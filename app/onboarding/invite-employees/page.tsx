'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Image assets
const imgPrivateInvestigator = "https://www.figma.com/api/mcp/asset/fccc3190-e417-4ffc-a18f-fe8637f8b434";
const imgLogo = "https://www.figma.com/api/mcp/asset/d0b1e716-292b-40c9-8355-7f1526d74474";
const imgBackArrow = "https://www.figma.com/api/mcp/asset/e58f1e54-134a-49bc-97ca-1bdd554e5e43";
const imgArrowButton = "https://www.figma.com/api/mcp/asset/54eafb16-a271-4c28-9762-f2407bfe139a";

export default function InviteEmployeesPage() {
  const router = useRouter();
  const [employees, setEmployees] = useState<string[]>(['']);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleEmailChange = (index: number, value: string) => {
    const newEmployees = [...employees];
    newEmployees[index] = value;
    setEmployees(newEmployees);
    setError('');
  };

  const handleAddAnother = () => {
    setEmployees([...employees, '']);
  };

  const handleNext = async () => {
    // Validate emails
    const validEmails = employees.filter(email => email.trim() !== '');
    
    if (validEmails.length === 0) {
      setError('Please enter at least one employee email');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    for (const email of validEmails) {
      if (!emailRegex.test(email)) {
        setError('Please enter valid email addresses');
        return;
      }
    }

    setIsSubmitting(true);
    
    try {
      // TODO: Send invitations to employees via API
      // const response = await fetch('/api/auth/invite-employees', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ emails: validEmails })
      // });
      
      // Navigate to success page
      router.push('/onboarding/setup-successful');
    } catch {
      setError('Failed to send invitations. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      {/* Left Section - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden h-screen">
        <img
          src={imgPrivateInvestigator}
          alt="Private Investigator"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-12 w-full z-10">
          <div className="flex items-center gap-5">
            <img src={imgLogo} alt="Logo" className="w-12 h-12" />
            <span className="text-white font-unbounded font-normal text-2xl">Axiom Tracker</span>
          </div>
          <Link
            href="/"
            className="flex items-center gap-4 text-white cursor-pointer hover:opacity-80 transition"
          >
            <img src={imgBackArrow} alt="Back" className="w-5 h-5" />
            <span className="font-geist font-medium text-2xl">Back to Website</span>
          </Link>
        </div>

        {/* Hero Text */}
        <div className="absolute bottom-20 left-12 right-12">
          <p className="text-white font-unbounded font-semibold text-4xl leading-[63px] mb-8">
            Never Miss Your Credential Renewal Again.
          </p>
          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center">
            <img src={imgArrowButton} alt="Arrow" className="w-9 h-9" />
          </div>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 bg-white">
        <div className="w-full max-w-2xl">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl lg:text-4xl font-unbounded font-semibold text-black mb-4">
              Invite Employees
            </h1>
            <p className="text-xl lg:text-2xl font-montserrat text-black/70">
              Invite employees to manage credentials
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
              <p className="text-red-600 font-montserrat text-sm">{error}</p>
            </div>
          )}

          {/* Employee Emails */}
          <div className="space-y-6 mb-10">
            {employees.map((email, index) => (
              <div key={index}>
                <label className="block font-montserrat text-black text-xl mb-4">
                  {index === 0 ? 'Employee Email' : `Employee Email ${index + 1}`}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => handleEmailChange(index, e.target.value)}
                  placeholder="Enter email address"
                  className="w-full px-8 py-6 lg:px-8 lg:py-7 bg-gray-100 rounded-lg font-montserrat text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all text-lg"
                />
              </div>
            ))}
          </div>

          {/* Add Another Employee Button */}
          <button
            onClick={handleAddAnother}
            className="border-2 border-black rounded-lg px-9 py-4 mb-10 font-montserrat font-semibold text-black hover:bg-black hover:text-white transition-all"
          >
            Add Another Employee
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={isSubmitting}
            className="w-full bg-black text-white font-montserrat font-semibold text-xl py-5 lg:py-6 rounded-lg hover:bg-gray-900 disabled:opacity-60 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending Invitations...
              </>
            ) : (
              'Next'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
