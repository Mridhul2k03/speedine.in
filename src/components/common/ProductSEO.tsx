import { useEffect } from "react";

interface ProductSEOProps {
  name: string;
  description: string;
  image: string;
  price?: number;
  url?: string;
}

/**
 * Injects per-product SEO meta tags into <head>:
 * - document.title
 * - og:title, og:description, og:image, og:url, og:type
 * - twitter:card, twitter:title, twitter:description, twitter:image
 *
 * Tags are cleaned up when the component unmounts.
 */
const ProductSEO = ({ name, description, image, price, url }: ProductSEOProps) => {
  useEffect(() => {
    if (!name) return;

    const siteTitle = "SpeeD'ine | ";
    const fullTitle = siteTitle + name;
    const pageUrl = url || window.location.href;
    const shortDesc = description?.slice(0, 160) || `Buy ${name} at SpeeD'ine`;

    // Tab title
    document.title = fullTitle;

    const setMeta = (property: string, content: string, attr = "property") => {
      let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${property}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, property);
        el.setAttribute("data-product-seo", "true");
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Open Graph
    setMeta("og:type",        "product");
    setMeta("og:title",       fullTitle);
    setMeta("og:description", shortDesc);
    setMeta("og:image",       image);
    setMeta("og:url",         pageUrl);
    if (price) setMeta("og:price:amount", String(price));
    setMeta("og:price:currency", "INR");

    // Twitter Card
    setMeta("twitter:card",        "summary_large_image", "name");
    setMeta("twitter:title",       fullTitle,             "name");
    setMeta("twitter:description", shortDesc,             "name");
    setMeta("twitter:image",       image,                 "name");

    // Standard meta description
    setMeta("description", shortDesc, "name");

    // Cleanup on unmount
    return () => {
      document.title = "SpeeD'ine | Authentic Kerala Spices";
      document
        .querySelectorAll("meta[data-product-seo]")
        .forEach((el) => el.remove());
    };
  }, [name, description, image, price, url]);

  return null;
};

export default ProductSEO;
