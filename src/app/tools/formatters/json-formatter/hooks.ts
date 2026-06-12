import { useState } from "react";

export const jsonFormatOptions = {
    "2space": "2 Spaces Indentation",
    "4space": "4 Spaces Indentation",
    "minify": "Minify (No Formatting)",
};

// Sample JSON data
const sampleJSON = `{
  "tools": [
    {
      "name": "JSON Formatter",
      "category": "Formatters",
      "description": "Format and validate JSON data",
      "features": ["Syntax highlighting", "Error detection", "Format customization"],
      "isFree": true,
      "rating": 4.8
    },
    {
      "name": "Text Escape",
      "category": "Text Tools",
      "description": "Escape special characters in text",
      "features": ["Multiple language support", "Batch processing", "Custom escape rules"],
      "isFree": true,
      "rating": 4.5
    }
  ],
  "metadata": {
    "version": "1.0",
    "lastUpdated": "2023-06-15",
    "totalTools": 45
  }
}`;

export default function useJsonFormatter() {
    const [selectedOption, setSelectedOption] = useState("2space");
    const [inputJson, setInputJson] = useState("");
    const [outputJson, setOutputJson] = useState("");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [lineCount, setLineCount] = useState(0);
    const [charCount, setCharCount] = useState(0);


    const validateJson = (input: string) => {
        try {
            JSON.parse(input);
            return true;
        } catch (error) {
            setErrorMessage('Invalid JSON: ' + (error instanceof Error ? error.message : String(error)));
            return false;
        }
    };

    const formatJSON = () => {
        if (!validateJson(inputJson)) {
            return;
        }

        let formatted = "";
        switch (selectedOption) {
            case "2space":
                formatted = JSON.stringify(JSON.parse(inputJson), null, 2);
                break;
            case "4space":
                formatted = JSON.stringify(JSON.parse(inputJson), null, 4);
                break;
            case "minify":
                formatted = JSON.stringify(JSON.parse(inputJson));
                break;
            default:
                throw new Error("Unknown format option");
        }

        setOutputJson(formatted);

        // Update line and character counts
        setLineCount(formatted.split("\n").length);
        setCharCount(formatted.length);
    };


    // Syntax highlighting for JSON
    const syntaxHighlight = (json: string) => {
        if (typeof json !== 'string') {
            json = JSON.stringify(json, undefined, 2);
        }

        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
            let cls = 'json-number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'json-key';
                } else {
                    cls = 'json-string';
                }
            } else if (/true|false/.test(match)) {
                cls = 'json-boolean';
            } else if (/null/.test(match)) {
                cls = 'json-null';
            }
            return '<span class="' + cls + '">' + match + '</span>';
        });
    }

    const loadSampleJSON = () => {
        setInputJson(sampleJSON);
    };

    const clear = () => {
        setInputJson("");
        setOutputJson("");
    };

    const copyToClipboard = () => {
        if (outputJson) {
            navigator.clipboard.writeText(outputJson).then(() => {
                alert("Copied to clipboard");
            });
        }
    };

    const downloadJson = () => {
        if (outputJson) {

            console.log("Downloading JSON...");
            console.log("JSON content:", outputJson);

            const blob = new Blob([outputJson], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "formatted.json";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }
    };


    const pasteFromClipboard = () => {
        navigator.clipboard.readText().then((text) => {
            setInputJson(text);
        });
    };

    return {
        selectedOption,
        setSelectedOption,
        inputJson,
        setInputJson,
        outputJson,
        setOutputJson,
        formatJSON,
        loadSampleJSON,
        clear,
        errorMessage,
        copyToClipboard,
        downloadJson,
        pasteFromClipboard,
        syntaxHighlight,
        lineCount,
        charCount
    };
}