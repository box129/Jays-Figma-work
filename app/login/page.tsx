const imgPrivateInvestigatorSittingDeskWorkingLaptopAgencyNightConcentratedAfricanAmericanCriminalistSearchingCrimeCaseFileComputerPoliceDetectiveOffice1 =
  "https://www.figma.com/api/mcp/asset/f0de0eee-0f8d-458b-a4b6-ee2e906e693b";
const imgSubtract = "https://www.figma.com/api/mcp/asset/63235648-89c4-4cb9-bb90-0885a30c984f";
const imgVector = "https://www.figma.com/api/mcp/asset/55d933a0-8091-4eb4-9ddf-dfcf0157800f";
const imgArrow = "https://www.figma.com/api/mcp/asset/669260e9-be2f-448e-ab50-9178088c8186";

type RectangleProps = {
  className?: string;
};

function RememberMeCheckbox({ className }: RectangleProps) {
  return (
    <div data-node-id="1768:8842" className={className}>
      <div className="absolute inset-0 rounded-[4px] bg-white border border-black" />
    </div>
  );
}

function LoginHeader() {
  return (
    <header
      className="flex items-center justify-between w-full text-white"
      data-node-id="1768:8655"
    >
      <div className="flex items-center gap-5">
        <div
          className="relative w-[52px] h-[52px]"
          data-name="Subtract"
          data-node-id="1734:6606"
        >
          <img alt="Axiom Tracker" className="w-full h-full" src={imgSubtract} />
        </div>
        <p className="font-unbounded text-2xl" data-node-id="1734:6609">
          Axiom Tracker
        </p>
      </div>

      <a
        href="/"
        className="flex items-center gap-3 text-base sm:text-lg font-geist"
        data-node-id="1734:6610"
      >
        <div
          className="relative w-[19px] h-[17px]"
          data-name="Vector"
          data-node-id="1734:6611"
        >
          <img alt="Back" className="w-full h-full" src={imgVector} />
        </div>
        <span data-node-id="1734:6612">Back to Website</span>
      </a>
    </header>
  );
}

function HeroText() {
  return (
    <div
      className="relative mt-auto mb-16 max-w-md text-white"
      data-name="menu"
      data-node-id="1734:7054"
    >
      <p
        className="font-unbounded font-semibold text-3xl leading-[1.4]"
        data-node-id="1726:6194"
      >
        Never Miss Your Credential Renewal Again.
      </p>
      <div
        className="absolute -right-4 -bottom-6 flex items-center justify-center"
        data-node-id="1726:6210"
      >
        <button
          type="button"
          className="bg-white rounded-2xl p-4 flex items-center justify-center shadow-md"
          aria-label="Learn more"
        >
          <div
            className="relative w-9 h-9"
            data-name="arrow-down-right-01-round"
            data-node-id="1726:6201"
          >
            <img alt="Arrow" className="w-full h-full" src={imgArrow} />
          </div>
        </button>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <main
      className="min-h-screen w-full bg-white text-black flex"
      data-name="MacBook Pro 16' - 3"
      data-node-id="1734:6488"
    >
      {/* Left side image + overlay content */}
      <section className="relative w-full lg:w-1/2 h-[60vh] lg:h-auto overflow-hidden">
        <img
          alt="Person working on laptop"
          src={imgPrivateInvestigatorSittingDeskWorkingLaptopAgencyNightConcentratedAfricanAmericanCriminalistSearchingCrimeCaseFileComputerPoliceDetectiveOffice1}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 flex flex-col h-full px-8 sm:px-12 lg:px-16 pt-8 pb-12">
          <LoginHeader />
          <HeroText />
        </div>
      </section>

      {/* Right side login form */}
      <section className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-10 lg:px-16 py-12">
        <div className="w-full max-w-xl space-y-10" data-node-id="1734:6501">
          <div className="space-y-4" data-node-id="1734:6227">
            <h1 className="font-unbounded text-3xl font-semibold text-black">
              Welcome Back
            </h1>
            <p className="font-montserrat text-lg text-black/80">
              Sign in to manage your Certificate &amp; License Dashboard.
            </p>
          </div>

          <form className="space-y-8" data-node-id="1734:6237">
            {/* Email */}
            <div className="space-y-3">
              <label
                htmlFor="email"
                className="block font-montserrat text-base text-black"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                className="w-full rounded-lg bg-[#f3f3f3] px-8 py-5 text-base font-montserrat placeholder:text-[#7c7c7c] focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Password */}
            <div className="space-y-3">
              <label
                htmlFor="password"
                className="block font-montserrat text-base text-black"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="************"
                className="w-full rounded-lg bg-[#f3f3f3] px-8 py-5 text-base font-montserrat placeholder:text-[#7c7c7c] focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Remember / Forgot */}
            <div className="flex items-center justify-between text-sm font-montserrat">
              <label className="flex items-center gap-3 cursor-pointer">
                <span className="relative w-5 h-5">
                  <RememberMeCheckbox className="relative w-full h-full" />
                  <input
                    type="checkbox"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    aria-label="Remember me"
                  />
                </span>
                <span>Remember Me</span>
              </label>

              <a
                href="#"
                className="text-sm font-semibold text-black hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="mt-4 w-full rounded-2xl bg-black py-5 text-center font-montserrat text-lg font-semibold text-white hover:bg-neutral-900 transition-colors"
            >
              Log in
            </button>

            {/* Footer text */}
            <p className="pt-2 text-center text-sm font-montserrat text-black/80">
              Don&apos;t have an account?{' '}
              <a href="#" className="font-semibold hover:underline">
                Sign up here
              </a>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
