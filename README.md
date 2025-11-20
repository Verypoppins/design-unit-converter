# 🧮 design-unit-converter  
**Un conversor de unidades rápido, sencillo y perfecto para diseño web.**  
Creado por **Verypoppins** ✨

![npm version](https://img.shields.io/npm/v/design-unit-converter)
![downloads](https://img.shields.io/npm/dm/design-unit-converter)
![license](https://img.shields.io/npm/l/design-unit-converter)

---

## ✨ ¿Qué es esto?

`design-unit-converter` es un paquete ligero pensado para diseñadores y frontends que necesitan convertir unidades de forma rápida y fiable:

- px ↔ rem  
- px ↔ em  
- px ↔ %  
- px ↔ pt  
- px ↔ mm  

Incluye también una **CLI global** para usar el conversor directamente desde tu terminal:

```
duc 32px --to rem
```

→ devuelve `2rem`

---

# 📦 Instalación

### **Como dependencia en tu proyecto**

```bash
npm install design-unit-converter
```

### **Instalación global para usar la CLI**

```bash
npm install -g design-unit-converter
```

---

# 🧪 Uso en JavaScript

```js
const converter = require("design-unit-converter");

console.log(converter.pxToRem(32));   // 2
console.log(converter.remToPx(2));    // 32
console.log(converter.pxToMm(10));    // 2.6455
console.log(converter.mmToPx(1));     // 3.78
console.log(converter.pxToPt(16));    // 12.0045
```

---

# 💻 Uso desde la terminal (CLI)

Una vez instalado globalmente:

```bash
duc 32px --to rem
```

Resultado:

```
2rem
```

Otro ejemplo:

```bash
duc 10mm --to px
```

Resultado:

```
37.8px
```

---

# 🔄 Conversores disponibles

| Conversión | Función |
|-----------|----------|
| px → rem | `pxToRem(px)` |
| rem → px | `remToPx(rem)` |
| px → em | `pxToEm(px)` |
| em → px | `emToPx(em)` |
| px → % | `pxToPercent(px, parent)` |
| % → px | `percentToPx(percent, parent)` |
| px → pt | `pxToPt(px)` |
| pt → px | `ptToPx(pt)` |
| px → mm | `pxToMm(px)` |
| mm → px | `mmToPx(mm)` |

---

# 🛠️ Tecnologías utilizadas

- Node.js
- Semantic Release (versionado automático)
- GitHub Actions
- NPM Registry

---

# 🧑‍🎨 Creado por

**Verypoppins**  
Diseño · Frontend · Creatividad ✨  
GitHub: https://github.com/Verypoppins

---

# 📄 Licencia
MIT — Eres libre de usarlo y modificarlo.

