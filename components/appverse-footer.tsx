"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Instagram, Twitter, Youtube, MessageCircle } from "lucide-react"
import LazyVideo from "./lazy-video"
import Image from "next/image"

interface FooterContent {
  tagline: string
  copyright: string
}

const defaultContent: FooterContent = {
  tagline: "Expert consulting for social media influencers and Calgary businesses. Grow your digital presence with proven strategies.",
  copyright: "© 2025 — Calgary Consulting",
}

export function AppverseFooter() {
  const [content, setContent] = useState<FooterContent>(defaultContent)

  useEffect(() => {
    // Load content from localStorage
    const savedContent = localStorage.getItem("skitbit-content")
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent)
        if (parsed.footer) {
          setContent(parsed.footer)
        }
      } catch (error) {
        console.error("Error parsing saved content:", error)
      }
    }
  }, [])

  return (
    <section className="text-white">
      {/* Contact CTA */}
      <div className="container mx-auto px-4 pt-12 sm:pt-16">
        <div className="flex justify-center">
          <Button
            asChild
            className="rounded-full bg-lime-400 px-8 py-6 text-base font-semibold text-black shadow-[0_0_20px_rgba(163,230,53,0.35)] hover:bg-lime-300 hover:shadow-[0_0_30px_rgba(163,230,53,0.5)] hover:scale-105 transition-all duration-300"
          >
            <a href="/contact">
              Book Free Consultation
            </a>
          </Button>
        </div>
      </div>

      {/* Download the app */}
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <Card className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-10">
          <div className="relative grid items-center gap-8 md:grid-cols-2">
            {/* Left copy */}
            <div>
              <p className="mb-2 text-[11px] tracking-widest text-lime-300">STREAMLINE YOUR LAUNCHES</p>
              <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                Preview &amp; approve high-end 3D visuals from anywhere
              </h3>
              <p className="mt-2 max-w-prose text-sm text-neutral-400">
                Review renders, leave timestamped comments, and approve scenes from anywhere. Using our revision &amp;
                collaboration tools
              </p>
            </div>

            {/* Right mockup */}
            <div className="mx-auto w-full max-w-[320px]">
              <div className="relative rounded-[28px] liquid-glass p-2 shadow-2xl">
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl bg-black">
                  {/* Lazy-loaded video fills the screen */}
                  <LazyVideo
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Timeline%202-YFaCK7cEiHWSMRv8XEHaLCoYj2SUAi.mp4"
                    className="absolute inset-0 h-full w-full object-cover"
                    autoplay={true}
                    loop={true}
                    muted={true}
                    playsInline={true}
                    aria-label="Skitbit app preview - approvals made easy"
                  />
                  {/* On-screen content */}
                  <div className="relative p-3">
                    <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />
                    <div className="space-y-1 px-1">
                      <div className="text-5xl font-extrabold text-lime-300">Approvals Made Easy</div>
                      <p className="text-xs text-white/80">From feedback to approval in a single flow</p>
                      <div className="mt-3 inline-flex items-center rounded-full bg-black/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-lime-300">
                        Zero Hassle
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 pb-20 md:pb-10">
        <div className="container mx-auto px-4 py-10">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
            {/* Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-1.5">
                <Image src="/icons/skitbit-white.svg" alt="Calgary Consulting logo" width={24} height={24} className="h-6 w-6" />
                <span className="text-xl font-semibold text-white">Calgary Consulting</span>
              </div>
              <p className="max-w-sm text-sm text-neutral-400">{content.tagline}</p>
            </div>

            {/* Navigation */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-2">
              <div>
                <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">Services</h5>
                <ul className="space-y-2 text-sm text-neutral-300">
                  {[
                    { label: "Social Media Growth", href: "/social-media-growth" },
                    { label: "Brand Partnerships", href: "/brand-partnerships" },
                    { label: "Business Consulting", href: "/business-consulting" },
                    { label: "Pricing", href: "/#pricing" },
                    { label: "About", href: "/About" },
                    { label: "FAQ", href: "/faq" },
                  ].map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="hover:text-lime-300 transition-colors">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">Connect</h5>
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li className="flex items-center gap-2">
                    <Instagram className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://instagram.com/calgaryconsulting"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-300 transition-colors"
                      aria-label="Follow Calgary Consulting on Instagram"
                    >
                      Instagram
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Twitter className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://twitter.com/calgaryconsult"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-300 transition-colors"
                      aria-label="Follow Calgary Consulting on Twitter"
                    >
                      Twitter
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Youtube className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://youtube.com/@calgaryconsulting"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-300 transition-colors"
                      aria-label="Subscribe to Calgary Consulting on YouTube"
                    >
                      YouTube
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-neutral-400" />
                    <a
                      href="/contact"
                      className="hover:text-lime-300 transition-colors"
                      aria-label="Contact Calgary Consulting"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-neutral-500 sm:flex-row">
            <p>{content.copyright}</p>
            <div className="flex items-center gap-6">
              <Link href="/faq" className="hover:text-lime-300 transition-colors">
                FAQ
              </Link>
              <Link href="/t&c" className="hover:text-lime-300 transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/revisions" className="hover:text-lime-300 transition-colors">
                Revisions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
