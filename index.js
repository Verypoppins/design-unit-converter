// ============================
//     DESIGN UNIT CONVERTER
// ============================

// Redondeo estándar a 4 decimales
function round(value) {
  return Math.round(value * 10000) / 10000;
}

// ----------------------------
// PX ↔ REM
// ----------------------------
function pxToRem(px, base = 16) {
  return round(px / base);
}

function remToPx(rem, base = 16) {
  return round(rem * base);
}

// ----------------------------
// PX ↔ EM
// ----------------------------
function pxToEm(px, base = 16) {
  return round(px / base);
}

function emToPx(em, base = 16) {
  return round(em * base);
}

// ----------------------------
// PX ↔ %
// ----------------------------
function pxToPercent(px, parent = 100) {
  return round((px / parent) * 100);
}

function percentToPx(percent, parent = 100) {
  return round((percent / 100) * parent);
}

// ----------------------------
// PX ↔ PT  (1pt = 1.333px)
// ----------------------------
function pxToPt(px) {
  return round(px / 1.333);
}

function ptToPx(pt) {
  return round(pt * 1.333);
}

// ----------------------------
// PX ↔ MM (aprox: 1mm ≈ 3.78px)
// ----------------------------
function pxToMm(px) {
  return round(px / 3.78);
}

function mmToPx(mm) {
  return round(mm * 3.78);
}

// Exportamos todo
module.exports = {
  pxToRem,
  remToPx,
  pxToEm,
  emToPx,
  pxToPercent,
  percentToPx,
  pxToPt,
  ptToPx,
  pxToMm,
  mmToPx
};
