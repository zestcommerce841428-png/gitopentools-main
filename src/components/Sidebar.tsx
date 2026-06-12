"use client";

import { LINK_MAP } from "@/linkMap";
import { PROJECT_INFO } from "@/project";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaAlignLeft, FaClock, FaCode, FaCss3Alt, FaDatabase, FaExchangeAlt, FaFileCode, FaFingerprint, FaHashtag, FaLink, FaLock, FaPalette, FaParagraph, FaQuoteRight, FaSearch, FaTextHeight } from "react-icons/fa";

interface SidebarMenuItemType {
    code: string;
    parentCode: string | null;
    path: string | null;
    icon: React.ReactNode | null;
    label: string;
}

export const SidebarMenuItems: SidebarMenuItemType[] = [
    {
        code: 'text_tools',
        parentCode: null,
        path: null,
        icon: null,
        label: 'Text Tools'
    },
    {
        code: 'textConverter',
        parentCode: 'text_tools',
        path: LINK_MAP.tools.textConverter,
        icon: <FaTextHeight />,
        label: 'Case Converter',
    },
    {
        code: 'textEscape',
        parentCode: 'text_tools',
        path: LINK_MAP.tools.textEscape,
        icon: <FaQuoteRight />,
        label: 'Text Escape',
    },
    // {
    //     code: 'loremIpsum',
    //     parentCode: 'text_tools',
    //     path: null,
    //     icon: <FaParagraph />,
    //     label: 'Lorem Ipsum',
    // },
    // {
    //     code: 'textFormatter',
    //     parentCode: 'text_tools',
    //     path: null,
    //     icon: <FaAlignLeft />,
    //     label: 'Text Formatter',
    // },
    {
        code: 'formatters',
        parentCode: null,
        path: null,
        icon: null,
        label: 'Formatters',
    },
    {
        code: 'jsonFormatter',
        parentCode: 'formatters',
        path: LINK_MAP.tools.formatters.json,
        icon: <FaFileCode />,
        label: 'JSON Formatter',
    },
    // {
    //     code: 'xmlFormatter',
    //     parentCode: 'formatters',
    //     path: null,
    //     icon: <FaFileCode />,
    //     label: 'XML Formatter',
    // },
    {
        code: 'sqlFormatter',
        parentCode: 'formatters',
        path: LINK_MAP.tools.formatters.sql,
        icon: <FaDatabase />,
        label: 'SQL Formatter',
    },
    // {
    //     code: 'cssFormatter',
    //     parentCode: 'formatters',
    //     path: null,
    //     icon: <FaCss3Alt />,
    //     label: 'CSS Formatter',
    // },
    {
        code: 'generators',
        parentCode: null,
        path: null,
        icon: null,
        label: 'Generators',
    },
    {
        code: 'passwordGenerator',
        parentCode: 'generators',
        path: LINK_MAP.tools.generators.password,
        icon: <FaLock />,
        label: 'Password Generator',

    },
    {
        code: 'uuidGenerator',
        parentCode: 'generators',
        path: LINK_MAP.tools.generators.uuid,
        icon: <FaFingerprint />,
        label: 'UUID Generator',

    },
    // {
    //     code: 'colorGenerator',
    //     parentCode: 'generators',
    //     path: null,
    //     icon: <FaPalette />,
    //     label: 'Color Generator',
    // },
    {
        code: 'testers',
        parentCode: null,
        path: null,
        icon: null,
        label: 'Testers',
    },
    {
        code: 'regexTester',
        parentCode: 'testers',
        path: LINK_MAP.tools.testers.regex,
        icon: <FaSearch />,
        label: 'Regex Tester',

    },
    {
        code: 'urlValidator',
        parentCode: 'testers',
        path: LINK_MAP.tools.testers.urlChecker,
        icon: <FaLink />,
        label: 'URL Validator',

    },

]

export default function Sidebar() {

    const currentPath = usePathname();

    return (
        <aside className="w-64 bg-white shadow-lg sidebar-transition fixed md:relative z-20 min-h-screen sidebar-mobile" id="sidebar">
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
                <Link href={LINK_MAP.home}>
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center">
                            <Image src={PROJECT_INFO.logo} alt="GitOpen Tools" className='rounded-xl' width={40} height={40} />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold gradient-text">{PROJECT_INFO.name}</h1>
                            <p className="text-xs text-gray-500">Developer Utilities</p>
                        </div>
                    </div>
                </Link>
            </div>

            {/* Search */}
            <div className="p-4">
                <div className="relative">
                    <input type="text" placeholder="Search tools..." className="w-full text-sm pl-10 pr-2 py-1 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" id="toolSearch" />
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
            </div>

            {/* Menu Categories */}



            <nav className="flex-1 overflow-y-auto custom-scrollbar">
                <nav className="flex-1 overflow-y-auto custom-scrollbar">
                    {
                        SidebarMenuItems.filter(item => item.parentCode === null).map((rootItem) => (
                            <div className="px-4 py-2" key={rootItem.code}>
                                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">{rootItem.label}</h3>
                                <ul className="space-y-1">
                                    {

                                        SidebarMenuItems.filter(x => x.parentCode === rootItem.code).map((item) => (
                                            <li key={item.code}>
                                                <Link href={item.path || "#"}
                                                    className={`sidebar-menu-item flex items-center px-2 py-1 text-sm text-gray-700 rounded-lg ${currentPath === item.path ? 'active' : ''} ${!item.path && 'opacity-50 cursor-not-allowed'}`}
                                                    title={!item.path ? 'Coming Soon' : item.label}
                                                >
                                                    {item.icon && <span className={`w-5 ${currentPath == item.path ? 'text-white' : 'text-purple-500'} mr-1`}>{item.icon}</span>}
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </nav>
            </nav>

        </aside >
    );
}

export const example = () => {
    return (
        <nav className="flex-1 overflow-y-auto custom-scrollbar">
            {/* Text Tools */}
            <div className="px-4 py-2">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Text Tools</h3>
                <ul className="space-y-1">
                    <li>
                        <a href="#" className="sidebar-menu-item active flex items-center px-3 py-2 text-sm text-gray-700 rounded-lg">
                            <FaTextHeight className="w-5 text-white mr-3" />
                            Case Converter
                        </a>
                    </li>
                    <li>
                        <a href="#" className="sidebar-menu-item flex items-center px-3 py-2 text-sm text-gray-700 rounded-lg">
                            <FaQuoteRight className="w-5 text-purple-500 mr-3" />
                            Text Escape
                        </a>
                    </li>
                    <li>
                        <a href="#" className="sidebar-menu-item flex items-center px-3 py-2 text-sm text-gray-700 rounded-lg">
                            <FaParagraph className="w-5 text-purple-500 mr-3" />
                            Lorem Ipsum
                        </a>
                    </li>
                    <li>
                        <a href="#" className="sidebar-menu-item flex items-center px-3 py-2 text-sm text-gray-700 rounded-lg">
                            <FaAlignLeft className="w-5 text-purple-500 mr-3" />
                            Text Formatter
                        </a>
                    </li>
                </ul>
            </div>

            {/* Formatters */}
            <div className="px-4 py-2">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Formatters</h3>
                <ul className="space-y-1">
                    <li>
                        <a href="#" className="sidebar-menu-item flex items-center px-3 py-2 text-sm text-gray-700 rounded-lg">
                            <FaCode className="w-5 text-purple-500 mr-3" />
                            JSON Formatter
                        </a>
                    </li>
                    <li>
                        <a href="#" className="sidebar-menu-item flex items-center px-3 py-2 text-sm text-gray-700 rounded-lg">
                            <FaFileCode className="w-5 text-purple-500 mr-3" />
                            XML Formatter
                        </a>
                    </li>
                    <li>
                        <a href="#" className="sidebar-menu-item flex items-center px-3 py-2 text-sm text-gray-700 rounded-lg">
                            <FaDatabase className="w-5 text-purple-500 mr-3" />
                            SQL Formatter
                        </a>
                    </li>
                    <li>
                        <a href="#" className="sidebar-menu-item flex items-center px-3 py-2 text-sm text-gray-700 rounded-lg">
                            <FaCss3Alt className="w-5 text-purple-500 mr-3" />
                            CSS Formatter
                        </a>
                    </li>
                </ul>
            </div>

            {/* Generators */}
            <div className="px-4 py-2">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Generators</h3>
                <ul className="space-y-1">
                    <li>
                        <a href="#" className="sidebar-menu-item flex items-center px-3 py-2 text-sm text-gray-700 rounded-lg">
                            <FaLock className="w-5 text-purple-500 mr-3" />
                            Password Generator
                        </a>
                    </li>
                    <li>
                        <a href="#" className="sidebar-menu-item flex items-center px-3 py-2 text-sm text-gray-700 rounded-lg">
                            <FaFingerprint className="w-5 text-purple-500 mr-3" />
                            UUID Generator
                        </a>
                    </li>
                    <li>
                        <a href="#" className="sidebar-menu-item flex items-center px-3 py-2 text-sm text-gray-700 rounded-lg">
                            <FaPalette className="w-5 text-purple-500 mr-3" />
                            Color Generator
                        </a>
                    </li>
                </ul>
            </div>

            {/* Converters */}
            <div className="px-4 py-2">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Converters</h3>
                <ul className="space-y-1">
                    <li>
                        <a href="#" className="sidebar-menu-item flex items-center px-3 py-2 text-sm text-gray-700 rounded-lg">
                            <FaExchangeAlt className="w-5 text-purple-500 mr-3" />
                            Base64 Encoder
                        </a>
                    </li>
                    <li>
                        <a href="#" className="sidebar-menu-item flex items-center px-3 py-2 text-sm text-gray-700 rounded-lg">
                            <FaClock className="w-5 text-purple-500 mr-3" />
                            UNIX Timestamp
                        </a>
                    </li>
                    <li>
                        <a href="#" className="sidebar-menu-item flex items-center px-3 py-2 text-sm text-gray-700 rounded-lg">
                            <FaHashtag className="w-5 text-purple-500 mr-3" />
                            Hash Generator
                        </a>
                    </li>
                </ul>
            </div>

            {/* Testers */}
            <div className="px-4 py-2">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Testers</h3>
                <ul className="space-y-1">
                    <li>
                        <a href="#" className="sidebar-menu-item flex items-center px-3 py-2 text-sm text-gray-700 rounded-lg">
                            <FaSearch className="w-5 text-purple-500 mr-3" />
                            Regex Tester
                        </a>
                    </li>
                    <li>
                        <a href="#" className="sidebar-menu-item flex items-center px-3 py-2 text-sm text-gray-700 rounded-lg">
                            <FaLink className="w-5 text-purple-500 mr-3" />
                            URL Validator
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
