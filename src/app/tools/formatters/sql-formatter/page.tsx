
import "./styles.css";
import React from 'react';
import HeaderNavigation from '@/components/HeaderNavigation';
import ToolInterface from './tool-interface';
import { generateMetadata } from '@/lib/seo';
import { LINK_MAP } from "@/linkMap";

export const metadata = generateMetadata({
  title: "SQL Formatter Online - Beautify and Reformat SQL Queries Free",
  description:
    "Reformat SQL queries online with clean indentation, readable keyword spacing, and faster query review. Use this free SQL formatter to tidy SELECT, JOIN, and nested statements instantly on GitOpenTools.",
  keywords: "sql formatter online, format sql query, sql beautifier free, pretty print sql, sql query formatter, beautify sql online, sql indent tool, format select query, format join query, sql cleanup tool, developer sql formatter, online sql formatter GitOpenTools",
  path: LINK_MAP.tools.formatters.sql,
  openGraph: {
    title: "Online SQL Formatter for Cleaner Queries | GitOpenTools",
    description:
      "Paste messy SQL, format it into readable query blocks, and review joins, filters, and nested statements more easily with GitOpenTools.",
  },
  twitter: {
    title: "SQL Formatter Online for Readable Queries",
    description:
      "Clean up SQL statements, improve readability, and format complex queries fast with this free SQL formatter from GitOpenTools.",
  },
});

const SQLFormatterPage = () => {
  const pageTitle = "SQL Formatter Online - Beautify and Reformat SQL Queries Free";
  const pageDescription =
    "Reformat SQL queries online with clean indentation, readable keyword spacing, and faster query review. Use this free SQL formatter to tidy SELECT, JOIN, and nested statements instantly on GitOpenTools.";
  const pageUrl = "https://www.gitopentools.com/tools/formatters/sql-formatter";

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
        "name": "SQL query formatting"
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
          "name": "SQL Formatter",
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
          "name": "What does a SQL formatter do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A SQL formatter reorganizes SQL statements with consistent indentation, line breaks, and spacing so queries are easier to scan, review, and maintain."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use this formatter for long or nested SQL queries?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. It is useful for long SELECT statements, nested subqueries, multiple JOINs, and filter-heavy SQL where readability matters during debugging or review."
          }
        },
        {
          "@type": "Question",
          "name": "Does this SQL formatter support common SQL dialects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The formatter is suitable for common SQL styles used in MySQL, PostgreSQL, SQL Server, Oracle, SQLite, and other widely used SQL workflows."
          }
        },
        {
          "@type": "Question",
          "name": "Is the SQL formatter free on GitOpenTools?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. You can format SQL online for free on GitOpenTools without creating an account or installing any desktop software."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "SQL Formatter Online",
      "url": pageUrl,
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "Web",
      "description": "Free online SQL formatter for rewriting messy queries into readable SQL blocks. Improve query clarity, review complex joins more easily, and clean up statements for development work with GitOpenTools.",
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
        <HeaderNavigation title="SQL Formatter" description="Format and beautify your SQL queries with syntax highlighting" />

        {/* Content */}
        <div className='flex-1 overflow-auto p-6 space-y-6'>

          {/* Tool interface */}
          <ToolInterface />

          <article className="tool-card rounded-xl p-6 space-y-8">
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">What is SQL Formatter?</h2>
              <p className="text-gray-600 leading-7">
                SQL Formatter is an online query cleanup tool that restructures raw SQL into a layout that is much easier to read.
                Instead of scanning one long statement, you get organized clauses, clearer joins, and better spacing for faster review.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">How to use SQL Formatter</h2>
              <ol className="list-decimal pl-6 space-y-2 text-gray-600 leading-7">
                <li>Paste your SQL statement into the input editor or load the sample query.</li>
                <li>Click <span className="font-medium text-gray-900">Format SQL</span> to reorganize the query structure instantly.</li>
                <li>Inspect the formatted result to review clauses, joins, aliases, and nested logic more clearly.</li>
                <li>Copy the cleaned SQL or download it for use in your project, migration, or code review.</li>
              </ol>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">When to use SQL Formatter</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-7">
                <li>When a long SQL query is difficult to debug because everything is compressed into one block.</li>
                <li>When you need to review multi-join or nested queries before shipping database changes.</li>
                <li>When you want cleaner SQL for pull requests, shared snippets, documentation, or handoff.</li>
                <li>When you are comparing query logic and need readable formatting to spot mistakes faster.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">Why use GitOpenTools?</h2>
              <p className="text-gray-600 leading-7">
                GitOpenTools keeps the workflow simple: open the page, paste your SQL, and format it right away in the browser.
                There is nothing to install, no account wall, and no charge. It is a privacy-first option for developers who want
                quick utility tools without extra friction.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">FAQ</h2>

              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-gray-900">What does a SQL formatter do?</h3>
                <p className="text-gray-600 leading-7">
                  It rewrites SQL with clearer indentation, spacing, and line breaks so the statement is easier to read and review.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-gray-900">Can I use this formatter for long or nested SQL queries?</h3>
                <p className="text-gray-600 leading-7">
                  Yes. It is especially helpful for large queries with subqueries, joins, and complex filtering logic.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-gray-900">Does this SQL formatter support common SQL dialects?</h3>
                <p className="text-gray-600 leading-7">
                  Yes. It is useful across common SQL workflows such as MySQL, PostgreSQL, SQL Server, Oracle, and SQLite-style queries.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-gray-900">Is the SQL formatter free on GitOpenTools?</h3>
                <p className="text-gray-600 leading-7">
                  Yes. You can format SQL online for free without signing up or installing a separate app.
                </p>
              </div>
            </section>
          </article>

        </div>
      </section>

    </>
  );
};

export default SQLFormatterPage;
