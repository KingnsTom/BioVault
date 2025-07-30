import { type PortableTextBlock } from "next-sanity";
import PortableText from "../components/PortableText";
import { InfoSection as InfoSectionBase } from "@/sanity.types";

// Extend InfoSection to include optional ctaButton property
type InfoSection = InfoSectionBase & {
  ctaButton?: {
    label: string;
    url: string;
  };
};

type InfoProps = {
  block: InfoSection;
  index: number;
};

export default function CTA({ block }: InfoProps) {
  if (!block) return null;

  return (
    <section className="w-full bg-[#004C45] text-white py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        {block?.heading && (
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {block.heading}
          </h2>
        )}

        {block?.subheading && (
          <p className="mt-4 text-lg md:text-xl font-light opacity-90">
            {block.subheading}
          </p>
        )}

        {(block?.content?.length ?? 0) > 0 && (
          <div className="mt-6 text-base md:text-lg leading-relaxed text-white/90">
            <PortableText value={block.content as PortableTextBlock[]} />
          </div>
        )}

        {/* Optional CTA button, if Sanity has a ctaButton object */}
        {block?.ctaButton?.label && block?.ctaButton?.url && (
          <a
            href={block.ctaButton.url}
            className="inline-block mt-8 px-6 py-3 bg-white text-[#004C45] font-semibold rounded-md shadow hover:bg-gray-100 transition"
          >
            {block.ctaButton.label}
          </a>
        )}
      </div>
    </section>
  );
}
