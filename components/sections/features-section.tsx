"use client";

import { Edit, MapPin, Bell, Mail, Camera, Globe } from "lucide-react";
import Image from "next/image";

interface FeatureBlockProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  children: React.ReactNode;
  reverse?: boolean;
}

function FeatureBlock({
  icon,
  title,
  description,
  children,
  reverse = false,
}: FeatureBlockProps) {
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
      <div
        className={`flex flex-col justify-center ${reverse ? "order-1 lg:order-2" : "order-1"}`}
      >
        <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-accent-champagne border border-primary/20 text-primary">
          {icon}
        </div>
        <h3 className="text-3xl font-display font-bold text-text-main mb-6">
          {title}
        </h3>
        <p className="text-lg text-text-muted font-light leading-relaxed">
          {description}
        </p>
      </div>
      <div
        className={`relative group ${reverse ? "order-2 lg:order-1" : "order-2"}`}
      >
        <div
          className={`absolute inset-0 bg-primary/10 ${reverse ? "-translate-x-4" : "translate-x-4"} translate-y-4 rounded-lg -z-10 transition-transform group-hover:${reverse ? "-translate-x-6" : "translate-x-6"} group-hover:translate-y-6 duration-500`}
        />
        {children}
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-main mb-4">
            Features you&apos;ll actually use
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mt-6 rounded-full" />
        </div>

        <div className="space-y-24 lg:space-y-32">
          {/* Feature 1: Social Content & Growth */}
          <FeatureBlock
            icon={<Edit className="w-8 h-8" />}
            title="Social Content & Growth"
            description="We make scroll-stopping posts: before/after shots, nail art highlights, short videos and captions written for local customers. Our AI analyzes what's trending nearby to ensure maximum engagement."
          >
            <div className="relative bg-background-light p-2 border border-primary/10 rounded-lg shadow-xl overflow-hidden aspect-[4/3] flex items-center justify-center">
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  alt="Manicured hands holding phone with social feed"
                  className="w-full h-full object-cover opacity-20"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU7RuNVAkpzLVJx6oTDdFR7V8a3m5Cy3sd-dfQ8uQZX6bYRVPwu_7JnSTDwe2BobJdxz6OLMB5czJbu88WploObCnH2ajnyk5hWfSBhSxHYKIwZXI4dhx0WYf2bB1pu7EK5Hb-r3m9BOq9O9b87EkYDGTP_W96Yshmjlh3zTJXOIZTzew-oLcPGoAxuAE5ZNRxjCIYjqqop99y3uCEFwxAzdiBnAdZeRMjCXo4nWgBLWFsY_RiLXXYP6vVJGX0MM-uo-_d4dg6-vNb"
                  width={600}
                  height={400}
                  unoptimized
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-white via-white/80 to-transparent" />
              <div className="relative w-[55%] bg-white shadow-2xl rounded-[2rem] border-4 border-gray-100 transform -rotate-2 hover:rotate-0 transition-transform duration-500 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-gray-100 rounded-b-xl z-20" />
                <div className="pt-8 pb-4 px-4 bg-white h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-gray-50 pb-2">
                    <span className="font-display font-bold text-text-main text-xs">
                      UnikNails
                    </span>
                    <span className="text-gray-400 text-sm">☰</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1 flex-1">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div
                        key={i}
                        className="aspect-square bg-gray-100 rounded-sm overflow-hidden"
                      >
                        <Image
                          alt={`Nail art ${i}`}
                          className="w-full h-full object-cover"
                          src={`https://lh3.googleusercontent.com/aida-public/AB6AXuDI23rgFBitscVnpXAK8eC750INr8sGich89cer-eE-hyWar2tdweskhhYgL4ON9kX4OgUa_n0WpipYUQIZTO9vFsu9-d0pa3iOU2u7yWVaB0fcuL5QeSaSbErK1g3NtQBCbg6a0S0C6jvQz4HdssibINchuXb8SjKiRYyqLVL2MWeWNFd1AX65Zr46ha5TSsWJXP-w_WSBfSwbvjPsLpNXDeFSnCz4TGS5w1NfFWopgmZgjHMDNw0J0pgrFGnZlHeyzrWn2KyjfS3T`}
                          width={100}
                          height={100}
                          unoptimized
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className="absolute bottom-8 -right-2 bg-white p-3 rounded-lg shadow-xl border border-primary/10 flex items-center gap-3 z-10 animate-bounce"
                style={{ animationDuration: "3s" }}
              >
                <div className="bg-primary/10 text-primary p-1.5 rounded-full">
                  ❤️
                </div>
                <div>
                  <div className="text-[9px] text-gray-400 uppercase tracking-wider">
                    Reach
                  </div>
                  <div className="text-sm font-bold text-text-main">+2.4k</div>
                </div>
              </div>
            </div>
          </FeatureBlock>

          {/* Feature 2: Local Ads */}
          <FeatureBlock
            icon={<MapPin className="w-8 h-8" />}
            title="Local Ads that bring bookings"
            description="We run simple, targeted ads to people near your salon — ads built to get calls and bookings, not just likes. Our geo-fencing technology ensures you're only spending budget on potential clients within driving distance."
            reverse
          >
            <div className="relative bg-background-light p-2 border border-primary/10 rounded-lg shadow-xl overflow-hidden aspect-[4/3] flex items-center justify-center">
              <div className="absolute inset-0 bg-gray-100 opacity-30" />
              <div className="absolute inset-0 bg-linear-to-t from-background-light via-transparent to-transparent" />
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
                  <div className="relative">
                    <div className="size-16 bg-primary rounded-full flex items-center justify-center shadow-2xl border-4 border-white animate-pulse">
                      🏪
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rotate-45" />
                  </div>
                  <div className="mt-4 bg-white px-4 py-2 rounded shadow-lg border border-primary/20 text-center">
                    <p className="font-display font-bold text-primary-dark">
                      Uniksmart Salon
                    </p>
                    <p className="text-[10px] text-gray-500">
                      2.5mi Radius Targeted
                    </p>
                  </div>
                </div>
                <div className="absolute top-1/3 left-1/4 size-3 bg-primary/60 rounded-full border border-white shadow-sm" />
                <div className="absolute bottom-1/3 right-1/4 size-3 bg-primary/60 rounded-full border border-white shadow-sm" />
                <div className="absolute top-1/4 right-1/3 size-3 bg-primary/60 rounded-full border border-white shadow-sm" />
                <div className="absolute bottom-8 right-8 bg-white p-4 rounded-lg shadow-xl border border-primary/10 max-w-[180px] z-30 transform transition-transform hover:scale-105">
                  <div className="flex items-center gap-2 mb-2">
                    📢
                    <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted">
                      Ad Live
                    </span>
                  </div>
                  <p className="text-xs font-bold text-text-main leading-tight mb-2">
                    &quot;Get 20% off your first Gel Set!&quot;
                  </p>
                  <button className="w-full py-1.5 bg-primary hover:bg-primary-dark text-white text-[10px] font-bold uppercase tracking-widest rounded transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </FeatureBlock>

          {/* Feature 3: Customer follow-ups */}
          <FeatureBlock
            icon={<Bell className="w-8 h-8" />}
            title="Customer follow-ups & reminders"
            description="Automated confirmations and reminders so fewer clients forget their appointments. Reduce no-shows by up to 40% with gentle, perfectly timed nudges sent via SMS and Email."
          >
            <div className="relative bg-background-light p-2 border border-primary/10 rounded-lg shadow-xl overflow-hidden aspect-[4/3] flex items-center justify-center">
              <div className="absolute inset-0 bg-linear-to-br from-accent-champagne to-white opacity-60" />
              <div className="relative w-[70%] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 flex items-center gap-3">
                  <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-display font-bold">
                    U
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold text-text-main">
                      Uniksmart Salon
                    </p>
                    <p className="text-[9px] text-gray-400">
                      Automated Assistant
                    </p>
                  </div>
                  <span className="text-gray-300 text-sm">⋮</span>
                </div>
                <div className="p-4 space-y-4 bg-white min-h-[200px]">
                  <div className="flex flex-col gap-1 items-start">
                    <div className="bg-gray-100 px-3 py-2 rounded-2xl rounded-tl-none max-w-[85%]">
                      <p className="text-xs text-text-main leading-relaxed">
                        Hi Jessica! Friendly reminder for your{" "}
                        <strong>Gel Manicure</strong> tomorrow at 2:00 PM. Reply
                        YES to confirm. 💅
                      </p>
                    </div>
                    <span className="text-[9px] text-gray-300 ml-1">
                      10:00 AM
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 items-end">
                    <div className="bg-primary px-3 py-2 rounded-2xl rounded-tr-none max-w-[85%] text-white">
                      <p className="text-xs leading-relaxed">YES</p>
                    </div>
                    <span className="text-[9px] text-gray-300 mr-1">
                      10:05 AM
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 items-start">
                    <div className="bg-gray-100 px-3 py-2 rounded-2xl rounded-tl-none max-w-[85%]">
                      <p className="text-xs text-text-main leading-relaxed">
                        Great! You are confirmed. See you tomorrow! ✨
                      </p>
                    </div>
                    <span className="text-[9px] text-gray-300 ml-1">
                      10:05 AM
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-4 py-1.5 rounded-full shadow-lg border border-green-100 flex items-center gap-2 z-10 animate-fade-in-up">
                    <span className="bg-green-100 text-green-600 rounded-full p-0.5">
                      ✓
                    </span>
                    <span className="text-[10px] font-bold text-green-700 uppercase tracking-wider">
                      Booking Confirmed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FeatureBlock>

          {/* Feature 4: Email & SMS re-engagement */}
          <FeatureBlock
            icon={<Mail className="w-8 h-8" />}
            title="Email & SMS re-engagement"
            description="Birthday offers, loyalty notes, and rebook reminders — run automatically so your clients come back. We turn your one-time visitors into loyal regulars without you lifting a finger."
            reverse
          >
            <div className="relative bg-background-light p-2 border border-primary/10 rounded-lg shadow-xl overflow-hidden aspect-[4/3] flex items-center justify-center">
              <div className="absolute inset-0 bg-[#F9F7F5]" />
              <div className="relative w-3/4 bg-white shadow-2xl rounded-sm border border-gray-100 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="h-1.5 w-full bg-linear-to-r from-primary to-primary-light" />
                <div className="p-6 md:p-8 text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-16 h-16 bg-primary/5 rounded-br-[40px] -z-10" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-primary/5 rounded-tl-[40px] -z-10" />
                  <div className="inline-block p-3 rounded-full bg-accent-champagne mb-4">
                    🎂
                  </div>
                  <h4 className="font-display font-bold text-xl text-text-main mb-2">
                    Happy Birthday, Sarah!
                  </h4>
                  <p className="text-xs text-text-muted mb-6 leading-relaxed px-4">
                    We&apos;d love to celebrate with you. Treat yourself to a
                    luxury spa pedicure this month.
                  </p>
                  <div className="border-2 border-dashed border-primary/30 bg-accent-champagne/30 p-3 rounded mb-4 relative">
                    <p className="text-[10px] uppercase tracking-widest text-primary-dark font-bold mb-1">
                      Your Gift
                    </p>
                    <p className="text-2xl font-display font-bold text-text-main">
                      20% OFF
                    </p>
                    <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full border-r border-gray-200" />
                    <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full border-l border-gray-200" />
                  </div>
                  <button className="bg-primary text-white text-[10px] font-bold py-2 px-6 rounded uppercase tracking-widest hover:bg-primary-dark transition-colors">
                    Claim Gift
                  </button>
                </div>
              </div>
            </div>
          </FeatureBlock>

          {/* Feature 5: Virtual Photobooth */}
          <FeatureBlock
            icon={<Camera className="w-8 h-8" />}
            title="Virtual Photobooth image service"
            description="We deliver realistic hand photos and color/design previews that look like in-salon photos. Use them to preview styles for clients, create gallery images, and make ads that convert. (No machine to buy)."
          >
            <div className="relative bg-black p-1 border border-primary/30 rounded-lg shadow-xl overflow-hidden aspect-[4/3] flex items-center justify-center">
              <div className="absolute inset-0">
                <Image
                  alt="Hand being scanned"
                  className="w-full h-full object-cover opacity-60"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwnXbx59PF5B76rr11A83eMD5PpPwGdbN9dYe0mD1ux3Uh69M1s6R5zAKRme9T5n1mJpt9zlTuZPKNyaMUeEV34_2q2HhlquH859D8VuAzu0we6V3W2DTMXEBz0IgVKmjE-61GfHAU_Nn6ejhiL7kXKUMFIe9LwaLWXVJu4lC0lRf2ZqSofXoqnpvCPHAO44GAciX9M1HCL3XFst0E1YJD8D20FKoip3IfVPunQjfeVX2JlK6Pl3N3Atv5Y8Rb6TTByApQDqPus_s4"
                  width={600}
                  height={400}
                  unoptimized
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-[80%] h-[70%] border border-primary/50 rounded-lg relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />
                  <div
                    className="absolute left-0 w-full h-1 bg-primary/80 shadow-[0_0_15px_rgba(34,181,248,0.8)] animate-scan"
                    style={{ top: "50%" }}
                  />
                </div>
                <div className="absolute bottom-6 w-full px-8 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="size-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] text-white font-mono uppercase tracking-widest">
                      Tracking Hand
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <div className="size-10 rounded border border-white/20 bg-black/50 backdrop-blur-sm p-1">
                      <div className="w-full h-full bg-primary/80 rounded-sm" />
                    </div>
                    <div className="size-10 rounded border border-white/20 bg-black/50 backdrop-blur-sm p-1">
                      <div className="w-full h-full bg-rose-400 rounded-sm" />
                    </div>
                    <div className="size-10 rounded border border-white/20 bg-black/50 backdrop-blur-sm p-1">
                      <div className="w-full h-full bg-slate-400 rounded-sm" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FeatureBlock>

          {/* Feature 6: Website design */}
          <FeatureBlock
            icon={<Globe className="w-8 h-8" />}
            title="Website design (Business plan)"
            description="A clean, mobile-friendly site to help people find your salon and book. Built to convert: clear booking button, service pages, and a gallery with your best photos."
            reverse
          >
            <div className="relative bg-background-light p-2 border border-primary/10 rounded-lg shadow-xl overflow-hidden aspect-[4/3] flex items-center justify-center">
              <div className="absolute inset-0 bg-gray-50" />
              <div className="relative w-[85%] bg-white rounded-t-lg shadow-2xl border border-gray-200 overflow-hidden transform translate-y-6 hover:translate-y-4 transition-transform duration-500">
                <div className="bg-gray-100 border-b border-gray-200 p-2 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="size-2.5 rounded-full bg-red-300" />
                    <div className="size-2.5 rounded-full bg-yellow-300" />
                    <div className="size-2.5 rounded-full bg-green-300" />
                  </div>
                  <div className="flex-1 bg-white h-5 rounded mx-4 shadow-sm border border-gray-200" />
                </div>
                <div className="relative">
                  <div className="h-32 bg-primary/5 relative overflow-hidden flex items-center px-6">
                    <div className="w-1/2 z-10">
                      <div className="h-4 w-3/4 bg-primary/20 mb-2 rounded" />
                      <div className="h-2 w-full bg-gray-200 mb-1 rounded" />
                      <div className="h-2 w-2/3 bg-gray-200 rounded" />
                      <div className="mt-4 px-3 py-1 bg-primary text-white text-[8px] font-bold uppercase tracking-wider w-fit rounded">
                        Book Appointment
                      </div>
                    </div>
                    <div className="absolute right-0 top-0 w-1/2 h-full">
                      <Image
                        alt="Salon Interior"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVLLF2LeJpH2vFO1y03hscdT5MeUsuPDkoURCZw2a9cszKVJrmWt86Rajn2FywidsQN3oiF2a8ZOia0VySrZTOq41OO6PpfHzcpgo7ejPoG5eT_26TTmL4Gn4SGGLCuITlAW3NJZoij6gpk4uC-lxKGaJ7IA7mdue-xI-mCtWDkQPkVrSUY0yCpiZz6Mrs5au2hOOZPGQjdXgy97q35_QSzSSOcW7z2w27RMD-4Dohtip41tpABntWK0loCEdsOP67174sD89WSPnX"
                        width={300}
                        height={200}
                        unoptimized
                      />
                    </div>
                  </div>
                  <div className="p-4 grid grid-cols-3 gap-2 bg-white">
                    <div className="aspect-square bg-gray-50 rounded border border-gray-100 p-2 flex flex-col items-center justify-center gap-1">
                      <span className="text-gray-300 text-lg">🧖</span>
                      <div className="h-1 w-8 bg-gray-200 rounded" />
                    </div>
                    <div className="aspect-square bg-gray-50 rounded border border-gray-100 p-2 flex flex-col items-center justify-center gap-1">
                      <span className="text-gray-300 text-lg">🖌️</span>
                      <div className="h-1 w-8 bg-gray-200 rounded" />
                    </div>
                    <div className="aspect-square bg-gray-50 rounded border border-gray-100 p-2 flex flex-col items-center justify-center gap-1">
                      <span className="text-gray-300 text-lg">🎨</span>
                      <div className="h-1 w-8 bg-gray-200 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FeatureBlock>
        </div>
      </div>
    </section>
  );
}
