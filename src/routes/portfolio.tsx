import { useCallback, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PortfolioCard } from "@/components/studio/Cards";
import { Lightbox } from "@/components/studio/Lightbox";
import { portfolio } from "@/data/site";
import { PageIntro } from "@/pages/shared";
const categories = ["All", "Weddings", "Pre-Wedding", "Birthdays", "Events", "Portraits"];
export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Deepak Studio" },
      {
        name: "description",
        content:
          "Explore wedding, pre-wedding, birthday, event, and portrait photography by Deepak Studio.",
      },
      { property: "og:title", content: "Portfolio — Deepak Studio" },
      {
        property: "og:description",
        content:
          "Explore wedding, pre-wedding, birthday, event, and portrait photography by Deepak Studio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});
function Portfolio() {
  const [category, setCategory] = useState("All");
  const [index, setIndex] = useState<number | null>(null);
  const filtered =
    category === "All" ? portfolio : portfolio.filter((x) => x.category === category);
  const close = useCallback(() => setIndex(null), []);
  const change = useCallback((n: number) => setIndex(n), []);
  return (
    <>
      <PageIntro
        eyebrow="Portfolio"
        title="Honest moments, artfully held."
        copy="A selection of celebrations, people, and places seen through our lens."
      />
      <section className="section-shell pt-2">
        <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Portfolio categories">
          {categories.map((x) => (
            <button
              key={x}
              onClick={() => {
                setCategory(x);
                setIndex(null);
              }}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${category === x ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card/60 text-muted-foreground hover:text-foreground"}`}
            >
              {x}
            </button>
          ))}
        </div>
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {filtered.map((x, i) => (
            <PortfolioCard key={x.id} item={x} onOpen={() => setIndex(i)} />
          ))}
        </div>
      </section>
      {index !== null && (
        <Lightbox items={filtered} index={index} onClose={close} onChange={change} />
      )}
    </>
  );
}
