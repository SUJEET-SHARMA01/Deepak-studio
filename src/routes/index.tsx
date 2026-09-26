import { createFileRoute, Link } from "@tanstack/react-router";
import { Aperture, Clapperboard, Heart, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/studio/Layout";
import { ServiceCard, TestimonialCard } from "@/components/studio/Cards";
import { images, portfolio, services, testimonials } from "@/data/site";
import { SectionHeading } from "@/pages/shared";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Deepak Studio — Cinematic Photography & Film" },
      {
        name: "description",
        content: "Premium wedding, event, portrait, and corporate photography and videography.",
      },
      { property: "og:title", content: "Deepak Studio — Cinematic Photography & Film" },
      {
        property: "og:description",
        content: "Premium wedding, event, portrait, and corporate photography and videography.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});
function Home() {
  return (
    <>
      <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden">
        <img
          src={images.heroImage}
          alt="Wedding couple at golden hour"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/25 to-background" />
        <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl items-end px-5 pb-16 md:items-center md:pb-0 lg:px-8">
          <div className="reveal max-w-2xl rounded-2xl border border-border bg-card/65 p-7 backdrop-blur-xl md:p-11">
            <p className="eyebrow">Photography & Videography</p>
            <h1 className="mt-5 font-display text-5xl leading-[.98] md:text-7xl">
              Stories captured in <span className="italic text-primary">light</span> and motion.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-foreground/75 md:text-lg">
              From intimate engagements to grand celebrations, we craft timeless visual narratives
              you’ll replay for a lifetime.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/contact">Book Your Shoot</Link>
              </Button>
              <Button asChild size="lg" variant="glass" className="rounded-full">
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="section-shell grid items-center gap-10 md:grid-cols-2">
        <div className="overflow-hidden rounded-xl">
          <img
            src={images.studioTeam}
            alt="Deepak Studio team at work"
            loading="lazy"
            width={1600}
            height={1072}
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
        <div>
          <p className="eyebrow">The Studio</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            We preserve how it felt, not only how it looked.
          </h2>
          <p className="mt-6 leading-7 text-muted-foreground">
            Deepak is a close-knit team of photographers and filmmakers. We blend careful direction
            with quiet observation, creating imagery that feels elevated, natural, and unmistakably
            yours.
          </p>
          <Button asChild variant="link" className="mt-5 px-0">
            <Link to="/about">Meet the studio →</Link>
          </Button>
        </div>
      </section>
      <section className="section-shell">
        <SectionHeading
          eyebrow="What we do"
          title="Signature services"
          copy="Thoughtful coverage for celebrations of every scale."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {services.slice(0, 3).map((x) => (
            <ServiceCard key={x.name} service={x} />
          ))}
        </div>
      </section>
      <section className="section-shell">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading eyebrow="Selected work" title="Recent stories" />
          <Button asChild variant="link">
            <Link to="/portfolio">View all →</Link>
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-12">
          <img
            src={portfolio[0].image}
            alt="Bridal portrait"
            loading="lazy"
            width={900}
            height={1050}
            className="h-[520px] w-full rounded-lg object-cover object-left-top md:col-span-7"
          />
          <div className="grid gap-4 md:col-span-5">
            <img
              src={images.heroImage}
              alt="Couple at golden hour"
              loading="lazy"
              width={800}
              height={430}
              className="h-[252px] w-full rounded-lg object-cover"
            />
            <img
              src={images.eventCollection}
              alt="Event highlights"
              loading="lazy"
              width={800}
              height={430}
              className="h-[252px] w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </section>
      <section className="section-shell">
        <SectionHeading eyebrow="Why Deepak" title="Crafted with care, delivered with confidence" />
        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
          {[
            [
              Aperture,
              "Editorial eye",
              "A distinctive visual style that stays honest to your story.",
            ],
            [
              Clapperboard,
              "Photo + film",
              "One coordinated team for a consistent, cinematic result.",
            ],
            [
              ShieldCheck,
              "Dependable delivery",
              "Clear planning, professional equipment, and carefully backed-up work.",
            ],
          ].map(([Icon, title, copy]) => (
            <div key={String(title)} className="bg-background p-7">
              <Icon className="text-primary" />
              <h3 className="mt-5 font-display text-2xl">{String(title)}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{String(copy)}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section-shell">
        <SectionHeading eyebrow="Kind words" title="What our clients remember" />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((x) => (
            <TestimonialCard key={x.name} item={x} />
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
