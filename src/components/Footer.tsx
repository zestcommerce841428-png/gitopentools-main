import { PROJECT_INFO } from "@/project";
import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaFacebook, FaGithub, FaSlack } from "react-icons/fa";

export default function Footer() {
  return (

    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="rounded-xl flex items-center justify-center">
                <Image src={PROJECT_INFO.logo} alt="GitOpen Tools" className='rounded-xl' width={40} height={40} />
              </div>
              <span className="text-2xl font-bold">{PROJECT_INFO.name}</span>
            </div>
            <p className="text-gray-400">
              {PROJECT_INFO.description}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Popular Tools</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">JSON Formatter</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Base64 Encoder</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Password Generator</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Case Converter</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Text Tools</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Formatters</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Generators</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Converters</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {
                PROJECT_INFO.socials.github && (
                  <Link
                    href={PROJECT_INFO.socials.github}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaGithub />
                  </Link>
                )
              }

              {
                PROJECT_INFO.socials.discord && (
                  <Link
                    href={PROJECT_INFO.socials.discord}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaDiscord />
                  </Link>
                )
              }

              {
                PROJECT_INFO.socials.slack && (
                  <Link
                    href={PROJECT_INFO.socials.slack}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaSlack />
                  </Link>
                )
              }
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">{PROJECT_INFO.copyright}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 