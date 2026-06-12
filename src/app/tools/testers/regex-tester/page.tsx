import "./styles.css";
import React from 'react';
import HeaderNavigation from '@/components/HeaderNavigation';
import ToolInterface from './tool-interface';
import { generateMetadata } from '@/lib/seo';
import { LINK_MAP } from "@/linkMap";

export const metadata = generateMetadata({
  title: "Regex Tester Online - Debug JavaScript RegExp Matches in Real Time",
  description:
    "Test regular expressions against sample text with live highlighting, match counts, and RegExp flags (g, i, m, s, u). Catch invalid patterns fast and iterate quickly. Try the free Regex Tester on GitOpenTools.",
  keywords: "regex tester online, javascript regex tester, regexp tester, regex debugger, regex matcher, test regex against text, regex flags g i m s u, regex highlight matches, regex validate pattern, regex groups matches, regex quick reference, GitOpenTools regex tester",
  path: LINK_MAP.tools.testers.regex,
  openGraph: {
    title: "Regex Tester - Live Matches, Flags, and Highlights | GitOpenTools",
    description:
      "Debug JavaScript regular expressions with real-time matches and highlighting. Toggle flags, copy results, and iterate quickly with GitOpenTools.",
  },
  twitter: {
    title: "Regex Tester Online (JavaScript RegExp)",
    description:
      "Test patterns on sample text with live matches, flags, and highlighting. Free regex debugging tool on GitOpenTools.",
  },
});

const RegexTesterPage = () => {
  const pageTitle = "Regex Tester Online - Debug JavaScript RegExp Matches in Real Time";
  const pageDescription =
    "Test regular expressions against sample text with live highlighting, match counts, and RegExp flags (g, i, m, s, u). Catch invalid patterns fast and iterate quickly. Try the free Regex Tester on GitOpenTools.";
  const pageUrl = "https://www.gitopentools.com/tools/testers/regex-tester";

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
        "name": "Regular expressions"
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
          "name": "Regex Tester",
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
          "name": "What is a regex tester?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A regex tester lets you try a pattern against sample text and see matches immediately. It helps you iterate on regular expressions and catch invalid syntax quickly."
          }
        },
        {
          "@type": "Question",
          "name": "Which flags can I use in this regex tester?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "This tool supports common JavaScript RegExp flags such as g (global), i (case-insensitive), m (multiline), s (dotAll), and u (unicode)."
          }
        },
        {
          "@type": "Question",
          "name": "Does this tool support JavaScript regex syntax?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The tester is focused on JavaScript RegExp syntax and is useful for debugging patterns used in frontend and Node.js code."
          }
        },
        {
          "@type": "Question",
          "name": "Is the Regex Tester free on GitOpenTools?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. You can test and debug regex patterns for free without installing anything or creating an account."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Regex Tester",
      "url": pageUrl,
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "Web",
      "description": "Free online regex tester for JavaScript RegExp. Test patterns against text with real-time match highlighting, flag toggles, and quick reference to debug regex faster on GitOpenTools.",
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
        <HeaderNavigation title="Regex Tester" description="Test and debug regular expressions with real-time matching and highlighting" />

        {/* Content */}
        <div className='flex-1 overflow-auto p-6 space-y-6'>

          {/* Tool interface */}
          <ToolInterface />

          <article className="tool-card rounded-xl p-6 space-y-8">
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">What is Regex Tester?</h2>
              <p className="text-gray-600 leading-7">
                Regex Tester is a browser-based playground for JavaScript regular expressions. It helps you verify a pattern against
                real text, preview matches immediately, and adjust flags and syntax without repeatedly running code.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">How to use Regex Tester</h2>
              <ol className="list-decimal pl-6 space-y-2 text-gray-600 leading-7">
                <li>Enter your regex pattern in the Regular Expression box.</li>
                <li>Toggle the flags you need (g, i, m, s, u) to match your runtime behavior.</li>
                <li>Paste sample text and watch matches highlight in the preview automatically.</li>
                <li>Copy the regex or matched results when you are satisfied.</li>
              </ol>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">When to use Regex Tester</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-7">
                <li>When building validation rules for emails, usernames, IDs, and log parsing.</li>
                <li>When extracting groups from strings (URLs, headers, timestamps, or filenames).</li>
                <li>When a pattern behaves differently due to flags like global or multiline.</li>
                <li>When you want quick examples and a cheat sheet while writing regex.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">Why use GitOpenTools?</h2>
              <p className="text-gray-600 leading-7">
                GitOpenTools keeps debugging lightweight: open the page, test your regex, and move on. No install, no account, and no
                hidden paywalls. It is a privacy-first collection of tools built for day-to-day developer work.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">FAQ</h2>

              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-gray-900">What is a regex tester?</h3>
                <p className="text-gray-600 leading-7">
                  It is a tool for trying a regular expression against text and seeing matches instantly, so you can iterate faster.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-gray-900">Which flags can I use in this regex tester?</h3>
                <p className="text-gray-600 leading-7">
                  You can toggle common JavaScript RegExp flags including g, i, m, s, and u.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-gray-900">Does this tool support JavaScript regex syntax?</h3>
                <p className="text-gray-600 leading-7">
                  Yes. It is built around JavaScript RegExp, which is useful for frontend code and Node.js.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-gray-900">Is the Regex Tester free on GitOpenTools?</h3>
                <p className="text-gray-600 leading-7">
                  Yes. It is free to use with no sign-up and no installation.
                </p>
              </div>
            </section>
          </article>

        </div>
      </section>

    </>
  );
};

export default RegexTesterPage;
