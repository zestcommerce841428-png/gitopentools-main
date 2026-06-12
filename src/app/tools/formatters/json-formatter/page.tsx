
import "./styles.css";
import React from 'react';
import HeaderNavigation from '@/components/HeaderNavigation';
import ToolInterface from './tool-interface';
import { generateMetadata } from '@/lib/seo';
import { LINK_MAP } from "@/linkMap";

export const metadata = generateMetadata({
  title: "JSON Formatter Online - Beautify, Validate & Minify JSON Free",
  description:
    "Format JSON online, validate JSON syntax, beautify messy payloads, and minify JSON for production. Free JSON formatter for developers to debug APIs faster and keep data readable. Try it now on GitOpenTools.",
  keywords: "json formatter online, free json formatter, json beautifier, json validator, minify json, pretty print json, format json online, validate json online, json parser, json viewer, api response formatter, developer json tool, online json editor, GitOpenTools json formatter",
  path: LINK_MAP.tools.formatters.json,
  openGraph: {
    title: "Free JSON Formatter Online for Developers | GitOpenTools",
    description:
      "Beautify, validate, pretty print, and minify JSON in seconds. Clean up API responses and catch JSON syntax errors with GitOpenTools.",
  },
  twitter: {
    title: "JSON Formatter Online: Beautify, Validate & Minify",
    description:
      "Free JSON formatter to make payloads readable, validate syntax, and minify data fast. Try the JSON tool on GitOpenTools.",
  },
});

const JsonFormatterPage = () => {
  const pageTitle = "JSON Formatter Online - Beautify, Validate & Minify JSON Free";
  const pageDescription =
    "Format JSON online, validate JSON syntax, beautify messy payloads, and minify JSON for production. Free JSON formatter for developers to debug APIs faster and keep data readable. Try it now on GitOpenTools.";
  const pageUrl = "https://www.gitopentools.com/tools/formatters/json-formatter";

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
        "name": "JSON formatting and validation"
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
          "name": "Formatters",
          "item": "https://www.gitopentools.com/tools/formatters"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "JSON Formatter",
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
          "name": "What is a JSON formatter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A JSON formatter makes JSON easier to read by adding proper indentation and line breaks. It also helps developers inspect API responses, debug payloads, and spot structure issues faster."
          }
        },
        {
          "@type": "Question",
          "name": "Can I validate JSON online with this tool?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. This JSON formatter validates JSON syntax in your browser, helping you catch invalid JSON before you use it in applications, APIs, or configuration files."
          }
        },
        {
          "@type": "Question",
          "name": "Can this tool minify JSON for production use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. You can minify JSON to remove unnecessary whitespace and reduce payload size, which is useful when preparing data for production environments or performance-sensitive workflows."
          }
        },
        {
          "@type": "Question",
          "name": "Is this JSON formatter free to use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. GitOpenTools provides this free JSON formatter online so you can beautify, validate, and minify JSON quickly without installing extra software."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "JSON Formatter Online",
      "url": pageUrl,
      "applicationCategory": "Utility",
      "description": "Free online JSON formatter to beautify, validate, pretty print, and minify JSON. Clean up API payloads, catch JSON syntax errors, and make data easier to read with GitOpenTools.",
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
      },
      "operatingSystem": "Web"
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
        <HeaderNavigation title="JSON Formatter" description="Format, validate, and beautify JSON data" />

        {/* Content */}
        <div className='flex-1 overflow-auto p-6 space-y-6'>

          {/* Tool interface */}
          <ToolInterface />

          <article className="tool-card rounded-xl p-6 space-y-8">
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">What is JSON Formatter?</h2>
              <p className="text-gray-600 leading-7">
                JSON Formatter is a free online tool that helps you format, validate, beautify, and minify JSON data in seconds.
                It turns unreadable API payloads and raw JSON strings into clean, structured output so you can debug faster and
                work with data more confidently.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">How to use JSON Formatter</h2>
              <ol className="list-decimal pl-6 space-y-2 text-gray-600 leading-7">
                <li>Paste your JSON into the input panel, or load the sample JSON to test the tool.</li>
                <li>Choose your preferred format option: 2 spaces, 4 spaces, or minify.</li>
                <li>Click <span className="font-medium text-gray-900">Format JSON</span> to validate and transform the content.</li>
                <li>Review the formatted output, then copy or download the result for your workflow.</li>
              </ol>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">When to use JSON Formatter</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-7">
                <li>When an API response is hard to read and you need clean indentation fast.</li>
                <li>When you want to validate JSON syntax before sending data to an app, API, or config file.</li>
                <li>When you need to minify JSON for production payloads or performance-sensitive delivery.</li>
                <li>When debugging nested objects, arrays, or malformed JSON from logs and third-party services.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">Why use GitOpenTools?</h2>
              <p className="text-gray-600 leading-7">
                GitOpenTools is built for fast everyday developer workflows. You can format JSON directly in your browser with a
                privacy-first experience, no installation, no account setup, and no cost. It is a simple way to clean up data,
                catch syntax errors, and move on with your work faster.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">FAQ</h2>

              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-gray-900">What is a JSON formatter?</h3>
                <p className="text-gray-600 leading-7">
                  A JSON formatter makes JSON easier to read by adding indentation and line breaks. It helps developers inspect API
                  responses, debug payloads, and understand data structures more quickly.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-gray-900">Can I validate JSON online with this tool?</h3>
                <p className="text-gray-600 leading-7">
                  Yes. The tool checks whether your JSON is valid and highlights syntax problems before you use the data elsewhere.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-gray-900">Can this tool minify JSON for production use?</h3>
                <p className="text-gray-600 leading-7">
                  Yes. You can switch to the minify option to remove unnecessary whitespace and generate compact JSON output for
                  production use.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-gray-900">Is this JSON formatter free to use?</h3>
                <p className="text-gray-600 leading-7">
                  Yes. GitOpenTools provides this JSON formatter for free, with no install and no sign-up required.
                </p>
              </div>
            </section>
          </article>

        </div>
      </section>

    </>
  );
};

export default JsonFormatterPage;
