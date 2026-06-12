"use client"

import { useState, useEffect, useCallback } from 'react';

export type UUIDVersion = 'v1' | 'v4' | 'v7';
export type OutputFormat = 'lines' | 'comma' | 'json';

export interface UUIDOptions {
  version: UUIDVersion;
  quantity: number;
  uppercase: boolean;
  hyphens: boolean;
  braces: boolean;
  urn: boolean;
  outputFormat: OutputFormat;
}

export default function useUUIDGenerator() {
  const [options, setOptions] = useState<UUIDOptions>({
    version: 'v4',
    quantity: 1,
    uppercase: false,
    hyphens: true,
    braces: false,
    urn: false,
    outputFormat: 'lines'
  });

  const [uuids, setUuids] = useState<string[]>([]);
  const [isCopied, setIsCopied] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Generate a single UUID based on version
  const generateSingleUUID = useCallback((version: UUIDVersion): string => {
    switch (version) {
      case 'v1':
        return generateUUIDv1();
      case 'v4':
        return generateUUIDv4();
      case 'v7':
        return generateUUIDv7();
      default:
        return generateUUIDv4();
    }
  }, []);

  // Generate UUID v1 (time-based)
  const generateUUIDv1 = (): string => {
    // Simplified v1 implementation
    const now = Date.now();
    const time_low = (now & 0xFFFFFFFF).toString(16).padStart(8, '0');
    const time_mid = ((now >> 32) & 0xFFFF).toString(16).padStart(4, '0');
    const time_hi_and_version = ((now >> 48) & 0x0FFF).toString(16).padStart(4, '0') + '1';
    const clock_seq_hi_and_reserved = '8';
    const clock_seq_low = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    const node = Array.from({ length: 6 }, () => 
      Math.floor(Math.random() * 256).toString(16).padStart(2, '0')
    ).join('');

    return `${time_low}-${time_mid}-${time_hi_and_version}-${clock_seq_hi_and_reserved}${clock_seq_low}-${node}`;
  };

  // Generate UUID v4 (random)
  const generateUUIDv4 = (): string => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  };

  // Generate UUID v7 (time-ordered)
  const generateUUIDv7 = (): string => {
    const now = Date.now();
    const timestamp = now.toString(16).padStart(12, '0');
    const rand_a = Math.floor(Math.random() * 0x1000).toString(16).padStart(4, '0');
    const rand_b = Math.floor(Math.random() * 0x1000).toString(16).padStart(4, '0');
    const rand_c = Math.floor(Math.random() * 0x1000000000000).toString(16).padStart(12, '0');
    
    return `${timestamp.slice(0, 8)}-${timestamp.slice(8, 12)}-7${rand_a.slice(1)}-${(parseInt(rand_b[0], 16) | 0x8).toString(16)}${rand_b.slice(1)}-${rand_c}`;
  };

  // Format UUID based on options
  const formatUUID = useCallback((uuid: string): string => {
    let formatted = uuid;
    
    // Remove hyphens if disabled
    if (!options.hyphens) {
      formatted = formatted.replace(/-/g, '');
    }
    
    // Convert to uppercase if enabled
    if (options.uppercase) {
      formatted = formatted.toUpperCase();
    }
    
    // Add braces if enabled
    if (options.braces && !options.urn) {
      formatted = `{${formatted}}`;
    }
    
    // Add URN prefix if enabled
    if (options.urn && !options.braces) {
      formatted = `urn:uuid:${formatted}`;
    }
    
    return formatted;
  }, [options.hyphens, options.uppercase, options.braces, options.urn]);

  // Generate UUIDs
  const generateUUIDs = useCallback(() => {
    const newUUIDs: string[] = [];
    
    for (let i = 0; i < options.quantity; i++) {
      const uuid = generateSingleUUID(options.version);
      newUUIDs.push(formatUUID(uuid));
    }
    
    setUuids(newUUIDs);
    setIsCopied(false);
  }, [options, generateSingleUUID, formatUUID]);

  // Format output based on selected format
  const getFormattedOutput = useCallback((): string => {
    if (uuids.length === 0) return '';
    
    switch (options.outputFormat) {
      case 'comma':
        return uuids.join(', ');
      case 'json':
        return JSON.stringify(uuids, null, 2);
      case 'lines':
      default:
        return uuids.join('\n');
    }
  }, [uuids, options.outputFormat]);

  // Copy to clipboard
  const copyToClipboard = useCallback(async () => {
    const output = getFormattedOutput();
    if (output) {
      try {
        await navigator.clipboard.writeText(output);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  }, [getFormattedOutput]);

  // Clear output
  const clearOutput = useCallback(() => {
    setUuids([]);
    setIsCopied(false);
  }, []);

  // Load sample (generate one UUID)
  const loadSample = useCallback(() => {
    setOptions(prev => ({ ...prev, quantity: 1 }));
    const uuid = generateSingleUUID('v4');
    setUuids([formatUUID(uuid)]);
  }, [generateSingleUUID, formatUUID]);

  // Update options
  const updateOption = useCallback(<K extends keyof UUIDOptions>(key: K, value: UUIDOptions[K]) => {
    setOptions(prev => ({ ...prev, [key]: value }));
  }, []);

  // Auto-generate on mount and when options change
  useEffect(() => {
    generateUUIDs();
  }, [generateUUIDs]);

  return {
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
    getFormattedOutput,
    formattedOutput: getFormattedOutput()
  };
}