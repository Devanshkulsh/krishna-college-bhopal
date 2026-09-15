import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  DEFAULT_IMAGE,
  PRIMARY_KEYWORDS,
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

const removeJsonLd = (id) => {
  const element = document.getElementById(id);

  if (element) {
    element.remove();
  }
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
    const resolvedCanonicalPath = metadata.canonicalPath || canonicalPath;
    const canonicalUrl = `${SITE_URL}${resolvedCanonicalPath === "/" ? "/" : resolvedCanonicalPath}`;
    const imageUrl = `${SITE_URL}${metadata.image || DEFAULT_IMAGE}`;
    const keywords = [...new Set([...PRIMARY_KEYWORDS, ...(metadata.keywords || [])])].join(", ");

    document.title = title;
    document.documentElement.lang = "en-IN";

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[name="keywords"]', "content", keywords);
    setMeta('meta[name="robots"]', "content", "index, follow");
    setMeta('meta[name="googlebot"]', "content", "index, follow, max-image-preview:large");
    setMeta('meta[name="geo.region"]', "content", "IN-MP");
    setMeta('meta[name="geo.placename"]', "content", "Chhatarpur, Madhya Pradesh");
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
      keywords,
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: imageUrl,
      },
    });

    if (resolvedCanonicalPath !== "/") {
      setJsonLd("breadcrumb-schema", buildBreadcrumbs(resolvedCanonicalPath));
    } else {
      removeJsonLd("breadcrumb-schema");
    }

    if (resolvedCanonicalPath === "/") {
      setJsonLd("course-schema", {
        "@context": "https://schema.org",
        "@type": "Course",
        name: "Bachelor of Ayurvedic Medicine and Surgery (BAMS)",
        description:
          "BAMS course with Ayurvedic education, practical learning, clinical exposure and hospital-based training at Shri Krishna Ayurvedic Hospital, Chhatarpur.",
        provider: {
          "@type": "EducationalOrganization",
          name: SITE_NAME,
          sameAs: `${SITE_URL}/`,
        },
      });
    } else {
      removeJsonLd("course-schema");
    }
  }, [pathname]);

  return null;
};

export default SEO;
