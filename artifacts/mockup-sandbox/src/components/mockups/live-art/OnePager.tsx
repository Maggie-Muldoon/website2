import React, { useState } from "react";
import { Paintbrush, Camera, Mountain, Palette, ArrowRight, Instagram, Mail, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const portfolioItems = [
  { src: "/__mockup/images/portfolio-1.png", alt: "Bride and Groom", title: "The First Dance", sub: "Oil on Canvas, 24×36\"" },
  { src: "/__mockup/images/portfolio-2.png", alt: "Landscape",        title: "Tuscany Sunset",   sub: "Live Landscape, 18×24\"" },
  { src: "/__mockup/images/portfolio-3.png", alt: "Guest Portrait",   title: "Evening Guests",   sub: "Watercolor Portrait" },
];

export function OnePager() {
  const [activeIdx, setActiveIdx] = useState(0);
  const prev = () => setActiveIdx((i) => (i - 1 + portfolioItems.length) % portfolioItems.length);
  const next = () => setActiveIdx((i) => (i + 1) % portfolioItems.length);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#3d3632] selection:bg-[#e6d5c3]">
      {/* Navbar / Header */}
      <header className="sticky top-0 z-50 bg-[#faf8f5]/80 backdrop-blur-md border-b border-[#e6d5c3]/50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-['Playfair_Display'] text-2xl font-bold tracking-tight">
            Clara Woods
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-[#5c544d]">
            <a href="#portfolio" className="hover:text-[#a67c52] transition-colors">Portfolio</a>
            <a href="#services" className="hover:text-[#a67c52] transition-colors">Services</a>
            <a href="#contact" className="hover:text-[#a67c52] transition-colors">Contact</a>
          </nav>
          <Button className="bg-[#a67c52] hover:bg-[#8b6642] text-white rounded-full px-8 hidden md:inline-flex">
            Book Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 pt-16 pb-24 md:pt-32 md:pb-40 overflow-hidden">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0e6d8] text-[#8b6642] text-xs font-semibold uppercase tracking-widest mb-6">
              <Paintbrush className="w-3 h-3" />
              Live Event Artist
            </div>
            <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-[#2b2623]">
              Capturing your most beautiful moments, <span className="text-[#a67c52] italic font-light">live.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#5c544d] mb-10 leading-relaxed">
              I bring weddings, corporate events, and private parties to life through live painting. Watch your memories become timeless art right before your eyes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#a67c52] hover:bg-[#8b6642] text-white rounded-full px-8 text-base">
                Inquire for your date
              </Button>
              <Button size="lg" variant="outline" className="border-[#a67c52] text-[#a67c52] hover:bg-[#f0e6d8] rounded-full px-8 text-base">
                View Portfolio
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-[#e6d5c3] rounded-tl-[100px] rounded-br-[100px] transform translate-x-4 translate-y-4"></div>
            <img 
              src="/__mockup/images/live-art-hero.png" 
              alt="Live artist painting at an event" 
              className="relative z-10 w-full object-cover rounded-tl-[100px] rounded-br-[100px] shadow-xl aspect-[4/5] md:aspect-auto md:h-[600px]"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-white px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#2b2623] mb-4">Fine Art Portfolio</h2>
            <p className="text-[#5c544d] max-w-2xl mx-auto text-lg">A curated selection of live paintings and studio commissions.</p>
          </div>
          
          {/* Responsive portfolio: slider on mobile, grid on md+ */}
          <div className="relative">
            {/* Mobile slider */}
            <div className="md:hidden">
              <div className="group overflow-hidden rounded-2xl relative aspect-[4/5]">
                <img src={portfolioItems[activeIdx].src} alt={portfolioItems[activeIdx].alt} className="w-full h-full object-cover transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="font-['Playfair_Display'] text-xl font-medium">{portfolioItems[activeIdx].title}</h3>
                    <p className="text-sm text-white/80">{portfolioItems[activeIdx].sub}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-6 mt-6">
                <button onClick={prev} className="w-12 h-12 rounded-full border border-[#a67c52] text-[#a67c52] hover:bg-[#a67c52] hover:text-white flex items-center justify-center transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-sm text-[#5c544d]">{activeIdx + 1} / {portfolioItems.length}</span>
                <button onClick={next} className="w-12 h-12 rounded-full border border-[#a67c52] text-[#a67c52] hover:bg-[#a67c52] hover:text-white flex items-center justify-center transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            {/* Desktop grid */}
            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {portfolioItems.map((item) => (
                <div key={item.title} className="group overflow-hidden rounded-2xl relative aspect-[4/5]">
                  <img src={item.src} alt={item.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <h3 className="font-['Playfair_Display'] text-xl font-medium">{item.title}</h3>
                    <p className="text-sm text-white/80">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 relative">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#e6d5c3_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#2b2623] mb-4">Live Art Services</h2>
            <p className="text-[#5c544d] max-w-2xl mx-auto text-lg">Unique entertainment that leaves you with a masterpiece.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm border-[#e6d5c3] shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-full bg-[#f0e6d8] flex items-center justify-center mb-6">
                  <Palette className="w-7 h-7 text-[#a67c52]" />
                </div>
                <h3 className="font-['Playfair_Display'] text-xl font-bold mb-3 text-[#2b2623]">Live Weddings</h3>
                <p className="text-[#5c544d] mb-4">A bespoke oil painting of your ceremony or reception, created live as guests mingle.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-[#e6d5c3] shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-full bg-[#f0e6d8] flex items-center justify-center mb-6">
                  <Camera className="w-7 h-7 text-[#a67c52]" />
                </div>
                <h3 className="font-['Playfair_Display'] text-xl font-bold mb-3 text-[#2b2623]">Guest Portraits</h3>
                <p className="text-[#5c544d] mb-4">Quick, elegant watercolor or sketch portraits for your guests to take home as favors.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-[#e6d5c3] shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-full bg-[#f0e6d8] flex items-center justify-center mb-6">
                  <Mountain className="w-7 h-7 text-[#a67c52]" />
                </div>
                <h3 className="font-['Playfair_Display'] text-xl font-bold mb-3 text-[#2b2623]">Plein Air Landscapes</h3>
                <p className="text-[#5c544d] mb-4">Capturing the beauty of your event venue or destination setting in impressionist style.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-[#e6d5c3] shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden">
              <CardContent className="p-0 flex-1 flex flex-col">
                <div className="h-40 w-full relative">
                  <img src="/__mockup/images/face-painting.png" alt="Face painting" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-['Playfair_Display'] text-xl font-bold mb-3 text-[#2b2623]">Artistic Face Painting</h3>
                  <p className="text-[#5c544d] text-sm">High-end, intricate face and body art for children's parties or themed adult events.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA / Footer */}
      <footer id="contact" className="bg-[#2b2623] text-[#faf8f5] py-24 px-6 rounded-t-[40px] md:rounded-t-[80px] mt-12">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold mb-8">Ready to make your event unforgettable?</h2>
          <p className="text-[#e6d5c3] text-lg mb-12 max-w-2xl mx-auto">
            My calendar fills up quickly for wedding season. Reach out to secure your date and discuss your vision.
          </p>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 mb-16">
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="font-semibold uppercase tracking-widest text-[#a67c52] text-sm mb-6">Contact Info</h3>
                <div className="space-y-4">
                  <a href="mailto:hello@clarawoodsart.com" className="flex items-center gap-3 hover:text-[#a67c52] transition-colors">
                    <Mail className="w-5 h-5 text-[#a67c52]" />
                    hello@clarawoodsart.com
                  </a>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[#a67c52]" />
                    Based in Charleston, SC. Travel worldwide.
                  </div>
                  <a href="#" className="flex items-center gap-3 hover:text-[#a67c52] transition-colors">
                    <Instagram className="w-5 h-5 text-[#a67c52]" />
                    @clarawoods_liveart
                  </a>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <Button size="lg" className="bg-[#a67c52] hover:bg-[#8b6642] text-white rounded-full w-full py-6 text-lg">
                  Book Me for Your Event
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-sm text-white/40 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>© {new Date().getFullYear()} Clara Woods Art. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#a67c52]">Terms</a>
              <a href="#" className="hover:text-[#a67c52]">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
