import { Suspense } from "react";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

import { AllPosts } from "@/app/components/Posts";
import GetStartedCode from "@/app/components/GetStartedCode";
import SideBySideIcons from "@/app/components/SideBySideIcons";
import { settingsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/lib/live";

export default async function Page() {
  const { data: settings } = await sanityFetch({ query: settingsQuery });

  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <div className="relative bg-[url(/images/tile-1-black.png)] bg-[5px]">
          <div className="absolute top-0 w-full h-full bg-gradient-to-b from-white" />
          <div className="container">
            <div className="relative mx-auto flex min-h-[40vh] max-w-2xl flex-col items-center justify-center space-y-6 pt-10 pb-30 xl:pt-20 lg:max-w-4xl lg:px-12">
              <div className="flex flex-col items-center gap-4">
                <div className="prose text-md font-mono italic uppercase leading-6 bg-white px-3 py-1">
                  A starter template for
                </div>
                <h1 className="text-5xl font-bold tracking-tighter text-black sm:text-6xl md:text-7xl lg:text-8xl">
                  <Link
                    href="https://sanity.io/"
                    className="underline decoration-brand underline-offset-8 transition-all ease-out hover:text-brand hover:underline-offset-4"
                  >
                    Sanity
                  </Link>{" "}
                  +
                  <Link
                    href="https://nextjs.org/"
                    className="underline decoration-black text-framework underline-offset-8 transition-all ease-out hover:underline-offset-4"
                  >
                    Next.js
                  </Link>
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Description + CTA Section */}page.tsx
        <div className="flex flex-col items-center">
          <SideBySideIcons />
          <div className="container relative mx-auto flex max-w-2xl flex-col items-center space-y-6 pb-20 pt-10 lg:max-w-4xl lg:px-12">
            <div className="prose text-center font-light text-gray-700 prose-a:text-gray-700 sm:prose-lg md:prose-xl xl:prose-2xl">
              {settings?.description && (
                <PortableText value={settings.description} />
              )}
              <div className="flex flex-col items-center gap-4">
                <GetStartedCode />
                <Link
                  href="https://www.sanity.io/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex text-xs text-brand underline hover:text-gray-900 md:text-sm"
                >
                  Sanity Documentation
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="ml-1 inline h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V12L17.206 8.207L11.2071 14.2071L9.79289 12.7929L15.792 6.793L12 3H21Z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Posts Section */}
      <div className="border-t border-gray-100 bg-gray-50">
        <div className="container">
          <aside className="py-12 sm:py-20">
            <Suspense fallback={<div>Loading posts...</div>}>
              {await AllPosts()}
            </Suspense>
          </aside>
        </div>
      </div>
    </>
  );
}
