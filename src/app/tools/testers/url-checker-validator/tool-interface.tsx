"use client"

import { FaGlobe, FaCheck, FaTimes, FaCopy, FaRedo, FaQuestionCircle, FaInfoCircle, FaShieldAlt, FaClock, FaLink } from 'react-icons/fa';
import React from 'react';
import useURLChecker from './hooks';

const ToolInterface = () => {
    const {
        url,
        setUrl,
        checkUrl,
        clearInput,
        loading,
        result,
        isValidUrl,
        urlDetails,
        getStatusColor,
        getStatusIcon,
        formatResponseTime
    } = useURLChecker();

    return (
        <>
            {/* Tool description */}
            <div className="tool-card rounded-xl p-6 mb-6">
                <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                        <FaGlobe className="text-white text-lg" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">URL Checker & Validator Tool</h3>
                        <p className="text-gray-600 leading-relaxed">
                            This tool helps you verify website accessibility, check HTTP status codes, measure response time, and analyze URL structure. Simply enter a URL, click check, and get detailed information about the website's availability and URL components.
                        </p>
                    </div>
                </div>
            </div>

            {/* URL Input Section */}
            <div className="tool-card rounded-xl p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Enter URL to Check</h3>
                    <div className="flex space-x-4">
                        <button
                            className="text-gray-500 hover:text-red-600 transition-colors flex gap-1 items-center"
                            onClick={clearInput}
                            disabled={loading}
                        >
                            <FaTimes /> <span className='text-xs'>Clear</span>
                        </button>
                        <button
                            className="text-gray-500 hover:text-blue-600 transition-colors flex gap-1 items-center"
                            onClick={() => setUrl("https://gitopentools.com")}
                            disabled={loading}
                        >
                            <FaLink /> <span className='text-xs'>Sample</span>
                        </button>
                    </div>
                </div>

                <div className="flex gap-4 mb-4">
                    <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="https://example.com"
                        className="flex-1 p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        disabled={loading}
                    />
                    <button
                        onClick={checkUrl}
                        disabled={loading || !url.trim()}
                        className="px-6 py-4 gradient-bg text-white rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            <>
                                <FaRedo className="animate-spin" /> Checking...
                            </>
                        ) : (
                            <>
                                <FaCheck /> Check URL
                            </>
                        )}
                    </button>
                </div>

                {!isValidUrl && url && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-600 text-sm flex items-center gap-2">
                            <FaTimes /> Please enter a valid URL (e.g., https://example.com)
                        </p>
                    </div>
                )}
            </div>

            {/* How It Works & What We Check */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {/* How It Work */}
                <div className="tool-card rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <FaQuestionCircle className="text-blue-500" /> How It Works
                    </h3>
                    <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start gap-2">
                            <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold flex-shrink-0">1</span>
                            <span>Enter a URL in the input field above (include http:// or https://)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold flex-shrink-0">2</span>
                            <span>Click "Check URL" to initiate the validation process</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold flex-shrink-0">3</span>
                            <span>Our tool sends a request to the URL and analyzes the response</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold flex-shrink-0">4</span>
                            <span>View detailed results including accessibility status and URL components</span>
                        </li>
                    </ul>
                </div>

                {/* What We Check */}
                <div className="tool-card rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <FaInfoCircle className="text-green-500" /> What We Check
                    </h3>
                    <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center gap-2">
                            <FaCheck className="text-green-500 flex-shrink-0" />
                            <span>Website accessibility and availability</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaCheck className="text-green-500 flex-shrink-0" />
                            <span>HTTP status codes (200, 404, 500, etc.)</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaCheck className="text-green-500 flex-shrink-0" />
                            <span>Response time and server performance</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaCheck className="text-green-500 flex-shrink-0" />
                            <span>URL structure validation</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaCheck className="text-green-500 flex-shrink-0" />
                            <span>SSL/TLS security (for HTTPS URLs)</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaCheck className="text-green-500 flex-shrink-0" />
                            <span>Protocol, domain, port, and path analysis</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Status Meanings */}
            <div className="tool-card rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Status Meanings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="font-semibold text-green-700">Accessible</span>
                        </div>
                        <p className="text-sm text-green-600">URL is reachable and returning valid responses (2xx status codes)</p>
                    </div>
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <span className="font-semibold text-yellow-700">Redirects</span>
                        </div>
                        <p className="text-sm text-yellow-600">URL is redirecting to another location (3xx status codes)</p>
                    </div>
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <span className="font-semibold text-red-700">Errors</span>
                        </div>
                        <p className="text-sm text-red-600">URL has errors (4xx client errors or 5xx server errors)</p>
                    </div>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                            <span className="font-semibold text-gray-700">Timeout</span>
                        </div>
                        <p className="text-sm text-gray-600">URL is not responding within the timeout period</p>
                    </div>
                </div>
            </div>

            {/* Results Section */}
            {result && (
                <div className="space-y-6">
                    {/* Accessibility Status */}
                    <div className="tool-card rounded-xl p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-semibold text-gray-900">Accessibility Status</h3>
                            <div className={`px-4 py-2 rounded-lg ${getStatusColor(result.status)}`}>
                                <span className="font-semibold">{result.status}</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <div className="flex items-center gap-2 mb-2">
                                    {getStatusIcon(result.status)}
                                    <span className="text-sm font-medium text-gray-700">Status</span>
                                </div>
                                <p className="text-2xl font-semibold text-gray-900">{result.status}</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg">
                                <div className="flex items-center gap-2 mb-2">
                                    <FaGlobe className="text-blue-500" />
                                    <span className="text-sm font-medium text-gray-700">HTTP Status</span>
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <p className="text-2xl font-semibold text-gray-900">{result.httpStatus}</p>
                                    <span className="text-sm text-gray-500">({result.httpStatusText})</span>
                                </div>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg">
                                <div className="flex items-center gap-2 mb-2">
                                    <FaClock className="text-purple-500" />
                                    <span className="text-sm font-medium text-gray-700">Response Time</span>
                                </div>
                                <p className="text-2xl font-semibold text-gray-900">
                                    {formatResponseTime(result.responseTime)}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* URL Details */}
                    <div className="tool-card rounded-xl p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-semibold text-gray-900">URL Details</h3>
                            <button
                                className="text-gray-500 hover:text-blue-600 transition-colors flex gap-1 items-center"
                                onClick={() => navigator.clipboard.writeText(url)}
                            >
                                <FaCopy /> <span className='text-xs'>Copy URL</span>
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <span className="text-sm font-medium text-gray-500 block mb-1">Protocol</span>
                                <p className="text-lg font-semibold text-gray-900">{urlDetails.protocol}</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg">
                                <span className="text-sm font-medium text-gray-500 block mb-1">Domain</span>
                                <p className="text-lg font-semibold text-gray-900">{urlDetails.domain}</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg">
                                <span className="text-sm font-medium text-gray-500 block mb-1">Port</span>
                                <p className="text-lg font-semibold text-gray-900">
                                    {urlDetails.port || (urlDetails.protocol === 'https' ? '443 (default)' : '80 (default)')}
                                </p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg">
                                <span className="text-sm font-medium text-gray-500 block mb-1">Path</span>
                                <p className="text-lg font-semibold text-gray-900 break-all">
                                    {urlDetails.path || '/'}
                                </p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg">
                                <span className="text-sm font-medium text-gray-500 block mb-1">Security</span>
                                <div className="flex items-center gap-2">
                                    <FaShieldAlt className={
                                        urlDetails.protocol === 'https' ? 'text-green-500' : 'text-yellow-500'
                                    } />
                                    <p className="text-lg font-semibold text-gray-900">
                                        {urlDetails.protocol === 'https' ? 'Secure (HTTPS)' : 'Not Secure (HTTP)'}
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg md:col-span-1 lg:col-span-1">
                                <span className="text-sm font-medium text-gray-500 block mb-1">Full URL</span>
                                <p className="text-lg font-semibold text-gray-900 break-all truncate" title={url}>
                                    {url}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ToolInterface;