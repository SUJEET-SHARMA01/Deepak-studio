import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Camera, Instagram, Menu, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

const links = [
  ["Home", "/"], ["About", "/about"], ["Services", "/services"],
  ["Portfolio", "/portfolio"], ["Packages", "/packages"], ["Contact", "/contact"],
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
    <div className="mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:flex lg:px-8">
      <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"><Camera size={17}/></span>
        <span className="truncate font-display text-xl">Lumière <span className="text-primary">Studio</span></span>
      </Link>
      <nav className="ml-auto hidden items-center gap-7 lg:flex" aria-label="Main navigation">
        {links.map(([label, to]) => <Link key={to} to={to} activeOptions={{ exact: to === "/" }} className="text-sm text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }}>{label}</Link>)}
      </nav>
      <Button asChild className="ml-3 hidden rounded-full sm:inline-flex lg:ml-5"><Link to="/contact">Book Now</Link></Button>
      <Button variant="glass" size="icon" className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</Button>
    </div>
    {open && <nav className="border-t border-border bg-background px-5 py-4 lg:hidden" aria-label="Mobile navigation">{links.map(([label,to]) => <Link key={to} to={to} className="block border-b border-border py-3 text-sm text-muted-foreground" onClick={() => setOpen(false)}>{label}</Link>)}</nav>}
  </header>;
}

export function Footer() {
  return <footer className="relative border-t border-border bg-background">
    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
      <div><div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground"><Camera size={17}/></span><span className="font-display text-xl">Lumière Studio</span></div><p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">Photography and film for life’s most meaningful celebrations.</p></div>
      <div><p className="eyebrow">Explore</p><div className="mt-4 grid gap-2 text-sm text-muted-foreground">{links.slice(1).map(([label,to])=><Link key={to} to={to} className="hover:text-foreground">{label}</Link>)}</div></div>
      <div><p className="eyebrow">Contact</p><div className="mt-4 grid gap-2 text-sm text-muted-foreground"><a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><span>{siteConfig.location}</span></div></div>
      <div><p className="eyebrow">Follow</p><a href="https://instagram.com" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><Instagram size={17}/> Instagram</a></div>
    </div><div className="border-t border-border px-5 py-5 text-center text-xs text-muted-foreground">© 2026 Lumière Studio. All rights reserved.</div>
  </footer>;
}

export function WhatsAppButton() {
  const href = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;
  return <a href={href} target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-gold transition-transform hover:scale-105" aria-label="Chat on WhatsApp"><MessageCircle size={24}/></a>;
}

export function CTASection({ title = "Let’s create something unforgettable." }: { title?: string }) {
  return <section className="section-shell"><div className="relative overflow-hidden rounded-2xl border border-border bg-card/70 px-6 py-16 text-center backdrop-blur-xl md:px-12"><div className="ambient"/><div className="relative"><p className="eyebrow">Your story starts here</p><h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl md:text-5xl">{title}</h2><p className="mx-auto mt-5 max-w-xl text-muted-foreground">Tell us what you are celebrating. We’ll shape the right photography and film coverage around it.</p><Button asChild size="lg" className="mt-8 rounded-full"><Link to="/contact">Book Your Shoot</Link></Button></div></div></section>;
}
