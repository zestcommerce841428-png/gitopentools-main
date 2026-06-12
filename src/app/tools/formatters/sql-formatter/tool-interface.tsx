"use client"

import { FaMagic, FaCopy, FaCode, FaFileCode, FaDownload, FaTimes } from 'react-icons/fa';
import React from 'react';
import useSQLFormatter from './hooks';


const ToolInterface = () => {

  const sqlFormatter = useSQLFormatter();

  return (
    <>
      {/* Tool description */}
      <div className="tool-card rounded-xl p-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
            <FaCode className="text-white text-lg" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">SQL Formatter Tool</h3>
            <p className="text-gray-600 leading-relaxed">
              This tool helps you format and beautify your SQL queries for better readability. It supports syntax highlighting, indentation, and keyword capitalization. Simply paste your SQL code, click format, and get a clean, readable version of your query.
            </p>
          </div>
        </div>
      </div>

      {/* Tool Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <div className="tool-card rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Input SQL</h3>
            <div className="flex space-x-4">
              <button
                id="clearInput"
                className="text-gray-500 hover:text-red-600 transition-colors flex gap-1"
                data-tooltip="Clear Input"
                onClick={sqlFormatter.clear}
              >
                <FaTimes /> <span className='text-xs'>Clear</span>
              </button>

              <button
                id="sampleInput"
                className="text-gray-500 hover:text-purple-600 transition-colors flex gap-1"
                data-tooltip="Load Sample SQL"
                onClick={sqlFormatter.loadSampleSQL}
              >
                <FaFileCode /> <span className='text-xs'>Sample</span>
              </button>
            </div>
          </div>
          <div className="sql-container">
            <textarea
              id="jsonInput"
              className="sql-textarea w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder='Paste your SQL query here...'
              value={sqlFormatter.inputSQL}
              onChange={(e) => sqlFormatter.setInputSQL(e.target.value)}
            ></textarea>
          </div>
          {
            sqlFormatter.errorMessage && (
              <div id="inputError" className="error-message p-3 mt-3 rounded-lg">
                <p className="text-red-600 text-sm">{sqlFormatter.errorMessage}</p>
              </div>
            )
          }

          <button
            id="formatBtn"
            className="px-4 py-2 gradient-bg text-white rounded-lg flex items-center"
            onClick={sqlFormatter.formatSQL}
          >
            <FaMagic className="mr-2" /> Format SQL
          </button>
        </div>

        {/* Output Section */}
        <div className="tool-card rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Formatted SQL</h3>
            <div className="flex space-x-4">
              <button
                id="copyOutput"
                className="text-gray-500 hover:text-purple-600 transition-colors flex gap-1"
                data-tooltip="Copy to Clipboard"
                onClick={sqlFormatter.copyToClipboard}
              >
                <FaCopy /> <span className='text-xs'>Copy</span>
              </button>
              <button
                id="downloadOutput"
                className="text-gray-500 hover:text-purple-600 transition-colors flex gap-1"
                data-tooltip="Download SQL"
                onClick={sqlFormatter.downloadSQL}
              >
                <FaDownload /> <span className='text-xs'>Download</span>
              </button>
            </div>
          </div>
          <div className="sql-container">
            <div id="jsonOutput" className="sql-preview">
              {
                sqlFormatter.outputSQL ? (
                  <pre dangerouslySetInnerHTML={{ __html: sqlFormatter.syntaxHighlight(sqlFormatter.outputSQL) }} />
                ) : (
                  <span className="text-gray-400">{'Formatted SQL will appear here...'}</span>
                )
              }
            </div>
          </div>
          <div id="outputStats" className="mt-3 text-sm text-gray-500">
            <span id="lineCount">{sqlFormatter.lineCount} line{sqlFormatter.lineCount > 1 ? "s" : ""}</span> • <span id="charCount">{sqlFormatter.charCount} character{sqlFormatter.charCount > 1 ? "s" : ""}</span>
          </div>
        </div>
      </div>

    </>
  );
};

export default ToolInterface;
