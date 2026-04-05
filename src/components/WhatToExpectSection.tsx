"use client";

import { motion } from "framer-motion";
import { Phone, Home, Sparkles, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function WhatToExpectSection() {
  const { t } = useLanguage();

  const steps = [
    {
      number: 1,
      icon: Phone,
      title: t("reachOut"),
      description: t("reachOutDesc"),
      color: "bg-gradient-to-br from-blue-100 to-blue-200",
      iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      number: 2,
      icon: Home,
      title: t("walkthroughQuote"),
      description: t("walkthroughQuoteDesc"),
      color: "bg-gradient-to-br from-purple-100 to-purple-200",
      iconBg: "bg-gradient-to-br from-purple-500 to-purple-600",
    },
    {
      number: 3,
      icon: Sparkles,
      title: t("cleaningDay"),
      description: t("cleaningDayDesc"),
      color: "bg-gradient-to-br from-green-100 to-green-200",
      iconBg: "bg-gradient-to-br from-green-500 to-green-600",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("whatToExpect")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("whatToExpectIntro")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="relative"
            >
              {/* Step Number */}
              <motion.div
                className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {step.number}
              </motion.div>

              {/* Step Card */}
              <div
                className={`bg-white rounded-2xl shadow-lg p-8 pt-8 h-full hover:shadow-xl transition-shadow ${step.color}`}
              >
                <motion.div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto ${step.iconBg}`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {t("clearCommunication")}
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 mb-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-gray-700">
                {t("directContact")}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Home className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-gray-700">
                {t("personalQuotes")}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-gray-700">
                {t("qualityResults")}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-gray-700">
                {t("happyCustomers")}
              </span>
            </div>
          </div>
          <p className="text-lg text-gray-700">
            {t("processNote")}
            <span className="block font-semibold text-blue-600 mt-2">
              {t("processNoteHighlight")}
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
