"use client";

import { FaCopy, FaRedo, FaEye, FaEyeSlash, FaChevronDown, FaChevronUp, FaShieldAlt, FaRandom, FaSpinner } from 'react-icons/fa';
import React from 'react';
import usePasswordGenerator, { PresetType } from './hooks';

const ToolInterface = () => {
  const {
    password,
    options,
    strength,
    isHidden,
    showAdvanced,
    preset,
    copied,
    isGenerating,
    presets,
    generatePassword,
    regeneratePassword,
    copyToClipboard,
    toggleVisibility,
    updateOption,
    updateLength,
    applyPreset,
    setShowAdvanced,
  } = usePasswordGenerator();

  // Strength bar width
  const getStrengthWidth = () => {
    switch (strength.level) {
      case 'weak': return 'w-1/4';
      case 'medium': return 'w-1/2';
      case 'strong': return 'w-3/4';
      case 'very strong': return 'w-full';
      default: return 'w-0';
    }
  };

  // Check if generate button should be disabled
  const isGenerateDisabled = !options.uppercase && !options.lowercase && !options.numbers && !options.symbols;

  // Handle length change with debouncing
  const handleLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 6;
    updateLength(value);
  };

  return (
    <>
      {/* Tool description */}
      <div className="tool-card rounded-xl p-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
            <FaShieldAlt className="text-white text-lg" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Password Generator</h3>
            <p className="text-gray-600 leading-relaxed">
              Generate strong, random passwords with customizable options. All generation happens locally in your browser—no data is sent to servers. Perfect for SSH keys, API tokens, database credentials, and secure logins.
            </p>
          </div>
        </div>
      </div>

      {/* Main Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input/Options Section */}
        <div className="tool-card rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Password Settings</h3>

          {/* Preset Selector */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-3">Presets</label>
            <div className="grid grid-cols-2 gap-3">
              {(['developer', 'website', 'banking', 'custom'] as PresetType[]).map((presetId) => (
                <button
                  key={presetId}
                  className={`preset-option p-3 text-left rounded-lg border transition-all ${
                    preset === presetId 
                      ? 'border-purple-500 bg-purple-50 shadow-sm' 
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                  onClick={() => applyPreset(presetId)}
                  disabled={isGenerating}
                >
                  <div className="font-medium text-gray-900">{presets[presetId].name}</div>
                  <div className="text-xs text-gray-500 mt-1">{presets[presetId].description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Length Slider */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Password Length: <span className="font-bold text-gray-900">{options.length}</span>
              </label>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-xs text-gray-500 min-w-[20px]">6</span>
              <input
                type="range"
                min="6"
                max="64"
                value={options.length}
                onChange={handleLengthChange}
                className="length-slider flex-1"
                disabled={isGenerating}
              />
              <span className="text-xs text-gray-500 min-w-[20px]">64</span>
            </div>
            <div className="mt-4 flex justify-center">
              <input
                type="number"
                min="6"
                max="64"
                value={options.length}
                onChange={handleLengthChange}
                className="length-input"
                disabled={isGenerating}
              />
            </div>
          </div>

          {/* Character Sets */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-3">Character Types</label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { key: 'uppercase' as const, label: 'Uppercase (A-Z)', icon: 'A', color: 'bg-green-100 text-green-800' },
                { key: 'lowercase' as const, label: 'Lowercase (a-z)', icon: 'a', color: 'bg-blue-100 text-blue-800' },
                { key: 'numbers' as const, label: 'Numbers (0-9)', icon: '1', color: 'bg-yellow-100 text-yellow-800' },
                { key: 'symbols' as const, label: 'Symbols (!@#$...)', icon: '#', color: 'bg-pink-100 text-pink-800' },
              ].map(({ key, label, icon, color }) => (
                <button
                  key={key}
                  className={`option-toggle p-3 rounded-lg border transition-all ${
                    options[key] 
                      ? 'border-purple-500 bg-purple-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  } ${isGenerating ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={() => !isGenerating && updateOption(key, !options[key])}
                  disabled={isGenerating}
                >
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <div className="font-medium text-gray-900">{label}</div>
                    </div>
                    <div className={`w-6 h-6 rounded flex items-center justify-center text-xs font-bold ${color}`}>
                      {icon}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Advanced Options Toggle */}
          <button
            className={`w-full p-3 rounded-lg border transition-colors mb-6 ${
              showAdvanced ? 'border-purple-500' : 'border-gray-200 hover:border-purple-500'
            } ${isGenerating ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => !isGenerating && setShowAdvanced(!showAdvanced)}
            disabled={isGenerating}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-900">Advanced Options</span>
              {showAdvanced ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </button>

          {/* Advanced Options */}
          {showAdvanced && (
            <div className="advanced-options mb-8 space-y-4">
              {[
                { key: 'excludeSimilar' as const, label: 'Exclude similar characters (l, I, O, 0)' },
                { key: 'avoidRepeated' as const, label: 'Avoid repeated characters' },
                { key: 'avoidSequential' as const, label: 'Avoid sequential characters (abc, 123)' },
              ].map(({ key, label }) => (
                <label key={key} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={options[key]}
                    onChange={(e) => updateOption(key, e.target.checked)}
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    disabled={isGenerating}
                  />
                  <span className={`text-gray-700 ${isGenerating ? 'opacity-50' : ''}`}>{label}</span>
                </label>
              ))}
            </div>
          )}

          {/* Generate Button */}
          <button
            className={`w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center transition-all text-white cursor-pointer ${
              isGenerateDisabled || isGenerating
                ? 'bg-gray-300 cursor-not-allowed'
                : 'gradient-bg hover:opacity-90 active:scale-[0.98]'
            }`}
            onClick={generatePassword}
            disabled={isGenerateDisabled || isGenerating}
          >
            {isGenerating ? (
              <>
                <FaSpinner className="mr-2 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <FaRandom className="mr-2" />
                {isGenerateDisabled ? 'Select at least one character type' : 'Generate Password'}
              </>
            )}
          </button>
        </div>

        {/* Output Section */}
        <div className="tool-card rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Generated Password</h3>
            <div className="flex items-center space-x-2">
              <button
                className={`p-2 rounded transition-colors ${
                  isGenerating 
                    ? 'text-gray-300 cursor-not-allowed' 
                    : 'text-gray-500 hover:text-purple-600 hover:bg-purple-50'
                }`}
                onClick={toggleVisibility}
                title={isHidden ? "Show password" : "Hide password"}
                disabled={isGenerating || !password}
              >
                {isHidden ? <FaEyeSlash /> : <FaEye />}
              </button>
              <button
                className={`p-2 rounded transition-colors ${
                  isGenerating 
                    ? 'text-gray-300 cursor-not-allowed' 
                    : 'text-gray-500 hover:text-purple-600 hover:bg-purple-50'
                }`}
                onClick={regeneratePassword}
                title="Regenerate"
                disabled={isGenerating}
              >
                <FaRedo />
              </button>
              <button
                className={`p-2 rounded transition-colors ${
                  copied 
                    ? 'text-green-600 bg-green-50' 
                    : isGenerating || !password
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-gray-500 hover:text-purple-600 hover:bg-purple-50'
                }`}
                onClick={copyToClipboard}
                title="Copy to clipboard"
                disabled={isGenerating || !password}
              >
                <FaCopy />
              </button>
            </div>
          </div>

          {/* Password Display */}
          <div className="password-display mb-6 p-4 bg-gray-50 border border-gray-200 rounded-lg min-h-[120px]">
            <div className="text-center">
              {isGenerating ? (
                <div className="flex flex-col items-center justify-center h-20">
                  <FaSpinner className="animate-spin text-purple-600 mb-2" />
                  <div className="text-gray-500">Generating secure password...</div>
                </div>
              ) : password ? (
                <div className="text-2xl font-mono tracking-wider break-all select-text">
                  {isHidden ? '•'.repeat(password.length) : password}
                </div>
              ) : (
                <div className="text-gray-400 h-20 flex items-center justify-center">
                  Click "Generate Password" to create a secure password
                </div>
              )}
            </div>
          </div>

          {/* Strength Indicator */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Password Strength</span>
              {!isGenerating && password && (
                <span className={`text-sm font-bold ${
                  strength.level === 'weak' ? 'text-red-600' :
                  strength.level === 'medium' ? 'text-yellow-600' :
                  strength.level === 'strong' ? 'text-green-600' :
                  'text-blue-600'
                }`}>
                  {strength.level.charAt(0).toUpperCase() + strength.level.slice(1)}
                </span>
              )}
            </div>
            <div className="strength-meter h-2 bg-gray-200 rounded-full overflow-hidden">
              {!isGenerating && password && (
                <div 
                  className={`h-full transition-all duration-500 ${
                    strength.level === 'weak' ? 'bg-red-500' :
                    strength.level === 'medium' ? 'bg-yellow-500' :
                    strength.level === 'strong' ? 'bg-green-500' :
                    'bg-blue-500'
                  } ${getStrengthWidth()}`}
                />
              )}
            </div>
            {!isGenerating && password && strength.entropy > 0 && (
              <div className="mt-2 text-sm text-gray-500">
                Entropy: <span className="font-medium">{strength.entropy.toFixed(1)} bits</span>
                {strength.entropy >= 80 && (
                  <span className="ml-2 text-green-600">✓ Excellent security</span>
                )}
              </div>
            )}
          </div>

          {/* Password Details */}
          {!isGenerating && password && (
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-gray-700">Password Details</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="text-xs text-gray-500">Length</div>
                  <div className="font-medium">{password.length} characters</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="text-xs text-gray-500">Character Sets</div>
                  <div className="font-medium text-sm">
                    {[
                      options.uppercase && 'A-Z',
                      options.lowercase && 'a-z',
                      options.numbers && '0-9',
                      options.symbols && '!@#$'
                    ].filter(Boolean).join(', ')}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Copy Status */}
          {copied && (
            <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-lg text-sm text-center animate-fadeIn">
              ✓ Password copied to clipboard!
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ToolInterface;