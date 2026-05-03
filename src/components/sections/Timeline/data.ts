export const TIMELINE_ENTRIES = [
  { key: "ggCheckout", current: true },
  { key: "freelance", current: false },
] as const;

export type TimelineEntryData = (typeof TIMELINE_ENTRIES)[number];
