# 🧮 design-unit-converter

Conversor profesional de unidades usado en diseño web y visual.

Convierte entre:
- px ↔ rem  
- px ↔ em  
- px ↔ %  
- px ↔ pt  
- px ↔ mm  

## 📦 Instalación

```bash
npm install design-unit-converter
```

## 🧪 Uso

```js
const converter = require("design-unit-converter");

console.log(converter.pxToRem(32));      // 2
console.log(converter.remToPx(2));       // 32
console.log(converter.pxToMm(10));       // 2.6455
console.log(converter.mmToPx(1));        // 3.78
```

## 📝 License  
MIT
