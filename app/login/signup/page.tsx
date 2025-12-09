"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Image assets from Figma - Signup Screen
const imgPrivateInvestigator =
  "https://www.figma.com/api/mcp/asset/80d16b98-127b-45d8-b804-974d2684d6c5";
const imgLogo = "https://www.figma.com/api/mcp/asset/69952e56-ddb8-47fc-a960-c8ef29d99c60";
const imgBackArrow = "https://www.figma.com/api/mcp/asset/ba37debe-3df0-45db-9d69-8ae2b151d0df";
const imgArrowButton = "https://www.figma.com/api/mcp/asset/26af4744-424b-4f1f-a72d-cf9a6465e45c";

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    // Validate password
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      setError("Password must include at least 8 characters, including numbers and symbols");
      setIsSubmitting(false);
      return;
    }

    try {
      // TODO: Implement signup API call
      // const response = await fetch("/api/auth/signup", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });
      
      // For now, redirect to invite employees page
      router.push("/onboarding/invite-employees");
    } catch {
      setError("Signup failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main
      className="min-h-screen w-full bg-white flex flex-col lg:flex-row"
      data-node-id="1734:6140"
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

      {/* Right side - Signup Form */}
      <section className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 lg:px-12 py-8 lg:py-0 bg-white overflow-y-auto max-h-screen lg:max-h-none">
        <div className="w-full max-w-md space-y-6 lg:space-y-8 py-8">
          
          {/* Form Header */}
          <div className="space-y-3" data-node-id="1734:6186">
            <h1 className="font-unbounded font-bold text-3xl lg:text-4xl text-black">
              Create Account
            </h1>
            <p className="font-montserrat text-base lg:text-lg text-gray-700">
              Sign up to manage and access your credentials securely.
            </p>
          </div>

          {/* Signup Form */}
          <form
            className="space-y-5 lg:space-y-6"
            data-node-id="1734:6192"
            onSubmit={handleSubmit}
          >
            {/* First Name & Last Name Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5" data-node-id="1734:6194">
              {/* First Name */}
              <div className="space-y-2 lg:space-y-3" data-node-id="1734:6195">
                <label
                  htmlFor="firstName"
                  className="block font-montserrat font-medium text-sm lg:text-base text-black"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full rounded-lg bg-gray-100 px-4 lg:px-6 py-3 lg:py-4 text-sm lg:text-base font-montserrat placeholder:text-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Last Name */}
              <div className="space-y-2 lg:space-y-3" data-node-id="1734:6199">
                <label
                  htmlFor="lastName"
                  className="block font-montserrat font-medium text-sm lg:text-base text-black"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full rounded-lg bg-gray-100 px-4 lg:px-6 py-3 lg:py-4 text-sm lg:text-base font-montserrat placeholder:text-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2 lg:space-y-3" data-node-id="1734:6203">
              <label
                htmlFor="email"
                className="block font-montserrat font-medium text-sm lg:text-base text-black"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                className="w-full rounded-lg bg-gray-100 px-4 lg:px-6 py-3 lg:py-4 text-sm lg:text-base font-montserrat placeholder:text-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2 lg:space-y-3" data-node-id="1734:6211">
              <label
                htmlFor="password"
                className="block font-montserrat font-medium text-sm lg:text-base text-black"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••••••"
                className="w-full rounded-lg bg-gray-100 px-4 lg:px-6 py-3 lg:py-4 text-sm lg:text-base font-montserrat placeholder:text-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <p className="text-xs lg:text-sm font-montserrat text-gray-600 mt-2">
                Password must include at least 8 characters, including numbers and symbols
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="rounded-lg bg-red-50 border border-red-200 p-3 lg:p-4">
                <p className="text-sm lg:text-base font-montserrat text-red-700">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl lg:rounded-2xl bg-black py-3 lg:py-4 text-center font-montserrat font-semibold text-base lg:text-lg text-white hover:bg-gray-900 transition-all duration-200 hover:shadow-lg transform hover:scale-105 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-black disabled:hover:scale-100 mt-6"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Creating Account...
                </span>
              ) : (
                "Create Account"
              )}
            </button>

            {/* Login Link */}
            <p className="text-center text-sm lg:text-base font-montserrat text-gray-700">
              Already have an account?{" "}
              <Link href="/login/signin" className="font-semibold text-black hover:underline transition-colors">
                Login
              </Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
