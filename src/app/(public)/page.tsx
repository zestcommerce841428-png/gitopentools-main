import "../globals.css"

import { FaArrowRight, FaBolt, FaBookmark, FaCheck, FaClock, FaCode, FaExchangeAlt, FaGithub, FaHeart, FaLock, FaMobileAlt, FaPlay, FaRocket, FaSearch, FaShieldAlt, FaSync, FaTextWidth, FaTools, FaUsers } from "react-icons/fa";

import Link from "next/link";
import { LINK_MAP } from "@/linkMap";



export default function Home() {
  return (
    <>      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 gradient-bg opacity-5"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 gradient-bg rounded-full opacity-20 floating-animation"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 gradient-bg rounded-full opacity-10 floating-animation" style={{ animationDelay: '-2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 gradient-bg rounded-full opacity-15 floating-animation" style={{ animationDelay: '-4s' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6 pulse-animation">
              ✨ 45+ Free Developer Tools
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Stop <span className="gradient-text">Pasting</span> Code
            <br />on Random Sites
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            A comprehensive collection of carefully crafted developer tools.
            Centralize all your go-to utilities in one convenient location and boost your productivity.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href={LINK_MAP.tools.textConverter} className="gradient-bg text-white px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
              <FaRocket /> Explore Tools
            </Link>
            <Link href={"https://github.com/steve-bang/gitopentools"} rel="noopener noreferrer" target="_blank" className="border-2 border-purple-200 text-purple-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-50 transition-all flex items-center gap-2">
              <FaGithub />
              View on GitHub
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">45+</div>
              <div className="text-gray-600 font-medium">Tools Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">100K+</div>
              <div className="text-gray-600 font-medium">Developers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">Free</div>
              <div className="text-gray-600 font-medium">Forever</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">24/7</div>
              <div className="text-gray-600 font-medium">Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section id="tools" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Popular <span className="gradient-text">Developer Tools</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From text manipulation to data conversion, we've got all the tools you need for your daily development workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tool Cards */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover">
              <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center mb-6">
                <FaTextWidth className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Case Converter</h3>
              <p className="text-gray-600 mb-4">Convert text between different cases: uppercase, lowercase, title case, camel case, and more.</p>
              <Link href={LINK_MAP.tools.textConverter} className="flex items-center text-purple-600 font-medium">
                <span>Try it now</span>
                <FaArrowRight className="ml-2 text-sm" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover">
              <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center mb-6">
                <FaCode className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">JSON Formatter</h3>
              <p className="text-gray-600 mb-4">Format, validate, and beautify JSON data with syntax highlighting and error detection.</p>
              <Link href={LINK_MAP.tools.formatters.json} className="flex items-center text-purple-600 font-medium">
                <span>Try it now</span>
                <FaArrowRight className="ml-2 text-sm" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover">
              <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center mb-6">
                <FaLock className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Password Generator</h3>
              <p className="text-gray-600 mb-4">Generate secure passwords with customizable length, characters, and complexity options.</p>
              <div className="flex items-center text-purple-600 font-medium">
                <span>Try it now</span>
                <FaArrowRight className="ml-2 text-sm" />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover">
              <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center mb-6">
                <FaExchangeAlt className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Base64 Encoder/Decoder</h3>
              <p className="text-gray-600 mb-4">Encode and decode Base64 strings quickly and easily with instant results.</p>
              <div className="flex items-center text-purple-600 font-medium">
                <span>Try it now</span>
                <FaArrowRight className="ml-2 text-sm" />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover">
              <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center mb-6">
                <FaSearch className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Regex Tester</h3>
              <p className="text-gray-600 mb-4">Test and debug regular expressions with real-time matching and explanation.</p>
              <div className="flex items-center text-purple-600 font-medium">
                <span>Try it now</span>
                <FaArrowRight className="ml-2 text-sm" />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover">
              <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center mb-6">
                <FaClock className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">UNIX Timestamp</h3>
              <p className="text-gray-600 mb-4">Convert between UNIX timestamps and human-readable dates in various formats.</p>
              <div className="flex items-center text-purple-600 font-medium">
                <span>Try it now</span>
                <FaArrowRight className="ml-2 text-sm" />
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="gradient-bg text-white px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-all">
              View All 45+ Tools
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Dev Tools?
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Built by developers, for developers. We understand your workflow and created tools that actually make your life easier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="tool-card-home rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <FaBolt className="text-white text-4xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Lightning Fast</h3>
              <p className="text-purple-100">All tools run entirely in your browser. No server delays, no waiting times, just instant results.</p>
            </div>

            <div className="tool-card-home rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <FaShieldAlt className="text-white text-4xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Privacy First</h3>
              <p className="text-purple-100">Your data never leaves your browser. Everything is processed locally for maximum security and privacy.</p>
            </div>

            <div className="tool-card-home rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <FaMobileAlt className="text-white text-4xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Mobile Friendly</h3>
              <p className="text-purple-100">Responsive design that works perfectly on desktop, tablet, and mobile devices.</p>
            </div>

            <div className="tool-card-home rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <FaHeart className="text-white text-4xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Free Forever</h3>
              <p className="text-purple-100">No subscriptions, no hidden fees, no limits. All tools are completely free to use forever.</p>
            </div>

            <div className="tool-card-home rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <FaSync className="text-white text-4xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Always Updated</h3>
              <p className="text-purple-100">Regular updates with new tools and features based on community feedback and requests.</p>
            </div>

            <div className="tool-card-home rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <FaUsers className="text-white text-4xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Community Driven</h3>
              <p className="text-purple-100">Built with input from developers worldwide. Request new tools and help shape the platform.</p>
            </div>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Built by Developers,
                <span className="gradient-text">For Developers</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We as developers realized that it'd be tiring and time consuming to search for each developer tool online just to solve small programming problems on a daily basis. So we decided to create a centralized platform with high quality developer tools.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-8 gradient-bg rounded-lg flex items-center justify-center mt-1">
                    <FaCheck className="text-white text-sm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">No More Tab Switching</h4>
                    <p className="text-gray-600">Everything you need in one place. No more searching for different tools across multiple websites.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-8 gradient-bg rounded-lg flex items-center justify-center mt-1">
                    <FaCheck className="text-white text-sm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Carefully Crafted</h4>
                    <p className="text-gray-600">Each tool is thoughtfully designed with developer experience in mind, not just functionality.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-8 gradient-bg rounded-lg flex items-center justify-center mt-1">
                    <FaCheck className="text-white text-sm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Global Community</h4>
                    <p className="text-gray-600">Assisting web and mobile app developers throughout the world with reliable, fast tools.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 gradient-bg rounded-3xl opacity-10"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mx-auto mb-3">
                      <FaTools className="text-white" />
                    </div>
                    <div className="text-2xl font-bold gradient-text">Text Tools</div>
                    <div className="text-sm text-gray-600">Case, Lorem, Escape</div>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mx-auto mb-3">
                      <FaCode className="text-white" />
                    </div>
                    <div className="text-2xl font-bold gradient-text">Formatters</div>
                    <div className="text-sm text-gray-600">JSON, XML, SQL</div>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mx-auto mb-3">
                      <FaShieldAlt className="text-white" />
                    </div>
                    <div className="text-2xl font-bold gradient-text">Generators</div>
                    <div className="text-sm text-gray-600">Passwords, UUIDs</div>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mx-auto mb-3">
                      <FaExchangeAlt className="text-white" />
                    </div>
                    <div className="text-2xl font-bold gradient-text">Converters</div>
                    <div className="text-sm text-gray-600">Base64, Timestamps</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-24 gradient-bg">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Boost Your Productivity?
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto">
            Join thousands of developers who have already streamlined their workflow with our comprehensive tool collection.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href={LINK_MAP.tools.textConverter} className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              <FaPlay className="inline-block mr-2" />
              Start Using Tools
            </Link>
            <Link href="#" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all">
              <FaBookmark className="inline-block mr-2" />
              Bookmark This Page
            </Link>
          </div>
        </div>
      </section>
    </>

  );
}
