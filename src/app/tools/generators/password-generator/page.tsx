import "./styles.css";
import React from 'react';
import HeaderNavigation from '@/components/HeaderNavigation';
import ToolInterface from './tool-interface';
import { generateMetadata } from '@/lib/seo';
import { LINK_MAP } from "@/linkMap";

export const metadata = generateMetadata({
  title: "Secure Password Generator Online - Random Strong Passwords Free",
  description:
    "Create strong random passwords instantly with presets, length control, and character rules (avoid similar, repeated, sequential). Runs locally in your browser for privacy. Generate a secure password now on GitOpenTools.",
  keywords: "secure password generator, random password generator online, strong password generator free, password generator 64 characters, client side password generator, web crypto password generator, developer password generator, api token password generator, ssh password generator, password entropy calculator, no tracking password generator, GitOpenTools password generator",
  path: LINK_MAP.tools.generators.password,
  openGraph: {
    title: "Password Generator (Client-Side) - Strong Random Passwords | GitOpenTools",
    description:
      "Generate high-entropy passwords locally in your browser. Pick length, include/exclude symbols, and use presets for dev, websites, or finance. Free on GitOpenTools.",
  },
  twitter: {
    title: "Secure Password Generator - Client-Side",
    description:
      "Generate strong random passwords fast with presets and advanced rules. Privacy-first and free on GitOpenTools.",
  },
});

const PasswordGeneratorPage = () => {
  const pageTitle = "Secure Password Generator Online - Random Strong Passwords Free";
  const pageDescription =
    "Create strong random passwords instantly with presets, length control, and character rules (avoid similar, repeated, sequential). Runs locally in your browser for privacy. Generate a secure password now on GitOpenTools.";
  const pageUrl = "https://www.gitopentools.com/tools/generators/password-generator";

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
        "name": "Password generation"
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
          "name": "Password Generator",
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
          "name": "Does this password generator run locally in the browser?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Passwords are generated in your browser using the Web Crypto API, so you can create secure passwords without sending your input to a server."
          }
        },
        {
          "@type": "Question",
          "name": "What password length should I choose?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For most accounts, 12 to 16 characters is a good baseline. For sensitive accounts, infrastructure access, and API credentials, consider 20+ characters and enable multiple character types."
          }
        },
        {
          "@type": "Question",
          "name": "Can I avoid confusing characters like O, 0, l, and I?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Turn on the exclude similar characters option to reduce copy mistakes, especially when you have to type a password manually."
          }
        },
        {
          "@type": "Question",
          "name": "Is this password generator free on GitOpenTools?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. You can generate strong random passwords for free with no sign-up and no installation required."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Password Generator",
      "url": pageUrl,
      "applicationCategory": "SecurityApplication",
      "operatingSystem": "Web",
      "description": "Free client-side password generator that creates strong random passwords with length controls, presets, and advanced rules. Use GitOpenTools to generate high-entropy passwords quickly without installing extra software.",
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
          title="Password Generator" 
          description="Generate secure, random passwords instantly. No storage. No tracking." 
        />

        {/* Content */}
        <div className='flex-1 overflow-auto p-6 space-y-6'>
          {/* Tool interface */}
          <ToolInterface />

          <article className="tool-card rounded-xl p-6 space-y-8">
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">What is Password Generator?</h2>
              <p className="text-gray-600 leading-7">
                Password Generator is a free online tool for creating strong random passwords that are hard to guess and easy to copy.
                It runs locally in your browser, so you can generate credentials quickly without relying on external apps or plugins.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">How to use Password Generator</h2>
              <ol className="list-decimal pl-6 space-y-2 text-gray-600 leading-7">
                <li>Pick a preset (Developer/SSH, Website Login, Banking) or choose Custom.</li>
                <li>Set the password length and select which character types to include.</li>
                <li>Optional: enable advanced rules to exclude similar characters and avoid repeats or sequences.</li>
                <li>Click <span className="font-medium text-gray-900">Generate Password</span>, then copy the result.</li>
              </ol>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">When to use Password Generator</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-7">
                <li>When rotating credentials for GitHub, GitLab, servers, and internal tooling.</li>
                <li>When creating API keys, service tokens, or database passwords.</li>
                <li>When you need a high-entropy password for finance or admin accounts.</li>
                <li>When you want to avoid confusing characters to reduce typos and copy mistakes.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">Why use GitOpenTools?</h2>
              <p className="text-gray-600 leading-7">
                GitOpenTools focuses on practical, privacy-first utilities. You can generate passwords directly in the browser with no
                installation, no account, and no cost. It is a fast way to create secure credentials and get back to building.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">FAQ</h2>

              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-gray-900">Does this password generator run locally in the browser?</h3>
                <p className="text-gray-600 leading-7">
                  Yes. Passwords are generated in your browser using the Web Crypto API, with no server round trips required.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-gray-900">What password length should I choose?</h3>
                <p className="text-gray-600 leading-7">
                  For everyday accounts, 12 to 16 characters is a solid baseline. For sensitive access, go longer (20+) and enable
                  multiple character types.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-gray-900">Can I avoid confusing characters like O, 0, l, and I?</h3>
                <p className="text-gray-600 leading-7">
                  Yes. Enable the exclude similar option to reduce mistakes when you have to type a password manually.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-gray-900">Is this password generator free on GitOpenTools?</h3>
                <p className="text-gray-600 leading-7">
                  Yes. It is free to use, with no sign-up and nothing to install.
                </p>
              </div>
            </section>
          </article>
        </div>
      </section>
    </>
  );
};

export default PasswordGeneratorPage;
