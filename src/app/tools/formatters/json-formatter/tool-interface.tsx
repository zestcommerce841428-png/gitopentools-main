"use client"

import { FaMagic, FaCopy, FaCode, FaFileCode, FaPaste, FaDownload, FaTimes } from 'react-icons/fa';
import React from 'react';
import useJsonFormatter from './hooks';


const ToolInterface = () => {

  const jsonFormatter = useJsonFormatter();

  return (
    <>
      {/* Tool description */}
      <div className="tool-card rounded-xl p-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
            <FaCode className="text-white text-lg" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">JSON Formatter</h3>
            <p className="text-gray-600 leading-relaxed">
              Format, validate, and beautify your JSON data. Paste your JSON code in the input area,
              and our tool will format it with proper indentation and syntax highlighting. You can
              also minify JSON, validate its structure, and convert it to a compact format.
            </p>
          </div>
        </div>
      </div>

      {/* Tool Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <div className="tool-card rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Input JSON</h3>
            <div className="flex space-x-4">
              <button
                id="clearInput"
                className="text-gray-500 hover:text-rose-600 transition-colors flex gap-1"
                data-tooltip="Clear Input"
                onClick={jsonFormatter.clear}
              >
                <FaTimes /> <span className='text-xs'>Clear</span>
              </button>
              <button
                id="pasteInput"
                className="text-gray-500 hover:text-purple-600 transition-colors flex gap-1"
                data-tooltip="Paste from Clipboard"
                onClick={jsonFormatter.pasteFromClipboard}
              >
                <FaPaste /> <span className='text-xs'>Paste</span>
              </button>
              <button
                id="sampleInput"
                className="text-gray-500 hover:text-purple-600 transition-colors flex gap-1"
                data-tooltip="Load Sample JSON"
                onClick={jsonFormatter.loadSampleJSON}
              >
                <FaFileCode /> <span className='text-xs'>Sample</span>
              </button>
            </div>
          </div>
          <div className="json-container">
            <textarea
              id="jsonInput"
              className="json-textarea w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder='Paste your JSON here or use the sample button for example JSON. Example: {"name": "John", "age": 30, "isStudent": false}'
              value={jsonFormatter.inputJson}
              onChange={(e) => jsonFormatter.setInputJson(e.target.value)}
            ></textarea>
          </div>
          {
            jsonFormatter.errorMessage && (
              <div id="inputError" className="error-message p-3 mt-3 rounded-lg">
                <p className="text-red-600 text-sm">{jsonFormatter.errorMessage}</p>
              </div>
            )
          }
        </div>

        {/* Output Section */}
        <div className="tool-card rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Formatted JSON</h3>
            <div className="flex space-x-4">
              <button
                id="copyOutput"
                className="text-gray-500 hover:text-purple-600 transition-colors flex gap-1"
                data-tooltip="Copy to Clipboard"
                onClick={jsonFormatter.copyToClipboard}
              >
                <FaCopy /> <span className='text-xs'>Copy</span>
              </button>
              <button
                id="downloadOutput"
                className="text-gray-500 hover:text-purple-600 transition-colors flex gap-1"
                data-tooltip="Download JSON"
                onClick={jsonFormatter.downloadJson}
              >
                <FaDownload /> <span className='text-xs'>Download</span>
              </button>
            </div>
          </div>
          <div className="json-container">
            <div id="jsonOutput" className="json-preview">
              {
                jsonFormatter.outputJson ? (
                  <pre dangerouslySetInnerHTML={{ __html: jsonFormatter.syntaxHighlight(jsonFormatter.outputJson) }} />
                ) : (
                  <span className="text-gray-400">{'// Formatted JSON will appear here'}</span>
                )
              }
            </div>
          </div>
          <div id="outputStats" className="mt-3 text-sm text-gray-500">
            <span id="lineCount">{jsonFormatter.lineCount} line{jsonFormatter.lineCount > 1 ? "s" : ""}</span> • <span id="charCount">{jsonFormatter.charCount} character{jsonFormatter.charCount > 1 ? "s" : ""}</span>
          </div>
        </div>
      </div>

      {/* Options Section */}
      <div className="tool-card rounded-xl p-6">

        <h3 className="text-lg font-semibold text-gray-900 mb-4">Formatting Options</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            className="format-option p-4 border border-gray-200 rounded-lg cursor-pointer"
            data-indent="2"
            onClick={() => jsonFormatter.setSelectedOption("2space")}
          >
            <div className="flex items-center">
              <input
                type="radio"
                name="formatOption"
                id="option2"
                className="mr-2"
                value="2space"
                checked={jsonFormatter.selectedOption === "2space"}
                onChange={(e) => jsonFormatter.setSelectedOption(e.target.value)}
              />
              <label htmlFor="option2" className="cursor-pointer">2 Spaces Indentation</label>
            </div>
            <p className="text-sm text-gray-500 mt-1">Standard formatting with 2 spaces</p>
          </div>

          <div
            className="format-option p-4 border border-gray-200 rounded-lg cursor-pointer"
            data-indent="4"
            onClick={() => jsonFormatter.setSelectedOption("4space")}
          >
            <div className="flex items-center">
              <input
                type="radio"
                name="formatOption"
                id="option4"
                className="mr-2"
                value="4space"
                checked={jsonFormatter.selectedOption === "4space"}
                onChange={(e) => jsonFormatter.setSelectedOption(e.target.value)}
              />
              <label htmlFor="option4" className="cursor-pointer">4 Spaces Indentation</label>
            </div>
            <p className="text-sm text-gray-500 mt-1">More readable formatting with 4 spaces</p>
          </div>

          <div
            className="format-option p-4 border border-gray-200 rounded-lg cursor-pointer"
            data-indent="0"
            onClick={() => jsonFormatter.setSelectedOption("minify")}
          >
            <div className="flex items-center">
              <input
                type="radio"
                name="formatOption"
                id="optionMinify"
                className="mr-2"
                value="minify"
                checked={jsonFormatter.selectedOption === "minify"}
                onChange={(e) => jsonFormatter.setSelectedOption(e.target.value)}
              />
              <label htmlFor="optionMinify" className="cursor-pointer">Minify (No Formatting)</label>
            </div>
            <p className="text-sm text-gray-500 mt-1">Compact format for production use</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            id="formatBtn"
            className="px-4 py-2 gradient-bg text-white rounded-lg flex items-center"
            onClick={jsonFormatter.formatJSON}
          >
            <FaMagic className="mr-2" /> Format JSON
          </button>
          {/*
          <button id="toggleViewBtn" className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg flex items-center">
            <FaExchangeAlt className="mr-2" /> Toggle View
          </button>
          */}
        </div>
      </div>
    </>
  );
};

export default ToolInterface;
