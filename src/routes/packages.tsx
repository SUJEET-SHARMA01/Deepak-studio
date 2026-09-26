import { createFileRoute } from "@tanstack/react-router";
import { PackageCard } from "@/components/studio/Cards";
import { CTASection } from "@/components/studio/Layout";
import { packages } from "@/data/site";
import { PageIntro } from "@/pages/shared";
export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Packages — Deepak Studio" },
      {
        name: "description",
        content: "Flexible photography and videography packages tailored to your event.",
      },
      { property: "og:title", content: "Packages — Deepak Studio" },
      {
        property: "og:description",
        content: "Flexible photography and videography packages tailored to your event.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Packages,
});
function Packages() {
  return (
    <>
      <PageIntro
        eyebrow="Packages"
        title="A thoughtful starting point for every celebration."
        copy="No two events are the same. Share your plans and we’ll provide a clear quote tailored to your coverage needs."
      />
      <section className="section-shell pt-5">
        <div className="grid items-stretch gap-6 md:grid-cols-3">
          {packages.map((x) => (
            <PackageCard key={x.name} item={x} />
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
          Travel, albums, live streaming, additional photographers, and extended films can be added
          after your consultation.
        </p>
      </section>
      <CTASection title="Need something more specific?" />
    </>
  );
}
