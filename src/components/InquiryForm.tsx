"use client";

import { useState, FormEvent } from "react";
import { companyInfo } from "@/data/company";

interface InquiryFormProps {
  productName?: string;
  compact?: boolean;
  onDark?: boolean;
  minimal?: boolean;
}

export default function InquiryForm({ productName, compact, onDark, minimal }: InquiryFormProps) {
  // Shared rounded styling for all inputs
  const inputBaseClass = "w-full px-4 py-3 border text-sm outline-none transition-all rounded-2xl";
  
  const inputClass = onDark
    ? `${inputBaseClass} bg-white/10 backdrop-blur-sm border-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-red-600/40 focus:border-red-600`
    : `${inputBaseClass} border-gray-200 focus:ring-2 focus:ring-red-600/20 focus:border-red-600`;

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    product: productName || "",
    quantity: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(false);
    setErrorMessage(null);
    setSubmitting(true);

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          productName: formData.product,
          source: "website",
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", company: "", message: "", product: productName || "", quantity: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const data = (await res.json().catch(() => null)) as { error?: unknown } | null;
        setErrorMessage(typeof data?.error === "string" ? data.error : "Failed to send inquiry. Please try again.");
      }
    } catch {
      setErrorMessage("Failed to send inquiry. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-2xl p-6 text-center ${compact ? "" : "max-w-lg mx-auto"}`}>
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-green-700 mb-2">Inquiry Sent Successfully!</h3>
        <p className="text-gray-500 text-sm">Our team will get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={compact || minimal ? "space-y-3" : "space-y-4"}>
      {productName && (
        <div className={`${onDark ? "bg-white/10 border-white/20 text-white" : "bg-red-50 border-red-100 text-red-600"} border px-4 py-2.5 text-sm rounded-2xl`}>
          <span>Product: </span>
          <span className="font-medium">{productName}</span>
        </div>
      )}
      
      {minimal ? (
        <>
          <input type="text" placeholder="Your Name *" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClass} />
          <input type="tel" placeholder="Phone Number *" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={inputClass} />
          <input type="email" placeholder="Email Address (optional)" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass} />
          <textarea placeholder="Message (optional)" rows={3} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={inputClass} />
        </>
      ) : (
        <>
          <div className={compact ? "" : "grid grid-cols-1 sm:grid-cols-2 gap-4"}>
            <input type="text" placeholder="Your Name *" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClass} />
            {!compact && (
              <input type="email" placeholder="Email Address *" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass} />
            )}
          </div>

          {compact && (
            <input type="email" placeholder="Email Address *" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass} />
          )}
          
          <div className={compact ? "" : "grid grid-cols-1 sm:grid-cols-2 gap-4"}>
            <input type="tel" placeholder="Phone Number *" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={inputClass} />
            {!compact && (
              <input type="text" placeholder="Company Name" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className={inputClass} />
            )}
          </div>

          {!compact && (
            <input type="text" placeholder="Required Quantity" value={formData.quantity} onChange={(e) => setFormData({ ...formData, quantity: e.target.value })} className={inputClass} />
          )}

          <textarea placeholder={compact ? "Your Requirement *" : "Describe your requirement in detail *"} required rows={compact ? 3 : 4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={inputClass} />
        </>
      )}

      {errorMessage && (
        <div className={`${onDark ? "border-white/20 bg-white/10 text-white" : "border-red-200 bg-red-50 text-red-700"} border px-4 py-3 text-sm rounded-2xl`} role="alert">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-sm font-semibold transition-all shadow-lg shadow-red-600/20 disabled:cursor-not-allowed disabled:opacity-70 rounded-2xl"
      >
        {submitting ? "Sending..." : "Submit Inquiry"}
      </button>

      {!compact && !minimal && (
        <p className="text-xs text-gray-400 text-center">
          Or contact us directly on{" "}
          <a href={`https://wa.me/${companyInfo.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-red-600 font-medium hover:underline">
            WhatsApp
          </a>
        </p>
      )}
    </form>
  );
}