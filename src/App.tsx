/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Award, Users, Building2, ChevronRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#fdfcf8]/80 backdrop-blur-md z-50 border-b border-[#e5e1d8]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#8b4513] rounded-lg flex items-center justify-center text-white font-serif text-xl font-bold">
              SP
            </div>
            <span className="font-serif text-xl font-semibold tracking-tight">Shree Paliwal Bricks</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
            <a href="#home" className="hover:text-[#8b4513] transition-colors">Home</a>
            <a href="#history" className="hover:text-[#8b4513] transition-colors">Our Story</a>
            <a href="#leadership" className="hover:text-[#8b4513] transition-colors">Leadership</a>
            <a href="#about" className="hover:text-[#8b4513] transition-colors">About</a>
            <a href="#contact" className="hover:text-[#8b4513] transition-colors">Contact</a>
          </div>
          <button className="bg-[#8b4513] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#6f370f] transition-colors">
            Get Quote
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 bg-[#f0ede4] rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              Established 1990
            </span>
            <h1 className="text-6xl md:text-8xl font-light leading-[0.9] mb-8">
              Building the <span className="italic">Foundation</span> of Your Dreams.
            </h1>
            <p className="text-lg text-[#5a5650] max-w-md mb-10 leading-relaxed">
              Premium quality bricks manufactured with tradition, precision, and a commitment to durability that lasts generations.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#about" className="bg-[#2d2a26] text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-black transition-all">
                Learn More <ChevronRight size={18} />
              </a>
              <a href="#history" className="border border-[#2d2a26] px-8 py-4 rounded-full font-medium hover:bg-[#2d2a26] hover:text-white transition-all">
                Our History
              </a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-[#8b4513]/10"
          >
            <img 
              src="https://lh3.googleusercontent.com/d/1WEUG5OWW7HMd-dfB7BcUmbcVIPFIu4jS" 
              alt="Shree Paliwal Bricks Manufacturing Site" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2d2a26]/40 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white">
              <p className="text-sm font-medium uppercase tracking-widest mb-1 opacity-80">Our Factory</p>
              <p className="text-xl font-serif italic">The heart of our manufacturing operations since 1990.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="py-24 bg-[#f5f2ed]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src="https://picsum.photos/seed/bricks1/600/800" alt="Tradition" className="rounded-3xl w-full aspect-[3/4] object-cover" referrerPolicy="no-referrer" />
                  <div className="bg-[#8b4513] p-8 rounded-3xl text-white">
                    <h3 className="text-4xl font-serif mb-2">34+</h3>
                    <p className="text-sm uppercase tracking-widest opacity-80">Years of Legacy</p>
                  </div>
                </div>
                <div className="pt-12 space-y-4">
                  <div className="bg-white p-8 rounded-3xl border border-[#e5e1d8]">
                    <Award className="text-[#8b4513] mb-4" size={32} />
                    <h4 className="font-serif text-xl mb-1">Quality First</h4>
                    <p className="text-xs text-[#5a5650]">Certified manufacturing standards.</p>
                  </div>
                  <img src="https://picsum.photos/seed/bricks2/600/800" alt="Manufacturing" className="rounded-3xl w-full aspect-[3/4] object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <span className="text-[#8b4513] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Our Story</span>
              <h2 className="text-5xl font-light mb-8 leading-tight">A Legacy Built by <span className="italic">Hand</span> and Heart.</h2>
              <div className="space-y-6 text-[#5a5650] leading-relaxed">
                <p>
                  Founded in <span className="font-semibold text-[#2d2a26]">1990</span> by <span className="font-semibold text-[#2d2a26]">Mr. Motilal Paliwal</span>, Shree Paliwal Bricks Manufacturing began with a simple vision: to provide the strongest building blocks for a growing nation.
                </p>
                <p>
                  What started as a small local kiln has grown into a regional leader in brick manufacturing. Mr. Motilal's dedication to quality and honest business practices laid a foundation as solid as the bricks we produce.
                </p>
                <p>
                  Today, the legacy continues under the expert guidance of his son, who has modernized operations while maintaining the traditional values that define our brand. We blend decades of experience with contemporary techniques to ensure every brick meets the highest standards of strength and aesthetics.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-8 pt-10 border-t border-[#e5e1d8]">
                <div>
                  <Users className="text-[#8b4513] mb-3" />
                  <h4 className="font-serif text-lg">Family Owned</h4>
                  <p className="text-sm text-[#5a5650]">Two generations of expertise.</p>
                </div>
                <div>
                  <Building2 className="text-[#8b4513] mb-3" />
                  <h4 className="font-serif text-lg">Modern Kilns</h4>
                  <p className="text-sm text-[#5a5650]">Optimized for durability.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#8b4513] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Our Leadership</span>
            <h2 className="text-5xl font-light">The Faces Behind Our <span className="italic">Success</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Motilal Paliwal */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl shadow-[#8b4513]/10 grayscale hover:grayscale-0 transition-all duration-700 border border-[#e5e1d8]">
                <img 
                  src="https://lh3.googleusercontent.com/d/18cY4Kn_CaGRfxRBpj5GFoY7tbC-cHQan" 
                  alt="Mr. Motilal Paliwal" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-serif mb-2">Mr. Motilal Paliwal</h3>
              <p className="text-[#8b4513] font-bold text-[10px] uppercase tracking-widest mb-4">Founder</p>
              <p className="text-[#5a5650] leading-relaxed italic text-sm">
                "The visionary founder who established Shree Paliwal Bricks in 1990. His relentless hard work and commitment to quality laid the foundation for our legacy."
              </p>
            </motion.div>

            {/* Bhagwan Paliwal */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl shadow-[#8b4513]/10 grayscale hover:grayscale-0 transition-all duration-700 border border-[#e5e1d8]">
                <img 
                  src="https://lh3.googleusercontent.com/d/187RJbZjXgHgV9WEdSpozsrE2muHl_qVK" 
                  alt="Mr. Bhagwan Paliwal" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-serif mb-2">Mr. Bhagwan Paliwal</h3>
              <p className="text-[#8b4513] font-bold text-[10px] uppercase tracking-widest mb-4">Elder Son</p>
              <p className="text-[#5a5650] leading-relaxed text-sm">
                Leading the operations with a focus on modernization and maintaining the high standards set by our founder.
              </p>
            </motion.div>

            {/* Jivan Paliwal */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl shadow-[#8b4513]/10 grayscale hover:grayscale-0 transition-all duration-700 border border-[#e5e1d8]">
                <img 
                  src="https://lh3.googleusercontent.com/d/1TRdmFODoeItcbIcWFnjkO9wbzAzkL8u7" 
                  alt="Mr. Jivan Paliwal" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-serif mb-2">Mr. Jivan Paliwal</h3>
              <p className="text-[#8b4513] font-bold text-[10px] uppercase tracking-widest mb-4">Second Son</p>
              <p className="text-[#5a5650] leading-relaxed text-sm">
                Driving innovation and business growth while upholding the traditional values of Shree Paliwal Bricks.
              </p>
            </motion.div>

            {/* Third Son */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group"
            >
              <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl shadow-[#8b4513]/10 grayscale hover:grayscale-0 transition-all duration-700 border border-[#e5e1d8]">
                <img 
                  src="https://lh3.googleusercontent.com/d/1Z2CyimiEVCuxpxIrO-bzzBGSJHeq0-sa" 
                  alt="Mr. Dhanraj Paliwal" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-serif mb-2">Mr. Dhanraj Paliwal</h3>
              <p className="text-[#8b4513] font-bold text-[10px] uppercase tracking-widest mb-4">Third Son</p>
              <p className="text-[#5a5650] leading-relaxed text-sm">
                Contributing to the family legacy through dedicated management and operational excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section with Video */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#8b4513] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">About Our Process</span>
              <h2 className="text-5xl font-light mb-8 leading-tight">Witness the <span className="italic">Art</span> of Brick Making.</h2>
              <p className="text-lg text-[#5a5650] mb-8 leading-relaxed">
                At Shree Paliwal Bricks, we combine traditional wisdom with modern efficiency. Our manufacturing process is a testament to our commitment to quality, ensuring that every brick that leaves our kiln is built to last for generations.
              </p>
              <div className="space-y-4">
                {[
                  "Traditional hand-molding techniques for superior texture",
                  "High-temperature firing for maximum structural strength",
                  "Rigid quality control at every stage of production",
                  "Sustainable sourcing of raw materials"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#f0ede4] flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-[#8b4513] rounded-full"></div>
                    </div>
                    <span className="text-[#2d2a26] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl border-8 border-[#f5f2ed]">
                <iframe 
                  src="https://drive.google.com/file/d/1oCw89zU83JOIup0laMu6rI9W-fh5BXia/preview" 
                  className="w-full h-full"
                  allow="autoplay"
                  title="Manufacturing Process Video 1"
                ></iframe>
              </div>
              <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl border-8 border-[#f5f2ed]">
                <iframe 
                  src="https://drive.google.com/file/d/1HvGHIsK4aDPvfX-SYN_e95ziVgduqLu2/preview" 
                  className="w-full h-full"
                  allow="autoplay"
                  title="Manufacturing Process Video 2"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#2d2a26] text-white rounded-[3rem] mx-6 mb-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <img src="https://picsum.photos/seed/pattern/800/1200" alt="Pattern" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-7xl mx-auto px-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-5xl font-serif mb-8">Let's Build <br /><span className="italic">Together</span>.</h2>
              <p className="text-white/60 mb-12 max-w-md">Whether you're building a home or a commercial complex, we're here to provide the materials you can trust.</p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg mb-1">Our Location</h4>
                    <p className="text-white/60 text-sm mb-2">Paliwal Bricks Yard, Industrial Area, <br />Rajasthan, India</p>
                    <a 
                      href="https://maps.app.goo.gl/4hXKFy1VWTKZr3dj8" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs uppercase tracking-widest font-bold text-[#8b4513] hover:text-white transition-colors"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg mb-1">Call Us</h4>
                    <a href="tel:+919414689914" className="text-white/60 text-sm hover:text-white transition-colors">+91 94146 89914</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg mb-1">Email Us</h4>
                    <p className="text-white/60 text-sm">info@shreepaliwalbricks.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[2rem] border border-white/10">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold opacity-60">Full Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold opacity-60">Email Address</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold opacity-60">Requirement Type</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-colors appearance-none">
                    <option className="bg-[#2d2a26]">Residential Project</option>
                    <option className="bg-[#2d2a26]">Commercial Project</option>
                    <option className="bg-[#2d2a26]">Bulk Supply</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold opacity-60">Message</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-colors" placeholder="Tell us about your project..."></textarea>
                </div>
                <button className="w-full bg-white text-[#2d2a26] font-bold py-4 rounded-xl hover:bg-opacity-90 transition-all">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#e5e1d8]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#8b4513] rounded flex items-center justify-center text-white font-serif text-sm font-bold">
              SP
            </div>
            <span className="font-serif text-lg font-semibold tracking-tight">Shree Paliwal Bricks</span>
          </div>
          <p className="text-sm text-[#5a5650]">
            © {new Date().getFullYear()} Shree Paliwal Bricks Manufacturing. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium text-[#5a5650]">
            <a href="#" className="hover:text-[#8b4513]">Privacy Policy</a>
            <a href="#" className="hover:text-[#8b4513]">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
