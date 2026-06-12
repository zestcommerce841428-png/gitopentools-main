"use client"

import { FaCopy, FaCode, FaExchangeAlt, FaQuoteRight, FaPaste, FaHtml5, FaJsSquare, FaDatabase, FaDownload, FaTimes } from 'react-icons/fa';
import React from 'react';
import useTextEscaper, { EscapersType } from './hooks';


const ToolInterface = () => {

  const textEscaper = useTextEscaper();

  return (
    <>
      {/* Tool description */}
      <div className="tool-card rounded-xl p-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
            <FaQuoteRight className="text-white text-lg" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">About Text Escape Tool</h3>
            <p className="text-gray-600 leading-relaxed">
              This tool helps you escape and unescape text for various programming languages and formats. Whether you need to prepare strings for JSON, HTML, JavaScript, C#, Java, or other languages, this tool handles the conversion automatically.
            </p>
            {/* Quick Stats */}
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">JSON</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">HTML</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">JavaScript</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">C#</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">Java</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">URL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tool interface */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <div className="tool-card rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold text-gray-900">Input Text</h4>
            <div className="flex items-center space-x-4">
              <button
                className="text-gray-500 hover:text-red-600 transition-colors flex gap-1 text-xs"
                onClick={textEscaper.clearInput}
              >
                <FaTimes /> Clear
              </button>
              <button
                className="text-gray-500 hover:text-purple-600 transition-colors flex gap-1 text-xs"
                onClick={textEscaper.pasteFromClipboard}
              >
                <FaPaste /> Paste
              </button>
            </div>
          </div>

          <textarea
            id="inputText"
            placeholder="Enter your text here to escape or unescape..."
            className="w-full h-64 p-4 border border-gray-200 rounded-lg resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            value={textEscaper.inputText}
            onChange={(e) => textEscaper.processText(e.target.value)}
          ></textarea>

          <div className="flex items-center justify-between mt-4">
            <span className="text-sm text-gray-500">
              Characters: <span id="inputCount">{textEscaper.inputCount}</span>
            </span>
            <div className="flex items-center space-x-2">
              <label className="text-sm text-gray-600">Mode:</label>
              <select id="escapeMode"
                className="px-3 py-1 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                onChange={(e) => textEscaper.setModeEscaper(e.target.value as EscapersType)}
                defaultValue={"json"}
              >
                <option value="json">JSON</option>
                <option value="html">HTML</option>
                <option value="javascript">JavaScript</option>
                <option value="csharp">C#</option>
                <option value="java">Java</option>
                <option value="url">URL</option>
                <option value="xml">XML</option>
                <option value="csv">CSV</option>
              </select>
            </div>
          </div>
        </div>

        {/* Output Section */}
        <div className="tool-card rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold text-gray-900">
              Escaped Output
            </h4>
            <div className="flex items-center space-x-2">
              <button
                className="tooltip px-3 py-1 text-xs gradient-bg text-white rounded-lg hover:opacity-90 transition-opacity flex items-center gap-1"
                data-tooltip="Copy to clipboard"
                onClick={textEscaper.copyOutput}
              >
                <FaCopy />Copy
              </button>
            </div>
          </div>
          <div id="outputText"
            className="w-full h-64 p-4 code-output rounded-lg overflow-auto custom-scrollbar text-sm whitespace-pre-wrap">
            {textEscaper.outputText}
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-sm text-gray-500">
              Output characters: <span id="outputCount">{textEscaper.outputCount}</span>
            </span>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input type="checkbox" id="showEscaped"
                  className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  checked={textEscaper.showEscaped}
                  onChange={(e) => textEscaper.changeShowEscaped(e.target.checked)}
                />
                <span className="text-sm text-gray-600">Show Escaped</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" id="showUnescaped"
                  className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  checked={textEscaper.showUnescaped}
                  onChange={(e) => textEscaper.changeShowUnescaped(e.target.checked)}
                />
                <span className="text-sm text-gray-600">Show Unescaped</span>
              </label>
            </div>
          </div>
        </div>

      </div>


      {/* Quick Actions */}
      <div className="tool-card rounded-xl p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <button
            className="p-4 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors text-center flex flex-col items-center"
            onClick={() => textEscaper.insertSample('json')}
          >
            <FaCode className="text-purple-600" />
            <div className="text-sm font-medium text-gray-900">JSON Sample</div>
          </button>
          <button
            className="p-4 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors text-center flex flex-col items-center"
            onClick={() => textEscaper.insertSample('html')}
          >
            <FaHtml5 className="text-purple-600 mb-2" />
            <div className="text-sm font-medium text-gray-900">HTML Sample</div>
          </button>
          <button
            className="p-4 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors text-center flex flex-col items-center"
            onClick={() => textEscaper.insertSample('javascript')}
          >
            <FaJsSquare className="text-purple-600 mb-2" />
            <div className="text-sm font-medium text-gray-900">JS Sample</div>
          </button>
          <button
            className="p-4 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors text-center flex flex-col items-center"
            onClick={() => textEscaper.insertSample('sql')}
          >
            <FaDatabase className="text-purple-600 mb-2" />
            <div className="text-sm font-medium text-gray-900">SQL Sample</div>
          </button>
          <button
            className="p-4 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors text-center flex flex-col items-center"
            onClick={textEscaper.swapInputOutput}
          >
            <FaExchangeAlt className="text-purple-600 mb-2" />
            <div className="text-sm font-medium text-gray-900">Swap I/O</div>
          </button>
          <button
            className="p-4 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors text-center flex flex-col items-center"
            onClick={textEscaper.downloadOutput}
          >
            <FaDownload className="text-purple-600 mb-2" />
            <div className="text-sm font-medium text-gray-900">Download</div>
          </button>
        </div>
      </div>


      {/* Usage Examples */}
      <div className="tool-card rounded-xl p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Usage Examples</h4>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h5 className="font-medium text-gray-900 mb-2">JSON String Escaping</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-gray-600 mb-1">Input:</div>
                <code
                  className="block p-2 bg-white border rounded text-xs">Hello "World" and 'quotes'</code>
              </div>
              <div>
                <div className="text-gray-600 mb-1">Output:</div>
                <code
                  className="block p-2 bg-white border rounded text-xs">Hello \"World\" and 'quotes'</code>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <h5 className="font-medium text-gray-900 mb-2">HTML Entity Escaping</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-gray-600 mb-1">Input:</div>
                <code
                  className="block p-2 bg-white border rounded text-xs">&lt;div&gt;Hello &amp; Welcome&lt;/div&gt;</code>
              </div>
              <div>
                <div className="text-gray-600 mb-1">Output:</div>
                <code
                  className="block p-2 bg-white border rounded text-xs">&amp;lt;div&amp;gt;Hello &amp;amp; Welcome&amp;lt;/div&amp;gt;</code>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default ToolInterface;
