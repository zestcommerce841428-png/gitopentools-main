import { useState } from "react";

export const TextConverterType = {
    UPPERCASE: "uppercase",
    LOWERCASE: "lowercase",
    TITLE: "title",
    SENTENCE: "sentence",
    CAMEL: "camel",
    PASCAL: "pascal",
    SNAKE: "snake",
    KEBAB: "kebab",
    ALTERNATING: "alternating",
    INVERSE: "inverse",
};

const sampleTexts = [
    "Hello World! This is a sample text for testing the case converter tool.",
    "the quick brown fox jumps over the lazy dog",
    "WEB DEVELOPMENT IS AWESOME AND FUN TO LEARN",
    "user_name, first_name, last_name, email_address",
    "My Blog Post About JavaScript Tips and Tricks",
    "Convert This Text To Different Cases",
    "API_KEY, BASE_URL, DATABASE_CONNECTION",
    "React Component State Management"
];

export default function useTextConverter(initialText = "") {
    const [text, setText] = useState<string>(initialText);
    const [convertedText, setConvertedText] = useState<string>("");
    const [charCount, setCharCount] = useState<number>(0);
    const [wordCount, setWordCount] = useState<number>(0);
    const [sentenceCount, setSentenceCount] = useState<number>(0);
    const [paragraphCount, setParagraphCount] = useState<number>(0);
    const [charConvertedCount, setCharConvertedCount] = useState<number>(0);

    const setInputText = (newText: string) => {
        setText(newText);
        updateCount(newText);
    };

    const convertText = (conversionType: string) => {
        let result = text;
        switch (conversionType) {
            case TextConverterType.UPPERCASE:
                result = text.toUpperCase();
                break;
            case TextConverterType.LOWERCASE:
                result = text.toLowerCase();
                break;
            case TextConverterType.TITLE:
                result = text.replace(/\w\S*/g, (txt) =>
                    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
                );
                break;
            case TextConverterType.SENTENCE:
                result = text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
                break;
            case TextConverterType.CAMEL:
                result = text.toLowerCase()
                    .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase())
                    .replace(/^[A-Z]/, (match) => match.toLowerCase());
                break;
            case TextConverterType.PASCAL:
                result = text.toLowerCase()
                    .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase())
                    .replace(/^[a-z]/, (match) => match.toUpperCase());
                break;
            case TextConverterType.SNAKE:
                result = text.toLowerCase()
                    .replace(/[^a-zA-Z0-9]+/g, '_')
                    .replace(/^_+|_+$/g, '');
                break;
            case TextConverterType.KEBAB:
                result = text.toLowerCase()
                    .replace(/[^a-zA-Z0-9]+/g, '-')
                    .replace(/^-+|-+$/g, '');
                break;
            case TextConverterType.ALTERNATING:
                result = text.split('').map((char, index) =>
                    index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()
                ).join('');
                break;
            case TextConverterType.INVERSE:
                result = text.split('').map(char =>
                    char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
                ).join('');
                break;
            default:
                break;
        }
        setConvertedText(result);
        setCharConvertedCount(result.length);
    };

    const clearText = () => {
        setInputText("");
        setConvertedText("");
    };

    const loadSampleText = () => {

        const randomSample = sampleTexts[Math.floor(Math.random() * sampleTexts.length)];

        setInputText(randomSample);
    };

    const copyOutput = () => {
        navigator.clipboard.writeText(convertedText);
    };

    const updateCount = (input: string) => {
        setCharCount(input.length);
        setWordCount(input.split(/\s+/).filter(Boolean).length);
        setSentenceCount(input.split(/[.!?]/).filter(Boolean).length);
        setParagraphCount(input.split(/\n+/).filter(Boolean).length);
    };

    return {
        text,
        convertedText,
        setInputText,
        copyOutput,
        clearText,
        convertText,
        loadSampleText,
        charCount,
        wordCount,
        sentenceCount,
        paragraphCount,
        charConvertedCount
    };
}
