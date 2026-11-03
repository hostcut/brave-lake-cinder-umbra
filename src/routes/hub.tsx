import { createFileRoute } from "@tanstack/react-router";
import { CareHub } from "@/components/care-hub";

export const Route = createFileRoute("/hub")({
  head: () => ({ meta: [{ title: "Care Hub · Havenlink" }] }),
  component: CareHub,
});
