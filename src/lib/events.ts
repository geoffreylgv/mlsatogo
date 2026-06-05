import type { Event } from "@/data/data";

export type EventStatus = "past" | "upcoming";

/**
 * Parse an event date string into start/end dates.
 * Supports a single day ("2026-06-06") or a range ("2024-01-06 - 2024-02-10").
 */
export function parseEventDates(date: string): { start: Date; end: Date } {
  const [startStr, endStr] = date.split(" - ").map((s) => s.trim());
  const start = new Date(startStr);
  const end = new Date(endStr ?? startStr);
  return { start, end };
}

/** Milliseconds of the start date — used for sorting. */
export function eventStartMs(date: string): number {
  return parseEventDates(date).start.getTime();
}

/**
 * An event is "past" only once its end day is before today (local midnight),
 * so multi-day and same-day events stay "upcoming" until they fully finish.
 */
export function getEventStatus(date: string, now: Date = new Date()): EventStatus {
  const { end } = parseEventDates(date);
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const endDay = new Date(end.getFullYear(), end.getMonth(), end.getDate());
  return endDay < today ? "past" : "upcoming";
}

function ymd(d: Date): string {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}`;
}

/**
 * Build a "Add to Google Calendar" link for an all-day event.
 * Google treats the end date as exclusive, so it is bumped one day forward.
 */
export function googleCalendarUrl(event: Event): string {
  const { start, end } = parseEventDates(event.date);
  const endExclusive = new Date(end);
  endExclusive.setDate(endExclusive.getDate() + 1);

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    dates: `${ymd(start)}/${ymd(endExclusive)}`,
    details: event.description,
    location: event.location,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
