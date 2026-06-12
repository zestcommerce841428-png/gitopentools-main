"use client"

import React from 'react';
import { FaCopy, FaRedo, FaTrash, FaChevronDown, FaChevronUp, FaInfoCircle } from 'react-icons/fa';
import useUUIDGenerator, { UUIDVersion, OutputFormat } from './hooks';
import './styles.css';

const ToolInterface = () => {
  const {
    options,
    uuids,
    isCopied,
    showAdvanced,
    updateOption,
    setShowAdvanced,
    generateUUIDs,
    copyToClipboard,
    clearOutput,
    loadSample,
    formattedOutput
  } = useUUIDGenerator();

  const versionDescriptions: Record<UUIDVersion, string> = {
    v1: 'Time-based UUID (timestamp + MAC address)',
    v4: 'Random UUID (cryptographically secure)',
    v7: 'Time-ordered UUID (modern, sortable)'
  };

  return (
    <>
      {/* Tool description */}
      <div className="tool-card rounded-xl p-6 mb-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">UUID Generator Tool</h3>
            <p className="text-gray-600 leading-relaxed">
              Generate RFC-compliant UUIDs instantly for databases, APIs, and distributed systems. 
              Supports UUID versions v1 (time-based), v4 (random), and v7 (time-ordered). 
              All generation happens client-side for maximum privacy.
            </p>
          </div>
        </div>
      </div>

      {/* Configuration and Output Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Configuration Panel */}
        <div className="lg:col-span-1">
          <div className="options-panel rounded-xl p-6 sticky top-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">UUID Configuration</h3>
            
            {/* UUID Version */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                UUID Version
              </label>
              <div className="space-y-2">
                {(['v4', 'v1', 'v7'] as UUIDVersion[]).map((version) => (
                  <div key={version} className="custom-radio">
                    <input
                      type="radio"
                      id={`version-${version}`}
                      name="uuid-version"
                      checked={options.version === version}
                      onChange={() => updateOption('version', version)}
                      className="text-purple-600 focus:ring-purple-500"
                    />
                    <label htmlFor={`version-${version}`} className="text-gray-700">
                      UUID {version.toUpperCase()}
                      <span className="text-gray-500 text-sm ml-2">
                        {version === 'v4' ? '(Default)' : ''}
                      </span>
                    </label>
                    <div className="version-info ml-2">
                      <FaInfoCircle className="text-gray-400 text-sm" />
                      <div className="tooltip">
                        {versionDescriptions[version]}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantity
              </label>
              <input
                type="number"
                min="1"
                max="100"
                value={options.quantity}
                onChange={(e) => updateOption('quantity', Math.min(100, Math.max(1, parseInt(e.target.value) || 1)))}
                className="quantity-input w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-1">Generate 1 to 100 UUIDs at once</p>
            </div>

            {/* Format Options */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Format Options
              </label>
              <div className="space-y-2">
                <div className="custom-checkbox">
                  <input
                    type="checkbox"
                    id="hyphens"
                    checked={options.hyphens}
                    onChange={(e) => updateOption('hyphens', e.target.checked)}
                    className="text-purple-600 focus:ring-purple-500"
                  />
                  <label htmlFor="hyphens" className="text-gray-700">
                    Include hyphens (RFC standard)
                  </label>
                </div>
                <div className="custom-checkbox">
                  <input
                    type="checkbox"
                    id="uppercase"
                    checked={options.uppercase}
                    onChange={(e) => updateOption('uppercase', e.target.checked)}
                    className="text-purple-600 focus:ring-purple-500"
                  />
                  <label htmlFor="uppercase" className="text-gray-700">
                    Uppercase letters
                  </label>
                </div>
                <div className="custom-checkbox">
                  <input
                    type="checkbox"
                    id="braces"
                    checked={options.braces}
                    onChange={(e) => updateOption('braces', e.target.checked)}
                    className="text-purple-600 focus:ring-purple-500"
                  />
                  <label htmlFor="braces" className="text-gray-700">
                    Braces format {'{uuid}'}
                  </label>
                </div>
                <div className="custom-checkbox">
                  <input
                    type="checkbox"
                    id="urn"
                    checked={options.urn}
                    onChange={(e) => updateOption('urn', e.target.checked)}
                    disabled={options.braces}
                    className="text-purple-600 focus:ring-purple-500 disabled:opacity-50"
                  />
                  <label htmlFor="urn" className={`text-gray-700 ${options.braces ? 'opacity-50' : ''}`}>
                    URN format (urn:uuid:...)
                  </label>
                </div>
              </div>
            </div>

            {/* Advanced Options Toggle */}
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="w-full flex items-center justify-between text-sm font-medium text-gray-700 hover:text-purple-600 mb-4"
            >
              <span>Advanced Options</span>
              {showAdvanced ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            {/* Advanced Options */}
            <div className={`advanced-options ${showAdvanced ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Output Format
              </label>
              <div className="space-y-2">
                {(['lines', 'comma', 'json'] as OutputFormat[]).map((format) => (
                  <div key={format} className="custom-radio">
                    <input
                      type="radio"
                      id={`format-${format}`}
                      name="output-format"
                      checked={options.outputFormat === format}
                      onChange={() => updateOption('outputFormat', format)}
                      className="text-purple-600 focus:ring-purple-500"
                    />
                    <label htmlFor={`format-${format}`} className="text-gray-700 capitalize">
                      {format === 'lines' ? 'One per line' : 
                       format === 'comma' ? 'Comma-separated' : 
                       'JSON array'}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={generateUUIDs}
              className="w-full mt-6 px-4 py-3 gradient-bg text-white rounded-lg font-medium hover:opacity-90 transition-opacity cursor-pointer"
            >
              Generate UUID{options.quantity !== 1 ? 's' : ''}
            </button>
          </div>
        </div>

        {/* Output Section */}
        <div className="lg:col-span-2">
          <div className="tool-card rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Generated UUIDs</h3>
              <div className="flex space-x-3">
                <button
                  onClick={loadSample}
                  className="px-3 py-2 text-sm border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Load Sample
                </button>
                <button
                  onClick={generateUUIDs}
                  className="px-3 py-2 text-sm border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center"
                >
                  <FaRedo className="mr-1" /> Regenerate
                </button>
                <button
                  onClick={copyToClipboard}
                  className={`px-3 py-2 text-sm bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors flex items-center ${isCopied ? 'copied' : ''}`}
                >
                  <FaCopy className="mr-1" />
                  {isCopied ? 'Copied!' : 'Copy All'}
                </button>
                <button
                  onClick={clearOutput}
                  className="px-3 py-2 text-sm border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center"
                >
                  <FaTrash className="mr-1" /> Clear
                </button>
              </div>
            </div>

            <div className="uuid-container">
              <div className="uuid-preview">
                {uuids.length > 0 ? (
                  <div className="space-y-1">
                    {uuids.map((uuid, index) => (
                      <div key={index} className="uuid-item">
                        {uuid}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-gray-400 h-full flex items-center justify-center">
                    Generated UUIDs will appear here...
                  </div>
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
              <div>
                <span className="font-medium">{uuids.length}</span> UUID{uuids.length !== 1 ? 's' : ''} generated
                {options.quantity > 1 && ` (${options.quantity} requested)`}
              </div>
              <div>
                <span className="font-medium">{formattedOutput.length}</span> characters
              </div>
            </div>
          </div>

          {/* Preview of formatted output */}
          {showAdvanced && (
            <div className="mt-6 tool-card rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Formatted Output Preview</h3>
              <div className="uuid-container">
                <div className="uuid-preview bg-gray-900 text-gray-100">
                  <pre>{formattedOutput}</pre>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Preview shows exactly what will be copied when using "Copy All"
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ToolInterface;