import { derive } from "@/lib/care";
import { useCare } from "@/lib/store";
import { useEffect } from "react";

export function useHousehold() {
  const hour = useCare((state) => state.hour);
  const medOverrides = useCare((state) => state.medOverrides);
  const checkOverrides = useCare((state) => state.checkOverrides);
  const acked = useCare((state) => state.acked);
  const helpRequested = useCare((state) => state.helpRequested);
  return derive({ hour, medOverrides, checkOverrides, acked, helpRequested });
}

export function useRehydrateCare() {
  useEffect(() => {
    void useCare.persist.rehydrate();
  }, []);
}
