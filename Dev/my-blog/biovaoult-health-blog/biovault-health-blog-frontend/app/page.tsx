// app/blog/page.tsx (or wherever HomePage is located)

import { getPosts } from "@/sanity/sanity-utils";
import { Metadata } from "next";
import BlogHero from "../components/BlogHero";
import HomeClient from "@/components/HomeClient";
import Footer from "../components/Footer";





export const metadata: Metadata = {
  title: "BioVault Health Blog | Natural Wellness Guides & Tips",
  description:
    "BioVault Health Blog provides expert-backed wellness tips, supplement reviews, and holistic health strategies to help you thrive.",
  alternates: {
    canonical: "https://biovaulthealth.com/blog",
  },
};

const categories = [
  { label: "All", value: "all" },
  { label: "Energy & Immunity", value: "energy-immunity" },
  { label: "Gut Health & Digestion", value: "gut-health" },
  { label: "Mental & Spiritual Clarity", value: "mental-clarity" },
  { label: "Oral & Dental Health", value: "oral-health" },
  { label: "Hormonal Balance", value: "hormonal-balance" },
  { label: "Blood Sugar & Metabolism", value: "blood-sugar" },
];

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <>
      <BlogHero />
      <HomeClient posts={posts} categories={categories} />
  <Footer />

    </>
  );
}

