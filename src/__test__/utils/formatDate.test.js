import { formatDate, millisToMinutes } from "../../utils/formatDate";

describe("formatDate", () => {
  it("should return formatted date in dd-mm-yyyy format", () => {
    expect(formatDate("2023-1-1")).toBe("01-01-2023");
  });

  it("should handle single digit days and months", () => {
    expect(formatDate("2020-10-25")).toBe("25-10-2020");
  });

  it("should handle leap year correctly", () => {
    expect(formatDate("2024-07-12")).toBe("12-07-2024");
  });
});

describe("millisToMinutes", () => {
  it("should convert milliseconds to minutes:seconds format", () => {
    expect(millisToMinutes(1200)).toBe("00:01");
    expect(millisToMinutes(60000)).toBe("01:00");
    expect(millisToMinutes(3000)).toBe("00:03");
    expect(millisToMinutes(10000)).toBe("00:10");
  });

  it("should handle hours correctly", () => {
    expect(millisToMinutes(3656700)).toBe("1:00:56");
    expect(millisToMinutes(7200000)).toBe("2:00:00");
  });

  it("should handle milliseconds less than a second", () => {
    expect(millisToMinutes(500)).toBe("00:00");
  });
});
