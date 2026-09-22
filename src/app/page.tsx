"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, Clock, Heart } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-[700px] flex flex-col items-center justify-center pt-20 pb-10">
        
        {/* Faint Background Blurs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-50 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-60"></div>
          {/* Faint Dashed Circle (simulate the connection lines) */}
          <div className="absolute w-[800px] h-[800px] rounded-full border border-dashed border-gray-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"></div>
        </div>

        {/* Center Content */}
        <div className="text-center z-10 max-w-2xl px-4 mt-8">
          <p className="text-sm font-bold text-gray-800 mb-4 tracking-wide">#1 crowdfunding platform</p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl sm:text-7xl lg:text-[5.5rem] font-black tracking-tight text-gray-900 mb-8 leading-[1.05]"
          >
            Successful<br />fundraisers<br />start here
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link 
              href="/dashboard"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white bg-[#22573e] rounded-full hover:bg-[#1a422f] transition-all"
            >
              Start a Fenna
            </Link>
          </motion.div>
        </div>

        {/* Floating Cause Circles */}
        <div className="absolute inset-0 pointer-events-none -z-10 hidden md:block">
          {/* Top Left */}
          <CauseCircle title="Your cause" image="https://images.unsplash.com/photo-1593113514041-35b7194f42f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" delay={0} size="w-40 h-40" position="top-[10%] left-[15%]" progress={75} />
          {/* Far Left */}
          <CauseCircle title="Medical" image="https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" delay={0.1} size="w-32 h-32" position="top-[45%] left-[5%]" progress={100} />
          {/* Bottom Left */}
          <CauseCircle title="Emergency" image="https://images.unsplash.com/photo-1534488972407-5a4aa1e47d83?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" delay={0.2} size="w-36 h-36" position="bottom-[15%] left-[20%]" progress={40} />
          
          {/* Top Right */}
          <CauseCircle title="Education" image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" delay={0.3} size="w-36 h-36" position="top-[15%] right-[15%]" progress={60} />
          {/* Far Right */}
          <CauseCircle title="Animal" image="https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" delay={0.4} size="w-32 h-32" position="top-[40%] right-[5%]" progress={85} />
          {/* Bottom Right */}
          <CauseCircle title="Business" image="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" delay={0.5} size="w-40 h-40" position="bottom-[20%] right-[22%]" progress={90} />
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
            More than UGX 500 million is raised every week on Fenna.*
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            Get started in just a few minutes — with helpful new tools, it's easier than ever to pick the perfect title, write a compelling story, and share it with the world.
          </p>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-[#fcf3d9] py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-sm font-bold text-gray-800">
            <StatItem icon={<Zap className="w-5 h-5 text-gray-700" />} text="No fee to start fundraising" />
            <div className="hidden md:block w-12 border-t border-dotted border-gray-400"></div>
            <StatItem icon={<Clock className="w-5 h-5 text-gray-700" />} text="1 donation made every second" />
            <div className="hidden md:block w-12 border-t border-dotted border-gray-400"></div>
            <StatItem icon={<Heart className="w-5 h-5 text-gray-700" />} text="8K+ fundraisers started daily" />
          </div>
        </div>
      </section>
    </main>
  );
}

function CauseCircle({ title, image, delay, size, position, progress }: { title: string, image: string, delay: number, size: string, position: string, progress: number }) {
  // SVG circle circumference for stroke-dasharray
  const radius = 48;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay, type: "spring" }}
      className={`absolute ${position} flex flex-col items-center`}
    >
      <div className={`relative ${size} flex items-center justify-center`}>
        {/* Progress Ring SVG */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r={radius} className="stroke-gray-100" strokeWidth="4" fill="none" />
          <circle 
            cx="50" cy="50" r={radius} 
            className="stroke-[#02a95c]" 
            strokeWidth="4" 
            fill="none" 
            strokeLinecap="round"
            style={{ strokeDasharray: circumference, strokeDashoffset }} 
          />
        </svg>
        
        {/* Image */}
        <div className="w-[90%] h-[90%] rounded-full overflow-hidden border-4 border-white shadow-md pointer-events-auto cursor-pointer group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        </div>
      </div>
      
      {/* Label Box slightly overlapping the circle bottom */}
      <div className="bg-gray-100 text-gray-700 text-xs font-bold px-3 py-1 rounded shadow-sm -mt-4 z-10 pointer-events-auto cursor-pointer hover:bg-gray-200 transition-colors">
        {title}
      </div>
    </motion.div>
  );
}

function StatItem({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <div className="flex items-center space-x-3">
      {icon}
      <span>{text}</span>
    </div>
  );
}
