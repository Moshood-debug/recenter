import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-off-white">
      {/* Header Section */}
      <section className=" h-100 flex items-center justify-center bg-accent overflow-hidden">
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="font-yaro text-4xl md:text-5xl text-white mb-4">
            Get in Touch
          </h1>
          <p className="font-sans text-light-green text-lg max-w-2xl mx-auto">
            We are here to support you. Whether you have questions about our
            services or just want to explore your options, reach out to us.
          </p>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-10">
            <div>
              <h2 className="font-yaro text-3xl text-accent mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-8 font-sans">
                Our team is available to answer your questions and help you find
                the right support for your family's needs.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full shadow-sm text-accent mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-accent mb-1">Email Us</h3>
                  <p className="text-gray-600">hello@recenter-health.com</p>
                  <p className="text-gray-600">support@recenter-health.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full shadow-sm text-accent mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-accent mb-1">Call Us</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-400">
                    Mon-Fri, 9am - 5pm EST
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full shadow-sm text-accent mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-accent mb-1">Our Location</h3>
                  <p className="text-gray-600">
                    123 Wellness Blvd, Suite 100
                    <br />
                    New York, NY 10012
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg">
            <h2 className="font-yaro text-2xl text-accent mb-6">
              Send us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                  placeholder="jane@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button type="button" className="w-full btn-primary py-4 text-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
