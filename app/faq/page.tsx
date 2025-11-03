import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"

export default function FAQPage() {
  return (
    <>
      <SiteHeader />
      <section className="bg-[#0a0a0a] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-10 shadow-xl">
              <div className="relative space-y-12">
                <header className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight text-lime-300">Frequently Asked Questions</h1>
                  <p className="text-neutral-400 text-lg">
                    Answers to common questions about our consulting services for influencers and Calgary businesses.
                  </p>
                </header>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    1. What types of businesses do you work with?
                  </h2>
                  <p className="text-neutral-300">
                    We specialize in two key areas: social media influencers and content creators looking to grow their presence,
                    and Calgary-based small to medium-sized businesses seeking digital marketing and strategic consulting services.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">2. How long does it take to see results?</h2>
                  <p className="text-neutral-300">
                    Most clients see measurable improvements within 30-60 days. Our strategies are designed for sustainable growth,
                    with many clients achieving 2-3x growth in engagement and revenue within the first year.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    3. Do you offer services outside of Calgary?
                  </h2>
                  <p className="text-neutral-300">
                    While we're based in Calgary and specialize in the local market, we also work with clients across Canada.
                    Our social media consulting services are available to influencers worldwide.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">4. How do you price your services?</h2>
                  <p className="text-neutral-300">
                    We offer transparent monthly packages starting at $999 CAD. You
                    can view our detailed pricing on our{" "}
                    <a href="/#pricing" className="text-lime-300 underline">
                      pricing page
                    </a>
                    , or we can create a custom package for your specific needs.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">5. What's included in a consultation session?</h2>
                  <p className="text-neutral-300">
                    Each consultation includes a deep-dive into your current strategy, actionable recommendations,
                    competitive analysis, and a customized action plan. Sessions are typically 60-90 minutes and can be
                    conducted in-person in Calgary or virtually.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    6. Can you help with brand partnerships and sponsorships?
                  </h2>
                  <p className="text-neutral-300">
                    Absolutely. We help influencers identify authentic brand partnership opportunities, negotiate contracts,
                    and maintain long-term relationships with sponsors. Our local Calgary network includes connections with
                    both national and regional brands.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">7. Do you provide ongoing support?</h2>
                  <p className="text-neutral-300">
                    Yes. All our packages include ongoing support via email, with response times ranging from 24-48 hours
                    depending on your plan. Growth and Enterprise clients receive priority support and direct access to
                    their dedicated consultant.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    8. What makes you different from other consulting agencies?
                  </h2>
                  <p className="text-neutral-300">
                    We combine deep local Calgary market knowledge with proven digital strategies. As a boutique consultancy,
                    you work directly with experienced professionals—not junior account managers. Plus, our focus on both
                    influencers and businesses gives us unique cross-industry insights.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    9. Do you require long-term contracts?
                  </h2>
                  <p className="text-neutral-300">
                    No. All our packages are month-to-month with no long-term commitment required. We earn your business
                    every month through results and exceptional service.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">10. How do we get started?</h2>
                  <p className="text-neutral-300">
                    Book your free consultation by{" "}
                    <a href="#contact" className="text-lime-300 underline">
                      contacting us
                    </a>
                    . We'll discuss your goals, challenges, and how we can help you achieve measurable growth. No obligation,
                    just actionable insights.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">2. How long does a typical 3D animation take?</h2>
                  <p className="text-neutral-300">
                    Timelines vary depending on complexity, but a standard 15–20 second animation usually takes 7–14
                    working days after final concept approval.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    3. Do you work with existing CAD files or need product samples?
                  </h2>
                  <p className="text-neutral-300">
                    We can work with both. If you have CAD or 3D models, we can import and refine them. If not, we can
                    create models from physical product samples or detailed reference images.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">4. How do you price your services?</h2>
                  <p className="text-neutral-300">
                    Pricing is based on animation length, complexity, number of renders, and modeling requirements. You
                    can view our detailed pricing on our{" "}
                    <a href="/pricing" className="text-lime-300 underline">
                      pricing page
                    </a>
                    .
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">5. Can we request changes after delivery?</h2>
                  <p className="text-neutral-300">
                    Yes. All revisions are covered under our{" "}
                    <a href="/revisions" className="text-lime-300 underline">
                      revision policy
                    </a>
                    , which ensures smooth updates without unexpected scope creep.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    6. Will the renders match our brand’s visual style?
                  </h2>
                  <p className="text-neutral-300">
                    Absolutely. We customize lighting, materials, camera angles, and animation pacing to fit your
                    brand’s identity and marketing needs.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">7. What formats do you deliver in?</h2>
                  <p className="text-neutral-300">
                    We typically deliver in MP4 (H.264) for videos and high-resolution PNG/JPG for stills. Other formats
                    like MOV, ProRes, or transparent-background renders are available on request.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    8. Can you handle large-scale projects or bulk renders?
                  </h2>
                  <p className="text-neutral-300">
                    Yes, we regularly work on bulk orders for 10+ animations or 50+ renders. We optimize workflows to
                    maintain quality and meet tight deadlines.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    9. Do you offer creative direction or only technical execution?
                  </h2>
                  <p className="text-neutral-300">
                    We do both. Our team can develop creative concepts, storyboards, and camera moves, or simply execute
                    your pre-approved vision.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">10. How do we get started?</h2>
                  <p className="text-neutral-300">
                    Simply{" "}
                    <a href="/contact" className="text-lime-300 underline">
                      contact us
                    </a>{" "}
                    with your project details, references, and timeline. We’ll provide a proposal and next steps.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AppverseFooter />
    </>
  )
}
