
import React, { useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  Search,
  ChevronDown,
  Upload,
  CheckCircle2,
  Menu,
  X,
} from "lucide-react";

const G = "#1f4a3d";
const O = "#c85a3c";
const BG = "#f7f2e9";
const BORDER = "#e5dccd";
const MUTED = "#788078";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [topic, setTopic] = useState("");
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const fileRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: BG,
        color: G,
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HEADER */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{ background: BG, borderColor: BORDER }}
       >
         <div className="max-w-7xl mx-auto px-5 sm:px-7 min-h-[80px] flex items-center justify-between gap-4">
        {/* LOGO */}
<a href="#" className="shrink-0">

  <img
  src="/fixnear-logo.png"
  alt="FixNear"
  className="h-[100px] w-[260px] object-contain object-left"
/>
</a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-6 text-[14px] font-medium">
            <a href="#" className="hover:text-orange-700">Home</a>
            <a href="#" className="hover:text-orange-700">Services</a>
            <a href="#" className="hover:text-orange-700">How It Works</a>
            <a href="#" className="hover:text-orange-700">About</a>
            <a href="#" className="hover:text-orange-700">Help/FAQ</a>
          </nav>

          <div className="hidden md:flex items-center gap-5 text-[14px]">
            <a href="#" className="hover:text-orange-700">Become Tech</a>
            <a href="#" className="hover:text-orange-700">Login</a>

            <a
              href="#"
              className="rounded-md px-5 py-3 text-white font-semibold"
              style={{ background: G }}
            >
              Sign Up
            </a>
          </div>

          {/* MOBILE MENU */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="md:hidden flex flex-col gap-4 px-6 pb-5 text-[15px] font-medium">
            {[
              "Home",
              "Services",
              "How It Works",
              "About",
              "Help/FAQ",
              "Become Tech",
              "Login",
              "Sign Up",
            ].map((item) => (
              <a key={item} href="#">{item}</a>
            ))}
          </nav>
        )}
      </header>

      {/* HERO */}
      <section
        className="border-b px-4 pt-6 pb-8 text-center"
        style={{ borderColor: BORDER }}
      >
        <div className="max-w-7xl mx-auto text-left">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[14px] hover:text-orange-700"
          >
            <ArrowLeft size={15} />
            Back to Help/FAQ
          </a>
        </div>

        <div className="mt-6">
          <span
            className="inline-block rounded-full px-4 py-2 text-[12px] font-semibold tracking-wide"
            style={{ background: "#e8ddca", color: G }}
          >
            ✦ FIXNEAR HELP CENTER
          </span>

          <h1 className="mt-3 text-[34px] sm:text-[42px] leading-tight font-bold">
            Contact Support
          </h1>

          <p
            className="mt-3 text-[15px] sm:text-[16px] leading-[25px]"
            style={{ color: MUTED }}
          >
            Tell us what you're trying to do and where you got stuck.
            <br />
            We'll help you find a clearer next step.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="w-full max-w-7xl mx-auto px-5 sm:px-7 py-8 sm:py-10 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-[1.65fr_0.9fr] gap-6 lg:gap-7">

          {/* CONTACT FORM */}
          <section
            className="rounded-lg border p-5 sm:p-7"
            style={{ borderColor: BORDER }}
          >
            <h2 className="text-[22px] font-bold mb-2">
              How can we help?
            </h2>

            <p className="text-[14px] mb-5" style={{ color: MUTED }}>
              * Required fields. Everything else is optional.
            </p>

            {submitted ? (
              <div className="py-12 text-center">
                <CheckCircle2
                  size={42}
                  className="mx-auto mb-4"
                  style={{ color: G }}
                />

                <h3 className="font-bold text-2xl">
                  Message submitted!
                </h3>

                <p className="text-[15px] mt-3" style={{ color: MUTED }}>
                  Thank you for contacting FixNear support.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-md px-6 py-3 text-white text-[14px]"
                  style={{ background: G }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* NAME + EMAIL */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[14px] font-semibold mb-2">
                      Full name <span style={{ color: O }}>*</span>
                    </label>

                    <input
                      required
                      type="text"
                      placeholder="Your full name"
                      className="w-full h-[48px] rounded-md border px-4 text-[15px] outline-none focus:border-green-700"
                      style={{
                        background: "transparent",
                        borderColor: BORDER,
                      }}
                    />
                  </div>

                  <div>
                    <label className="block text-[14px] font-semibold mb-2">
                      Email address <span style={{ color: O }}>*</span>
                    </label>

                    <input
                      required
                      type="email"
                      placeholder="you@example.com"
                      className="w-full h-[48px] rounded-md border px-4 text-[15px] outline-none focus:border-green-700"
                      style={{
                        background: "transparent",
                        borderColor: BORDER,
                      }}
                    />
                  </div>
                </div>

                {/* TOPIC */}
                <div>
                  <label className="block text-[14px] font-semibold mb-2">
                    Support topic <span style={{ color: O }}>*</span>
                  </label>

                  <div className="relative">
                    <select
                      required
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="appearance-none w-full h-[48px] rounded-md border px-4 pr-10 text-[15px] outline-none focus:border-green-700"
                      style={{
                        background: "transparent",
                        borderColor: BORDER,
                        color: topic ? G : MUTED,
                      }}
                    >
                      <option value="">Choose a topic</option>
                      <option>Finding local help</option>
                      <option>Booking and appointments</option>
                      <option>Payments and refunds</option>
                      <option>Account and profile</option>
                      <option>Technician registration</option>
                      <option>Other questions</option>
                    </select>

                    <ChevronDown
                      size={17}
                      className="absolute right-3 top-4 pointer-events-none"
                    />
                  </div>

                  <p className="mt-2 text-[13px] leading-5" style={{ color: MUTED }}>
                    Finding local help, Requests, Account, Payments, etc.
                  </p>
                </div>

                {/* REQUEST REFERENCE */}
                <div>
                  <label className="block text-[14px] font-semibold mb-2">
                    Request / reference ID{" "}
                    <span style={{ color: MUTED }}>(optional)</span>
                  </label>

                  <input
                    type="text"
                    placeholder="Add a reference if you have one"
                    className="w-full h-[48px] rounded-md border px-4 text-[15px] outline-none focus:border-green-700"
                    style={{
                      background: "transparent",
                      borderColor: BORDER,
                    }}
                  />

                  <p className="mt-2 text-[13px]" style={{ color: MUTED }}>
                    Leave this blank if your question isn't about an existing request.
                  </p>
                </div>

                {/* SUBJECT */}
                <div>
                  <label className="block text-[14px] font-semibold mb-2">
                    Subject <span style={{ color: O }}>*</span>
                  </label>

                  <input
                    required
                    type="text"
                    placeholder="A short summary of what you need help with"
                    className="w-full h-[48px] rounded-md border px-4 text-[15px] outline-none focus:border-green-700"
                    style={{
                      background: "transparent",
                      borderColor: BORDER,
                    }}
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block text-[14px] font-semibold mb-2">
                    Message / problem description{" "}
                    <span style={{ color: O }}>*</span>
                  </label>

                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us what happened and where you got stuck..."
                    className="w-full rounded-md border px-4 py-3 text-[15px] resize-none outline-none focus:border-green-700"
                    style={{
                      background: "transparent",
                      borderColor: BORDER,
                    }}
                  />

                  <p className="mt-2 text-[13px] leading-5" style={{ color: MUTED }}>
                    Include what you were trying to do, any error message and what you've already tried.
                  </p>
                </div>

                {/* ATTACHMENT */}
                <div>
                  <label className="block text-[14px] font-semibold mb-3">
                    Attachment{" "}
                    <span style={{ color: MUTED }}>(optional)</span>
                  </label>

                  <input
                    ref={fileRef}
                    type="file"
                    accept="image/*,.pdf"
                    className="hidden"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                  />

                  <button
                    type="button"
                    onClick={() => fileRef.current?.click()}
                    className="w-full min-h-[85px] border border-dashed rounded-md flex flex-col items-center justify-center gap-2 hover:bg-white/40 px-3"
                    style={{ borderColor: BORDER }}
                  >
                    <Upload size={20} />

                    <span className="text-[14px] font-semibold">
                      {file ? file.name : "Choose a file or drag it here"}
                    </span>

                    <span className="text-[13px]" style={{ color: MUTED }}>
                      A screenshot or photo can help explain the issue.
                    </span>
                  </button>

                  <p className="mt-2 text-[13px]" style={{ color: MUTED }}>
                    Remove private information before uploading a file.
                  </p>
                </div>

                {/* SUBMIT */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="submit"
                    className="rounded-md px-7 py-3 text-white text-[15px] font-semibold hover:opacity-90 transition"
                    style={{ background: G }}
                  >
                    Send message
                  </button>

                  <span className="text-[13px]" style={{ color: MUTED }}>
                    Use an email address you can access.
                  </span>
                </div>
              </form>
            )}
          </section>

          {/* RIGHT SIDE */}
          <aside className="space-y-5">

            {/* GUIDANCE CARD */}
            <section
              className="rounded-lg p-6 sm:p-7"
              style={{ background: "#d9cbb2" }}
            >
              <MessageSquare size={23} className="mb-4" />

              <p
                className="text-[14px] font-bold tracking-wide mb-3"
                style={{ color: O }}
              >
                A LITTLE GUIDANCE
              </p>

              <h3 className="text-[24px] sm:text-[26px] font-bold leading-tight mb-3">
                Let's make your next step clearer.
              </h3>

              <p
                className="text-[15px] leading-[23px] mb-5"
                style={{ color: "#5f675e" }}
              >
                You don't need the perfect explanation. A few useful details are a good place to start.
              </p>

              <div className="space-y-5 text-[14px] leading-[22px]">
                <div>
                  <h4 className="font-bold text-[15px] mb-1">
                    Start with the step
                  </h4>

                  <p style={{ color: "#5f675e" }}>
                    Tell us which page or action you were using when you got stuck.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[15px] mb-1">
                    Share the useful details
                  </h4>

                  <p style={{ color: "#5f675e" }}>
                    Include the error message, what you expected and what happened instead.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[15px] mb-1">
                    Add context, if you have it
                  </h4>

                  <p style={{ color: "#5f675e" }}>
                    A request reference or a screenshot can help. You can still contact us without either.
                  </p>
                </div>
              </div>
            </section>

            {/* PRIVACY CARD */}
            <section
              className="rounded-lg border p-5 sm:p-6"
              style={{ borderColor: BORDER }}
            >
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck size={21} style={{ color: O }} />

                <h3 className="text-[16px] font-bold">
                  Keep private details private
                </h3>
              </div>

              <p className="text-[14px] leading-[22px]" style={{ color: MUTED }}>
                Please don't share passwords, OTPs or email verification codes, card details or identity documents in your message or attachments.
              </p>

              <p className="text-[14px] leading-[22px] mt-3" style={{ color: MUTED }}>
                For technician document submissions, use the secure upload area in your dashboard.
              </p>
            </section>

            {/* QUICK ANSWER */}
            <section className="px-1 py-2">
              <div className="flex items-center gap-3 mb-3">
                <Search size={20} />

                <h3 className="text-[16px] font-bold">
                  Looking for a quick answer?
                </h3>
              </div>

              <p className="text-[14px] leading-[22px] mb-4" style={{ color: MUTED }}>
                Browse practical guidance on local help, your account and finding a technician.
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-[14px] font-bold hover:gap-3 transition-all"
                style={{ color: G }}
              >
                Explore Help/FAQ <ArrowRight size={16} />
              </a>
            </section>
          </aside>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="mt-auto px-5 sm:px-7 pt-9 pb-6">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-7 pb-8">
            <div>
              <h3 className="text-[17px] font-bold mb-3">FixNear</h3>

              <p className="text-[14px] leading-[22px]" style={{ color: MUTED }}>
                Find trusted technicians
                <br />
                near you.
              </p>
            </div>

            <div>
              <h4 className="text-[15px] font-bold mb-3">Services</h4>

              <ul className="space-y-2 text-[14px]" style={{ color: MUTED }}>
                <li><a href="#">Plumbing</a></li>
                <li><a href="#">Electrician</a></li>
                <li><a href="#">AC Repair</a></li>
                <li><a href="#">Refrigerator</a></li>
                <li><a href="#">View all</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[15px] font-bold mb-3">Company</h4>

              <ul className="space-y-2 text-[14px]" style={{ color: MUTED }}>
                <li><a href="#">About Us</a></li>
                <li><a href="#">How it works</a></li>
                <li><a href="#">Become a technician</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[15px] font-bold mb-3">Support</h4>

              <ul className="space-y-2 text-[14px]" style={{ color: MUTED }}>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Safety</a></li>
              </ul>
            </div>
          </div>

          <div
            className="border-t pt-5 text-center text-[13px]"
            style={{ borderColor: BORDER, color: MUTED }}
          >
            © 2026 FixNear. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
