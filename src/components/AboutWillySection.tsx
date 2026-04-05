"use client";

import { motion } from "framer-motion";
import { Heart, Star, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function AboutWillySection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t("aboutWilly")}
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                {t("aboutText1")}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {t("aboutText2")}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                {t("aboutText3")}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="font-semibold text-blue-600"
              >
                {t("aboutText4")}
              </motion.p>
            </div>
          </motion.div>

          {/* Right Image/Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Placeholder for Willy's Photo */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8 text-center"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-32 h-32 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Heart className="w-16 h-16 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t("willyMaldonado")}
              </h3>
              <p className="text-gray-600">{t("founder")}</p>
              <p className="text-sm text-blue-600 mt-2">{t("servingSince")}</p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <motion.div
                className="bg-white rounded-xl p-4 text-center shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                </motion.div>
                <div className="text-2xl font-bold text-gray-900">
                  {t("rating")}
                </div>
                <div className="text-sm text-gray-600">{t("ratingDesc")}</div>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl p-4 text-center shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
                </motion.div>
                <div className="text-2xl font-bold text-gray-900">
                  {t("dedicated")}
                </div>
                <div className="text-sm text-gray-600">
                  {t("dedicatedDesc")}
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl p-4 text-center shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                </motion.div>
                <div className="text-2xl font-bold text-gray-900">
                  {t("established")}
                </div>
                <div className="text-sm text-gray-600">
                  {t("establishedDesc")}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
