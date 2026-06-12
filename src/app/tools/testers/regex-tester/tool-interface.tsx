"use client"

import { FaPlay, FaCopy, FaTimes, FaFileAlt, FaCheck, FaTimesCircle } from 'react-icons/fa';
import React from 'react';
import useRegexTester, { commonRegexPatterns, quickReference } from './hooks';

const ToolInterface = () => {
  const regexTester = useRegexTester();

  return (
    <>
      {/* Tool description */}
      <div className="tool-card rounded-xl p-6 mb-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
            <FaPlay className="text-white text-lg" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Regex Tester Tool</h3>
            <p className="text-gray-600 leading-relaxed">
              Test and debug regular expressions in real-time. Enter a regex pattern and test text to see matches highlighted instantly. Supports JavaScript regex syntax with flags. Use the quick reference and common patterns for help.
            </p>
          </div>
        </div>
      </div>

      {/* Main Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column - Input */}
        <div className="space-y-6">
          {/* Regex Input */}
          <div className="tool-card rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Regular Expression</h3>
              <div className="flex space-x-2">
                <button
                  className="text-gray-500 hover:text-red-600 transition-colors flex items-center gap-1 text-sm"
                  onClick={regexTester.clearAll}
                  title="Clear All"
                >
                  <FaTimes /> Clear
                </button>
                <button
                  className="text-gray-500 hover:text-purple-600 transition-colors flex items-center gap-1 text-sm"
                  onClick={regexTester.copyRegex}
                  title="Copy Regex"
                >
                  <FaCopy /> Copy
                </button>
              </div>
            </div>
            
            <div className="regex-container">
              <textarea
                className="regex-textarea w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent font-mono"
                placeholder="Enter your regex pattern (e.g., ^\d{3}-\d{3}-\d{4}$)"
                value={regexTester.regex}
                onChange={(e) => regexTester.setRegex(e.target.value)}
                spellCheck="false"
              />
            </div>

            {/* Flags */}
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Flags</h4>
              <div className="regex-flags flex space-x-2">
                {['g', 'i', 'm', 's', 'u'].map(flag => (
                  <button
                    key={flag}
                    className={`px-3 py-1 rounded text-sm font-medium ${regexTester.flags.includes(flag) ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    onClick={() => regexTester.toggleFlag(flag)}
                    title={
                      flag === 'g' ? 'Global' :
                      flag === 'i' ? 'Case insensitive' :
                      flag === 'm' ? 'Multiline' :
                      flag === 's' ? 'Dot all' :
                      'Unicode'
                    }
                  >
                    {flag}
                  </button>
                ))}
              </div>
            </div>

            {/* Validation Status */}
            <div className="mt-4 flex items-center space-x-2">
              {regexTester.regex && (
                <>
                  {regexTester.isValid ? (
                    <FaCheck className="text-green-500" />
                  ) : (
                    <FaTimesCircle className="text-red-500" />
                  )}
                  <span className={`text-sm ${regexTester.isValid ? 'text-green-600' : 'text-red-600'}`}>
                    {regexTester.isValid ? 'Valid regex' : 'Invalid regex'}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Test Text Input */}
          <div className="tool-card rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Test Text</h3>
              <div className="flex space-x-2">
                <button
                  className="text-gray-500 hover:text-red-600 transition-colors flex items-center gap-1 text-sm"
                  onClick={() => regexTester.setTestText("")}
                  title="Clear Text"
                >
                  <FaTimes /> Clear
                </button>
                <button
                  className="text-gray-500 hover:text-purple-600 transition-colors flex items-center gap-1 text-sm"
                  onClick={regexTester.loadSampleText}
                  title="Load Sample Text"
                >
                  <FaFileAlt /> Sample
                </button>
              </div>
            </div>
            
            <div className="regex-container">
              <textarea
                className="regex-textarea w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter text to test against..."
                value={regexTester.testText}
                onChange={(e) => regexTester.setTestText(e.target.value)}
                rows={6}
              />
            </div>
          </div>
        </div>

        {/* Right Column - Results */}
        <div className="space-y-6">
          {/* Matches Preview */}
          <div className="tool-card rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Matches Preview</h3>
              <div className="flex space-x-2">
                <div className="regex-stats">
                  <span>{regexTester.matches.length} matches</span>
                  {regexTester.matches.length > 0 && (
                    <span>{regexTester.matches.reduce((acc, match) => acc + match[0].length, 0)} chars</span>
                  )}
                </div>
                <button
                  className="text-gray-500 hover:text-purple-600 transition-colors flex items-center gap-1 text-sm"
                  onClick={regexTester.copyMatches}
                  title="Copy Matches"
                  disabled={regexTester.matches.length === 0}
                >
                  <FaCopy /> Copy
                </button>
              </div>
            </div>
            
            <div className="regex-container">
              <div 
                className="regex-preview"
                dangerouslySetInnerHTML={{ __html: regexTester.highlightedText || '<span class="text-gray-400">Matches will appear here...</span>' }}
              />
            </div>

            {/* Error Message */}
            {regexTester.error && (
              <div className="regex-error mt-4">
                <p className="text-red-600 text-sm font-mono">{regexTester.error}</p>
              </div>
            )}

            {/* Matches List */}
            {regexTester.matches.length > 0 && (
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Matched Results</h4>
                <div className="max-h-40 overflow-y-auto border border-gray-200 rounded-lg p-2">
                  {regexTester.matches.map((match, index) => (
                    <div key={index} className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded">
                      <span className="text-sm text-gray-500 w-8">#{index + 1}</span>
                      <code className="flex-1 text-sm bg-gray-100 px-2 py-1 rounded">
                        {match[0]}
                      </code>
                      <span className="text-xs text-gray-400">{match[0].length} chars</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Quick Reference */}
          <div className="tool-card rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Reference</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Character Classes */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Character Classes</h4>
                <div className="space-y-2">
                  {quickReference.characterClasses.map((item, index) => (
                    <div 
                      key={index}
                      className="regex-quick-ref-item"
                      onClick={() => regexTester.loadSample(item.pattern)}
                    >
                      <div className="flex justify-between items-center">
                        <code className="text-sm">{item.pattern}</code>
                        <span className="text-xs text-gray-500">{item.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantifiers */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Quantifiers</h4>
                <div className="space-y-2">
                  {quickReference.quantifiers.map((item, index) => (
                    <div 
                      key={index}
                      className="regex-quick-ref-item"
                      onClick={() => regexTester.loadSample(item.pattern)}
                    >
                      <div className="flex justify-between items-center">
                        <code className="text-sm">{item.pattern}</code>
                        <span className="text-xs text-gray-500">{item.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Anchors & Groups */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Anchors & Groups</h4>
                <div className="space-y-2">
                  {quickReference.anchorsGroups.map((item, index) => (
                    <div 
                      key={index}
                      className="regex-quick-ref-item"
                      onClick={() => regexTester.loadSample(item.pattern)}
                    >
                      <div className="flex justify-between items-center">
                        <code className="text-sm">{item.pattern}</code>
                        <span className="text-xs text-gray-500">{item.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Common Patterns Section */}
      <div className="tool-card rounded-xl p-6 mt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Common Regex Patterns</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {Object.entries(commonRegexPatterns).map(([category, patterns]) => (
            <div key={category}>
              <h4 className="text-sm font-medium text-gray-700 mb-2 capitalize">{category}</h4>
              <div className="space-y-3">
                {Object.entries(patterns).map(([key, pattern]) => (
                  <div 
                    key={key}
                    className="regex-pattern-card"
                    onClick={() => regexTester.loadSample(pattern.pattern)}
                  >
                    <h4 className="text-sm font-semibold">{pattern.name}</h4>
                    <p className="text-xs">{pattern.description}</p>
                    <code className="text-xs block truncate" title={pattern.pattern}>
                      {pattern.pattern}
                    </code>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ToolInterface;