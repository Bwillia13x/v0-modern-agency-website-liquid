import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { LogoMarquee } from "@/components/logo-marquee"
import { Pricing } from "@/components/pricing"
import { AppverseFooter } from "@/components/appverse-footer"
import Script from "next/script"

// ✅ Force static generation for low TTFB
export const dynamic = "force-static"

export default function Page() {
  // Structured data for pricing
  const pricingStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    "@id": "https://calgaryconsulting.com/#pricing",
    name: "Pricing Plans",
    description: "Calgary Consulting pricing plans - Starter, Growth, and Enterprise packages for influencers and businesses",
    url: "https://calgaryconsulting.com/#pricing",
    mainEntity: {
      "@type": "PriceSpecification",
      name: "Consulting Services",
      description: "Professional digital marketing and consulting services with three pricing tiers",
      offers: [
        {
          "@type": "Offer",
          name: "Starter Plan",
          price: "999",
          priceCurrency: "CAD",
          description: "Social media strategy and monthly content planning",
        },
        {
          "@type": "Offer",
          name: "Growth Plan",
          price: "2499",
          priceCurrency: "CAD",
          description: "Full-service social media management with brand partnerships",
        },
        {
          "@type": "Offer",
          name: "Enterprise Plan",
          price: "4999",
          priceCurrency: "CAD",
          description: "Complete digital transformation with dedicated support",
        },
      ],
    },
  }

  // Structured data for main page
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://calgaryconsulting.com/",
    name: "Calgary Consulting | Expert Digital Marketing & Social Media Growth",
    description:
      "Transform your digital presence with Calgary Consulting. Expert services for social media influencers and local businesses in Calgary.",
    url: "https://calgaryconsulting.com/",
    mainEntity: {
      "@type": "Organization",
      name: "Calgary Consulting",
      url: "https://calgaryconsulting.com",
      sameAs: [
        "https://twitter.com/calgaryconsulting",
        "https://www.linkedin.com/company/calgaryconsulting",
        "https://instagram.com/calgaryconsulting",
        "https://facebook.com/calgaryconsulting",
      ],
    },
    hasPart: [
      {
        "@type": "WebPageElement",
        "@id": "https://calgaryconsulting.com/#pricing",
        name: "Pricing Section",
        url: "https://calgaryconsulting.com/#pricing",
      },
    ],
  }

  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />
        <Hero />
        <Features />
        <LogoMarquee />
        <Pricing />
        <AppverseFooter />
      </main>

      {/* JSON-LD structured data */}
      <Script
        id="pricing-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingStructuredData),
        }}
      />

      <Script
        id="page-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
    </>
  )
}
