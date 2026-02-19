"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ID &&
  `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`;

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!FORMSPREE_ENDPOINT) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-20 md:py-28 border-t border-white/10"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight text-center font-[family-name:var(--font-heading)]">
          Get in touch
        </h2>
        <p className="text-white/90 text-xl mb-12 text-readable text-center">
          Open to new opportunities and happy to chat.
        </p>

        <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-6 sm:p-8 md:p-10">
          <form
            onSubmit={handleSubmit}
            action={FORMSPREE_ENDPOINT || "#"}
            method="POST"
            className="space-y-5"
          >
            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm font-medium text-white/90 mb-2 text-readable"
              >
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none focus:ring-1 focus:ring-white/40 transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm font-medium text-white/90 mb-2 text-readable"
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none focus:ring-1 focus:ring-white/40 transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-medium text-white/90 mb-2 text-readable"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder="Your message..."
                className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none focus:ring-1 focus:ring-white/40 transition-colors resize-y min-h-[120px]"
              />
            </div>
            {status === "error" && (
              <p className="text-sm text-red-400">
                Something went wrong. Please add{" "}
                <code className="rounded bg-white/10 px-1">
                  NEXT_PUBLIC_FORMSPREE_ID
                </code>{" "}
                to your .env.local or try again later.
              </p>
            )}
            {status === "success" && (
              <p className="text-sm text-green-400">Thanks! I&apos;ll get back to you soon.</p>
            )}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full sm:w-auto rounded-lg bg-white text-gray-900 px-6 py-3.5 text-base font-medium transition-colors hover:bg-gray-200 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
          </form>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-10">
          <a
            href="https://www.linkedin.com/in/brian-pizzimenti-b1a53929a/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-transparent px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/10"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/BrianPizz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-transparent px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/10"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
