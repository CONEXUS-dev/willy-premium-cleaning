"use client";

import { motion } from "framer-motion";
import { Sparkles, Phone, Home, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
      {/* Background Sparkles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + (i % 3) * 30}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Headline */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {t("heroTitle")}
            <span className="block text-blue-600">{t("heroSubtitle")}</span>
          </motion.h1>

          {/* Additional Tagline */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-500 mb-6 sm:mb-8 max-w-2xl mx-auto px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {t("heroTagline")}
          </motion.p>

          {/* Service Area */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-500 mb-6 sm:mb-8 px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {t("serviceAreas")}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.button
              className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold flex items-center space-x-2 mx-auto hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Phone className="w-5 h-5" />
              <span>{t("requestQuote")}</span>
            </motion.button>
          </motion.div>

          {/* Cleaning Supply Images */}
          <motion.div
            className="mt-8 sm:mt-12 mb-8 sm:mb-12 flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {/* Left Image - Cleaning Spray & Cloth */}
            <motion.div
              className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 rounded-2xl overflow-hidden shadow-xl border-2 border-blue-200 cursor-pointer"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center">
                <div className="text-center p-4 sm:p-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-blue-500 rounded-lg sm:rounded-xl mx-auto mb-2 sm:mb-3 flex items-center justify-center shadow-lg">
                    <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <p className="text-xs sm:text-sm text-blue-800 font-bold">
                    Premium Cleaners
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Center Image - Bucket & Mop */}
            <motion.div
              className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 rounded-2xl overflow-hidden shadow-xl border-2 border-green-200 cursor-pointer"
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-300 flex items-center justify-center">
                <div className="text-center p-4 sm:p-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-green-500 rounded-lg sm:rounded-xl mx-auto mb-2 sm:mb-3 flex items-center justify-center shadow-lg">
                    <Home className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <p className="text-xs sm:text-sm text-green-800 font-bold">
                    Deep Clean Tools
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Image - Vacuum Cleaner */}
            <motion.div
              className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 rounded-2xl overflow-hidden shadow-xl border-2 border-purple-200 cursor-pointer"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-300 flex items-center justify-center">
                <div className="text-center p-4 sm:p-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-purple-500 rounded-lg sm:rounded-xl mx-auto mb-2 sm:mb-3 flex items-center justify-center shadow-lg">
                    <Shield className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <p className="text-xs sm:text-sm text-purple-800 font-bold">
                    Professional Equipment
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            className="mt-6 sm:mt-8 flex items-center justify-center space-x-2 text-xs sm:text-sm text-gray-500 px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Sparkles className="w-4 h-4 text-yellow-500" />
            <span>{t("trustBadge")}</span>
            <Sparkles className="w-4 h-4 text-yellow-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
