import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Book Your Free Consultation - Velocity Growth",
  description:
    "Ready to grow your business or social media presence? Contact Velocity Growth for a free consultation. Expert guidance for influencers and Calgary businesses.",
}

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen text-white pt-8 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Let's <span className="text-purple-300">Grow Together</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Book your free consultation and discover how Velocity Growth can help you achieve your digital growth
              goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Form */}
            <Card className="liquid-glass border-gray-800 hover:border-purple-300/30 transition-colors duration-300">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
                <p className="text-sm text-gray-400 mb-6">We'll get back to you within 24 hours</p>
                <form action="mailto:hello@velocitygrowth.com" method="POST" encType="text/plain" className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-300 font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      required
                      className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-300 focus:ring-purple-300/20 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300 font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-300 focus:ring-purple-300/20 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-300 font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (403) 555-0100"
                      className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-300 focus:ring-purple-300/20 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-gray-300 font-medium">
                      Service Interest *
                    </Label>
                    <select
                      id="service"
                      name="service"
                      required
                      aria-label="Select service interest"
                      className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-purple-300 transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="social-media">Social Media Growth</option>
                      <option value="brand-partnerships">Brand Partnerships</option>
                      <option value="business-consulting">Business Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300 font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your goals and how we can help..."
                      required
                      rows={5}
                      className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-300 focus:ring-purple-300/20 transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-lime-400 text-black font-semibold rounded-lg px-6 py-3
                               hover:bg-lime-300 hover:shadow-lg hover:shadow-lime-400/20 hover:scale-[1.02]
                               active:scale-[0.98] transition-all duration-200"
                  >
                    Send Message
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting, you agree to our{" "}
                    <a href="/t&c" className="text-purple-300 hover:text-purple-200 underline">
                      Terms & Conditions
                    </a>
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="liquid-glass border-gray-800 hover:border-purple-300/30 transition-colors duration-300">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-300/10 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-purple-300" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <a
                          href="mailto:hello@velocitygrowth.com"
                          className="text-gray-400 hover:text-purple-300 transition-colors"
                        >
                          hello@velocitygrowth.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-300/10 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-purple-300" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <a href="tel:+14035550100" className="text-gray-400 hover:text-purple-300 transition-colors">
                          +1 (403) 555-0100
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-300/10 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-purple-300" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Location</h3>
                        <p className="text-gray-400">
                          Calgary, Alberta
                          <br />
                          Canada
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-300/10 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-purple-300" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Business Hours</h3>
                        <p className="text-gray-400">
                          Monday - Friday: 9:00 AM - 6:00 PM MST
                          <br />
                          Saturday: 10:00 AM - 2:00 PM MST
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="liquid-glass border-gray-800 hover:border-purple-300/30 transition-colors duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Why Choose Velocity Growth?</h3>
                  <ul className="space-y-3 text-gray-400">
                    <li className="flex items-start gap-3">
                      <span className="text-purple-300 mt-1 text-lg">✓</span>
                      <span>Free initial consultation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-300 mt-1 text-lg">✓</span>
                      <span>Calgary local expertise</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-300 mt-1 text-lg">✓</span>
                      <span>Proven track record</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-300 mt-1">✓</span>
                      <span>Personalized strategies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-300 mt-1">✓</span>
                      <span>24-hour response time</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <AppverseFooter />
    </>
  )
}
