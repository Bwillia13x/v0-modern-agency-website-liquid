import { SiteHeader } from "@/components/site-header"
import { HeroArchviz } from "./_components/hero-archviz"
import { FeaturesArchviz } from "./_components/features-archviz"
import { LogoMarqueeArchviz } from "./_components/logo-marquee-archviz"
import { PricingArchviz } from "./_components/pricing-archviz"
import { AppverseFooter } from "@/components/appverse-footer"
import Script from "next/script"

export const dynamic = "force-static"

export const metadata = {
  title: "Social Media Growth Services | Velocity Growth for Influencers",
  description:
    "Accelerate your social media presence with expert growth strategies. Calgary-based consulting for influencers and content creators looking to expand their reach and engagement.",
  alternates: {
    canonical: "https://velocitygrowth.com/social-media-growth",
  },
  openGraph: {
    title: "Social Media Growth Services | Velocity Growth for Influencers",
    description:
      "Accelerate your social media presence with expert growth strategies. Calgary-based consulting for influencers and content creators looking to expand their reach and engagement.",
    url: "https://velocitygrowth.com/social-media-growth",
    type: "website",
  },
}

export default function Page() {
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://velocitygrowth.com/social-media-growth",
    name: "Social Media Growth Services | Velocity Growth for Influencers",
    description:
      "Accelerate your social media presence with expert growth strategies. Calgary-based consulting for influencers and content creators looking to expand their reach and engagement.",
    url: "https://velocitygrowth.com/social-media-growth",
  }

  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />
        <HeroArchviz />
        <FeaturesArchviz />
        <LogoMarqueeArchviz />
        <PricingArchviz />
        <AppverseFooter />
      </main>

      <Script
        id="archviz-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
    </>
  )
}
