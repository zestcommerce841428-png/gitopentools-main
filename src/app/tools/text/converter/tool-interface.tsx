"use client"

import { FaEdit, FaTimes, FaMagic, FaFileAlt, FaCopy, FaTextHeight, FaArrowUp, FaArrowDown, FaHeading, FaFont, FaCode, FaLink, FaMinus, FaRandom, FaExchangeAlt } from 'react-icons/fa';
import React from 'react';
import useTextConverter, { TextConverterType } from '@/app/tools/text/converter/hooks';


const ToolInterface = () => {

  const textConverter = useTextConverter();

  return (
    <>
      {/* Tool description */}
      <div className="tool-card rounded-xl p-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
            <FaTextHeight className="text-white text-lg" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Text Case Converter</h3>
            <p className="text-gray-600 leading-relaxed">
              Transform your text between different cases instantly. Perfect for programming, writing, and content creation.
              Convert between uppercase, lowercase, title case, camelCase, PascalCase, snake_case, kebab-case, and more.
            </p>
            {/* Quick Stats */}
            <div className="grid grid-cols-4 gap-4 mt-4">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-lg font-bold gradient-text" id="charCount">{textConverter.charCount}</div>
                <div className="text-xs text-gray-600">Characters</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-lg font-bold gradient-text" id="wordCount">{textConverter.wordCount}</div>
                <div className="text-xs text-gray-600">Words</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-lg font-bold gradient-text" id="sentenceCount">{textConverter.sentenceCount}</div>
                <div className="text-xs text-gray-600">Sentences</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-lg font-bold gradient-text" id="paragraphCount">{textConverter.paragraphCount}</div>
                <div className="text-xs text-gray-600">Paragraphs</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tool interface */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <div className="tool-card rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold text-gray-900 flex items-center">
              <FaEdit className='text-purple-500 mr-2' />
              Input Text
            </h4>
            <div className="flex items-center space-x-4">
              <button
                onClick={textConverter.clearText}
                className="text-xs text-gray-600 hover:text-red-600 transition-colors tooltip flex items-center gap-1"
                data-tooltip="Clear text"
              >
                <FaTimes />Clear
              </button>
              <button
                onClick={textConverter.loadSampleText}
                className="text-xs text-gray-600 hover:text-purple-800 transition-colors tooltip flex items-center gap-1"
                data-tooltip="Load sample text"
              >
                <FaMagic />Sample
              </button>
            </div>
          </div>
          <div className="relative">
            <textarea id="inputText"
              placeholder="Enter or paste your text here to convert between different cases..."
              className="w-full h-48 p-4 border border-gray-200 rounded-lg resize-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 mono-font text-sm"
              //oninput="updateText()"
              value={textConverter.text}
              onChange={(e) => textConverter.setInputText(e.target.value)}
            ></textarea>
            <div className="char-counter" id="inputCharCounter">{textConverter.charCount} characters</div>
          </div>
        </div>

        {/* Output Section */}
        <div className="tool-card rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold text-gray-900 flex items-center">
              <FaFileAlt className="text-purple-500 mr-2" />
              Output Text
            </h4>
            <div className="flex items-center space-x-4">
              <span id="conversionType" className="px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded-full">Ready</span>
              <button
                onClick={textConverter.copyOutput}
                className="text-xs text-green-600 hover:text-green-800 transition-colors tooltip flex items-center gap-1"
                data-tooltip="Copy to clipboard"
                id="copyButton"
              >
                <FaCopy />Copy
              </button>
            </div>
          </div>
          <div className="relative">
            <textarea
              id="outputText"
              readOnly
              placeholder="Converted text will appear here..."
              className="w-full h-48 p-4 border border-gray-200 rounded-lg resize-none bg-gray-50 mono-font text-sm"
              value={textConverter.convertedText}
            >

            </textarea>
            <div className="char-counter" id="outputCharCounter">{textConverter.charConvertedCount} characters</div>
          </div>
        </div>
      </div>

      <div className="tool-card rounded-xl p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <i className="fas fa-bolt text-purple-500 mr-2"></i>
          Quick Convert
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          <button
            onClick={() => textConverter.convertText(TextConverterType.UPPERCASE)}
            className="conversion-button px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 tooltip flex flex-col items-center justify-center gap-1"
            data-tooltip="Convert to uppercase">
            <FaArrowUp className="text-purple-600 mb-1 block" />
            UPPER
          </button>
          <button
            onClick={() => textConverter.convertText(TextConverterType.LOWERCASE)}
            className="conversion-button px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 tooltip flex flex-col items-center justify-center gap-1"
            data-tooltip="Convert to lowercase">
            <FaArrowDown className="text-purple-600 mb-1 block" />
            lower
          </button>
          <button
            onClick={() => textConverter.convertText(TextConverterType.TITLE)}
            className="conversion-button px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 tooltip flex flex-col  items-center justify-center gap-1"
            data-tooltip="Convert to title case">
            <FaHeading className="text-purple-600 mb-1 block" />
            Title
          </button>
          <button
            //onclick="convertText('sentencecase')" 
            className="conversion-button px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 tooltip flex flex-col items-center justify-center gap-1"
            data-tooltip="Convert to sentence case">
            <FaFont className="text-purple-600 mb-1 block" />
            Sentence
          </button>
          <button
            onClick={() => textConverter.convertText(TextConverterType.CAMEL)}
            className="conversion-button px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 tooltip flex flex-col items-center justify-center gap-1"
            data-tooltip="Convert to camelCase">
            <FaCode className="text-purple-600 mb-1 block" />
            camelCase
          </button>
          <button
            onClick={() => textConverter.convertText(TextConverterType.PASCAL)}
            className="conversion-button px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 tooltip flex flex-col items-center justify-center gap-1"
            data-tooltip="Convert to PascalCase">
            <FaCode className="text-purple-600 mb-1 block" />
            PascalCase
          </button>
          <button
            onClick={() => textConverter.convertText(TextConverterType.SNAKE)}
            className="conversion-button px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 tooltip flex flex-col items-center justify-center gap-1"
            data-tooltip="Convert to snake_case">
            <FaLink className="text-purple-600 mb-1 block" />
            snake_case
          </button>
          <button
            onClick={() => textConverter.convertText(TextConverterType.KEBAB)}
            className="conversion-button px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 tooltip flex flex-col items-center justify-center gap-1"
            data-tooltip="Convert to kebab-case">
            <FaMinus className="text-purple-600 mb-1 block" />
            kebab-case
          </button>
          <button
            onClick={() => textConverter.convertText(TextConverterType.ALTERNATING)}
            className="conversion-button px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 tooltip flex flex-col items-center justify-center gap-1"
            data-tooltip="Convert to alternating case">
            <FaRandom className="text-purple-600 mb-1 block" />
            aLtErNaTiNg
          </button>
          <button
            onClick={() => textConverter.convertText(TextConverterType.INVERSE)}
            className="conversion-button px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 tooltip flex flex-col items-center justify-center gap-1"
            data-tooltip="Invert case">
            <FaExchangeAlt className="text-purple-600 mb-1 block" />
            iNVERSE
          </button>
        </div>
      </div>
    </>
  );
};

export default ToolInterface;
