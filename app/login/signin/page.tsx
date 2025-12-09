"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import Link from "next/link";

// Image assets from Figma - Login Screen
const imgPrivateInvestigator =
  "https://www.figma.com/api/mcp/asset/80bf7146-d0d8-45ec-a251-2e4c7dd8da3d";
const imgLogo = "https://www.figma.com/api/mcp/asset/f173bd4d-4db9-4a5e-9e69-f0464712c9ab";
const imgBackArrow = "https://www.figma.com/api/mcp/asset/7487f08c-1ef5-42bb-9ec8-60cdea4d3e5f";
const imgArrowButton = "https://www.figma.com/api/mcp/asset/c2a5f877-e566-483d-b6fb-9795a30685db";

export default function SigninPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setIsSubmitting(false);

    if (result?.error) {
      setError(result.error || "Invalid email or password.");
      return;
    }

    router.push("/dashboard");
  }

  return (
    <main
      className="w-full bg-white flex flex-col lg:flex-row lg:min-h-screen"
      data-node-id="1734:6488"
    >
      {/* Left side - Image with overlay and hero content */}
      <section className="relative w-full lg:w-1/2 h-[40vh] lg:h-screen overflow-hidden flex flex-col shrink-0">
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
              <div className="relative w-10 h-10 lg:w-12 lg:h-12 shrink-0">
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
              <div className="relative w-4 h-3 lg:w-5 lg:h-4 shrink-0">
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
                <div className="relative w-5 h-5 lg:w-7 lg:h-7 -scale-y-100">
                  <img alt="Arrow Down" className="w-full h-full object-contain" src={imgArrowButton} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Right side - Login Form */}
      <section className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 lg:px-12 py-8 lg:py-0 bg-white shrink-0 min-h-screen lg:min-h-auto">
        <div className="w-full max-w-md space-y-8 lg:space-y-10" data-node-id="1734:6501">
          
          {/* Form Header */}
          <div className="space-y-3 lg:space-y-4" data-node-id="1734:6227">
            <h1 className="font-unbounded font-bold text-3xl lg:text-4xl text-black">
              Welcome Back
            </h1>
            <p className="font-montserrat text-base lg:text-lg text-gray-700">
              Sign in to manage your Certificate & License Dashboard.
            </p>
          </div>

          {/* Login Form */}
          <form
            className="space-y-6 lg:space-y-8"
            data-node-id="1734:6237"
            onSubmit={handleSubmit}
          >
            {/* Email Field */}
            <div className="space-y-2 lg:space-y-3">
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
                autoComplete="email"
                placeholder="Enter your email address"
                className="w-full rounded-lg lg:rounded-xl bg-gray-100 px-4 lg:px-6 py-3 lg:py-4 text-sm lg:text-base font-montserrat placeholder:text-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2 lg:space-y-3">
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
                autoComplete="current-password"
                placeholder="••••••••••••"
                className="w-full rounded-lg lg:rounded-xl bg-gray-100 px-4 lg:px-6 py-3 lg:py-4 text-sm lg:text-base font-montserrat placeholder:text-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm lg:text-base font-montserrat">
              <label className="flex items-center gap-2 lg:gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 lg:w-5 lg:h-5 cursor-pointer rounded border border-gray-400 checked:bg-black checked:border-black"
                  aria-label="Remember me"
                />
                <span className="text-gray-700">Remember Me</span>
              </label>

              <Link
                href="/forgot-password"
                className="font-montserrat font-semibold text-black hover:text-gray-700 hover:underline transition-colors"
              >
                Forgot Password?
              </Link>
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
              className="w-full rounded-xl lg:rounded-2xl bg-black py-3 lg:py-4 text-center font-montserrat font-semibold text-base lg:text-lg text-white hover:bg-gray-900 transition-all duration-200 hover:shadow-lg transform hover:scale-105 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-black disabled:hover:scale-100"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Logging in...
                </span>
              ) : (
                "Log in"
              )}
            </button>

            {/* Sign Up Link */}
            <p className="text-center text-sm lg:text-base font-montserrat text-gray-700">
              Don&apos;t have an account?{" "}
              <Link href="/login/signup" className="font-semibold text-black hover:underline transition-colors">
                Sign up here
              </Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
