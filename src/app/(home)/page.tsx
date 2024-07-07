import { MainProducts } from "@/components/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "✨ Future world",
  description: "Welcome to the future world, an ecommerce from other century",
  keywords: ["ecommerce", "future", "world", "technology"],
};

export default function Home() {
  return (
    <main>
      <MainProducts />
    </main>
  );
}
