import Link from "next/link";

// Update the import path below if 'linkResolver' is located elsewhere, or create the file if missing.
import { linkResolver } from "@/sanity/lib/utils";


interface ResolvedLinkProps {
  link: any;
  children: React.ReactNode;
  className?: string;
}

export default function ResolvedLink({
  link,
  children,
  className,
}: ResolvedLinkProps) {
  // resolveLink() is used to determine the type of link and return the appropriate URL.
  const resolvedLink = linkResolver(link);

  if (typeof resolvedLink === "string") {
    return (
      <Link
        href={resolvedLink}
        target={link?.openInNewTab ? "_blank" : undefined}
        rel={link?.openInNewTab ? "noopener noreferrer" : undefined}
        className={className}
      >
        {children}
      </Link>
    );
  }
  return <>{children}</>;
}
