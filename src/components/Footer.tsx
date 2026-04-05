"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold">{t("footerBrand")}</span>
            </div>
            <p className="text-gray-300 mb-4">{t("footerServiceArea")}</p>
            <p className="text-blue-400 font-medium">{t("footerTagline")}</p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-lg font-semibold mb-4">{t("quickLinks")}</h3>
            <div className="space-y-2">
              <motion.a
                href="#services"
                className="block text-gray-300 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                {t("servicesLink")}
              </motion.a>
              <motion.a
                href="#about"
                className="block text-gray-300 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                {t("aboutLink")}
              </motion.a>
              <motion.a
                href="#contact"
                className="block text-gray-300 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                {t("contactLink")}
              </motion.a>
              <motion.a
                href="#process"
                className="block text-gray-300 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                {t("processLink")}
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="flex flex-wrap justify-center items-center gap-8 mb-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-blue-400" />
                <a
                  href="tel:407-840-1428"
                  className="font-semibold text-gray-900 hover:text-blue-400 transition-colors"
                >
                  {t("phone")}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="font-semibold text-gray-900">
                  {t("email")}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="font-semibold text-gray-900">
                  {t("serviceArea")}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm">{t("footerCopyright")}</p>
          <p className="text-gray-500 text-xs mt-2">{t("footerBadges")}</p>
        </motion.div>
      </div>
    </footer>
  );
}
