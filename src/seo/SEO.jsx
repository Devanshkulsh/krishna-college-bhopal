import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  DEFAULT_IMAGE,
  SITE_NAME,
  SITE_URL,
  aliasCanonicalMap,
  organizationSchema,
  routeMetadata,
} from "./siteMetadata";

const setMeta = (selector, attribute, value) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");

    if (selector.includes("property=")) {
      element.setAttribute("property", selector.match(/property="([^"]+)"/)?.[1] || "");
    } else {
      element.setAttribute("name", selector.match(/name="([^"]+)"/)?.[1] || "");
    }

    document.head.appendChild(element);
  }

  element.setAttribute(attribute, value);
};

const setLink = (rel, href) => {
  let element = document.head.querySelector(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
};

const setJsonLd = (id, data) => {
  let element = document.getElementById(id);

  if (!element) {
    element = document.createElement("script");
    element.id = id;
    element.type = "application/ld+json";
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data);
};

const buildBreadcrumbs = (pathname) => {
  const segments = pathname.split("/").filter(Boolean);
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE_URL}/`,
    },
  ];

  segments.forEach((segment, index) => {
    const urlPath = `/${segments.slice(0, index + 1).join("/")}`;
    items.push({
      "@type": "ListItem",
      position: index + 2,
      name: segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      item: `${SITE_URL}${urlPath}`,
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
};

const SEO = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPath = pathname === "" ? "/" : pathname;
    const canonicalPath = aliasCanonicalMap[normalizedPath] || normalizedPath;
    const metadata =
      routeMetadata[canonicalPath] ||
      routeMetadata[normalizedPath] ||
      routeMetadata["/"];

    const title = metadata.title;
    const description = metadata.description;
    const canonicalUrl = `${SITE_URL}${canonicalPath === "/" ? "/" : canonicalPath}`;
    const imageUrl = `${SITE_URL}${metadata.image || DEFAULT_IMAGE}`;

    document.title = title;

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[name="robots"]', "content", "index, follow");
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:type"]', "content", metadata.type || "website");
    setMeta('meta[property="og:url"]', "content", canonicalUrl);
    setMeta('meta[property="og:site_name"]', "content", SITE_NAME);
    setMeta('meta[property="og:image"]', "content", imageUrl);
    setMeta('meta[property="og:image:alt"]', "content", `${SITE_NAME} ${metadata.title}`);
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", imageUrl);
    setLink("canonical", canonicalUrl);

    setJsonLd("organization-schema", organizationSchema);
    setJsonLd("website-schema", {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      publisher: {
        "@type": "EducationalOrganization",
        name: SITE_NAME,
      },
    });

    setJsonLd("webpage-schema", {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      description,
      url: canonicalUrl,
      isPartOf: {
        "@type": "WebSite",
        name: SITE_NAME,
        url: `${SITE_URL}/`,
      },
      about: {
        "@type": "EducationalOrganization",
        name: SITE_NAME,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: imageUrl,
      },
    });

    if (canonicalPath !== "/") {
      setJsonLd("breadcrumb-schema", buildBreadcrumbs(canonicalPath));
    }
  }, [pathname]);

  return null;
};

export default SEO;
