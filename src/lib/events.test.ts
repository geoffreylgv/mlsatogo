import { describe, it, expect } from "vitest";
import { getEventStatus, eventStartMs, googleCalendarUrl, parseEventDates } from "./events";

const NOW = new Date("2026-06-04T12:00:00");

describe("getEventStatus", () => {
  it("marks a clearly past single day as past", () => {
    expect(getEventStatus("2023-04-29", NOW)).toBe("past");
  });

  it("marks a future single day as upcoming", () => {
    expect(getEventStatus("2026-06-06", NOW)).toBe("upcoming");
  });

  it("treats today as upcoming (not yet finished)", () => {
    expect(getEventStatus("2026-06-04", NOW)).toBe("upcoming");
  });

  it("uses the END of a range: ongoing range is still upcoming", () => {
    expect(getEventStatus("2026-06-01 - 2026-06-10", NOW)).toBe("upcoming");
  });

  it("a fully finished range is past", () => {
    expect(getEventStatus("2024-01-06 - 2024-02-10", NOW)).toBe("past");
  });
});

describe("parseEventDates", () => {
  it("falls back to start when there is no end", () => {
    const { start, end } = parseEventDates("2026-06-06");
    expect(start.getTime()).toBe(end.getTime());
  });
});

describe("eventStartMs", () => {
  it("orders earlier dates before later ones", () => {
    expect(eventStartMs("2023-04-29")).toBeLessThan(eventStartMs("2026-06-06"));
  });
});

describe("googleCalendarUrl", () => {
  const event = {
    title: "Test Event",
    date: "2026-06-06",
    location: "Lomé",
    description: "Hello",
  };

  it("builds a render URL with an exclusive (next-day) end", () => {
    const url = googleCalendarUrl(event);
    expect(url).toContain("https://calendar.google.com/calendar/render");
    expect(url).toContain("dates=20260606%2F20260607");
    expect(url).toContain("text=Test+Event");
  });
});
