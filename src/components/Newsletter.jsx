import React, { useState } from "react";

function Newsletter({ darkMode }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!email.trim() || !email.includes("@")) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="relative overflow-hidden py-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1920"
          alt="Newsletter background"
          className={`w-full h-full object-cover ${
            darkMode ? "brightness-[0.25]" : "brightness-[0.88]"
          }`}
        />
      </div>

      <div className="relative z-10 max-w-xl mx-auto px-4 text-center">
        <h2
          className={`text-2xl font-light tracking-tight mb-2 ${
            darkMode ? "text-neutral-100" : "text-neutral-900"
          }`}
        >
          Get Your Latest Update !
        </h2>
        <p
          className={`text-xs font-light mb-8 ${
            darkMode ? "text-neutral-400" : "text-neutral-600"
          }`}
        >
          Subscribe to our latest newsletter to get news about special
          discounts.
        </p>

        {submitted ? (
          <p className="text-sm font-medium text-[#8a8a6a] tracking-wide">
            Thank you for subscribing!
          </p>
        ) : (
          <div className="flex items-stretch max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              placeholder="Email"
              className={`flex-1 px-4 py-3 text-sm font-light outline-none border transition-colors ${
                darkMode
                  ? "bg-neutral-900 border-neutral-700 text-neutral-100 placeholder-neutral-600 focus:border-neutral-500"
                  : "bg-white border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:border-neutral-400"
              }`}
            />
            <button
              onClick={handleSubmit}
              className="bg-[#8a8a6a] hover:bg-[#797960] text-white text-[11px] font-bold uppercase tracking-widest px-6 transition-colors duration-200"
            >
              Subscribe
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Newsletter;
