"use client";

import { Send } from "lucide-react";
import { useI18n } from "@/lib/i18n";

// ============================================================
// SUBCOMPONENTS
// ============================================================

function ServiceCard({
  name,
  price,
  bookLabel,
}: {
  name: string;
  price: string;
  bookLabel: string;
}) {
  return (
    <div className="bg-white border border-[#dadde1] rounded-lg overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.1)] min-w-[160px] max-w-[200px] flex-1">
      <div className="w-full h-[100px] bg-[#f0f2f5] flex items-center justify-center">
        <span className="text-[#8a8d91] text-xs">Image</span>
      </div>
      <div className="p-3">
        <p className="text-sm font-semibold text-[#1c1e21]">{name}</p>
        <p className="text-base font-bold text-[#0084ff] mt-1">{price}</p>
        <button className="w-full mt-2 bg-[#0084ff] hover:bg-[#0066cc] text-white text-sm font-semibold py-1.5 px-3 rounded-md transition-colors">
          {bookLabel}
        </button>
      </div>
    </div>
  );
}

function AddonCard({
  name,
  price,
  addLabel,
}: {
  name: string;
  price: string;
  addLabel: string;
}) {
  return (
    <div className="bg-white border border-[#dadde1] rounded-lg overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex-1 min-w-[140px]">
      <div className="w-full h-14 bg-[#f0f2f5] flex items-center justify-center">
        <span className="text-[#8a8d91] text-[10px]">Image</span>
      </div>
      <div className="p-2.5">
        <p className="text-xs font-semibold text-[#1c1e21]">{name}</p>
        <p className="text-sm font-bold text-[#0084ff] mt-0.5">{price}</p>
        <button className="w-full mt-1.5 border border-[#0084ff] text-[#0084ff] hover:bg-[#0084ff] hover:text-white text-xs font-semibold py-1 px-2 rounded-md transition-colors">
          {addLabel}
        </button>
      </div>
    </div>
  );
}

function SummaryCard({ children, header }: { children: React.ReactNode; header: string }) {
  return (
    <div className="border-l-[3px] border-[#0084ff] pl-3 my-2">
      <p className="font-semibold text-[#1c1e21] text-sm mb-1.5">{header}</p>
      {children}
    </div>
  );
}

function SummaryRow({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className={`flex justify-between text-sm ${bold ? "font-semibold mt-2 pt-2 border-t border-[#dadde1]" : "text-[#65676b]"}`}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

function Timestamp({ time }: { time: string }) {
  return (
    <div className="text-center my-3">
      <span className="text-xs text-[#8a8d91]">{time}</span>
    </div>
  );
}

function TimeSlots({ slots }: { slots: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 mt-2 ml-10">
      {slots.map((slot) => (
        <button
          key={slot}
          className="px-3 py-1.5 rounded-full border border-[#0084ff] text-[#0084ff] text-sm font-medium hover:bg-[#0084ff] hover:text-white transition-colors"
        >
          {slot}
        </button>
      ))}
    </div>
  );
}

function Lines({ text }: { text: string }) {
  return (
    <>
      {text.split("\n").map((line, i) => (
        <span key={i}>
          {i > 0 && <br />}
          {line}
        </span>
      ))}
    </>
  );
}

// ============================================================
// MAIN COMPONENT
// ============================================================

export function ChatTerminal() {
  const { t } = useI18n();
  const p = (key: string) => t(`featurePage.chatbot.demo.live.${key}`);

  const botAvatar = (
    <div className="w-8 h-8 rounded-full bg-[#0084ff] flex items-center justify-center shrink-0">
      <span className="text-white text-xs font-bold">DX</span>
    </div>
  );

  const aiBubble = "bg-[#e4e6ea] text-[#1c1e21] rounded-[18px] px-3 py-2 text-[15px] leading-[1.33]";
  const userBubble = "bg-[#0084ff] text-white rounded-[18px] px-3 py-2 text-[15px] leading-[1.33]";

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#dadde1] max-w-[480px] mx-auto md:max-w-full">
      {/* Messenger Header */}
      <div className="bg-white px-4 py-3 border-b border-[#dadde1] flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-[#0084ff] flex items-center justify-center">
          <span className="text-white text-xs font-bold">DX</span>
        </div>
        <div>
          <p className="text-[15px] font-semibold text-[#1c1e21]">{p("terminal")}</p>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#42b883]" />
            <span className="text-xs text-[#8a8d91]">Online</span>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="px-3 py-4 max-h-[600px] overflow-y-auto bg-white space-y-1">

        <Timestamp time="10:15 AM" />

        {/* Message 1 — AI Greeting */}
        <div className="flex items-end gap-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {botAvatar}
          <div className={`max-w-[70%] ${aiBubble}`}>
            {p("message1")}
          </div>
        </div>

        <Timestamp time="10:16 AM" />

        {/* Message 2 — Customer Request */}
        <div className="flex justify-end animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className={`max-w-[70%] ${userBubble}`}>
            {p("message2")}
          </div>
        </div>

        <Timestamp time="10:17 AM" />

        {/* Message 3 — AI Service Recommendations */}
        <div className="flex items-end gap-2 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          {botAvatar}
          <div className={`max-w-[70%] ${aiBubble}`}>
            {p("message3")}
          </div>
        </div>

        {/* Service Cards */}
        <div className="flex gap-2 ml-10 mt-2 overflow-x-auto pb-1 animate-fade-in" style={{ animationDelay: "0.45s" }}>
          <ServiceCard
            name={p("product1.name")}
            price={p("product1.price")}
            bookLabel={p("buy")}
          />
          <ServiceCard
            name={p("product2.name")}
            price={p("product2.price")}
            bookLabel={p("buy")}
          />
          <ServiceCard
            name={p("product3.name")}
            price={p("product3.price")}
            bookLabel={p("buy")}
          />
        </div>

        <div className="flex items-end gap-2 mt-1 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div className="w-8 shrink-0" />
          <div className={`max-w-[70%] ${aiBubble}`}>
            {p("message3.cta")}
          </div>
        </div>

        <Timestamp time="10:18 AM" />

        {/* Message 4 — Customer Selection */}
        <div className="flex justify-end animate-fade-in" style={{ animationDelay: "0.55s" }}>
          <div className={`max-w-[70%] ${userBubble}`}>
            {p("message4")}
          </div>
        </div>

        <Timestamp time="10:19 AM" />

        {/* Message 5 — AI Service Details */}
        <div className="flex items-end gap-2 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          {botAvatar}
          <div className={`max-w-[75%] ${aiBubble}`}>
            <p>{p("message5")}</p>
            <div className="mt-2 text-sm leading-relaxed">
              <Lines text={p("message5.details")} />
            </div>
            <p className="mt-2">{p("message5.note")}</p>
          </div>
        </div>

        <Timestamp time="10:20 AM" />

        {/* Message 6 — Customer Wants to Book */}
        <div className="flex justify-end animate-fade-in" style={{ animationDelay: "0.7s" }}>
          <div className={`max-w-[70%] ${userBubble}`}>
            {p("message6")}
          </div>
        </div>

        <Timestamp time="10:21 AM" />

        {/* Message 7 — AI Upselling Add-ons */}
        <div className="flex items-end gap-2 animate-fade-in" style={{ animationDelay: "0.75s" }}>
          {botAvatar}
          <div className={`max-w-[70%] ${aiBubble}`}>
            {p("message7")}
          </div>
        </div>

        {/* Add-on Cards */}
        <div className="flex gap-2 ml-10 mt-2 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <AddonCard
            name={p("addon1.name")}
            price={p("addon1.price")}
            addLabel={p("addToCart")}
          />
          <AddonCard
            name={p("addon2.name")}
            price={p("addon2.price")}
            addLabel={p("addToCart")}
          />
        </div>

        {/* Cart summary */}
        <div className="ml-10 mt-2 animate-fade-in" style={{ animationDelay: "0.85s" }}>
          <SummaryCard header="Selected Services">
            <SummaryRow label="Gel Manicure" value="$65.00" />
            <SummaryRow label="Glitter Nail Art" value="$12.00" />
            <SummaryRow label="Total" value="$77.00" bold />
          </SummaryCard>
        </div>

        <div className="flex items-end gap-2 mt-1 animate-fade-in" style={{ animationDelay: "0.9s" }}>
          <div className="w-8 shrink-0" />
          <div className={`max-w-[70%] ${aiBubble}`}>
            {p("message7.cta")}
          </div>
        </div>

        <Timestamp time="10:22 AM" />

        {/* Message 8 — Customer Adds & Books */}
        <div className="flex justify-end animate-fade-in" style={{ animationDelay: "0.95s" }}>
          <div className={`max-w-[70%] ${userBubble}`}>
            {p("message8")}
          </div>
        </div>

        <Timestamp time="10:23 AM" />

        {/* Message 9 — AI Booking Summary */}
        <div className="flex items-end gap-2 animate-fade-in" style={{ animationDelay: "1.0s" }}>
          {botAvatar}
          <div className={`max-w-[75%] ${aiBubble}`}>
            {p("message9")}
          </div>
        </div>

        {/* Booking Summary */}
        <div className="ml-10 mt-2 animate-fade-in" style={{ animationDelay: "1.05s" }}>
          <SummaryCard header="Booking Summary">
            <SummaryRow label="Gel Manicure" value="$65.00" />
            <SummaryRow label="Glitter Nail Art" value="$12.00" />
            <SummaryRow label="Paraffin Hand Treatment" value="$25.00" />
            <SummaryRow label="Duration" value="~90 min" />
            <SummaryRow label="Total" value="$102.00" bold />
          </SummaryCard>
        </div>

        {/* Available Time Slots */}
        <div className="flex items-end gap-2 mt-1 animate-fade-in" style={{ animationDelay: "1.08s" }}>
          <div className="w-8 shrink-0" />
          <div className={`max-w-[70%] ${aiBubble}`}>
            {p("message9.cta")}
          </div>
        </div>

        <TimeSlots slots={["Sat 10:00 AM", "Sat 2:00 PM", "Sun 11:00 AM", "Sun 3:30 PM"]} />

        <Timestamp time="10:24 AM" />

        {/* Message 10 — Customer Info */}
        <div className="flex justify-end animate-fade-in" style={{ animationDelay: "1.15s" }}>
          <div className={`max-w-[70%] ${userBubble}`}>
            {p("message10")}
          </div>
        </div>

        <Timestamp time="10:25 AM" />

        {/* Message 11 — AI Booking Confirmation */}
        <div className="flex items-end gap-2 animate-fade-in" style={{ animationDelay: "1.2s" }}>
          {botAvatar}
          <div className={`max-w-[75%] ${aiBubble}`}>
            <p>{p("message11")}</p>

            {/* Status steps — plain text, italic */}
            <div className="mt-2 space-y-0.5 text-sm italic text-[#65676b]">
              <p>{p("message11.processing")}</p>
              <p>{p("message11.secure")}</p>
              <p className="not-italic font-semibold text-[#1c1e21]">{p("message11.success")}</p>
            </div>

            {/* Confirmation details — border-left, no background */}
            <div className="mt-3 border-l-[3px] border-[#0084ff] pl-3 text-sm">
              <p className="font-semibold text-[#1c1e21] mb-1.5">{p("message11.order")}</p>
              <div className="text-[#65676b] space-y-0.5">
                <p><Lines text={p("message11.shipping")} /></p>
                <p>{p("message11.delivery")}</p>
              </div>
              <div className="mt-2 text-[#65676b] space-y-0.5">
                <p>{p("message11.email")}</p>
                <p>{p("message11.tracking")}</p>
              </div>
            </div>

            <p className="mt-3">{p("message11.cta")}</p>
          </div>
        </div>

        <Timestamp time="10:26 AM" />

        {/* Message 12 — Customer Thank You */}
        <div className="flex justify-end animate-fade-in" style={{ animationDelay: "1.4s" }}>
          <div className={`max-w-[70%] ${userBubble}`}>
            {p("message12")}
          </div>
        </div>

        <Timestamp time="10:27 AM" />

        {/* Message 13 — AI Final Response */}
        <div className="flex items-end gap-2 animate-fade-in" style={{ animationDelay: "1.45s" }}>
          {botAvatar}
          <div className={`max-w-[75%] ${aiBubble}`}>
            <p>{p("message13")}</p>
            <p className="mt-2">{p("message13.email")}</p>
            <div className="mt-2 border-l-[3px] border-[#0084ff] pl-3 text-sm text-[#65676b]">
              <Lines text={p("message13.details")} />
            </div>
            <p className="mt-2">{p("message13.ref")}</p>
            <p className="mt-1">{p("message13.closing")}</p>
          </div>
        </div>

      </div>

      {/* Input Area — Messenger Style */}
      <div className="px-3 py-2.5 border-t border-[#dadde1] bg-white">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder={p("placeholder")}
            className="flex-1 border border-[#dadde1] rounded-full px-4 py-2 text-[15px] text-[#1c1e21] outline-none focus:border-[#0084ff] transition-colors"
            disabled
          />
          <button className="w-8 h-8 rounded-full bg-[#0084ff] hover:bg-[#0066cc] flex items-center justify-center transition-colors shrink-0">
            <Send className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatTerminal;
