"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Star, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface FeaturesContent {
  title: string
  subtitle: string
}

const defaultContent: FeaturesContent = {
  title: "What makes us Calgary's premier consulting partner.",
  subtitle: "Discover our proven approach to digital growth",
}

export function Features() {
  const [content, setContent] = useState<FeaturesContent>(defaultContent)

  useEffect(() => {
    // Load content from localStorage
    const savedContent = localStorage.getItem("skitbit-content")
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent)
        if (parsed.features) {
          setContent(parsed.features)
        }
      } catch (error) {
        console.error("Error parsing saved content:", error)
      }
    }
  }, [])

  return (
    <section id="features" className="container mx-auto px-4 py-16 sm:py-20">
      <h2 className="mb-8 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        {content.title}
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Local Expertise Card - Hidden on mobile */}
        <Card className="hidden md:block liquid-glass border border-white/20">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-white/80">LOCAL EXPERTISE</p>
            <CardTitle className="mt-1 text-xl text-white">Deep roots in Calgary's business community</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10">
                <Image
                  src="/images/intuitive-1.png"
                  alt="Calgary business consulting strategy session"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 240px, 45vw"
                  priority={false}
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10">
                <Image
                  src="/images/intuitive-2.png"
                  alt="Calgary skyline and business district"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 240px, 45vw"
                  priority={false}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Client Success Card - Always visible */}
        <Card className="liquid-glass border border-white/20">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-white/80">CLIENT SUCCESS</p>
            <CardTitle className="mt-1 text-xl text-white">
              Our clients don't just grow—they dominate their markets and build lasting influence.
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6 flex items-end gap-4">
              <div className="text-5xl font-bold text-lime-300">4.9</div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-lime-300 text-lime-300" />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src={"/images/top-rated-1.png"}
                width={280}
                height={160}
                alt="Social media analytics dashboard showing growth metrics"
                className="h-full w-full rounded-xl border border-white/10 object-cover"
              />
              <Image
                src={"/images/top-rated-2.png"}
                width={280}
                height={160}
                alt="Client success story and testimonial showcase"
                className="h-full w-full rounded-xl border border-white/10 object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 text-center">
        <div className="inline-flex flex-col items-center gap-4 rounded-2xl liquid-glass border border-white/20 px-8 py-8 sm:px-12">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">Ready to dominate your market?</h3>
          <p className="text-sm text-white/70 max-w-md">
            Join 50+ Calgary businesses and influencers who've transformed their digital presence with our proven
            strategies.
          </p>
          <Button
            asChild
            className="group rounded-full bg-lime-400 px-8 py-6 text-base font-semibold text-black hover:bg-lime-300 hover:shadow-[0_0_40px_rgba(163,230,53,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <a href="/contact" className="flex items-center gap-2">
              Claim Your Free Strategy Session
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <p className="text-xs text-white/50">Limited spots available this month • Response within 24 hours</p>
        </div>
      </div>
    </section>
  )
}
