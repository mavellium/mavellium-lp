const fs = require("fs");
const path = require("path");

const outDir = path.join(process.cwd(), "out");

function fixLinks(dir) {
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const itemPath = path.join(dir, item);
    const stat = fs.statSync(itemPath);

    if (stat.isDirectory()) {
      fixLinks(itemPath);
    } else if (item.endsWith(".html")) {
      let html = fs.readFileSync(itemPath, "utf-8");

      // Corrige apenas links internos que não são arquivos estáticos
      html = html.replace(/href="\/([^"\/#\?]+)(\/)?"/g, (match, p1) => {
        // Ignora arquivos e recursos estáticos
        if (
          p1.match(/\.(html|js|css|png|jpg|jpeg|svg|webp|gif|ico|pdf|mp4|txt|xml|json)$/i) ||
          p1.startsWith("http") ||
          p1.startsWith("mailto:") ||
          p1.startsWith("tel:") ||
          p1.startsWith("#")
        ) {
          return match;
        }

        return `href="/${p1}.html"`;
      });

      fs.writeFileSync(itemPath, html, "utf-8");
      console.log(`🔗 Corrigido: ${itemPath}`);
    }
  }
}

fixLinks(outDir);
console.log("\n🎉 Links internos atualizados corretamente (sem afetar imagens ou assets)!");
