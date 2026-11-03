import { createFileRoute } from "@tanstack/react-router";
import { TrustPage } from "@/components/trust-page";

export const Route = createFileRoute("/trust")({
  head: () => ({ meta: [{ title: "Trust · Havenlink" }] }),
  component: TrustPage,
});
