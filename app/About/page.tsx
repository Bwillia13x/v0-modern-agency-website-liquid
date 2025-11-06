import { SiteHeader } from "@/components/site-header"

export default function AboutPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Velocity Growth",
    url: "https://velocitygrowth.com",
    logo: "https://velocitygrowth.com/velocity-logo.svg",
    description:
      "Velocity Growth provides expert digital marketing and business consulting services for social media influencers and local Calgary businesses.",
    sameAs: ["https://www.instagram.com/velocitygrowth", "https://www.linkedin.com/company/velocitygrowth"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Calgary",
      addressRegion: "AB",
      addressCountry: "CA",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-403-555-0100",
        contactType: "customer service",
      },
    ],
    areaServed: [
      { "@type": "Place", name: "Calgary" },
      { "@type": "Place", name: "Alberta" },
      { "@type": "Place", name: "Canada" },
    ],
  }

  return (
    <>
      <SiteHeader />
      {/* SEO Schema for Google + LLMs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 px-6 md:px-12 lg:px-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">About Velocity Growth</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-80">
          Your trusted partner for digital growth in Calgary's dynamic business landscape.
        </p>
      </section>

      {/* Feature Grid */}
      <section className="py-16 bg-neutral-900 text-white px-6 md:px-12 lg:px-20">
        <div className="grid gap-12 md:grid-cols-3">
          {[
            {
              title: "Social Media Growth",
              desc: "Strategic consulting to help influencers and creators expand their reach and engagement.",
            },
            {
              title: "Local Expertise",
              desc: "Deep understanding of Calgary's market and business community built over 10 years.",
            },
            {
              title: "Brand Partnerships",
              desc: "Connect with authentic brand opportunities and negotiate favorable partnership terms.",
            },
            {
              title: "Business Strategy",
              desc: "Comprehensive consulting to help Calgary businesses scale sustainably.",
            },
            {
              title: "Results-Driven Approach",
              desc: "Work directly with experienced consultants focused on measurable outcomes.",
            },
            {
              title: "Proven Track Record",
              desc: "50+ satisfied clients with an average 3x growth in their first year.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-neutral-800 p-6 rounded-2xl shadow-lg hover:scale-105 transform transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="opacity-80">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-center text-white px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
        <p className="text-lg opacity-80 mb-8">Let Velocity Growth help you achieve your digital goals.</p>
        <a
          href="#contact"
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-neutral-200 transition-all"
        >
          Book Free Consultation
        </a>
      </section>
    </>
  )
}
