import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin } from "lucide-react";

export default function JBProperties() {
  return (
    <div className="min-h-screen bg-green-950 text-white font-sans">
      {/* Header */}
      <header className="p-6 flex justify-between items-center bg-green-900 shadow-lg">
        <div className="flex items-center space-x-4">
          <img src="/images/jb-properties-logo.png" alt="JB Properties Logo" className="h-12 w-auto" />
          <h1 className="text-2xl font-bold text-gold-400">JB Properties</h1>
        </div>
        <nav className="space-x-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-green-800">
        <h2 className="text-4xl font-bold mb-4">UK Property Management</h2>
        <p className="mb-8 max-w-xl mx-auto text-lg text-gold-200">
          Premium services for discerning property owners and tenants.
        </p>
        <Button className="bg-gold-400 text-black font-semibold">Get Started</Button>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-green-950">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Who We Are</h3>
          <p className="text-lg text-gold-200">
            JB Properties is a modern property management firm dedicated to
            exceptional client service, quality living experiences, and professional care
            of your investments.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-green-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <Card className="bg-green-800 border-gold-400 border text-white">
            <CardContent className="p-6">
              <h4 className="text-xl font-bold mb-2">Property Maintenance</h4>
              <p>24/7 maintenance and property upkeep with trusted contractors.</p>
            </CardContent>
          </Card>
          <Card className="bg-green-800 border-gold-400 border text-white">
            <CardContent className="p-6">
              <h4 className="text-xl font-bold mb-2">Tenant Screening</h4>
              <p>Thorough background checks to ensure reliable tenants.</p>
            </CardContent>
          </Card>
          <Card className="bg-green-800 border-gold-400 border text-white">
            <CardContent className="p-6">
              <h4 className="text-xl font-bold mb-2">Financial Reporting</h4>
              <p>Detailed monthly reports and transparent accounting practices.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-green-950">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
          <form className="grid gap-4">
            <Input placeholder="Your Name" className="bg-green-900 border-gold-400" />
            <Input placeholder="Your Email" className="bg-green-900 border-gold-400" />
            <Input placeholder="Message" className="bg-green-900 border-gold-400" />
            <Button className="bg-gold-400 text-black font-semibold">Send Message</Button>
          </form>
          <div className="mt-8 space-y-2 text-gold-200">
            <p><Mail className="inline mr-2" /> contact@jbproperties.com</p>
            <p><Phone className="inline mr-2" /> (123) 456-7890</p>
            <p><MapPin className="inline mr-2" /> 123 Luxury Lane, Metropolis</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-green-900 text-gold-200">
        &copy; {new Date().getFullYear()} JB Properties. All rights reserved.
      </footer>
    </div>
  );
}
