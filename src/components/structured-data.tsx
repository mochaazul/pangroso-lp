import { BUSINESS, CONTACT, FAQ, PRICING, RATING, SITE } from "@/lib/site";

/** "Rp 46.000" -> 46000 */
function toNumber(price: string) {
  return Number(price.replace(/[^\d]/g, ""));
}

/**
 * JSON-LD structured data: Organization + WebSite + Product.
 * Rendered as a <script type="application/ld+json"> so Google can show rich
 * results (brand info, price range, optional rating stars) for the page.
 */
export function StructuredData() {
  const customerPrices = PRICING.rows.map((r) => toNumber(r.customer)).filter(Boolean);
  const lowPrice = Math.min(...customerPrices);
  const highPrice = Math.max(...customerPrices);

  const organization = {
    "@type": "Organization",
    "@id": `${SITE.url}#organization`,
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/images/logo.png`,
    image: `${SITE.url}/og.jpg`,
    description: SITE.description,
    areaServed: BUSINESS.areaServed,
    sameAs: [CONTACT.instagramUrl, CONTACT.linktreeUrl],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${CONTACT.whatsappIntl}`,
      contactType: "sales",
      areaServed: "ID",
      availableLanguage: ["id"],
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE.url}#website`,
    url: SITE.url,
    name: SITE.name,
    inLanguage: "id-ID",
    publisher: { "@id": `${SITE.url}#organization` },
  };

  const product = {
    "@type": "Product",
    name: BUSINESS.productName,
    image: [`${SITE.url}/images/product-spices.jpg`, `${SITE.url}/images/hero-hands.jpg`],
    description: SITE.description,
    category: BUSINESS.category,
    brand: { "@type": "Brand", name: SITE.name },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "IDR",
      lowPrice,
      highPrice,
      offerCount: customerPrices.length,
      availability: "https://schema.org/InStock",
      seller: { "@id": `${SITE.url}#organization` },
    },
    // Only emitted when you set a real review count in src/lib/site.ts
    ...(RATING.count
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: RATING.value,
            reviewCount: RATING.count,
            bestRating: "5",
            worstRating: "1",
          },
        }
      : {}),
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${SITE.url}#faq`,
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [organization, website, product, faqPage],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
