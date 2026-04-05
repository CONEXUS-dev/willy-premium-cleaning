"use client";

import { motion } from "framer-motion";
import { Heart, Shield, Users, DollarSign, MapPin, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function WhyChooseWillySection() {
  const { t } = useLanguage();

  const trustBadges = [
    t("reliable"),
    t("trustedExperienced"),
    t("locallyOwnedBadge"),
    t("professionalStaff"),
    t("customizedPlans"),
    t("warranty24Hour"),
    t("noContracts"),
    t("cleaningSanitizing"),
    t("neighborlyPromise"),
  ];

  const reasons = [
    {
      icon: Heart,
      title: t("friendlyReliableTitle"),
      description: t("friendlyReliableDesc"),
      color:
        "bg-gradient-to-br from-pink-100 to-pink-200 hover:from-pink-200 hover:to-pink-300",
      iconBg: "bg-gradient-to-br from-pink-500 to-pink-600",
    },
    {
      icon: Shield,
      title: t("professionalQuality"),
      description: t("professionalQualityDesc"),
      color:
        "bg-gradient-to-br from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300",
      iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      title: t("personalService"),
      description: t("personalServiceDesc"),
      color:
        "bg-gradient-to-br from-purple-100 to-purple-200 hover:from-purple-200 hover:to-purple-300",
      iconBg: "bg-gradient-to-br from-purple-500 to-purple-600",
    },
    {
      icon: DollarSign,
      title: t("fairHonestPricing"),
      description: t("fairHonestPricingDesc"),
      color:
        "bg-gradient-to-br from-green-100 to-green-200 hover:from-green-200 hover:to-green-300",
      iconBg: "bg-gradient-to-br from-green-500 to-green-600",
    },
    {
      icon: MapPin,
      title: t("localTrusted"),
      description: t("localTrustedDesc"),
      color:
        "bg-gradient-to-br from-yellow-100 to-yellow-200 hover:from-yellow-200 hover:to-yellow-300",
      iconBg: "bg-gradient-to-br from-yellow-500 to-yellow-600",
    },
    {
      icon: Award,
      title: t("experiencedProfessional"),
      description: t("experiencedProfessionalDesc"),
      color:
        "bg-gradient-to-br from-indigo-100 to-indigo-200 hover:from-indigo-200 hover:to-indigo-300",
      iconBg: "bg-gradient-to-br from-indigo-500 to-indigo-600",
    },
  ];

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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("whyChooseWilly")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("whyChooseIntro")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-gray-50 rounded-2xl p-6 h-full transition-all">
                <motion.div
                  className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${reason.iconBg}`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <reason.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            {t("trustBadgesTitle")}
          </h3>
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8">
            <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm border border-blue-200"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {badge}
                </motion.div>
              ))}
            </div>
            <p className="text-lg text-gray-700 text-center">
              {t("chooseWillyNote")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
