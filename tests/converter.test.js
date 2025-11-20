import { describe, it, expect } from "vitest";
const converter = require("../index.js");

describe("Design Unit Converter", () => {
  it("px to rem", () => {
    expect(converter.pxToRem(16)).toBe(1);
  });

  it("rem to px", () => {
    expect(converter.remToPx(1)).toBe(16);
  });

  it("px to em", () => {
    expect(converter.pxToEm(32)).toBe(2);
  });

  it("em to px", () => {
    expect(converter.emToPx(2)).toBe(32);
  });

  it("px to percent", () => {
    expect(converter.pxToPercent(16, 16)).toBe(100);
  });

  it("percent to px", () => {
    expect(converter.percentToPx(100, 16)).toBe(16);
  });

  it("px to pt", () => {
    expect(converter.pxToPt(1.333)).toBe(1);
  });

  it("pt to px", () => {
    expect(converter.ptToPx(1)).toBe(1.333);
  });

  it("px to mm", () => {
    expect(converter.pxToMm(3.78)).toBe(1);
  });

  it("mm to px", () => {
    expect(converter.mmToPx(1)).toBe(3.78);
  });

  it("px to cm", () => {
    expect(converter.pxToCm(100)).toBe(2.646);
  });

  it("cm to px", () => {
    expect(converter.cmToPx(2.646)).toBe(100);
  });

  it("px to inch", () => {
    expect(converter.pxToIn(96)).toBe(1);
  });

  it("inch to px", () => {
    expect(converter.inToPx(1)).toBe(96);
  });

  it("px to vw", () => {
    expect(converter.pxToVw(192, 1920)).toBe(10);
  });

  it("vw to px", () => {
    expect(converter.vwToPx(10, 1920)).toBe(192);
  });

  it("px to vh", () => {
    expect(converter.pxToVh(108, 1080)).toBe(10);
  });

  it("vh to px", () => {
    expect(converter.vhToPx(10, 1080)).toBe(108);
  });
});
