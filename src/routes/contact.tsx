import { createFileRoute, useSearch } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { z } from "zod";
import { ContactForm } from "@/components/studio/ContactForm";
import { siteConfig } from "@/data/site";
import { PageIntro } from "@/pages/shared";
const searchSchema = z.object({ service: z.string().optional() });
export const Route = createFileRoute("/contact")({
  validateSearch: (s) => searchSchema.parse(s),
  head: () => ({
    meta: [
      { title: "Contact — Deepak Studio" },
      {
        name: "description",
        content: "Enquire about photography and videography coverage for your upcoming event.",
      },
      { property: "og:title", content: "Contact — Deepak Studio" },
      {
        property: "og:description",
        content: "Enquire about photography and videography coverage for your upcoming event.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});
function Contact() {
  const { service } = useSearch({ from: "/contact" });
  const whats = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Tell us about your day."
        copy="Share the essentials and we’ll help you choose the right coverage. This demo validates your enquiry locally; online delivery comes with the next backend phase."
      />
      <section className="section-shell grid gap-8 pt-3 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,.6fr)]">
        <ContactForm initialService={service} />
        <aside className="space-y-5">
          <div className="rounded-xl border border-border bg-card/60 p-6">
            <p className="eyebrow">Direct contact</p>
            <div className="mt-5 grid gap-4 text-sm">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex gap-3 text-muted-foreground hover:text-foreground"
              >
                <Phone className="size-5 text-primary" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex gap-3 text-muted-foreground hover:text-foreground"
              >
                <Mail className="size-5 text-primary" />
                {siteConfig.email}
              </a>
              <a
                href={whats}
                target="_blank"
                rel="noreferrer"
                className="flex gap-3 text-muted-foreground hover:text-foreground"
              >
                <MessageCircle className="size-5 text-primary" />
                Chat on WhatsApp
              </a>
              <p className="flex gap-3 text-muted-foreground">
                <MapPin className="size-5 text-primary" />
                {siteConfig.location}
              </p>
            </div>
          </div>
          <div className="grid aspect-[4/3] place-items-center rounded-xl border border-border bg-card/60 text-center">
            <div>
              <MapPin className="mx-auto size-8 text-primary" />
              <p className="mt-3 font-display text-2xl">Studio location</p>
              <p className="mx-auto text-primary">Google map will be appear here</p>
              <div className="rounded-xl overflow-hidden">
                <iframe className="overflow-none"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1790.1630070237711!2d84.3396272786437!3d26.18607104015838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992f96918e15909%3A0xcb02ab7271c2a586!2z4KSa4KWM4KSw4KS44KS_4KSv4KS-IOCkleCkv-CksOCkvuCkqOCkviDgpI_gpLXgpIIg4KSc4KWH4KSo4KSw4KSyIOCkuOCljeCkn-Cli-CksA!5e0!3m2!1sen!2sin!4v1790441854412!5m2!1sen!2sin"
                width="350"
                height="350"
                loading="lazy"
                referrerpolicy="strict-origin-when-cross-origin"
              ></iframe>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
