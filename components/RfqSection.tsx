"use client";

import React, { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { 
  buildWhatsAppLink, 
  WhatsAppRecipient, 
  DEFAULT_RECIPIENT, 
  WHATSAPP_CONTACTS 
} from "@/lib/whatsapp";
import { WhatsAppRecipientSelector } from "@/components/WhatsAppRecipientSelector";
import { 
  FileSpreadsheet, 
  MessageSquare, 
  Building2, 
  MapPin, 
  Phone, 
  User, 
  Clock, 
  ShieldCheck,
  CheckCircle2,
  Mail
} from "lucide-react";

export function RfqSection() {
  const [company, setCompany] = useState("");
  const [contactName, setContactName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [urgency, setUrgency] = useState("Immediate Dispatch (Breakdown)");
  const [selectedBrands, setSelectedBrands] = useState<string[]>(["SKF", "TATA"]);
  const [bearingList, setBearingList] = useState("");
  const [recipient, setRecipient] = useState<WhatsAppRecipient>(DEFAULT_RECIPIENT);

  const brandOptions = siteConfig.brands || ["SKF", "TATA", "XNO", "DSF"];

  const toggleBrand = (b: string) => {
    setSelectedBrands(prev => 
      prev.includes(b) ? prev.filter(x => x !== b) : [...prev, b]
    );
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = 
`*OFFICIAL RFQ: EZZI BEARING SUPPLIERS (Manmad)*
--------------------------------------
*Procurement Details:*
• Company / Plant: ${company || "Not provided"}
• Contact Person: ${contactName || "Procurement Officer"}
• Phone: ${phone || "Not provided"}
• Delivery Location: ${city || "Maharashtra / India"}
• Urgency Level: ${urgency}
• Preferred Brands: ${selectedBrands.join(", ") || "Any OEM Approved"}

--------------------------------------
*Bearing Part Numbers & Quantities:*
${bearingList || "Please check requirement list with sales desk."}

--------------------------------------
_Source: Home Page RFQ Portal_
Please provide stock availability, brand quotation, and delivery lead time. Thank you!`;

    const url = buildWhatsAppLink(formattedMessage, recipient);
    window.open(url, "_blank");
  };

  return (
    <section id="rfq" className="py-20 bg-[#F4F6FA] border-t border-slate-200 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with Diamond Motif */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9962B]/10 border border-[#C9962B]/30 text-[#C9962B] font-mono text-xs font-bold mb-3">
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>BULK PROCUREMENT &amp; WHOLESALE QUOTATION</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-[#0B1B3D] uppercase tracking-tight">
            Submit Your Bearing Requirement List (BOM)
          </h2>

          <div className="flex items-center justify-center gap-3 my-3">
            <span className="h-px w-12 bg-[#C9962B]/50"></span>
            <span className="text-[#C9962B] text-xs">◆</span>
            <span className="h-px w-12 bg-[#C9962B]/50"></span>
          </div>

          <p className="text-sm sm:text-base text-slate-600 font-sans">
            Need pricing for multiple bearing series? Enter your part numbers below for an official quotation via WhatsApp or email within 30 minutes.
          </p>
        </div>

        {/* The Form Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-lift">
          <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
            {/* Row 1: Company & Contact Person */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-700 font-bold mb-1.5 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#C9962B]" />
                  Company / Factory / Workshop Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sai Engineering Works / Sugar Mill"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#F4F6FA] border border-slate-300 text-sm text-[#0B1B3D] placeholder-slate-400 focus:outline-none focus:border-[#C9962B] focus:ring-1 focus:ring-[#C9962B]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-700 font-bold mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#C9962B]" />
                  Your Name / Designation
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ramesh Patil (Purchase Manager)"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#F4F6FA] border border-slate-300 text-sm text-[#0B1B3D] placeholder-slate-400 focus:outline-none focus:border-[#C9962B] focus:ring-1 focus:ring-[#C9962B]"
                />
              </div>
            </div>

            {/* Row 2: Phone & Delivery Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-700 font-bold mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#C9962B]" />
                  Contact Mobile / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 98220 XXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#F4F6FA] border border-slate-300 text-sm text-[#0B1B3D] placeholder-slate-400 focus:outline-none focus:border-[#C9962B] focus:ring-1 focus:ring-[#C9962B] font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-700 font-bold mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C9962B]" />
                  Delivery City &amp; State *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Nashik, Pune, Mumbai, Indore, Surat"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#F4F6FA] border border-slate-300 text-sm text-[#0B1B3D] placeholder-slate-400 focus:outline-none focus:border-[#C9962B] focus:ring-1 focus:ring-[#C9962B]"
                />
              </div>
            </div>

            {/* Row 3: Urgency Level */}
            <div>
              <label className="block text-xs font-mono text-slate-700 font-bold mb-1.5 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C9962B]" />
                Procurement Urgency
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  "Immediate Dispatch (Breakdown)",
                  "Routine Weekly Stock",
                  "Price Check & Comparison"
                ].map((opt) => (
                  <button
                    type="button"
                    key={opt}
                    onClick={() => setUrgency(opt)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-mono text-left border transition-all ${
                      urgency === opt
                        ? "bg-[#0B1B3D] border-[#0B1B3D] text-[#E4B94F] font-bold"
                        : "bg-[#F4F6FA] border-slate-300 text-slate-700 hover:border-[#C9962B]"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Row 4: Preferred Brands */}
            <div>
              <label className="block text-xs font-mono text-slate-700 font-bold mb-2">
                Preferred Brands (Stockist ready):
              </label>
              <div className="flex flex-wrap gap-2">
                {brandOptions.map((b) => (
                  <button
                    type="button"
                    key={b}
                    onClick={() => toggleBrand(b)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                      selectedBrands.includes(b)
                        ? "bg-[#0B1B3D] text-[#E4B94F] font-bold"
                        : "bg-[#F4F6FA] border border-slate-300 text-slate-700 hover:border-[#C9962B]"
                    }`}
                  >
                    {selectedBrands.includes(b) && <CheckCircle2 className="w-3.5 h-3.5 text-[#E4B94F]" />}
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Row 5: Bearing BOM text area */}
            <div>
              <label className="block text-xs font-mono text-slate-700 font-bold mb-1.5">
                Bearing Part Numbers, Sizes &amp; Quantities *
              </label>
              <textarea
                required
                rows={4}
                value={bearingList}
                onChange={(e) => setBearingList(e.target.value)}
                placeholder="Example:
1. 30208 (Taper Roller) - 20 pcs (SKF/TATA)
2. 6205 - 50 pcs (DSF/XNO)
3. 32220 (Taper Roller) - 4 pcs for Sugar Mill
4. LM 44649/10 - 10 sets"
                className="w-full px-4 py-3 rounded-xl bg-[#F4F6FA] border border-slate-300 text-xs font-mono text-[#0B1B3D] placeholder-slate-400 focus:outline-none focus:border-[#C9962B] focus:ring-1 focus:ring-[#C9962B] leading-relaxed"
              />
            </div>

            {/* Direct Trade Contact Selector */}
            <div className="pt-2">
              <WhatsAppRecipientSelector 
                selected={recipient} 
                onChange={setRecipient} 
              />
            </div>

            {/* Submit Bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="submit"
                className="w-full sm:flex-1 py-4 px-6 rounded-xl font-heading font-extrabold text-sm uppercase tracking-wider bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 flex items-center justify-center gap-2.5 transition-all shadow-md active:scale-95"
              >
                <MessageSquare className="w-5 h-5 fill-slate-950 stroke-none" />
                <span>Submit RFQ to {WHATSAPP_CONTACTS[recipient].name.split(" ")[0]} via WhatsApp</span>
              </button>

              <a
                href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(`B2B Bearing RFQ - ${company || 'Purchase Inquiry'}`)}&body=${encodeURIComponent(`Company: ${company}\nContact: ${contactName} (${phone})\nLocation: ${city}\nUrgency: ${urgency}\nBrands: ${selectedBrands.join(', ')}\n\nRequirements:\n${bearingList}`)}`}
                className="w-full sm:w-auto py-4 px-6 rounded-xl bg-[#F4F6FA] border border-slate-300 hover:border-[#0B1B3D] text-[#0B1B3D] font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <Mail className="w-4 h-4 text-[#C9962B]" />
                <span>Email RFQ</span>
              </a>
            </div>

            {/* Reassurance note */}
            <div className="text-center text-xs font-mono text-slate-500 flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Direct quotes from Shabbir Sakriwala &amp; Ammar Sakriwala • No middleman markups</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default RfqSection;
