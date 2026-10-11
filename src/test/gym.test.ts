import { describe, expect, it } from "vitest";
import { gym } from "../lib/gym";

describe("supplied gym information", () => {
  it("calls the supplied Indian phone number", () => expect(gym.call).toBe("tel:+918007170068"));
  it("opens Monday through Saturday from 6 AM to 10 PM", () => expect(gym.hours.slice(0, 6)).toEqual(Array(6).fill("06:00–22:00")));
  it("is closed on Sunday", () => expect(gym.hours[6]).toBe("Closed"));
  it("uses the exact supplied directions link", () => expect(gym.directions).toBe("https://www.google.com/maps/search/?api=1&query=Integrity+Gym+Viman+Nagar+Pune"));
  it("preserves the supplied profile rating and review count", () => expect([gym.rating, gym.reviews]).toEqual([4.9, 493]));
});