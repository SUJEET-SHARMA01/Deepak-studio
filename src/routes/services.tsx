import { createFileRoute } from "@tanstack/react-router";
import { ServiceCard } from "@/components/studio/Cards";
import { CTASection } from "@/components/studio/Layout";
import { services } from "@/data/site";
import { PageIntro } from "@/pages/shared";
export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Deepak Studio" },
      {
        name: "description",
        content:
          "Photography and videography for weddings, birthdays, corporate events, and special occasions.",
      },
      { property: "og:title", content: "Services — Deepak Studio" },
      {
        property: "og:description",
        content:
          "Photography and videography for weddings, birthdays, corporate events, and special occasions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});
function Services() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Every occasion deserves its own visual language."
        copy="Choose a starting point below. Every service can be tailored around your venue, schedule, traditions, and priorities."
      />
      <section className="section-shell pt-4">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((x) => (
            <ServiceCard key={x.name} service={x} />
          ))}
        </div>
      </section>
      <CTASection title="Tell us what you’re planning." />
    </>
  );
}
