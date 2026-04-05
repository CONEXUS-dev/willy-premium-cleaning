"use client";

import { motion } from "framer-motion";
import { Heart, Shield, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function IntroductionSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t("whenWillyArrives")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("introText")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all"
          >
            <motion.div
              className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Heart className="w-6 h-6 text-white" />
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t("friendlyReliableTitle")}
            </h3>
            <p className="text-gray-600">{t("friendlyReliableDesc")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 transition-all"
          >
            <motion.div
              className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Shield className="w-6 h-6 text-white" />
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t("professionalQuality")}
            </h3>
            <p className="text-gray-600">{t("professionalQualityDesc")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 transition-all"
          >
            <motion.div
              className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Clock className="w-6 h-6 text-white" />
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t("personalService")}
            </h3>
            <p className="text-gray-600">{t("personalServiceDesc")}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-lg font-medium text-blue-600">
            {t("friendlyReliable")}
          </p>
          <p className="text-lg font-medium text-gray-900">
            {t("thatIsWilly")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
