
import React from 'react';
import HeaderNavigation from '@/components/HeaderNavigation';
import ToolInterface from './tool-interface';
import { generateMetadata } from '@/lib/seo';
import { LINK_MAP } from '@/linkMap';

export const metadata = generateMetadata({
  title: "Case Converter Online - camelCase, snake_case, kebab-case, UPPER/lower",
  description:
    "Convert text between common naming styles in one click: camelCase, PascalCase, snake_case, kebab-case, Title Case, and more. Perfect for variables, file names, and APIs. Try the free Case Converter on GitOpenTools.",
  keywords: "case converter, text case converter, camelcase converter, pascal case converter, snake case converter, kebab case converter, uppercase to lowercase, title case converter, sentence case converter, variable name converter, developer text tool, GitOpenTools case converter",
  path: LINK_MAP.tools.textConverter,
  openGraph: {
    title: "Case Converter - Fast Text Case Transformations | GitOpenTools",
    description:
      "Switch naming styles instantly: camelCase, PascalCase, snake_case, kebab-case, and more. Copy results in one click with GitOpenTools.",
  },
  twitter: {
    title: "Case Converter Online",
    description:
      "Convert text to camelCase, snake_case, kebab-case, UPPER/lower, and more. Free tool on GitOpenTools.",
  },
});

const TextConverterPage = () => {
  const pageTitle = "Case Converter Online - camelCase, snake_case, kebab-case, UPPER/lower";
  const pageDescription =
    "Convert text between common naming styles in one click: camelCase, PascalCase, snake_case, kebab-case, Title Case, and more. Perfect for variables, file names, and APIs. Try the free Case Converter on GitOpenTools.";
  const pageUrl = "https://www.gitopentools.com/tools/text/converter";

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
        "name": "Text case conversion"
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
          "name": "Case Converter",
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
          "name": "What is a case converter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A case converter transforms text into different casing styles like camelCase, snake_case, kebab-case, UPPERCASE, or Title Case. It is commonly used for variable names, file names, and consistent formatting."
          }
        },
        {
          "@type": "Question",
          "name": "How do I convert text to snake_case or kebab-case?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Paste your text into the input box and click the conversion button you want, such as snake_case or kebab-case. The output updates instantly and can be copied in one click."
          }
        },
        {
          "@type": "Question",
          "name": "Does this tool work for code identifiers and API fields?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Case conversion is useful for renaming variables, JSON keys, API fields, and file names when moving between different style conventions."
          }
        },
        {
          "@type": "Question",
          "name": "Is the Case Converter free on GitOpenTools?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. You can convert text cases for free without signing up or installing anything."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Case Converter",
      "url": pageUrl,
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "Web",
      "description": "Free online case converter to transform text into camelCase, PascalCase, snake_case, kebab-case, Title Case, and more. Useful for developers when renaming identifiers and standardizing text on GitOpenTools.",
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
        <HeaderNavigation title="Case Converter" description="Transform text between different cases instantly" />

        {/* Content */}
        <div className='flex-1 overflow-auto p-6 space-y-6'>

          {/* Tool interface */}
          <ToolInterface />

          <article className="tool-card rounded-xl p-6 space-y-8">
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">What is Case Converter?</h2>
              <p className="text-gray-600 leading-7">
                Case Converter is a quick way to rewrite text into popular naming styles used in code and content. Turn a phrase into
                camelCase for JavaScript, snake_case for database fields, kebab-case for URLs, or UPPERCASE for constants without
                manual editing.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">How to use Case Converter</h2>
              <ol className="list-decimal pl-6 space-y-2 text-gray-600 leading-7">
                <li>Paste your text into the input area.</li>
                <li>Choose the output style (camelCase, PascalCase, snake_case, kebab-case, Title Case, UPPER/lower).</li>
                <li>Review the converted text in the output panel.</li>
                <li>Click copy to use it in code, documentation, or filenames.</li>
              </ol>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">When to use Case Converter</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-7">
                <li>When renaming variables, functions, and constants across a codebase.</li>
                <li>When standardizing JSON keys or API fields between systems.</li>
                <li>When creating URL slugs, file names, or CSS-style identifiers.</li>
                <li>When converting human text into consistent formatting for docs.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">Why use GitOpenTools?</h2>
              <p className="text-gray-600 leading-7">
                GitOpenTools gives you fast utility tools that stay out of the way. Convert text directly in your browser with no
                installation and no account. It is a simple, privacy-first workflow for day-to-day developer tasks.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">FAQ</h2>

              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-gray-900">What is a case converter?</h3>
                <p className="text-gray-600 leading-7">
                  It transforms text into a specific casing convention like camelCase, snake_case, or kebab-case.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-gray-900">How do I convert text to snake_case or kebab-case?</h3>
                <p className="text-gray-600 leading-7">
                  Paste your text, then click the snake_case or kebab-case button. Copy the output when it looks right.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-gray-900">Does this tool work for code identifiers and API fields?</h3>
                <p className="text-gray-600 leading-7">
                  Yes. It is useful for renaming identifiers and normalizing keys across different naming conventions.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-gray-900">Is the Case Converter free on GitOpenTools?</h3>
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

export default TextConverterPage;
