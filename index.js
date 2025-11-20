// ============================
//   DESIGN UNIT CONVERTER PRO
// ============================

// 🔧 Redondeo estándar
function round(value, decimals = 4) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

// ============================
//         PX ↔ REM
// ============================
function pxToRem(px, base = 16) {
  return round(px / base);
}
function remToPx(rem, base = 16) {
  return round(rem * base);
}

// ============================
//         PX ↔ EM
// ============================
function pxToEm(px, base = 16) {
  return round(px / base);
}
function emToPx(em, base = 16) {
  return round(em * base);
}

// ============================
//         PX ↔ %
// ============================
function pxToPercent(px, parent = 16) {
  return round((px / parent) * 100);
}
function percentToPx(percent, parent = 16) {
  return round((percent / 100) * parent);
}

// ============================
//         PX ↔ PT
// ============================
function pxToPt(px) {
  return round(px / 1.333);
}
function ptToPx(pt) {
  return round(pt * 1.333);
}

// ============================
//         PX ↔ MM
// ============================
function pxToMm(px) {
  return round(px / 3.78);
}
function mmToPx(mm) {
  return round(mm * 3.78);
}

// ============================
//         PX ↔ CM
// ============================
//
// 1px = 0.02646 cm
//
function pxToCm(px) {
  return round(px * 0.02646);
}
function cmToPx(cm) {
  return round(cm / 0.02646);
}

// ============================
//         PX ↔ INCH
// ============================
//
// 1in = 96px
//
function pxToIn(px) {
  return round(px / 96);
}
function inToPx(inch) {
  return round(inch * 96);
}

// ============================
//         PX ↔ VW / VH
// ============================
//
// width = ancho viewport
// height = alto viewport
//
function pxToVw(px, width = 1920) {
  return round((px / width) * 100);
}
function vwToPx(vw, width = 1920) {
  return round((vw / 100) * width);
}

function pxToVh(px, height = 1080) {
  return round((px / height) * 100);
}
function vhToPx(vh, height = 1080) {
  return round((vh / 100) * height);
}

// ============================
//        EXPORTAR TODO
// ============================
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
  mmToPx,
  pxToCm,
  cmToPx,
  pxToIn,
  inToPx,
  pxToVw,
  vwToPx,
  pxToVh,
  vhToPx
};

