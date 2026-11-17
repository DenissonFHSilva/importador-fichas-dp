// Copia as bibliotecas para www/vendor (o app funciona 100% offline)
const fs = require("fs"), path = require("path");
const copia = (de, para) => fs.copyFileSync(path.join("node_modules", de), path.join("www", "vendor", para));
fs.mkdirSync("www/vendor", { recursive: true });
copia("pdfjs-dist/build/pdf.min.js", "pdf.min.js");
copia("pdfjs-dist/build/pdf.worker.min.js", "pdf.worker.min.js");
copia("xlsx/dist/xlsx.full.min.js", "xlsx.full.min.js");
console.log("vendor ok");
