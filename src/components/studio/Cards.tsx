import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ServiceCard({
  service,
}: {
  service: { name: string; description: string; image: string; position: string };
}) {
  return (
    <article className="group overflow-hidden rounded-xl border border-border bg-card/60 backdrop-blur-xl">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          width={800}
          height={600}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          style={{ objectPosition: service.position }}
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl">{service.name}</h3>
        <p className="mt-2 min-h-12 text-sm leading-6 text-muted-foreground">
          {service.description}
        </p>
        <Button asChild variant="link" className="mt-3 px-0">
          <Link to="/contact" search={{ service: service.name }}>
            Enquire Now <ArrowUpRight />
          </Link>
        </Button>
      </div>
    </article>
  );
}
export function PortfolioCard({
  item,
  onOpen,
}: {
  item: { title: string; category: string; image: string; position: string; tall: boolean };
  onOpen: () => void;
}) {
  return (
    <button
      onClick={onOpen}
      className="group relative mb-4 block w-full cursor-zoom-in overflow-hidden rounded-lg text-left"
      aria-label={`Open ${item.title}`}
    >
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        width={800}
        height={item.tall ? 1000 : 620}
        className={`w-full object-cover transition duration-700 group-hover:scale-105 ${item.tall ? "h-[430px]" : "h-[285px]"}`}
        style={{ objectPosition: item.position }}
      />
      <span className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-100" />
      <span className="absolute bottom-0 p-5">
        <span className="block font-display text-2xl text-foreground">{item.title}</span>
        <span className="mt-1 block text-xs uppercase tracking-[0.18em] text-primary">
          {item.category}
        </span>
      </span>
    </button>
  );
}
export function PackageCard({
  item,
}: {
  item: { name: string; subtitle: string; features: string[]; label: string; featured?: boolean };
}) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-xl border p-7 ${item.featured ? "border-primary bg-primary/10" : "border-border bg-card/60"}`}
    >
      {item.featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
          Most Popular
        </span>
      )}
      <h3 className="font-display text-3xl">{item.name}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{item.subtitle}</p>
      <p className="mt-6 font-display text-2xl text-primary">Contact for Price</p>
      <ul className="my-7 grid gap-3 text-sm text-muted-foreground">
        {item.features.map((x) => (
          <li key={x} className="flex gap-3">
            <Check className="mt-0.5 size-4 shrink-0 text-primary" />
            {x}
          </li>
        ))}
      </ul>
      <Button
        asChild
        variant={item.featured ? "default" : "glass"}
        className="mt-auto rounded-full"
      >
        <Link to="/contact" search={{ service: item.name }}>
          {item.label}
        </Link>
      </Button>
    </article>
  );
}
export function TestimonialCard({
  item,
}: {
  item: { quote: string; name: string; event: string };
}) {
  return (
    <figure className="rounded-xl border border-border bg-card/60 p-7 backdrop-blur-xl">
      <blockquote className="font-display text-2xl italic leading-snug">“{item.quote}”</blockquote>
      <figcaption className="mt-6 text-sm text-primary">
        {item.name}
        <span className="block text-xs text-muted-foreground">{item.event}</span>
      </figcaption>
    </figure>
  );
}
