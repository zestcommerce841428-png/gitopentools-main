import { PROJECT_INFO } from "@/project";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export interface HeaderNavigationProps {
  title: string;
  description: string;
}

const HeaderNavigation = (
  props: HeaderNavigationProps
) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="md:hidden text-gray-600 hover:text-purple-600" id="sidebarToggle">
            <i className="fas fa-bars text-xl"></i>
          </button>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{props.title}</h2>
            <p className="text-sm text-gray-500">{props.description}</p>
          </div>
        </div>
        <Link href={PROJECT_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="nx-p-2 nx-text-current">
          <FaGithub className="w-6 h-6" />
        </Link>
      </div>
    </header>
  );
};

export default HeaderNavigation;