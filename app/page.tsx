"use client";

const imgFreepikGenrateAnImageThatExplainsmartCertificateTra359761 = "https://www.figma.com/api/mcp/asset/97b7c926-90cc-4c02-85cb-e17594f35184";
const imgPortraitYoungGirlGrayTShirtPurpleWall1 = "https://www.figma.com/api/mcp/asset/f1f0ae0f-6d18-4bbe-bde9-74401d0de964";
const imgHappyManStudentWithAfroHairdoShowsWhiteTeethBeingGoodMoodAfterClasses1 = "https://www.figma.com/api/mcp/asset/54b6ec21-9592-471f-a330-67e1be98b5bd";
const imgCloseUpPortraitAttractiveYoungWomanIsolated11 = "https://www.figma.com/api/mcp/asset/d7aa9e88-d17b-429a-abd6-53fd0c91b6b6";
const img897551 = "https://www.figma.com/api/mcp/asset/d76e2fb7-2bd2-4f7a-9c0e-3717bced2687";
const img51 = "https://www.figma.com/api/mcp/asset/ec98f2d7-3964-47a2-853d-af248056da24";
const imgWomanSittingHomeOfficeDeskLookingBusinessDocuments1 = "https://www.figma.com/api/mcp/asset/3614f7b6-2f57-40aa-bf62-f3bab3320af3";
const imgSubtract = "https://www.figma.com/api/mcp/asset/69dba925-7915-4086-bf2a-334885229f1e";
const img = "https://www.figma.com/api/mcp/asset/c8ba3351-af04-4a9f-88ab-4f4bcee3c569";
const imgSubtract1 = "https://www.figma.com/api/mcp/asset/b6fcc130-f460-4ee2-b205-99731f89b657";
const imgSubtract2 = "https://www.figma.com/api/mcp/asset/4d7a0538-24fb-4d8b-a6c5-4bc6a1a8ed76";
const imgLine2 = "https://www.figma.com/api/mcp/asset/abdb0cf7-73e1-4a2f-8026-c9eafea59360";
const img1 = "https://www.figma.com/api/mcp/asset/b40095c6-b896-46e1-94a1-296d1efbd834";
const img2 = "https://www.figma.com/api/mcp/asset/6da759cf-3211-4803-b0c8-64dcd0004f95";
const imgSubtract3 = "https://www.figma.com/api/mcp/asset/077a8b15-1da9-497e-aea7-0c69c7cd63e1";

import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white relative w-full overflow-hidden" data-name="Axiomtracker" data-node-id="1706:7231">
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 md:py-6 bg-white border-b border-gray-200 sticky top-0 z-50" data-node-id="1708:7296">
        <div className="flex gap-8 md:gap-20 items-center">
          <div className="relative w-16 h-16 md:w-24 md:h-24" data-name="Logo" data-node-id="1707:7279">
            <img alt="Axiom Tracker Logo" className="w-full h-full" src={imgSubtract} />
          </div>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-6 items-center">
            <div className="border border-black rounded-full px-8 md:px-10 py-2 md:py-2.5 hover:bg-black hover:text-white transition-all duration-200 cursor-pointer">
              <p className="font-montserrat font-medium text-base md:text-lg text-center">Home</p>
            </div>
            <div className="border border-black rounded-full px-8 md:px-10 py-2 md:py-2.5 hover:bg-black hover:text-white transition-all duration-200 cursor-pointer">
              <p className="font-montserrat font-medium text-base md:text-lg text-center">Features</p>
            </div>
            <div className="border border-black rounded-full px-6 md:px-8 py-2 md:py-2.5 hover:bg-black hover:text-white transition-all duration-200 cursor-pointer">
              <p className="font-montserrat font-medium text-base md:text-lg text-center">FAQs</p>
            </div>
          </div>
        </div>
        
        {/* Desktop Auth Buttons */}
        <div className="hidden sm:flex gap-3 md:gap-7 items-center">
          <a href="/login" className="border border-black rounded-xl md:rounded-2xl px-6 md:px-10 py-3 md:py-5.5 transition-all duration-200 hover:bg-black hover:text-white cursor-pointer min-h-[44px] flex items-center justify-center">
            <p className="font-montserrat font-medium text-base md:text-lg text-center">Login</p>
          </a>
          <a href="#get-started" className="bg-black rounded-xl md:rounded-2xl px-6 md:px-10 py-3 md:py-5.5 transition-all duration-200 hover:bg-gray-800 hover:shadow-lg cursor-pointer min-h-[44px] flex items-center justify-center">
            <p className="font-montserrat font-medium text-base md:text-lg text-white text-center">Get Started</p>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="sm:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 active:bg-gray-200 transition"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden absolute top-[88px] left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-40 animate-slideDown">
          <div className="flex flex-col p-4 space-y-3">
            <div className="border border-black rounded-full px-6 py-3 hover:bg-black hover:text-white transition-all duration-200 cursor-pointer text-center">
              <p className="font-montserrat font-medium text-base">Home</p>
            </div>
            <div className="border border-black rounded-full px-6 py-3 hover:bg-black hover:text-white transition-all duration-200 cursor-pointer text-center">
              <p className="font-montserrat font-medium text-base">Features</p>
            </div>
            <div className="border border-black rounded-full px-6 py-3 hover:bg-black hover:text-white transition-all duration-200 cursor-pointer text-center">
              <p className="font-montserrat font-medium text-base">FAQs</p>
            </div>
            <div className="border-t border-gray-200 pt-3 space-y-3">
              <a href="/login" className="block border border-black rounded-xl px-6 py-3 transition-all duration-200 hover:bg-black hover:text-white cursor-pointer text-center">
                <p className="font-montserrat font-medium text-base">Login</p>
              </a>
              <a href="#get-started" className="block bg-black rounded-xl px-6 py-3 transition-all duration-200 hover:bg-gray-800 cursor-pointer text-center">
                <p className="font-montserrat font-medium text-base text-white">Get Started</p>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative w-full bg-black overflow-hidden" data-node-id="1715:873">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="Hero Background" className="w-full h-full object-cover opacity-100" src={imgFreepikGenrateAnImageThatExplainsmartCertificateTra359761} />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-between px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 min-h-[85vh] md:min-h-[90vh]" data-node-id="1717:874">
          <div className="flex-1 flex flex-col gap-8 sm:gap-10 md:gap-12 items-center justify-center w-full max-w-5xl mx-auto pt-8 sm:pt-10 md:pt-12" data-node-id="1712:491">
            {/* Welcome Badge */}
            <div className="bg-white rounded-lg px-6 sm:px-8 py-3 sm:py-4 inline-flex" data-node-id="1712:493">
              <p className="font-montserrat font-medium text-base sm:text-lg text-black">Welcome to Axiom Tracker</p>
            </div>

            {/* Main Content */}
            <div className="flex flex-col gap-4 sm:gap-6 items-center w-full text-center text-white" data-node-id="1712:497">
              <h1 className="font-unbounded font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight max-w-4xl px-4">
                Never Miss a Certificate<br />Expiry Again.
              </h1>
              <p className="font-geist font-medium text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl px-4">
                Smart certificate tracking that keeps your team compliant, certified, and audit-ready. Automated alerts, and real-time compliance dashboards in one powerful platform.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center w-full justify-center mt-4" data-node-id="1712:500">
              <button className="bg-white rounded-3xl px-6 sm:px-8 py-3 sm:py-4 inline-flex cursor-pointer hover:bg-gray-100 transition-all duration-200 hover:shadow-lg transform hover:scale-105 active:scale-95 min-h-[44px] w-full sm:w-auto" data-node-id="1712:501">
                <p className="font-montserrat font-semibold text-base sm:text-lg text-black">Get Started</p>
              </button>
              <div className="flex items-center gap-2 w-full sm:w-auto" data-node-id="1712:503">
                <button className="bg-white rounded-3xl px-6 sm:px-8 py-3 sm:py-4 inline-flex cursor-pointer hover:bg-gray-100 transition-all duration-200 hover:shadow-lg transform hover:scale-105 active:scale-95 min-h-[44px] flex-1 sm:flex-initial" data-node-id="1712:504">
                  <p className="font-montserrat font-semibold text-base sm:text-lg text-black">Learn How it Works</p>
                </button>
                <button className="bg-white rounded-3xl px-3 sm:px-4 py-3 sm:py-4 inline-flex cursor-pointer hover:bg-gray-100 transition-all duration-200 hover:shadow-lg transform hover:scale-105 active:scale-95 min-h-[44px]" data-node-id="1712:506">
                  <img alt="Arrow" className="w-6 h-6 sm:w-8 sm:h-8" src={img} />
                </button>
              </div>
            </div>
          </div>

          {/* Social Avatars - At bottom of hero */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-center pb-4 sm:pb-6 mt-auto" data-node-id="1712:490">
            <div className="bg-white rounded-full p-2 flex gap-0 flex-row">
              <div className="rounded-full overflow-hidden w-10 h-10 sm:w-11 sm:h-11 -mr-2 border-2 border-white">
                <img alt="User 1" className="w-full h-full object-cover" src={imgPortraitYoungGirlGrayTShirtPurpleWall1} />
              </div>
              <div className="rounded-full overflow-hidden w-10 h-10 sm:w-11 sm:h-11 -mr-2 border-2 border-white z-10">
                <img alt="User 2" className="w-full h-full object-cover" src={imgHappyManStudentWithAfroHairdoShowsWhiteTeethBeingGoodMoodAfterClasses1} />
              </div>
              <div className="rounded-full overflow-hidden w-10 h-10 sm:w-11 sm:h-11 border-2 border-white z-20">
                <img alt="User 3" className="w-full h-full object-cover" src={imgCloseUpPortraitAttractiveYoungWomanIsolated11} />
              </div>
            </div>
            <p className="font-geist font-semibold text-sm sm:text-base text-white max-w-xs text-center sm:text-left px-4 sm:px-0">
              Track certifications, ensure compliance, and automate renewals effortlessly with Axiom tracker
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full px-4 sm:px-6 md:px-8 py-12 sm:py-14 md:py-16 bg-white" data-node-id="1717:883">
        <div className="max-w-6xl mx-auto space-y-4 sm:space-y-6" data-node-id="1717:881">
          <p className="font-unbounded font-semibold text-xl sm:text-2xl text-gray-700">About</p>
          <p className="font-geist font-medium text-lg sm:text-xl md:text-2xl text-black leading-relaxed">
            {`Axiom Tracker is a modern compliance management platform that automates certificate tracking, safety orientations, and incident reporting for organizations. With intelligent expiration alerts, QR verification, and real-time dashboards, we help 500+ companies maintain 100% compliance while saving 60% of administrative time.`}
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 bg-white" data-node-id="1717:880">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="space-y-4 sm:space-y-6 mb-12 sm:mb-14 md:mb-16" data-node-id="1714:637">
            <div className="flex flex-col gap-5 sm:gap-7 items-center" data-node-id="1713:518">
              <div className="relative w-12 h-12 sm:w-16 sm:h-16" data-name="Circle" data-node-id="1713:525">
                <img alt="" className="w-full h-full" src={imgSubtract2} />
              </div>
              <p className="font-unbounded font-semibold text-2xl sm:text-3xl md:text-4xl text-gray-700 text-center px-4">
                How Does Axiom Tracker Work?
              </p>
            </div>
            <p className="font-geist font-medium text-lg sm:text-xl md:text-2xl text-black text-center max-w-3xl mx-auto px-4">
              Get started in minutes, not months. Our simple three-step process gets you compliant fast.
            </p>
          </div>

          {/* Three Step Cards with Connecting Lines */}
          <div className="hidden md:block">
            {/* Circles with connecting lines */}
            <div className="relative flex justify-center items-center mb-12">
              <div className="flex items-center justify-between w-full max-w-4xl">
                {[
                  { step: "01" },
                  { step: "02" },
                  { step: "03" }
                ].map((card, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="bg-black rounded-full w-28 h-28 lg:w-32 lg:h-32 flex items-center justify-center shadow-xl z-10 transition-all duration-200 hover:shadow-2xl hover:scale-110 cursor-pointer">
                      <p className="font-unbounded font-semibold text-2xl lg:text-3xl text-white text-center">{card.step}</p>
                    </div>
                    {idx < 2 && (
                      <div className="h-0.5 bg-black w-20 lg:w-32 xl:w-40"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Content Cards */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6">
              {[
                { title: "Upload Certificates", body: "Bulk upload existing certificates or integrate with your HR system. Our AI-powered OCR extracts all relevant data automatically." },
                { title: "Set Alert Rules", body: "Configure notification schedules, escalation chains, and renewal workflows. Customize alerts for different certificate types." },
                { title: "Stay Compliant", body: "Relax knowing your team is always certified. Access real-time dashboards, generate audit reports, and maintain 100% compliance." }
              ].map((card, idx) => (
                <div key={idx} className="bg-white rounded-2xl border-2 border-black p-6 lg:p-8 flex flex-col gap-4 lg:gap-6 items-center text-center transition-all duration-200 hover:shadow-xl hover:border-gray-400 cursor-pointer">
                  <p className="font-unbounded font-semibold text-xl lg:text-2xl text-black">{card.title}</p>
                  <p className="font-geist font-medium text-base lg:text-lg text-black leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile View - Stacked */}
          <div className="md:hidden space-y-6 sm:space-y-8">
            {[
              { step: "01", title: "Upload Certificates", body: "Bulk upload existing certificates or integrate with your HR system. Our AI-powered OCR extracts all relevant data automatically." },
              { step: "02", title: "Set Alert Rules", body: "Configure notification schedules, escalation chains, and renewal workflows. Customize alerts for different certificate types." },
              { step: "03", title: "Stay Compliant", body: "Relax knowing your team is always certified. Access real-time dashboards, generate audit reports, and maintain 100% compliance." }
            ].map((card, idx) => (
              <div key={idx} className="border-2 border-black rounded-2xl p-5 sm:p-6 flex flex-col gap-5 sm:gap-6 items-center transition-all duration-200 hover:shadow-lg hover:border-gray-400 cursor-pointer">
                <div className="bg-black rounded-full w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center shadow-lg">
                  <p className="font-unbounded font-semibold text-2xl sm:text-3xl text-white text-center">{card.step}</p>
                </div>
                <div className="flex flex-col gap-3 sm:gap-4 items-center text-center w-full">
                  <p className="font-unbounded font-semibold text-xl sm:text-2xl text-black">{card.title}</p>
                  <p className="font-geist font-medium text-base sm:text-lg text-black">{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-black py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8" data-node-id="1714:635">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="space-y-5 sm:space-y-7 mb-12 sm:mb-14 md:mb-16 text-center" data-node-id="1714:647">
            <div className="inline-block mx-auto space-y-6 sm:space-y-8" data-node-id="1714:639">
              <p className="font-unbounded font-semibold text-3xl sm:text-4xl text-white px-4">Axiom tracker Features</p>
              <div className="flex justify-center">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20" data-node-id="1714:643">
                  <img alt="" className="w-full h-full" src={imgSubtract1} />
                </div>
              </div>
            </div>
            <p className="font-geist font-medium text-lg sm:text-xl md:text-2xl text-white px-4">
              Everything you need to manage certificates, ensure compliance, and protect your business from regulatory risks.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12" data-node-id="1792:9853">
            {/* Smart Credentials */}
            <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-200 hover:shadow-xl hover:scale-105 cursor-pointer" data-node-id="1715:649">
              <div className="h-60 sm:h-64 md:h-72 overflow-hidden" data-node-id="1792:9854">
                <img alt="Smart Credentials" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" src={img897551} />
              </div>
              <div className="p-5 sm:p-6 space-y-2 sm:space-y-2.5 flex-1 flex flex-col">
                <p className="font-montserrat font-semibold text-xl sm:text-2xl text-black">Smart Credentials Tracking</p>
                <p className="font-montserrat font-normal text-base sm:text-lg text-black">Track all employee credentials in one place and get automatic alerts before they expire.</p>
              </div>
            </div>

            {/* Intelligent Notifications */}
            <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-200 hover:shadow-xl hover:scale-105 cursor-pointer" data-node-id="1792:9859">
              <div className="h-60 sm:h-64 md:h-72 overflow-hidden" data-node-id="1792:9860">
                <img alt="Intelligent Notifications" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" src={img51} />
              </div>
              <div className="p-5 sm:p-6 space-y-2 sm:space-y-2.5 flex-1 flex flex-col">
                <p className="font-montserrat font-semibold text-xl sm:text-2xl text-black">Intelligent Notifications</p>
                <p className="font-montserrat font-normal text-base sm:text-lg text-black">Get smart, multi-channel alerts with customizable reminders and automatic escalation to the right people.</p>
              </div>
            </div>

            {/* Real-Time Analytics */}
            <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-200 hover:shadow-xl hover:scale-105 cursor-pointer" data-node-id="1792:9871">
              <div className="h-60 sm:h-64 md:h-72 overflow-hidden" data-node-id="1792:9872">
                <img alt="Real-Time Analytics" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" src={imgWomanSittingHomeOfficeDeskLookingBusinessDocuments1} />
              </div>
              <div className="p-5 sm:p-6 space-y-2 sm:space-y-2.5 flex-1 flex flex-col">
                <p className="font-montserrat font-semibold text-xl sm:text-2xl text-black">Real-Time Analytics</p>
                <p className="font-montserrat font-normal text-base sm:text-lg text-black">Monitor compliance with live dashboards and predictive insights to identify risks early and track trends across teams.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider Line */}
      <div className="w-full max-w-6xl mx-auto px-8 py-4" data-node-id="1714:648">
        <img alt="" className="w-full" src={imgLine2} />
      </div>

      {/* FAQs Section */}
      <section className="w-full px-8 py-20 bg-white" data-node-id="1715:703">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 space-y-4" data-node-id="1811:1931">
            <p className="font-unbounded font-semibold text-3xl sm:text-4xl text-gray-700">Frequently Asked Questions</p>
            <p className="font-geist font-medium text-lg sm:text-xl text-black max-w-3xl mx-auto">
              {`Got questions? We've got answers. Can't find what you're looking for? Contact our support team.`}
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-5">
            {[
              "How does Axiom Tracker prevent certificate expiries?",
              "Can Axiom Tracker integrate with our existing HR systems?",
              "Is our certificate data secure?",
              "What types of certificates can Axiom Tracker manage?"
            ].map((question, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 px-8 py-8 flex items-center justify-between hover:shadow-lg hover:border-gray-300 transition-all duration-200 cursor-pointer group" data-node-id={`1715:${671 + idx * 6}`}>
                <div className="flex gap-6 items-center w-full">
                  <div className="shrink-0 flex items-center justify-center transition-transform duration-200 group-hover:rotate-90">
                    <div className="rotate-180 scale-y-[-1]">
                      <img alt="Expand" className="size-7" src={img1} />
                    </div>
                  </div>
                  <p className="font-unbounded font-semibold text-xl sm:text-2xl text-gray-700 group-hover:text-black transition-colors duration-200">{question}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider Line */}
      <div className="w-full max-w-6xl mx-auto px-8 py-4" data-node-id="1717:955">
        <img alt="" className="w-full" src={imgLine2} />
      </div>

      {/* Final CTA Section */}
      <section className="w-full bg-black py-20 px-8" data-node-id="1715:704">
        <div className="max-w-3xl mx-auto flex flex-col gap-10 items-center text-center py-12" data-node-id="1715:716">
          <p className="font-unbounded font-bold text-3xl sm:text-4xl text-white leading-tight">
            Ready to Eliminate Compliance Risks?
          </p>
          <p className="font-geist font-semibold text-xl sm:text-2xl text-white max-w-2xl">
            Join 500+ companies that trust Axiom Tracker to manage their certificates and stay compliant.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 items-center" data-node-id="1715:705">
            <button className="bg-white rounded-3xl px-10 py-5 inline-flex cursor-pointer hover:bg-gray-100 transition-all duration-200 hover:shadow-lg transform hover:scale-105 active:scale-95" data-node-id="1715:706">
              <p className="font-montserrat font-bold text-lg text-black">Get Started</p>
            </button>
            <div className="flex items-center justify-center">
              <div className="scale-y-[-1]">
                <button className="bg-white rounded-3xl px-6 py-5 inline-flex cursor-pointer hover:bg-gray-100 transition-all duration-200 hover:shadow-lg transform hover:scale-105 active:scale-95">
                  <img alt="Arrow" className="size-8" src={img2} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-black rounded-3xl mx-4 sm:mx-8 my-8 px-8 sm:px-16 py-12" data-node-id="1715:826">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24" data-node-id="1715:828">
          {/* Left Section */}
          <div className="flex flex-col gap-12 w-full lg:w-5/12" data-node-id="1715:830">
            <div className="relative size-16" data-node-id="1715:869">
              <img alt="Logo" className="w-full h-full" src={imgSubtract3} />
            </div>
            <div>
              <p className="font-montserrat font-semibold text-lg text-white leading-8 mb-0">Let's make your estate safer and smarter.</p>
              <p className="font-montserrat font-semibold text-lg text-white leading-8">Contact us for bulk estate discounts or multi-location deployment.</p>
            </div>
            <p className="font-montserrat font-normal text-base text-white/80 leading-7">
              © 2025 Axiom Tracker - All Rights Reserved
            </p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col sm:flex-row gap-12 sm:gap-16 w-full lg:w-7/12" data-node-id="1715:836">
            {/* Quick Links */}
            <div className="flex flex-col gap-6" data-node-id="1715:837">
              <p className="font-semibold text-xl text-white">QUICK LINKS</p>
              <div className="flex flex-col gap-4 font-montserrat font-medium text-lg text-white" data-node-id="1715:839">
                <p className="cursor-pointer hover:text-gray-300 hover:translate-x-1 transition-all duration-200">Home</p>
                <p className="cursor-pointer hover:text-gray-300 hover:translate-x-1 transition-all duration-200">Features</p>
                <p className="cursor-pointer hover:text-gray-300 hover:translate-x-1 transition-all duration-200">FAQs</p>
                <p className="cursor-pointer hover:text-gray-300 hover:translate-x-1 transition-all duration-200">Contact</p>
              </div>
            </div>

            {/* Contact Us */}
            <div className="flex flex-col gap-6" data-node-id="1715:844">
              <p className="font-semibold text-xl text-white">CONTACT US</p>
              <a href="mailto:hello@axiomtracker.com" className="font-montserrat font-medium text-lg text-white hover:text-blue-300 hover:underline transition-all duration-200 cursor-pointer">hello@axiomtracker.com</a>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-6" data-node-id="1715:854">
              <p className="font-semibold text-xl text-white">LEGAL</p>
              <div className="flex flex-col gap-4 font-montserrat font-medium text-lg text-white" data-node-id="1715:856">
                <p className="cursor-pointer hover:text-gray-300 hover:translate-x-1 transition-all duration-200">Terms of Service</p>
                <p className="cursor-pointer hover:text-gray-300 hover:translate-x-1 transition-all duration-200">Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
