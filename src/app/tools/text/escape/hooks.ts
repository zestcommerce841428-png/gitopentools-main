import { useState } from "react";


const samples = {
    json: '{"name": "John Doe", "email": "john@example.com", "message": "Hello \"World\"!"}',
    html: '<div class="container">\n  <h1>Welcome & Hello!</h1>\n  <p>This is a "sample" text with \'quotes\'.</p>\n</div>',
    javascript: 'function greeting() {\n  console.log("Hello \\"World\\"!");\n  return \'Success\';\n}',
    sql: 'SELECT * FROM users WHERE name = \'John O\'Brien\' AND status = "active";'
};

export type SampleType = keyof typeof samples;

const escapers = {
    json: {
        escape: (text: string) => JSON.stringify(text).slice(1, -1),
        unescape: (text: string) => {
            try {
                return JSON.parse('"' + text + '"');
            } catch {
                return text;
            }
        }
    },
    html: {
        escape: (text: string) => text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;'),
        unescape: (text: string) => text
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'")
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&amp;/g, '&')
    },
    javascript: {
        escape: (text: string) => text
            .replace(/\\/g, '\\\\')
            .replace(/"/g, '\\"')
            .replace(/'/g, "\\'")
            .replace(/\n/g, '\\n')
            .replace(/\r/g, '\\r')
            .replace(/\t/g, '\\t'),
        unescape: (text: string) => text
            .replace(/\\r/g, '\r')
            .replace(/\\n/g, '\n')
            .replace(/\\t/g, '\t')
            .replace(/\\'/g, "'")
            .replace(/\\"/g, '"')
            .replace(/\\\\/g, '\\')
    },
    csharp: {
        escape: (text: string) => text
            .replace(/\\/g, '\\\\')
            .replace(/"/g, '\\"')
            .replace(/'/g, "\\'")
            .replace(/\n/g, '\\n')
            .replace(/\r/g, '\\r')
            .replace(/\t/g, '\\t'),
        unescape: (text: string) => text
            .replace(/\\r/g, '\r')
            .replace(/\\n/g, '\n')
            .replace(/\\t/g, '\t')
            .replace(/\\'/g, "'")
            .replace(/\\"/g, '"')
            .replace(/\\\\/g, '\\')
    },
    java: {
        escape: (text: string) => text
            .replace(/\\/g, '\\\\')
            .replace(/"/g, '\\"')
            .replace(/'/g, "\\'")
            .replace(/\n/g, '\\n')
            .replace(/\r/g, '\\r')
            .replace(/\t/g, '\\t'),
        unescape: (text: string) => text
            .replace(/\\r/g, '\r')
            .replace(/\\n/g, '\n')
            .replace(/\\t/g, '\t')
            .replace(/\\'/g, "'")
            .replace(/\\"/g, '"')
            .replace(/\\\\/g, '\\')
    },
    url: {
        escape: (text: string) => encodeURIComponent(text),
        unescape: (text: string) => {
            try {
                return decodeURIComponent(text);
            } catch {
                return text; // fallback if malformed
            }
        }
    },
    xml: {
        escape: (text: string) => text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;'),
        unescape: (text: string) => text
            .replace(/&apos;/g, "'")
            .replace(/&quot;/g, '"')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&amp;/g, '&')
    },
    csv: {
        escape: (text: string) => {
            if (/[",\n]/.test(text)) {
                return `"${text.replace(/"/g, '""')}"`;
            }
            return text;
        },
        unescape: (text: string) => {
            if (text.startsWith('"') && text.endsWith('"')) {
                return text.slice(1, -1).replace(/""/g, '"');
            }
            return text;
        }
    }
}

export type EscapersType = keyof typeof escapers;

export default function useTextEscaper(initialText = "") {
    const [inputText, setInputText] = useState(initialText);
    const [mode, setMode] = useState<EscapersType>("json");
    const [showEscaped, setShowEscaped] = useState(true);
    const [showUnescaped, setShowUnescaped] = useState(false);
    const [inputCount, setInputCount] = useState(0);
    const [outputCount, setOutputCount] = useState(0);
    const [outputText, setOutputText] = useState("");

    const processText = (text: string, escaped = showEscaped, unescaped = showUnescaped) => {
        let finalOutput = "";

        if (escaped && escapers[mode]) {
            finalOutput = escapers[mode].escape(text);
            console.log("Escaped:", finalOutput);
        }

        if (unescaped && escapers[mode]) {
            if (finalOutput) finalOutput += '\n\n--- Unescaped ---\n\n';
            finalOutput += escapers[mode].unescape(text);
            console.log("Unescaped:", finalOutput);
        }

        setInputText(text);
        setInputCount(text.length);
        setOutputText(finalOutput);
        setOutputCount(finalOutput.length);
    }

    const insertSample = (type: SampleType) => {
        if (samples[type]) {
            processText(samples[type]);
        }
    }

    const copyOutput = () => {
        navigator.clipboard.writeText(outputText);
    }

    const clearInput = () => {
        setInputText("");
        setOutputText("");
        setInputCount(0);
        setOutputCount(0);
    }

    const pasteFromClipboard = async () => {
        const text = await navigator.clipboard.readText();
        processText(text);
    }

    const swapInputOutput = () => {
        setInputText(outputText);
        setOutputCount(inputCount);
        setOutputText(inputText);
        setInputCount(outputCount);
    }

    const downloadOutput = () => {
        const blob = new Blob([outputText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'output.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    const setModeEscaper = (newMode: EscapersType) => {
        setMode(newMode);
        processText(inputText);
    }

    const changeShowEscaped = (value: boolean) => {
        console.log("Changing Show Escaped:", value);
        setShowEscaped(value);
        processText(inputText, value, showUnescaped);
    }

    const changeShowUnescaped = (value: boolean) => {
        setShowUnescaped(value);
        processText(inputText, showEscaped, value);
    }

    return {
        inputText,
        setInputText,
        mode,
        setModeEscaper,
        showEscaped,
        changeShowEscaped,
        showUnescaped,
        changeShowUnescaped,
        inputCount,
        outputCount,
        outputText,
        processText,
        insertSample,
        copyOutput,
        clearInput,
        pasteFromClipboard,
        swapInputOutput,
        downloadOutput
    };
}
