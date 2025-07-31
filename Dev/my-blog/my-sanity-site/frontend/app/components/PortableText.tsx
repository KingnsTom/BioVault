import {
  PortableText,
  type PortableTextComponents,
  type PortableTextBlock,
} from "next-sanity";
import ResolvedLink from "./ResolvedLink";

export default function CustomPortableText({
  className,
  value,
}: {
  className?: string;
  value: PortableTextBlock[];
}) {
  const components: PortableTextComponents = {
    block: {
      h1: ({ children, value }) => (
        <h1 className="group relative scroll-mt-24 text-3xl md:text-4xl font-bold text-brand-dark">
          {children}
          <a
            href={`#${value?._key}`}
            className="absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-brand"
            aria-label="Anchor link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
          </a>
        </h1>
      ),
      h2: ({ children, value }) => (
        <h2 className="group relative scroll-mt-24 text-2xl md:text-3xl font-semibold text-brand-dark">
          {children}
          <a
            href={`#${value?._key}`}
            className="absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-brand"
            aria-label="Anchor link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
          </a>
        </h2>
      ),
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-brand pl-4 italic text-gray-700">
          {children}
        </blockquote>
      ),
    },
    marks: {
      link: ({ children, value }) => (
        <ResolvedLink link={value}>
          <span className="text-brand underline underline-offset-2 hover:text-brand-dark">
            {children}
          </span>
        </ResolvedLink>
      ),
      strong: ({ children }) => (
        <strong className="font-semibold text-brand-dark">{children}</strong>
      ),
      em: ({ children }) => (
        <em className="italic text-brand-dark">{children}</em>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className="list-disc ml-6 text-base space-y-1">{children}</ul>
      ),
      number: ({ children }) => (
        <ol className="list-decimal ml-6 text-base space-y-1">{children}</ol>
      ),
    },
    listItem: {
      bullet: ({ children }) => <li className="text-gray-800">{children}</li>,
      number: ({ children }) => <li className="text-gray-800">{children}</li>,
    },
  };

  return (
    <div
      className={[
        "prose prose-invert max-w-none",
        "prose-headings:scroll-mt-24",
        "prose-a:text-brand hover:prose-a:text-brand-dark",
        "prose-blockquote:border-brand",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <PortableText components={components} value={value} />
    </div>
  );
}
