"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { CheckCircle2, ArrowRight, Zap } from "lucide-react"

type Feature = { text: string; muted?: boolean }

const ACCENT = "#C6FF3A"

function FeatureItem({ text, muted = false }: Feature) {
  return (
    <li className="flex items-start gap-2">
      <CheckCircle2 className="mt-0.5 h-4 w-4" style={{ color: ACCENT }} />
      <span className={`text-sm ${muted ? "text-neutral-300" : "text-neutral-100"}`}>{text}</span>
    </li>
  )
}

type Currency = "INR" | "USD" | "CAD"

const PRICES: Record<Currency, { starter: string; growth: string; enterprise: string; save: string }> = {
  INR: {
    starter: "₹83,000/mo",
    growth: "₹2,07,500/mo",
    enterprise: "₹4,15,000/mo",
    save: "Save ₹10,000",
  },
  USD: {
    starter: "$999/mo",
    growth: "$2,499/mo",
    enterprise: "$4,999/mo",
    save: "Save $100",
  },
  CAD: {
    starter: "$999/mo",
    growth: "$2,499/mo",
    enterprise: "$4,999/mo",
    save: "Save $100",
  },
}

function guessLocalCurrency(): Currency {
  const lang = typeof navigator !== "undefined" ? navigator.language : ""
  const tz = typeof Intl !== "undefined" ? Intl.DateTimeFormat().resolvedOptions().timeZone : ""
  if (/-(IN|PK|BD)\b/i.test(lang) || /(Kolkata|Karachi|Dhaka)/i.test(tz || "")) return "INR"
  if (/-(CA)\b/i.test(lang) || /(Edmonton|Calgary|Vancouver|Toronto|Montreal)/i.test(tz || "")) return "CAD"
  return "USD"
}

export function Pricing() {
  const [currency, setCurrency] = useState<Currency>("CAD")

  useEffect(() => {
    let cancelled = false
    async function load() {
      try {
        const res = await fetch("/api/geo", { cache: "no-store" })
        if (!res.ok) throw new Error("geo failed")
        const data = await res.json()
        if (!cancelled) {
          if (data?.currency === "INR") setCurrency("INR")
          else if (data?.currency === "CAD") setCurrency("CAD")
          else setCurrency("USD")
        }
      } catch {
        if (!cancelled) setCurrency(guessLocalCurrency())
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section id="pricing" className="text-white" itemScope itemType="https://schema.org/PriceSpecification">
      <div className="container mx-auto px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="mx-auto mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-white"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", border: `1px solid ${ACCENT}` }}
          >
            Our Pricing and Packages
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl" itemProp="name">
            Invest in Growth That Pays for Itself
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-neutral-300" itemProp="description">
            Transparent monthly packages with guaranteed ROI. Average clients see 3x engagement growth in 90 days.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3">
            <Button
              asChild
              className="group rounded-full px-8 py-6 text-base font-semibold text-neutral-900 hover:brightness-95 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_30px_rgba(163,230,53,0.4)]"
              style={{ backgroundColor: ACCENT }}
            >
              <Link href="/contact" className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Get Your Custom Growth Plan
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <p className="text-xs text-white/60">Free consultation • Custom pricing available • Cancel anytime</p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* Starter */}
          <Card
            className="relative overflow-hidden rounded-2xl liquid-glass shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300 hover:shadow-[0_16px_50px_rgba(0,0,0,0.4)]"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <div
              className="absolute right-4 top-11 rounded-full px-2 py-0.5 text-[10px]"
              style={{ backgroundColor: "#1f1f1f", color: "#d4d4d4" }}
            >
              {PRICES[currency].save}
            </div>
            <CardHeader className="space-y-3 pb-4">
              <div className="text-sm font-semibold text-neutral-100" itemProp="name">
                Starter
              </div>
              <div className="flex items-end gap-2 text-white">
                <div className="text-xl font-bold tracking-tight" itemProp="price">
                  {PRICES[currency].starter}
                </div>
                <span className="pb-0.5 text-[11px] text-neutral-300">monthly</span>
                <meta itemProp="priceCurrency" content={currency} />
              </div>
              <Button
                asChild
                className="group w-full rounded-full px-4 py-2 text-sm font-medium transition-all hover:scale-105 active:scale-95"
                style={{ backgroundColor: "#0a0a0a", color: "#ffffff", border: "1px solid #333" }}
              >
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  Start Growing
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="grid gap-2" itemProp="description">
                {[
                  "Social media strategy consultation",
                  "2 consulting sessions per month",
                  "Monthly analytics report",
                  "Email support (48hr response)",
                  "Content planning guidance",
                  "Platform optimization tips",
                ].map((f, i) => (
                  <FeatureItem key={i} text={f} />
                ))}
              </ul>
            </CardContent>
            <CardFooter />
          </Card>

          {/* Growth */}
          <Card
            className="relative overflow-hidden rounded-2xl liquid-glass-enhanced shadow-[0_16px_50px_rgba(0,0,0,0.4)] transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <div
              className="absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-medium animate-pulse"
              style={{ backgroundColor: ACCENT, color: "#000" }}
            >
              MOST POPULAR
            </div>
            <CardHeader className="space-y-3 pb-4">
              <div className="text-sm font-semibold text-neutral-100" itemProp="name">
                Growth
              </div>
              <div className="flex items-end gap-2 text-white">
                <div className="text-xl font-bold tracking-tight" itemProp="price">
                  {PRICES[currency].growth}
                </div>
                <span className="pb-0.5 text-[11px] text-neutral-300">monthly</span>
                <meta itemProp="priceCurrency" content={currency} />
              </div>
              <Button
                asChild
                className="group w-full rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95 hover:brightness-110 shadow-[0_0_20px_rgba(163,230,53,0.3)]"
                style={{ backgroundColor: ACCENT, color: "#000" }}
              >
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  <Zap className="h-4 w-4" />
                  Accelerate Growth Now
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="grid gap-2" itemProp="description">
                {[
                  "Everything in Starter, plus:",
                  "4 consulting sessions per month",
                  "Brand partnership guidance",
                  "Priority support (24hr response)",
                  "Quarterly strategy review",
                  "Competitor analysis",
                  "Growth campaign planning",
                ].map((f, i) => (
                  <FeatureItem key={i} text={f} muted={i === 0} />
                ))}
              </ul>
            </CardContent>
            <CardFooter />
          </Card>

          {/* Enterprise */}
          <Card
            className="relative overflow-hidden rounded-2xl liquid-glass shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300 hover:shadow-[0_16px_50px_rgba(0,0,0,0.4)]"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <CardHeader className="relative space-y-3 pb-4">
              <div className="text-sm font-semibold text-neutral-100" itemProp="name">
                Enterprise
              </div>
              <div className="flex items-end gap-2 text-white">
                <div className="text-xl font-bold tracking-tight" itemProp="price">
                  {PRICES[currency].enterprise}
                </div>
                <span className="pb-0.5 text-[11px] text-neutral-300">monthly</span>
                <meta itemProp="priceCurrency" content={currency} />
              </div>
              <Button
                asChild
                className="group w-full rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
                style={{ backgroundColor: "#0a0a0a", color: "#ffffff", border: "1px solid #333" }}
              >
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  Get Custom Plan
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent className="relative pt-0">
              <ul className="grid gap-2" itemProp="description">
                {[
                  "Everything in Growth, plus:",
                  "Unlimited consulting sessions",
                  "Dedicated account manager",
                  "Custom service packages",
                  "24/7 priority support",
                  "White-label reports",
                  "Team training sessions",
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4" style={{ color: ACCENT }} />
                    <span className={`text-sm ${i === 0 ? "text-neutral-300" : "text-neutral-100"}`}>{f}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter />
          </Card>
        </div>
      </div>

      {/* Modals */}
    </section>
  )
}
