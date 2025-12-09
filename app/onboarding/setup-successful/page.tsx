'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Image assets
const imgPrivateInvestigator = "https://www.figma.com/api/mcp/asset/d34923fa-01cd-4b06-9f19-9aaf031958eb";
const imgLogo = "https://www.figma.com/api/mcp/asset/7da77ced-5fb3-4ce5-928e-647ccdb0a374";
const imgBackArrow = "https://www.figma.com/api/mcp/asset/8f4c4d35-54e9-47ee-97d6-a544ff299728";
const imgArrowButton = "https://www.figma.com/api/mcp/asset/287b3dff-b518-4387-a5a8-b5709dbd4fbf";
const imgCheckmark = "https://www.figma.com/api/mcp/asset/08e96239-62df-4e6c-8bbf-5c9f185bc123";

export default function SetupSuccessfulPage() {
  const router = useRouter();

  const handleProceed = () => {
    // TODO: This should navigate to dashboard or next onboarding step
    router.push('/dashboard');
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

      {/* Right Section - Success Message */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 bg-white">
        <div className="w-full max-w-2xl flex flex-col items-center text-center">
          {/* Success Icon */}
          <div className="mb-10 lg:mb-16">
            <div className="w-52 h-52 bg-[#f1fff1] rounded-full flex items-center justify-center mx-auto">
              <div className="w-44 h-44 bg-[#caffc7] rounded-full flex items-center justify-center">
                <div className="w-32 h-32 bg-[#0bd200] rounded-full flex items-center justify-center">
                  <img src={imgCheckmark} alt="Checkmark" className="w-10 h-10" />
                </div>
              </div>
            </div>
          </div>

          {/* Success Text */}
          <div className="mb-12">
            <h1 className="text-3xl lg:text-4xl font-unbounded font-semibold text-black mb-6">
              Setup Successful
            </h1>
            <p className="text-xl lg:text-2xl font-montserrat text-black">
              Email(s) has been sent to the employees to create their account
            </p>
          </div>

          {/* Proceed Button */}
          <button
            onClick={handleProceed}
            className="w-full bg-black text-white font-montserrat font-semibold text-xl py-5 lg:py-6 rounded-lg hover:bg-gray-900 transition-all"
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
}
