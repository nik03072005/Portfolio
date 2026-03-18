import fs from "node:fs";
import path from "node:path";

const sitemapPath = path.resolve(process.cwd(), "public", "sitemap.xml");
const today = new Date().toISOString().slice(0, 10);

const xml = fs.readFileSync(sitemapPath, "utf8");

const resumeLoc = "https://nikhilchandra.tech/resume.pdf";
const resumeBlockPattern = new RegExp(
  `<url>\\s*<loc>${resumeLoc}\\/?</loc>([\\s\\S]*?)</url>`
);

if (!resumeBlockPattern.test(xml)) {
  throw new Error("Resume URL not found in sitemap.xml");
}

const updatedXml = xml.replace(resumeBlockPattern, (match, inner) => {
  if (inner.includes("<lastmod>")) {
    return match.replace(/<lastmod>[^<]*<\/lastmod>/, `<lastmod>${today}</lastmod>`);
  }
  return match.replace(
    `<loc>${resumeLoc}</loc>`,
    `<loc>${resumeLoc}</loc>\n    <lastmod>${today}</lastmod>`
  );
});

if (updatedXml !== xml) {
  fs.writeFileSync(sitemapPath, updatedXml, "utf8");
}
