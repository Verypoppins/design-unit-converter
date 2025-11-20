#!/usr/bin/env node

const chalk = require("chalk");
const converter = require("../index.js");

// ============================
//     COLORES Y ESTILOS
// ============================

const success = (msg) => console.log(chalk.green.bold(msg));
const error = (msg) => console.log(chalk.red.bold("Error: ") + chalk.red(msg));
const info = (msg) => console.log(chalk.cyan(msg));

// ============================
//        HELP / USO
// ============================

const showHelp = () => {
  console.log(`
${chalk.bold.magenta("Design Unit Converter CLI")}

Uso:
  ${chalk.yellow("duc <valor><unidad> --to <unidad_destino>")}

Ejemplos:
  duc 32px --to rem
  duc 1.5rem --to px
  duc 24px --to vw
  duc 2cm --to px

Unidades soportadas:
  px, rem, em, %, pt, mm, cm, in, vw, vh

Más info:
  duc --help
`);
};

// Mostrar ayuda si se pide
if (process.argv.includes("--help") || process.argv.includes("-h")) {
  showHelp();
  process.exit(0);
}

// ============================
//      OBTENER ARGUMENTOS
// ============================

const args = process.argv.slice(2);

if (args.length === 0) {
  error("Debes introducir un valor.");
  info("Ejemplo: duc 32px --to rem");
  process.exit(1);
}

const input = args[0];
const toIndex = args.indexOf("--to");

if (toIndex === -1) {
  error("Falta el argumento '--to'.");
  info("Ejemplo: duc 32px --to rem");
  process.exit(1);
}

const targetUnit = args[toIndex + 1];

if (!targetUnit) {
  error("Debes indicar la unidad destino.");
  process.exit(1);
}

// ============================
//  SEPARAR NÚMERO + UNIDAD
// ============================

const match = input.match(/([\d.]+)(px|rem|em|pt|mm|cm|in|vw|vh|%)/i);

if (!match) {
  error("Formato de entrada no válido.");
  info("Ejemplo aceptado: 32px, 1.5rem, 50%, 2cm...");
  process.exit(1);
}

const value = parseFloat(match[1]);
const unit = match[2].toLowerCase();

// ============================
//       TABLA DE RUTAS
// ============================

const conversions = {
  "px:rem": converter.pxToRem,
  "rem:px": converter.remToPx,

  "px:em": converter.pxToEm,
  "em:px": converter.emToPx,

  "px:%": converter.pxToPercent,
  "%:px": converter.percentToPx,

  "px:pt": converter.pxToPt,
  "pt:px": converter.ptToPx,

  "px:mm": converter.pxToMm,
  "mm:px": converter.mmToPx,

  "px:cm": converter.pxToCm,
  "cm:px": converter.cmToPx,

  "px:in": converter.pxToIn,
  "in:px": converter.inToPx,

  "px:vw": converter.pxToVw,
  "vw:px": converter.vwToPx,

  "px:vh": converter.pxToVh,
  "vh:px": converter.vhToPx,
};

// ============================
//      EJECUTAR CONVERSIÓN
// ============================

const route = `${unit}:${targetUnit}`;

if (!conversions[route]) {
  error(`Conversión no soportada: ${unit} → ${targetUnit}`);
  process.exit(1);
}

try {
  const result = conversions[route](value)

