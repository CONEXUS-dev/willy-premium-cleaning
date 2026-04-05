"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Navigation() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-lg">✨</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              Willy Premium Cleaning
            </span>
          </motion.div>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <motion.div
              className="flex items-center space-x-2 text-gray-600"
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <a
                href="tel:407-840-1428"
                className="hover:text-blue-600 transition-colors"
              >
                {t("phone")}
              </a>
            </motion.div>
            <motion.div
              className="flex items-center space-x-2 text-gray-600"
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="w-4 h-4 text-blue-600" />
              <span>{t("email")}</span>
            </motion.div>
            <motion.div
              className="flex items-center space-x-2 text-gray-600"
              whileHover={{ scale: 1.05 }}
            >
              <MapPin className="w-4 h-4 text-blue-600" />
              <span>{t("serviceArea")}</span>
            </motion.div>
          </div>

          {/* Language Toggle + Mobile Contact */}
          <div className="flex items-center space-x-3">
            {/* Language Toggle */}
            <motion.button
              onClick={() => setLanguage(language === "en" ? "es" : "en")}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">
                {language === "en" ? "Español" : "English"}
              </span>
            </motion.button>

            {/* Mobile Contact Button */}
            <motion.button
              className="md:hidden bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("contact")}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
