#!/usr/bin/env node

// Importar chalk (ESM) desde CommonJS
let chalk;
(async () => {
  chalk = (await import("chalk")).default;
  startCLI();
})();

// ============ CLI LOGIC ============

function startCLI() {
  const converter = require("../index.js");

  function showHelp() {
    console.log(`
${chalk.magenta.bold("✨ Design Unit Converter (duc)")}
Convierte unidades de diseño web fácilmente.

${chalk.cyan("USO:")}
  duc <valor><unidad> --to <unidad_destino>

${chalk.cyan("EJEMPLOS:")}
  duc 32px --to rem
  duc 2.5rem --to px
  duc 120px --to vw
  duc 3cm --to px
  duc 96px --to in

${chalk.cyan("UNIDADES SOPORTADAS:")}
  px, rem, em, %, pt, mm, cm, in, vw, vh

${chalk.cyan("AYUDA:")}
  duc --help   Muestra esta ayuda
`);
  }

  // Si el usuario pide help
  if (process.argv.includes("--help") || process.argv.includes("-h")) {
    showHelp();
    process.exit(0);
  }

  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log(chalk.red("❌ Error: Debes introducir un valor."));
    console.log("Ejemplo: duc 32px --to rem");
    process.exit(1);
  }

  const input = args[0];
  const toIndex = args.indexOf("--to");

  if (toIndex === -1) {
    console.log(chalk.red("❌ Error: Falta el parámetro --to"));
    console.log("Ejemplo: duc 32px --to rem");
    process.exit(1);
  }

  const targetUnit = args[toIndex + 1];
  if (!targetUnit) {
    console.log(chalk.red("❌ Error: Debes especificar la unidad destino."));
    process.exit(1);
  }

  const match = input.match(/([\d.]+)(px|rem|em|pt|mm|cm|in|vw|vh|%)/i);

  if (!match) {
    console.log(chalk.red("❌ Formato inválido."));
    console.log("Ejemplo válido: 32px, 1.5rem, 50%, 2cm, 96px…");
    process.exit(1);
  }

  const value = parseFloat(match[1]);
  const unit = match[2].toLowerCase();

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

  const route = `${unit}:${targetUnit}`;

  if (!conversions[route]) {
    console.log(chalk.red(`❌ Conversión no soportada: ${unit} → ${targetUnit}`));
    console.log("Usa: duc --help");
    process.exit(1);
  }

  try {
    const result = conversions[route](value);
    console.log(chalk.green.bold(`✔ Resultado: ${result}${targetUnit}`));
  } catch (err) {
    console.log(chalk.red("❌ Error interno durante la conversión."));
    console.error(err);
    process.exit(1);
  }
}

