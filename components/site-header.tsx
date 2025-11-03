"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { Menu, Tag, HelpCircle, FileText, Info, ChevronDown, TrendingUp, Handshake, Briefcase } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useState } from "react"

export function SiteHeader() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Check if we're on any service page
  const isOnServicePage = pathname.includes('/social-media-growth') ||
    pathname.includes('/brand-partnerships') ||
    pathname.includes('/business-consulting')

  const services = [
    {
      href: "/social-media-growth",
      label: "Social Media Growth",
      icon: TrendingUp,
      description: "Influencer strategy & audience building",
    },
    {
      href: "/brand-partnerships",
      label: "Brand Partnerships",
      icon: Handshake,
      description: "Connect with brands that align with your values",
    },
    {
      href: "/business-consulting",
      label: "Business Consulting",
      icon: Briefcase,
      description: "Calgary business digital transformation",
    },
  ]

  const links = [
    { href: "/#pricing", label: "Pricing", icon: Tag },
    { href: "/faq", label: "FAQ", icon: HelpCircle },
    { href: "/#blog", label: "Blog", icon: FileText },
    { href: "/About", label: "About", icon: Info },
  ]

  return (
    <header className="sticky top-0 z-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex h-14 items-center justify-between px-6 liquid-glass-header rounded-full">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-1.5 group">
            <div className="flex items-center justify-center w-5 h-5 rounded-md bg-purple-300 group-hover:bg-purple-200 transition-colors">
              <span className="text-black text-xs font-bold">CC</span>
            </div>
            <span className="font-semibold tracking-wide text-white group-hover:text-purple-300 transition-colors">Calgary Consulting</span>
          </Link>

          {/* Desktop Nav with Services Dropdown */}
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`bg-transparent text-white/90 hover:text-purple-300 data-[state=open]:text-purple-300
                               hover:bg-transparent focus:bg-transparent
                               data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent
                               data-[active=true]:bg-transparent ${isOnServicePage ? 'text-purple-300 font-semibold' : ''}`}
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[360px] gap-2 p-4 bg-gray-950/95 backdrop-blur-xl border border-gray-800 rounded-lg">
                      {services.map((service) => {
                        const isActive = pathname === service.href
                        return (
                          <li key={service.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={service.href}
                                className={`group relative flex items-start gap-4 rounded-xl p-4 transition-all
                                           hover:bg-white/5 hover:ring-1 hover:ring-purple-300/60
                                           hover:shadow-[0_0_0_1px_rgba(168,85,247,0.25),0_0_20px_rgba(168,85,247,0.15)]
                                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300/70 ${isActive ? 'bg-white/5 ring-1 ring-purple-300/60' : ''
                                  }`}
                              >
                                <service.icon className="h-6 w-6 text-purple-300 mt-0.5 shrink-0 group-hover:text-purple-200" />
                                <div className="flex-1">
                                  <div className={`text-sm font-medium text-white group-hover:text-purple-300 mb-1 ${isActive ? 'text-purple-300 font-semibold' : ''
                                    }`}>
                                    {service.label}
                                  </div>
                                  <p className="text-xs text-gray-400 leading-relaxed">{service.description}</p>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        )
                      })}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            {links.map((l) => {
              const isActive = pathname === l.href || (l.href.startsWith('/#') && pathname === '/')
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`text-white/90 hover:text-purple-300 transition-colors ${isActive ? 'text-purple-300 font-semibold' : ''
                    }`}
                >
                  {l.label}
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button
              asChild
              className="bg-lime-400 text-black font-medium rounded-lg px-6 py-2.5
                         hover:bg-lime-300 hover:shadow-md hover:scale-[1.02]
                         transition-all"
            >
              <Link href="/contact">Book Free Consultation</Link>
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-700 bg-gray-900/80 text-gray-200 hover:bg-gray-800"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="liquid-glass border-gray-800 p-0 w-64 flex flex-col">
                {/* Brand Header */}
                <div className="flex items-center gap-1.5 px-4 py-4 border-b border-gray-800">
                  <div className="flex items-center justify-center w-6 h-6 rounded-md bg-purple-300">
                    <span className="text-black text-xs font-bold">CC</span>
                  </div>
                  <span className="font-semibold tracking-wide text-white text-lg">Calgary Consulting</span>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-1 mt-2 text-gray-200">
                  <Collapsible open={servicesOpen} onOpenChange={setServicesOpen}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 hover:bg-gray-900 hover:text-purple-300 transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center justify-center w-5 h-5 text-gray-400">
                          <TrendingUp className="h-4 w-4" />
                        </span>
                        <span className="text-sm">Services</span>
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 text-gray-400 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                      />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="flex flex-col bg-gray-900/50 border-l-2 border-purple-300/30 ml-4">
                        {services.map((service) => {
                          const isActive = pathname === service.href
                          return (
                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={() => {
                                setServicesOpen(false)
                                setMobileMenuOpen(false)
                              }}
                              className={`flex items-center gap-3 pl-8 pr-4 py-2.5 hover:bg-gray-900 hover:text-purple-300 transition-colors ${isActive ? 'bg-gray-900 text-purple-300 font-semibold' : ''
                                }`}
                            >
                              <service.icon className="h-4 w-4 text-purple-300/70" />
                              <span className="text-sm">{service.label}</span>
                            </Link>
                          )
                        })}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {links.map((l) => {
                    const isActive = pathname === l.href || (l.href.startsWith('/#') && pathname === '/')
                    return (
                      <Link
                        key={l.href}
                        href={l.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 hover:bg-gray-900 hover:text-purple-300 transition-colors ${isActive ? 'bg-gray-900 text-purple-300 font-semibold' : ''
                          }`}
                      >
                        <span className="inline-flex items-center justify-center w-5 h-5 text-gray-400">
                          <l.icon className="h-4 w-4" />
                        </span>
                        <span className="text-sm">{l.label}</span>
                      </Link>
                    )
                  })}
                </nav>

                {/* CTA Button at Bottom */}
                <div className="mt-auto border-t border-gray-800 p-4">
                  <Button
                    asChild
                    className="w-full bg-lime-400 text-black font-medium rounded-lg px-6 py-2.5
                               hover:bg-lime-300 hover:shadow-md hover:scale-[1.02]
                               transition-all"
                  >
                    <Link href="/contact">Book Free Consultation</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
