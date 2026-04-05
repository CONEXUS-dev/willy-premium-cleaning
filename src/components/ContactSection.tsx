"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name || !formData.phone || !formData.service) {
      alert(
        "Please fill in all required fields: Name, Phone, and Service Type.",
      );
      return;
    }

    // Show loading state
    const submitButton = e.currentTarget.querySelector(
      'button[type="submit"]',
    ) as HTMLButtonElement;
    if (submitButton) {
      submitButton.textContent = "Sending...";
      submitButton.disabled = true;
    }

    try {
      // First test with simple API
      console.log("Testing with test-email API...");
      const testResponse = await fetch("/api/test-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Test response status:", testResponse.status);
      const testResult = await testResponse.json();
      console.log("Test response:", testResult);

      if (!testResponse.ok) {
        throw new Error(`Test API failed: ${testResult.error}`);
      }

      // Now try the real email API
      console.log("Testing with real email API...");
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Email response status:", response.status);

      if (!response.ok) {
        const errorData = await response.json();
        console.log("Email error response:", errorData);
        throw new Error(
          errorData.error || `HTTP error! status: ${response.status}`,
        );
      }

      const result = await response.json();
      console.log("Email success response:", result);

      if (result.success) {
        // Success!
        alert(
          `Thank you ${formData.name}! Your quote request has been sent directly to Willy. He will contact you soon at ${formData.phone}!`,
        );

        // Reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          message: "",
        });
      } else {
        throw new Error(result.error || "Failed to send email");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      // Error
      alert(
        `Error: ${(error as Error).message}. Please try again or call Willy directly at (407) 555-0123.`,
      );
    } finally {
      // Reset button
      if (submitButton) {
        submitButton.textContent = "Send Message";
        submitButton.disabled = false;
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("contactWilly")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("contactIntro")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                {t("getInTouch")}
              </h3>
              <p className="text-gray-600 mb-8">{t("getInTouchDesc")}</p>
            </div>

            <div className="space-y-6">
              <motion.div
                className="flex items-start space-x-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {t("phoneLabel")}
                  </h4>
                  <a
                    href="tel:407-840-1428"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {t("phoneDesc")}
                  </a>
                  <p className="text-sm text-gray-500">{t("phoneNote")}</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {t("emailLabel")}
                  </h4>
                  <p className="text-gray-600">{t("emailDesc")}</p>
                  <p className="text-sm text-gray-500">{t("emailNote")}</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {t("serviceAreaLabel")}
                  </h4>
                  <p className="text-gray-600">{t("serviceAreaDesc")}</p>
                  <p className="text-sm text-gray-500">
                    {t("serviceAreaNote")}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Service Areas Block */}
            <motion.div
              className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h4 className="font-semibold text-gray-900 mb-3 text-center">
                {t("serviceAreasTitle")}
              </h4>
              <div className="flex flex-wrap justify-center gap-2">
                {t("serviceAreasList")
                  .split(", ")
                  .map((area, index) => (
                    <span
                      key={index}
                      className="bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-600 border border-gray-300"
                    >
                      {area}
                    </span>
                  ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t("requestQuoteTitle")}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("nameLabel")}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t("namePlaceholder")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("phoneLabelForm")}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t("phonePlaceholder")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("emailLabelForm")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("emailPlaceholder")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("serviceNeeded")}
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">{t("selectService")}</option>
                    <option value="standard">{t("standardOption")}</option>
                    <option value="deep">{t("deepOption")}</option>
                    <option value="move">{t("moveInOutOption")}</option>
                    <option value="other">{t("otherOption")}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("messageLabel")}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("messagePlaceholder")}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t("sendMessage")}
                </motion.button>
              </form>
            </motion.div>

            {/* Important Note */}
            <motion.div
              className="bg-blue-50 rounded-xl p-6 border border-blue-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="flex items-start space-x-3">
                <MessageCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {t("importantNoteTitle")}
                  </h4>
                  <p className="text-sm text-gray-700">
                    {t("importantNoteText")}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                {t("requestQuoteTitle")}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t("nameLabel")}
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder={t("namePlaceholder")}
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t("phoneLabelForm")}
                  </label>
                  <motion.input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder={t("phonePlaceholder")}
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t("emailLabelForm")}
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder={t("emailPlaceholder")}
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t("serviceNeeded")}
                  </label>
                  <motion.select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <option value="">{t("selectService")}</option>
                    <option value="standard">{t("standardOption")}</option>
                    <option value="deep">{t("deepOption")}</option>
                    <option value="move-in-out">{t("moveInOutOption")}</option>
                    <option value="other">{t("otherOption")}</option>
                  </motion.select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t("messageLabel")}
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                    placeholder={t("messagePlaceholder")}
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t("sendMessage")}
                </motion.button>
              </form>

              <p className="text-sm text-gray-500 text-center mt-6">
                {t("contactFormNote")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
