import "./styles.css";
import React from 'react';
import HeaderNavigation from '@/components/HeaderNavigation';
import ToolInterface from './tool-interface';
import { generateMetadata } from '@/lib/seo';
import { LINK_MAP } from "@/linkMap";

export const metadata = generateMetadata({
  title: "URL Checker & Validator Online - HTTP Status, Redirects, and Response Time",
  description:
    "Check a URL for validity and reachability: get HTTP status code, response time, and a clear breakdown of URL parts (protocol, domain, path, query). Great for debugging redirects and broken links. Run a free URL check on GitOpenTools.",
  keywords: "url checker, url validator online, check url status code, http status checker, website availability checker, url response time checker, check redirects url, broken link checker single url, url parser breakdown, https ssl checker, GitOpenTools url checker",
  path: LINK_MAP.tools.testers.urlChecker,
  openGraph: {
    title: "URL Checker & Validator - Status Code and Response Time | GitOpenTools",
    description:
      "Validate a URL and quickly see HTTP status, response time, and URL structure details. Useful for debugging redirects and broken links with GitOpenTools.",
  },
  twitter: {
    title: "URL Checker & Validator Online",
    description:
      "Validate URLs and check reachability with status codes and response time. Free tool on GitOpenTools.",
  },
});

const URLCheckerValidatorPage = () => {
  const pageTitle = "URL Checker & Validator Online - HTTP Status, Redirects, and Response Time";
  const pageDescription =
    "Check a URL for validity and reachability: get HTTP status code, response time, and a clear breakdown of URL parts (protocol, domain, path, query). Great for debugging redirects and broken links. Run a free URL check on GitOpenTools.";
  const pageUrl = "https://www.gitopentools.com/tools/testers/url-checker-validator";

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
        "name": "URL validation and checking"
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
          "name": "Testers",
          "item": "https://www.gitopentools.com/tools/testers"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "URL Checker & Validator",
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
          "name": "What does a URL checker validate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A URL checker verifies that a URL is syntactically valid and attempts to reach it to report HTTP status, response time, and basic connection results."
          }
        },
        {
          "@type": "Question",
          "name": "Can this tool help with redirects and broken links?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Checking a URL is a fast way to spot common issues like 404 pages, 500 errors, and unexpected redirect behavior during debugging."
          }
        },
        {
          "@type": "Question",
          "name": "What details do I get about the URL structure?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can view URL parts such as protocol, domain, port, path, and query parameters, which helps when you are building or troubleshooting links."
          }
        },
        {
          "@type": "Question",
          "name": "Is the URL Checker & Validator free on GitOpenTools?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. You can validate and check URLs for free without creating an account or installing software."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "URL Checker & Validator",
      "url": pageUrl,
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "Web",
      "description": "Free online URL checker and validator to confirm reachability and inspect URL structure. Get HTTP status codes and response time to debug redirects and broken links on GitOpenTools.",
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
        <HeaderNavigation 
          title="URL Checker & Validator" 
          description="Verify website accessibility, check HTTP status codes, and analyze URL structure" 
        />

        {/* Content */}
        <div className='flex-1 overflow-auto p-6 space-y-6'>
          {/* Tool interface */}
          <ToolInterface />

          <article className="tool-card rounded-xl p-6 space-y-8">
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">What is URL Checker &amp; Validator?</h2>
              <p className="text-gray-600 leading-7">
                URL Checker &amp; Validator is a quick diagnostic tool for links. It helps you validate a URL format and check whether a
                website responds, including HTTP status codes and response time, so you can troubleshoot links faster.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">How to use URL Checker &amp; Validator</h2>
              <ol className="list-decimal pl-6 space-y-2 text-gray-600 leading-7">
                <li>Paste a full URL (including https://) into the input field.</li>
                <li>Click <span className="font-medium text-gray-900">Check URL</span> to validate and run the check.</li>
                <li>Review the HTTP status and response time to confirm reachability.</li>
                <li>Inspect URL details (protocol, domain, path, query) to catch formatting issues.</li>
              </ol>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">When to use URL Checker &amp; Validator</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-7">
                <li>When debugging broken links, unexpected redirects, or mixed http/https issues.</li>
                <li>When validating URLs before putting them into configs, webhooks, or API payloads.</li>
                <li>When checking if a service endpoint is responding and how fast it responds.</li>
                <li>When verifying URL components to avoid subtle parsing mistakes.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">Why use GitOpenTools?</h2>
              <p className="text-gray-600 leading-7">
                GitOpenTools provides practical tools that are easy to access and quick to use. Validate and check URLs directly in the
                browser with no install and no account. It is a simple way to investigate link issues and move forward with confidence.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">FAQ</h2>

              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-gray-900">What does a URL checker validate?</h3>
                <p className="text-gray-600 leading-7">
                  It checks URL syntax and then attempts to reach the URL to report status and timing information.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-gray-900">Can this tool help with redirects and broken links?</h3>
                <p className="text-gray-600 leading-7">
                  Yes. Status codes and reachability checks are a fast way to find 404s, server errors, and redirect-related issues.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-gray-900">What details do I get about the URL structure?</h3>
                <p className="text-gray-600 leading-7">
                  You can see protocol, domain, port, path, and query parts, which helps you fix malformed links quickly.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-gray-900">Is the URL Checker &amp; Validator free on GitOpenTools?</h3>
                <p className="text-gray-600 leading-7">
                  Yes. It is free to use with no sign-up and no installation required.
                </p>
              </div>
            </section>
          </article>
        </div>
      </section>
    </>
  );
};

export default URLCheckerValidatorPage;
