import { Categories } from "@/components/Categories";
import { Hero } from "@/components/Hero";

export const metadata = {
  title: "Strapi - Next.js",
  description: "Next.js + Strapi"
}

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
    </>
  );
}
