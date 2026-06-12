
import React from 'react';
import HeaderNavigation from '@/components/HeaderNavigation';
import ToolInterface from './tool-interface';
import { generateMetadata } from '@/lib/seo';
import { LINK_MAP } from '@/linkMap';

export const metadata = generateMetadata({
  title: "Text Escape & Unescape Online - JSON, HTML, JavaScript, URL, XML, CSV",
  description:
    "Escape or unescape strings for common formats and languages: JSON, HTML entities, JavaScript, C#, Java, URL encoding, XML, and CSV. Great for preparing safe literals and debugging escapes. Use the free Text Escape Tool on GitOpenTools.",
  keywords: "text escape tool, unescape text, json string escape, html escape entities, javascript string escape, csharp string escape, java string escape, url encode decode, xml escape, csv escape quotes, escape special characters, GitOpenTools text escape",
  path: LINK_MAP.tools.textEscape,
  openGraph: {
    title: "Text Escape Tool - Escape/Unescape Strings Fast | GitOpenTools",
    description:
      "Escape strings for JSON, HTML, JavaScript, URL, XML, and CSV. Copy results instantly and debug escapes faster with GitOpenTools.",
  },
  twitter: {
    title: "Text Escape & Unescape Tool",
    description:
      "Escape JSON/HTML/JS/URL/XML/CSV strings quickly. Free developer utility on GitOpenTools.",
  },
});

const TextEscapePage = () => {
  const pageTitle = "Text Escape & Unescape Online - JSON, HTML, JavaScript, URL, XML, CSV";
  const pageDescription =
    "Escape or unescape strings for common formats and languages: JSON, HTML entities, JavaScript, C#, Java, URL encoding, XML, and CSV. Great for preparing safe literals and debugging escapes. Use the free Text Escape Tool on GitOpenTools.";
  const pageUrl = "https://www.gitopentools.com/tools/text/escape";

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
        "name": "String escaping"
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
          "name": "Text Tools",
          "item": "https://www.gitopentools.com/tools/text"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Text Escape",
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
          "name": "What is text escaping?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Text escaping replaces special characters with safe sequences so a string can be used in a specific context, such as JSON, HTML, JavaScript, or URLs, without breaking parsing."
          }
        },
        {
          "@type": "Question",
          "name": "When should I escape vs unescape?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Escape when you need a safe literal for code or data formats. Unescape when you are reading a string that already contains escape sequences and you want the original human-readable text."
          }
        },
        {
          "@type": "Question",
          "name": "Does this tool support JSON, HTML, JavaScript, and URL encoding?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. You can switch modes to escape or unescape strings for JSON, HTML entities, JavaScript/C#/Java-style strings, URL encoding, XML, and CSV."
          }
        },
        {
          "@type": "Question",
          "name": "Is the Text Escape Tool free on GitOpenTools?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. It is free to use with no sign-up and no installation required."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Text Escape Tool",
      "url": pageUrl,
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "Web",
      "description": "Free online text escape and unescape tool for JSON, HTML, JavaScript, C#, Java, URL encoding, XML, and CSV. Convert strings safely and quickly with GitOpenTools.",
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
      {/* Main Content Area */}
      <section>
        {/* Header */}
        <HeaderNavigation title="Text Escape Tool" description="Escape and unescape text for various programming languages" />

        {/* Content */}
        <div className='flex-1 overflow-auto p-6 space-y-6'>

          {/* Tool interface */}
          <ToolInterface />

          <article className="tool-card rounded-xl p-6 space-y-8">
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">What is Text Escape Tool?</h2>
              <p className="text-gray-600 leading-7">
                Text Escape Tool helps you convert special characters into safe escape sequences for a chosen context, then undo that
                transformation when needed. It is useful when moving strings between code, markup, URLs, and data formats where quotes,
                newlines, and symbols can break parsing.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">How to use Text Escape Tool</h2>
              <ol className="list-decimal pl-6 space-y-2 text-gray-600 leading-7">
                <li>Paste your string into the input area.</li>
                <li>Select a mode (JSON, HTML, JavaScript, C#, Java, URL, XML, CSV).</li>
                <li>Choose whether to show escaped output, unescaped output, or both.</li>
                <li>Copy or download the result for your code or documentation.</li>
              </ol>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">When to use Text Escape Tool</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-7">
                <li>When building JSON strings or logs that contain quotes, newlines, or backslashes.</li>
                <li>When preparing HTML-safe text to avoid breaking markup or rendering entities.</li>
                <li>When URL-encoding query values for links, webhooks, or API calls.</li>
                <li>When cleaning CSV fields that include commas, quotes, or line breaks.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">Why use GitOpenTools?</h2>
              <p className="text-gray-600 leading-7">
                GitOpenTools is built for fast developer workflows. Escape and unescape strings directly in the browser with no install,
                no account, and no cost. It is a simple way to avoid subtle escaping bugs and keep your data consistent.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">FAQ</h2>

              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-gray-900">What is text escaping?</h3>
                <p className="text-gray-600 leading-7">
                  Escaping converts special characters into safe sequences so the string can be parsed correctly in a target format.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-gray-900">When should I escape vs unescape?</h3>
                <p className="text-gray-600 leading-7">
                  Escape when you are producing a safe literal for a format like JSON or HTML. Unescape when you need the original text.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-gray-900">Does this tool support JSON, HTML, JavaScript, and URL encoding?</h3>
                <p className="text-gray-600 leading-7">
                  Yes. Switch modes to handle JSON, HTML entities, JavaScript/C#/Java strings, URL encoding, XML, and CSV.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-gray-900">Is the Text Escape Tool free on GitOpenTools?</h3>
                <p className="text-gray-600 leading-7">
                  Yes. It is free to use with no sign-up and nothing to install.
                </p>
              </div>
            </section>
          </article>

        </div>
      </section>

    </>
  );
};

export default TextEscapePage;
