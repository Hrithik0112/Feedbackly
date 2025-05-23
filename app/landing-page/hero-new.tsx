"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, ChevronDown, X } from "lucide-react";

import { fadeInUp, staggerContainer } from "@/lib/animation";
import AnimatedButton from "@/components/animated-btn";
import { SignedIn, SignedOut, SignUpButton } from "@clerk/nextjs";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-gray-950 pointer-events-none"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center mb-12 md:mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-block px-3 py-1 mb-4 text-sm font-medium text-purple-300 bg-purple-900/30 rounded-full border border-purple-800/50 shadow-sm shadow-white/50 "
          >
            Collect feedback that matters
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200 font-mono"
          >
            Transform your website with actionable feedback
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Add our sleek widget to your site and start collecting valuable insights from your
            users. Simple to integrate, powerful to analyze.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <SignedOut>
              <SignUpButton>
                <AnimatedButton size="lg" variant="primary">
                  Start for free
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      duration: 1,
                      repeatDelay: 1,
                    }}
                  >
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.div>
                </AnimatedButton>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <Link href="/dashboard">
                <AnimatedButton
                  size="lg"
                  variant="primary"
                  className="border-gray-700 text-gray-200 hover:bg-gray-800"
                >
                  Go to dashboard
                </AnimatedButton>
              </Link>
            </SignedIn>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mx-auto max-w-4xl"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl p-1">
            <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 right-0 h-12 bg-gray-800 flex items-center px-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="pt-12 p-4">
                <div className="  rounded-lg overflow-hidden">
                  <Image
                    src="/banner-hero.png"
                    alt="Feedback widget demo"
                    width={900}
                    height={400}
                    className="object-center"
                  />

                  {/* Widget Demo Overlay */}
                  {/* <div className="absolute bottom-6 right-6 w-72 bg-gray-900 rounded-lg shadow-xl border border-gray-800 overflow-hidden">
                        <div className="bg-purple-600 p-3 text-white font-medium flex justify-between items-center">
                          <span>Share your feedback</span>
                          <X size={16} className="cursor-pointer hover:opacity-80" />
                        </div>
                        <div className="p-4 space-y-3">
                          <p className="text-sm text-gray-300">How would you rate your experience?</p>
                          <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((rating) => (
                              <motion.button
                                key={rating}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                  rating <= 3 ? "bg-purple-600 text-white" : "bg-gray-800 text-gray-400"
                                }`}
                              >
                                {rating}
                              </motion.button>
                            ))}
                          </div>
                          <textarea
                            className="w-full p-2 text-sm bg-gray-800 border border-gray-700 rounded-md"
                            placeholder="Tell us more about your experience..."
                            rows={3}
                          ></textarea>
                          <AnimatedButton size="sm" variant="primary" className="w-full">
                            Submit Feedback
                          </AnimatedButton>
                        </div>
                      </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Glow effect */}
          <div className="absolute -inset-40 bg-purple-600/10 rounded-full blur-3xl -z-10"></div>
        </motion.div>

        <div className="flex justify-center mt-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16"
          >
            {["Acme Inc", "Globex", "Soylent", "Initech", "Umbrella"].map((company, index) => (
              <div key={index} className="text-gray-500 font-medium">
                {company}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{
          y: [0, -10, 0],
          transition: {
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          },
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
