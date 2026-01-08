"use client";
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Sparkles,
  Linkedin,
  Facebook,
  Youtube,
} from "lucide-react";
import Link from "next/link";

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold">
            <Sparkles size={16} />
            <span>We&apos;re here to help</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1]">
            Let&apos;s start a{" "}
            <span className="text-blue-600">conversation.</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-md mx-auto py-4">
            Whether you have a question about features, trials, pricing, or
            anything else, our team is ready to answer all your questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Email us</p>
                    <p className="text-slate-500 text-sm">
                      support@eduflow.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-50 rounded-lg text-green-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Call us</p>
                    <p className="text-slate-500 text-sm">+1 (555) 000-0000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-50 rounded-lg text-purple-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Visit us</p>
                    <p className="text-slate-500 text-sm">
                      123 Tech Avenue, Silicon Valley, CA
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10 pt-10 border-t border-slate-100">
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                  Follow Us
                </p>
                <ul className="flex gap-4 list-none">
                  <li>
                    <Link
                      href={"https://linkedin.com/eduflow"}
                      className="text-slate-400 hover:text-blue-600 transition-colors flex justify-center items-center hover:underline"
                    >
                      <Linkedin className=" mr-1 text-blue-400" size={16} />
                      Linkedin
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"https://facebook.com/eduflow"}
                      className="text-slate-400 hover:text-blue-600 transition-colors flex justify-center items-center hover:underline"
                    >
                      <Facebook className=" mr-1 text-blue-400" size={16} />
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"https://youtube.com/eduflow"}
                      className="text-slate-400 hover:text-blue-600 transition-colors flex justify-center items-center hover:underline"
                    >
                      <Youtube className=" mr-1 text-red-400" size={16} />
                      Youtube
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full h-11 px-4 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full h-11 px-4 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label className="text-sm font-medium text-slate-700">
                  Subject
                </label>
                <select className="w-full h-11 px-4 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white">
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Billing Question</option>
                  <option>Partnership</option>
                </select>
              </div>

              <div className="space-y-2 mb-8">
                <label className="text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send size={18} />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
