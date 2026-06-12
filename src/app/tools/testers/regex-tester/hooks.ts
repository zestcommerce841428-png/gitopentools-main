import { useState, useEffect, useCallback } from "react";

// Common regex patterns
export const commonRegexPatterns = {
  password: {
    basic: { name: "Basic (8+ chars)", pattern: "^.{8,}$", description: "At least 8 characters" },
    medium: { name: "Medium (upper, lower, number)", pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$", description: "1 uppercase, 1 lowercase, 1 number" },
    strong: { name: "Strong (with special char)", pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&]).{8,}$", description: "Upper, lower, number, special char" },
    veryStrong: { name: "Very Strong (no spaces)", pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[^\\s]{8,32}$", description: "No spaces, 8-32 chars" }
  },
  email: {
    standard: { name: "Standard Email", pattern: "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$", description: "Works for 95% of real-world use" }
  },
  phone: {
    international: { name: "International (E.164)", pattern: "^\\+?[1-9]\\d{1,14}$", description: "International phone format" },
    vietnam: { name: "Vietnam Phone", pattern: "^(0|\\+84)(3|5|7|8|9)\\d{8}$", description: "Vietnam phone numbers" }
  },
  url: {
    http: { name: "HTTP/HTTPS URL", pattern: "^(https?:\\/\\/)([\\w\\-]+\\.)+[\\w\\-]+(\\/[\\w\\-._~:/?#\\[\\]@!$&'()*+,;=]*)?$", description: "HTTP/HTTPS URLs" },
    domain: { name: "Domain Only", pattern: "^([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,}$", description: "Domain name validation" }
  },
  username: {
    basic: { name: "Basic (3-20 chars)", pattern: "^[a-zA-Z0-9_]{3,20}$", description: "Letters, numbers, underscore" },
    noNumberStart: { name: "No Starting Number", pattern: "^[a-zA-Z][a-zA-Z0-9_]{2,19}$", description: "Letters first, then alphanumeric" }
  },
  numbers: {
    integer: { name: "Integer Only", pattern: "^-?\\d+$", description: "Positive/negative integers" },
    decimal: { name: "Decimal Number", pattern: "^-?\\d+(\\.\\d+)?$", description: "Decimal numbers" },
    positive: { name: "Positive Number", pattern: "^\\d+(\\.\\d+)?$", description: "Positive numbers only" }
  },
  ids: {
    uuid: { name: "UUID v4", pattern: "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$", description: "UUID version 4" },
    alphanumeric: { name: "Alphanumeric Code", pattern: "^[A-Za-z0-9]{6,12}$", description: "6-12 character code" }
  },
  dateTime: {
    date: { name: "Date (YYYY-MM-DD)", pattern: "^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$", description: "ISO date format" },
    time: { name: "Time (HH:mm)", pattern: "^([01]\\d|2[0-3]):[0-5]\\d$", description: "24-hour time" }
  },
  security: {
    noSpecial: { name: "No Special Chars", pattern: "^[a-zA-Z0-9\\s]+$", description: "Only letters, numbers, spaces" },
    noWhitespace: { name: "No Whitespace", pattern: "^\\S+$", description: "No spaces allowed" },
    trimSpaces: { name: "Trim Spaces", pattern: "^\\s+|\\s+$", description: "Leading/trailing spaces" }
  }
};

// Quick reference data
export const quickReference = {
  characterClasses: [
    { pattern: "\\d", description: "Digit (0-9)" },
    { pattern: "\\w", description: "Word character (a-z, A-Z, 0-9, _)" },
    { pattern: "\\s", description: "Whitespace" },
    { pattern: ".", description: "Any character" },
    { pattern: "[abc]", description: "Any of a, b, or c" },
    { pattern: "[^abc]", description: "Not a, b, or c" }
  ],
  quantifiers: [
    { pattern: "*", description: "0 or more" },
    { pattern: "+", description: "1 or more" },
    { pattern: "?", description: "0 or 1" },
    { pattern: "{n}", description: "Exactly n times" },
    { pattern: "{n,}", description: "n or more times" },
    { pattern: "{n,m}", description: "Between n and m times" }
  ],
  anchorsGroups: [
    { pattern: "^", description: "Start of string" },
    { pattern: "$", description: "End of string" },
    { pattern: "\\b", description: "Word boundary" },
    { pattern: "()", description: "Capture group" },
    { pattern: "(?:)", description: "Non-capture group" },
    { pattern: "|", description: "OR operator" }
  ]
};

// Sample test text
const sampleText = `Emails: john.doe@example.com, jane_smith123@test.co.uk
Phone numbers: +12345678901, 0912345678, +84123456789
Dates: 2024-01-15, 1999-12-31, 2023-02-28
Passwords: Pass123!, weakpass, StrongPass123$
URLs: https://example.com, http://test-site.org/page, www.domain.com`;

export default function useRegexTester() {
  const [regex, setRegex] = useState<string>("");
  const [testText, setTestText] = useState<string>("");
  const [flags, setFlags] = useState<string>("g");
  const [matches, setMatches] = useState<RegExpMatchArray[]>([]);
  const [isValid, setIsValid] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [highlightedText, setHighlightedText] = useState<string>("");

  // Test regex function
  const testRegex = useCallback(() => {
    if (!regex) {
      setMatches([]);
      setHighlightedText(testText);
      setIsValid(true);
      return;
    }

    try {
      const regexObj = new RegExp(regex, flags);
      const allMatches = Array.from(testText.matchAll(regexObj));
      setMatches(allMatches);
      setIsValid(true);
      setError("");

      // Create highlighted text
      let highlighted = testText;
      let offset = 0;
      
      allMatches.forEach(match => {
        const start = match.index! + offset;
        const end = start + match[0].length;
        const replacement = `<span class="regex-match">${match[0]}</span>`;
        highlighted = highlighted.slice(0, start) + replacement + highlighted.slice(end);
        offset += replacement.length - match[0].length;
      });
      
      setHighlightedText(highlighted);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid regular expression");
      setIsValid(false);
      setMatches([]);
      setHighlightedText(testText);
    }
  }, [regex, testText, flags]);

  // Initialize with sample data
  useEffect(() => {
    setTestText(sampleText);
    setRegex("\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}\\b");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Test regex when dependencies change
  useEffect(() => {
    testRegex();
  }, [testRegex]);

  // Load sample regex
  const loadSample = (pattern: string) => {
    setRegex(pattern);
  };

  // Clear all inputs
  const clearAll = () => {
    setRegex("");
    setTestText("");
    setMatches([]);
    setError("");
  };

  // Load sample test text
  const loadSampleText = () => {
    setTestText(sampleText);
  };

  // Copy regex to clipboard
  const copyRegex = () => {
    if (regex) {
      navigator.clipboard.writeText(regex);
    }
  };

  // Copy matches to clipboard
  const copyMatches = () => {
    const matchesText = matches.map(match => match[0]).join("\n");
    if (matchesText) {
      navigator.clipboard.writeText(matchesText);
    }
  };

  // Toggle flag
  const toggleFlag = (flag: string) => {
    setFlags(prev => {
      if (prev.includes(flag)) {
        return prev.replace(flag, "");
      } else {
        return prev + flag;
      }
    });
  };

  return {
    regex,
    setRegex,
    testText,
    setTestText,
    flags,
    setFlags,
    matches,
    isValid,
    error,
    highlightedText,
    testRegex,
    loadSample,
    clearAll,
    loadSampleText,
    copyRegex,
    copyMatches,
    toggleFlag
  };
}