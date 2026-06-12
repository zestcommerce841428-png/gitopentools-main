import "./styles.css";
import React from 'react';
import HeaderNavigation from '@/components/HeaderNavigation';
import ToolInterface from './tool-interface';
import { generateMetadata } from '@/lib/seo';
import { LINK_MAP } from "@/linkMap";

export const metadata = generateMetadata({
  title: "UUID Generator Online - UUID v4, v1, v7 (RFC 4122) Free",
  description:
    "Generate UUIDs in bulk with flexible formats (hyphens, uppercase, braces, URN) and versions v4, v1, v7. Ideal for APIs, databases, and correlation IDs. Create UUIDs instantly on GitOpenTools.",
  keywords: "uuid generator online, uuid v4 generator, uuid v1 generator, uuid v7 generator, rfc 4122 uuid, bulk uuid generator, generate uuid list, uuid format braces urn, correlation id generator, api request id, database uuid primary key, GitOpenTools uuid generator",
  path: LINK_MAP.tools.generators.uuid,
  openGraph: {
    title: "Free UUID Generator (v4, v1, v7) - Bulk & Formats | GitOpenTools",
    description:
      "Generate RFC 4122 UUIDs fast: pick version, quantity, and output format. Great for APIs, database keys, and tracing IDs. Try GitOpenTools.",
  },
  twitter: {
    title: "UUID Generator Online (v4/v1/v7)",
    description:
      "Generate RFC-compliant UUIDs in bulk with multiple formats. Fast, developer-friendly, and free on GitOpenTools.",
  },
});

const UUIDGeneratorPage = () => {
  const pageTitle = "UUID Generator Online - UUID v4, v1, v7 (RFC 4122) Free";
  const pageDescription =
    "Generate UUIDs in bulk with flexible formats (hyphens, uppercase, braces, URN) and versions v4, v1, v7. Ideal for APIs, databases, and correlation IDs. Create UUIDs instantly on GitOpenTools.";
  const pageUrl = "https://www.gitopentools.com/tools/generators/uuid-generator";

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": pageTitle,
      "headline": pageTitle,
      "description": pageDescription,
      "url": pageUrl,
      "isPartOf": {
        "@type": "WebSite",
        "name": "GitOpenTools",
        "url": "https://www.gitopentools.com"
      },
      "about": {
        "@type": "Thing",
        "name": "UUID generation"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.gitopentools.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Tools",
          "item": "https://www.gitopentools.com/tools"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Generators",
          "item": "https://www.gitopentools.com/tools/generators"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "UUID Generator",
          "item": pageUrl
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is this UUID generator RFC 4122 compliant?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The tool generates UUIDs that follow the RFC 4122 format and are suitable for APIs, databases, and distributed systems."
          }
        },
        {
          "@type": "Question",
          "name": "Which UUID version should I pick: v4, v1, or v7?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "UUID v4 is a solid default for most applications. Use v1 if you specifically need time-based UUIDs. Use v7 when you want time-ordered UUIDs that can be more index-friendly in some database workloads."
          }
        },
        {
          "@type": "Question",
          "name": "Can I generate UUIDs in bulk and export them?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. You can generate up to 100 UUIDs at a time and output them in different formats like one per line, comma-separated, or JSON array."
          }
        },
        {
          "@type": "Question",
          "name": "Is UUID generation done in the browser?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. UUIDs are generated client-side in your browser, which is useful when you want fast output without sending data to a server."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "UUID Generator",
      "url": pageUrl,
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "Web",
      "description": "Free online UUID generator for RFC 4122 UUID v4, v1, and v7 with bulk output and flexible formats (hyphens, braces, URN). Generate identifiers for APIs, databases, and tracing on GitOpenTools.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "url": pageUrl
      },
      "creator": {
        "@type": "Organization",
        "name": "GitOpenTools",
        "url": "https://www.gitopentools.com"
      }
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      
      <section>
        {/* Header */}
        <HeaderNavigation 
          title="UUID Generator" 
          description="Generate RFC-compliant UUIDs instantly for databases, APIs, and distributed systems." 
        />

        {/* Content */}
        <div className='flex-1 overflow-auto p-6 space-y-6'>
          {/* Tool interface */}
          <ToolInterface />

          <article className="tool-card rounded-xl p-6 space-y-8">
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">What is UUID Generator?</h2>
              <p className="text-gray-600 leading-7">
                UUID Generator is a free online tool for creating RFC 4122 UUIDs you can use as unique IDs across services and systems.
                It is designed for practical dev workflows: generate one ID or a whole batch with the exact output format you need.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">How to use UUID Generator</h2>
              <ol className="list-decimal pl-6 space-y-2 text-gray-600 leading-7">
                <li>Select a UUID version (v4, v1, or v7) based on your use case.</li>
                <li>Choose quantity (up to 100) and output options like hyphens, uppercase, braces, or URN.</li>
                <li>Optional: pick an output format (one per line, comma-separated, or JSON array).</li>
                <li>Click <span className="font-medium text-gray-900">Generate UUIDs</span>, then copy or clear the list.</li>
              </ol>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">When to use UUID Generator</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-7">
                <li>When you need request IDs or correlation IDs for tracing across microservices.</li>
                <li>When generating identifiers for API resources, events, logs, or background jobs.</li>
                <li>When preparing UUID primary keys for databases or seed data scripts.</li>
                <li>When you want time-ordered IDs (v7) to help with some indexing patterns.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">Why use GitOpenTools?</h2>
              <p className="text-gray-600 leading-7">
                GitOpenTools gives you fast developer utilities without extra setup. Generate UUIDs directly in the browser with no
                installation and no account. It is a quick way to produce clean, shareable identifiers and keep your workflow moving.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">FAQ</h2>

              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-gray-900">Is this UUID generator RFC 4122 compliant?</h3>
                <p className="text-gray-600 leading-7">
                  Yes. The generated UUIDs follow the RFC 4122 format and work across common systems and libraries.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-gray-900">Which UUID version should I pick: v4, v1, or v7?</h3>
                <p className="text-gray-600 leading-7">
                  v4 is a good default. v1 is time-based. v7 is time-ordered and can be helpful if you want sortable IDs by creation time.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-gray-900">Can I generate UUIDs in bulk and export them?</h3>
                <p className="text-gray-600 leading-7">
                  Yes. Generate up to 100 UUIDs and output them as lines, comma-separated text, or a JSON array.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-gray-900">Is UUID generation done in the browser?</h3>
                <p className="text-gray-600 leading-7">
                  Yes. UUIDs are generated client-side, which keeps the experience fast and simple.
                </p>
              </div>
            </section>
          </article>
        </div>
      </section>
    </>
  );
};

export default UUIDGeneratorPage;
