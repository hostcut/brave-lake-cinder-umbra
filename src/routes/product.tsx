import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/product-page";

export const Route = createFileRoute("/product")({
  head: () => ({ meta: [{ title: "Product · Havenlink" }] }),
  component: ProductPage,
});
