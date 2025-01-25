"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Oswald } from 'next/font/google';
import Image from "next/image";
import dynamic from 'next/dynamic';
import Link from 'next/link';
import {
  Calendar,
  Medal,
  MapPin,
  Clock,
  Logs,
  Waypoints,
  Award,
  Trophy,
  Shirt,
  ScrollText,
  Coffee,
  Banknote,
  Instagram
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";

import { useRef } from 'react';
import { useScroll } from "@/context/scrollContext";

const oswald = Oswald({ subsets: ['latin'] });

// Dynamically import the Map component with no SSR
const MarathonMap = dynamic(() => import('@/components/MarathonMap'), {
  ssr: false,
  loading: () => (
    <div className="h-[600px] w-full bg-gray-100 rounded-lg animate-pulse flex items-center justify-center">
      <p className="text-gray-500">Loading map...</p>
    </div>
  ),
});

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const slideIn = {
  initial: { x: -60, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const scaleIn = {
  initial: { scale: 0.9 },
  animate: {
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};


export default function MarathonPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const iframeRef = useRef();
  const { sectionRef, scrollToSection } = useScroll();
  const [currentTime, setCurrentTime] = useState(Date.now());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setCurrentTime(Date.now());
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentRoute="/marathon" />

      {/* Hero Section */}
      <motion.section
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="relative min-h-screen bg-gradient-to-br from-amber-700 to-amber-900 pb-16 md:pb-24"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content Container */}
        <div className="container mx-auto relative z-10 min-h-screen flex flex-col">
          {/* Main Content */}
          <div className="flex-1 flex items-center pt-20 md:pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center w-full px-4 md:px-0">
              {/* Left Side - Logo */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex justify-center items-center"
              >
                <div className="relative w-[200px] h-[200px] md:w-[400px] md:h-[400px]">
                  <Image
                    src="/marathon.png"
                    alt="Marathon 2024 Logo"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </motion.div>

              {/* Right Side - Content */}
              <motion.div
                variants={fadeIn}
                className="flex flex-col items-center md:items-start text-center md:text-left text-white"
              >
                {/* Title and Description */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="space-y-4"
                >
                  <h1 className={`${oswald.className} text-3xl md:text-6xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-white to-amber-200`}>
                    Runspire Marathon 2025
                  </h1>
                  <p className="text-lg md:text-2xl text-white-100/90 max-w-xl italic">
                    Join the Run, Feel the Thrill!
                  </p>
                  <p className="text-base md:text-xl text-amber-100/90 max-w-xl">
                    Get ready to lace up your running shoes and be part of the excitement at the Runspire Marathon 2025 – a 10 km marathon. Whether you're an experienced runner or a fitness enthusiast, this event is your chance to challenge yourself, connect with like-minded individuals, and celebrate the spirit of health and wellness.
                    With a scenic route, energetic vibes, and a sense of community, this marathon promises to be an unforgettable experience. Plus, exciting rewards and surprises await every participant!
                  </p>
                  <div className="border-t border-amber-100/20 pt-4 mt-6">
                    <p className="text-base md:text-xl text-amber-100/90 max-w-xl font-semibold">
                      Don't miss out - register now and take the first step toward your fitness journey.
                    </p>
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="flex justify-center items-center w-full mt-8"
                >
                  <Button
                    className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-lg md:text-xl px-8 md:px-12 py-4 md:py-5 rounded-xl shadow-lg hover:shadow-xl transition-all w-full md:w-[80%]"
                    onClick={scrollToSection}
                  >
                    Register Now
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Event Details */}
      <motion.section
        id="event-details"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 md:py-24 bg-white relative overflow-hidden mt-[-2rem] md:mt-0"
      >
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            variants={fadeIn}
            className={`${oswald.className} text-3xl md:text-5xl font-bold text-center text-amber-600 mb-8 md:mb-12`}
          >
            Event Details
          </motion.h2>

          <motion.div
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto mb-8 md:mb-12"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-amber-100">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-amber-100 rounded-xl">
                  <Calendar className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className={`${oswald.className} text-xl font-semibold`}>Date</h3>
                  <p className="text-gray-600">March 02, 2025</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-amber-100">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-amber-100 rounded-xl">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className={`${oswald.className} text-xl font-semibold`}>Time</h3>
                  <p className="text-gray-600">5:00 AM onwards</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-amber-100">
              <a href="https://maps.app.goo.gl/tS2E27n1cNUZALpv7" target="_blank" className="block">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-amber-100 rounded-xl">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className={`${oswald.className} text-xl font-semibold`}>Location</h3>
                    <p className="text-gray-600">D. Y. Patil Dnyanshanti School</p>
                  </div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-amber-100">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-amber-100 rounded-xl">
                  <Logs className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className={`${oswald.className} text-xl font-semibold`}>Categories</h3>
                  <p className="text-gray-600">18+</p>
                  <p className="text-gray-600">Open to all</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-amber-100">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-amber-100 rounded-xl">
                  <Waypoints className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className={`${oswald.className} text-xl font-semibold`}>Tracks</h3>
                  <p className="text-gray-600">3KM, 5KM and 10KM</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-amber-100">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-amber-100 rounded-xl">
                  <Medal className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className={`${oswald.className} text-xl font-semibold`}>Prize Pool</h3>
                  <p className="text-gray-600">₹45,000+</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Perks and Prizes */}
      <motion.section
        id="prizes"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-white relative"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={fadeIn}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className={`${oswald.className} text-3xl md:text-5xl font-bold text-amber-600 mb-4`}>
              Perks and Prizes
            </h2>
            <p className="text-gray-600">
              Every participant of the marathon will receive exciting perks to make their marathon experience memorable
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {/* T-Shirt and Bib Card */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-amber-100 flex flex-col"
            >
              <div className="bg-amber-50 rounded-xl p-4 mb-4 inline-flex items-center justify-center w-12 h-12">
                <Shirt className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className={`${oswald.className} text-xl font-semibold mb-3`}>T-Shirt and Bib</h3>
              <p className="text-gray-600 flex-grow">
                All registered runners will receive a specially designed event T-shirt along with their bib number.
              </p>
            </motion.div>

            {/* Medals Card */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-amber-100 flex flex-col"
            >
              <div className="bg-amber-50 rounded-xl p-4 mb-4 inline-flex items-center justify-center w-12 h-12">
                <Trophy className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className={`${oswald.className} text-xl font-semibold mb-3`}>Medals</h3>
              <p className="text-gray-600 flex-grow">
                Finisher medals for all participants who complete the run and Special winner medals for the top 5 finishers.
              </p>
            </motion.div>

            {/* Certificate Card */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-amber-100 flex flex-col"
            >
              <div className="bg-amber-50 rounded-xl p-4 mb-4 inline-flex items-center justify-center w-12 h-12">
                <ScrollText className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className={`${oswald.className} text-xl font-semibold mb-3`}>Certificate</h3>
              <p className="text-gray-600 flex-grow">
                A certificate of participation will be provided to all runners, with winner certificates for the top 5 in competitive categories.
              </p>
            </motion.div>

            {/* Breakfast Card */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-amber-100 flex flex-col"
            >
              <div className="bg-amber-50 rounded-xl p-4 mb-4 inline-flex items-center justify-center w-12 h-12">
                <Coffee className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className={`${oswald.className} text-xl font-semibold mb-3`}>Breakfast</h3>
              <p className="text-gray-600 flex-grow">
                Post-run breakfast to recharge and celebrate your accomplishment.
              </p>
            </motion.div>

            {/* Prize Money Card */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-amber-100 flex flex-col md:col-span-2 lg:col-span-1"
            >
              <div className="bg-amber-50 rounded-xl p-4 mb-4 inline-flex items-center justify-center w-12 h-12">
                <Banknote className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className={`${oswald.className} text-xl font-semibold mb-3`}>Prize Money *</h3>
              <p className="text-gray-600 flex-grow">
                Cash prizes for the top 5 winners.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Route Maps */}
      <motion.section
        id="routes"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-gradient-to-b from-white via-amber-50/30 to-white relative"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            variants={fadeIn}
            className={`${oswald.className} text-3xl md:text-5xl font-bold text-center text-amber-600 mb-12`}
          >
            Route Maps
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-3"
          >
            {[
              { title: "3K Route", file: "../3KM.gpx", zoom: { mobile: 14, desktop: 13 } },
              { title: "5K Route", file: "../5KM.gpx", zoom: { mobile: 14, desktop: 13 } },
              { title: "10K Route", file: "../10KM.gpx", zoom: { mobile: 14, desktop: 13 } }
            ].map((route, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-2xl p-3 shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className={`${oswald.className} text-xl md:text-2xl font-semibold text-center text-amber-600 flex items-center justify-center gap-2 mb-4`}>
                  <MapPin className="w-5 md:w-6 h-5 md:h-6" />
                  {route.title}
                </h3>
                <div className="h-[250px] md:h-[400px] w-full rounded-xl overflow-hidden border-2 border-amber-100">
                  <MarathonMap gpxFile={route.file} zoom={route.zoom} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <div ref={sectionRef} className="w-full px-5 sm:px-24 md:px-0">
        <iframe src="https://konfhub.com/widget/runspire-marathon-5c4820cc?desc=false&secondaryBg=F7F7F7&ticketBg=F7F7F7&borderCl=F7F7F7&bg=FFFFFF&fontColor=572148&ticketCl=572148&btnColor=fb5850&fontFamily=Prompt&borderRadius=10" id="konfhub-widget" title="Register for Runspire Marathon" width="100%" height="500"></iframe>
      </div>

      {/* Partners Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-gradient-to-b from-white via-amber-50/30 to-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={fadeIn}
            className="flex flex-col items-center justify-center gap-12 md:gap-20"
          >
            <motion.h2
              variants={scaleIn}
              className={`${oswald.className} text-3xl md:text-5xl font-bold text-amber-600 bg-white/50 backdrop-blur-sm px-8 md:px-12 py-4 md:py-6 rounded-2xl shadow-sm text-center`}
            >
              Event Partners
            </motion.h2>
            <div className="grid grid-cols-1 md:flex md:flex-wrap items-center justify-center gap-12 md:gap-16">
              <div className="group w-[90vw] max-w-[500px] md:w-[300px] px-2 md:px-0">
                <motion.div
                  variants={scaleIn}
                  whileHover={{
                    scale: 1.03,
                    transition: {
                      duration: 0.4,
                      ease: "easeOut"
                    }
                  }}
                  className="relative aspect-square bg-white/70 backdrop-blur-sm rounded-2xl p-1 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300"
                >
                  <Image
                    src="/logo_rotract.JPG"
                    alt="Rotaract DYPCOE Logo"
                    fill
                    className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </motion.div>
                <p className={`${oswald.className} text-lg md:text-xl font-semibold text-center mt-4 text-amber-600`}>
                  Rotaract DYPCOE
                </p>
              </div>
              <div className="group w-[90vw] max-w-[500px] md:w-[300px] px-2 md:px-0">
                <motion.div
                  variants={scaleIn}
                  whileHover={{
                    scale: 1.03,
                    transition: {
                      duration: 0.4,
                      ease: "easeOut"
                    }
                  }}
                  className="relative aspect-square bg-white/70 backdrop-blur-sm rounded-2xl p-1 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300"
                >
                  <Image
                    src="/pradhikaran.png"
                    alt="Rotaract Pradhikaran Logo"
                    fill
                    className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </motion.div>
                <p className={`${oswald.className} text-lg md:text-xl font-semibold text-center mt-4 text-amber-600`}>
                  Rotaract Pradhikaran
                </p>
              </div>
              <div className="group w-[90vw] max-w-[500px] md:w-[300px] px-2 md:px-0">
                <motion.div
                  variants={scaleIn}
                  whileHover={{
                    scale: 1.03,
                    transition: {
                      duration: 0.4,
                      ease: "easeOut"
                    }
                  }}
                  className="relative aspect-square bg-white/70 backdrop-blur-sm rounded-2xl p-1 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300"
                >
                  <Image
                    src="/satej.png"
                    alt="SATEJ Logo"
                    fill
                    className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </motion.div>
                <p className={`${oswald.className} text-lg md:text-xl font-semibold text-center mt-4 text-amber-600`}>
                  SATEJ
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Sponsors Section - Commented out for now */}
      {/* <motion.section
        id="sponsors"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={fadeIn}
            className="flex flex-col items-center justify-center gap-12 md:gap-20"
          >
            <motion.h2
              variants={scaleIn}
              className={`${oswald.className} text-3xl md:text-5xl font-bold text-amber-600 bg-white/50 backdrop-blur-sm px-8 md:px-12 py-4 md:py-6 rounded-2xl shadow-sm text-center`}
            >
              Our Sponsors
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Add sponsor cards here when needed 
            </div>
          </motion.div>
        </div>
      </motion.section> */}

      {/* Footer */}
      <motion.footer
        id="contact"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="bg-gradient-to-b from-amber-50 to-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>

        <div className="container mx-auto px-4 py-12 md:py-16 relative">
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* President */}
            <motion.div variants={fadeIn} className="text-center">
              <h3 className={`${oswald.className} text-xl font-semibold mb-2`}>Director Physical Education and Sports</h3>
              <p className="text-gray-600 mb-1">Mr. Abaji Mane</p>
              <p className="text-amber-600 font-medium">+91 9767063728</p>
            </motion.div>

            {/* Director */}
            <motion.div variants={fadeIn} className="text-center">
              <h3 className={`${oswald.className} text-xl font-semibold mb-2`}>Event Organizer</h3>
              <p className="text-gray-600 mb-1">Rtr. Soham Vadje</p>
              <p className="text-amber-600 font-medium">+91 8484890750</p>
            </motion.div>

            {/* Co-Director */}
            <motion.div variants={fadeIn} className="text-center">
              <h3 className={`${oswald.className} text-xl font-semibold mb-2`}>Event Organizer</h3>
              <p className="text-gray-600 mb-1">Rtr. Vaibhav Patil</p>
              <p className="text-amber-600 font-medium">+91 9373477561</p>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div variants={fadeIn} className="flex justify-center gap-6 mb-8">
            <Link
              href="https://instagram.com/rotaract_dypcoe"
              target="_blank"
              className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <Instagram className="w-6 h-6 text-pink-600" />
            </Link>
          </motion.div>

          {/* Copyright */}
          <div className="flex flex-col items-center gap-2 text-center">
              <p className="flex items-center justify-center gap-2 text-gray-600">
                © 2024 Rotaract Club of DYPCOE. All rights reserved.
              </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
} 
