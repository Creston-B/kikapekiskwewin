const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  const BASE_URL = "http://kikpekiskwewin.ca";

  const sitemap = `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!--  created with Free Online Sitemap Generator www.xml-sitemaps.com  -->
<url>
<loc>https://www.kikapekiskwewin.ca/</loc>
<lastmod>2022-04-01T14:47:32+00:00</lastmod>
<priority>1.00</priority>
</url>
<url>
<loc>https://www.kikapekiskwewin.ca/location</loc>
<lastmod>2022-04-01T14:47:32+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://www.kikapekiskwewin.ca/people</loc>
<lastmod>2022-04-01T14:47:32+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://www.kikapekiskwewin.ca/schedule</loc>
<lastmod>2022-04-01T14:47:32+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://www.kikapekiskwewin.ca/register</loc>
<lastmod>2022-04-01T14:47:32+00:00</lastmod>
<priority>0.80</priority>
</url>
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
