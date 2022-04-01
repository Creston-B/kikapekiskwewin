import * as fs from "fs";

const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  const BASE_URL = "https://www.kikpekiskwewin.ca";

  const staticPaths = fs
    .readdirSync(
      {
        development: "pages",
        production: "./.next/server/pages",
      }[process.env.NODE_ENV]
    )
    .filter((staticPage) => {
      return ![
        "api",
        "_app.js",
        "_document.js",
        "_error.js",
        "404.js",
        "404.html",
        "sitemap.xml.js",
        "__next_launcher",
        "__vc_bridge.js",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${BASE_URL}/${staticPagePath}`;
    });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPaths
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
