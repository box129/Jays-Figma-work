"use client";

import Link from "next/link";

// Image assets from Figma - Auth Choice Screen
const imgPrivateInvestigator =
  "https://www.figma.com/api/mcp/asset/ae27070c-db88-4a5a-ad53-c466ddbc310f";
const imgLogo = "https://www.figma.com/api/mcp/asset/de6e04cb-5b34-48cf-a0b6-8f8154a056c0";
const imgBackArrow = "https://www.figma.com/api/mcp/asset/5d10e848-4088-46db-950b-09237731f30a";
const imgArrowButton = "https://www.figma.com/api/mcp/asset/9fecdd93-b9be-42ec-80f7-a6631e840015";

export default function LoginChoicePage() {

  return (
    <main
      className="min-h-screen w-full bg-white flex flex-col lg:flex-row"
      data-node-id="1726:6131"
    >
      {/* Left side - Image with overlay and hero content */}
      <section className="relative w-full lg:w-1/2 h-[40vh] lg:h-screen overflow-hidden flex flex-col">
        <img
          alt="Professional working on laptop"
          src={imgPrivateInvestigator}
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content overlay */}
        <div className="relative z-10 flex flex-col h-full px-6 sm:px-8 lg:px-12 pt-6 pb-8">
          {/* Header */}
          <header className="flex items-center justify-between w-full text-white mb-auto">
            <div className="flex items-center gap-2 lg:gap-4">
              <div className="relative w-10 h-10 lg:w-12 lg:h-12 flex-shrink-0">
                <img 
                  alt="Axiom Tracker Logo" 
                  className="w-full h-full object-contain" 
                  src={imgLogo} 
                />
              </div>
              <p className="font-unbounded font-semibold text-lg lg:text-2xl">
                Axiom Tracker
              </p>
            </div>

            <Link
              href="/"
              className="flex items-center gap-2 text-xs sm:text-sm lg:text-base font-montserrat font-medium text-white hover:text-gray-200 transition-colors whitespace-nowrap"
            >
              <div className="relative w-4 h-3 lg:w-5 lg:h-4 flex-shrink-0">
                <img alt="Back Arrow" className="w-full h-full object-contain" src={imgBackArrow} />
              </div>
              <span>Back to Website</span>
            </Link>
          </header>

          {/* Hero Text Section */}
          <div className="relative max-w-sm">
            <div className="flex flex-col gap-4">
              <p className="font-unbounded font-bold text-2xl lg:text-4xl text-white leading-tight">
                Never Miss Your Credential Renewal Again.
              </p>
              
              {/* Arrow button */}
              <button
                type="button"
                className="bg-white rounded-lg lg:rounded-xl w-fit p-2 lg:p-3 flex items-center justify-center hover:bg-gray-100 transition-all duration-200 hover:shadow-lg transform hover:scale-105 active:scale-95"
                aria-label="Learn more"
              >
                <div className="relative w-5 h-5 lg:w-7 lg:h-7 scale-y-[-100%]">
                  <img alt="Arrow Down" className="w-full h-full object-contain" src={imgArrowButton} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Right side - Choice Buttons */}
      <section className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 sm:px-8 lg:px-12 py-8 lg:py-0 bg-white">
        <div className="w-full max-w-md space-y-6 lg:space-y-8">
          
          {/* Welcome Text */}
          <div className="space-y-3 text-center">
            <h1 className="font-unbounded font-bold text-3xl lg:text-5xl text-black">
              Hi Welcome to
              <br />
              Axiom Tracker
            </h1>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-5 lg:gap-7 w-full">
            {/* Login Button */}
            <Link
              href="/login/signin"
              className="bg-gray-100 hover:bg-gray-200 transition-all duration-200 hover:shadow-lg transform hover:scale-105 active:scale-95 rounded-lg lg:rounded-xl px-6 lg:px-8 py-4 lg:py-5 flex items-center justify-center"
            >
              <p className="font-unbounded font-semibold text-xl lg:text-2xl text-black">
                Login
              </p>
            </Link>

            {/* Create Account Button */}
            <Link
              href="/login/signup"
              className="bg-black hover:bg-gray-900 transition-all duration-200 hover:shadow-lg transform hover:scale-105 active:scale-95 rounded-lg lg:rounded-xl px-6 lg:px-8 py-4 lg:py-5 flex items-center justify-center"
            >
              <p className="font-unbounded font-semibold text-xl lg:text-2xl text-white">
                Create Account
              </p>
            </Link>
          </div>

          {/* Powered by text */}
          <p className="text-center font-montserrat text-sm lg:text-base text-gray-600 mt-6">
            Powered by AxiomBlack
          </p>
        </div>
      </section>
    </main>
  );
}
