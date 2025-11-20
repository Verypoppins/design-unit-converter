#!/usr/bin/env node

const converter = require('../index.js');

// Obtener argumentos
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("Uso: duc <valor><unidad> --to <unidad>");
  console.log("Ejemplo: duc 32px --to rem");
  process.exit(1);
}

const input = args[0];
const toIndex = args.indexOf("--to");
const targetUnit = args[toIndex + 1];

// Separar número y unidad de entrada
const match = input.match(/([\d.]+)(px|rem|em|pt|mm)/i);

if (!match) {
  console.error("Formato no válido. Ejemplo: 32px, 1.5rem, 12pt…");
  process.exit(1);
}

const value = parseFloat(match[1]);
const unit = match[2].toLowerCase();

let result;

// Lógica de conversión
switch (unit + "_to_" + targetUnit) {
  case "px_to_rem":
    result = converter.pxToRem(value) + "rem";
    break;
  case "rem_to_px":
    result = converter.remToPx(value) + "px";
    break;
  case "px_to_em":
    result = converter.pxToEm(value) + "em";
    break;
  case "em_to_px":
    result = converter.emToPx(value) + "px";
    break;
  case "px_to_pt":
    result = converter.pxToPt(value) + "pt";
    break;
  case "pt_to_px":
    result = converter.ptToPx(value) + "px";
    break;
  case "px_to_mm":
    result = converter.pxToMm(value) + "mm";
    break;
  case "mm_to_px":
    result = converter.mmToPx(value) + "px";
    break;
  default:
    console.error("Conversión no soportada.");
    process.exit(1);
}

console.log(result);
