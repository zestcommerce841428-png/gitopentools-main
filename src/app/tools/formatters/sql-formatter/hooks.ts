import { useState } from "react";
import { format } from "sql-formatter";



// Sample JSON data
const sampleSQL = `SELECT customers.customer_id, customers.first_name, customers.last_name, orders.order_date, products.product_name, order_items.quantity
FROM customers
INNER JOIN orders ON customers.customer_id = orders.customer_id
INNER JOIN order_items ON orders.order_id = order_items.order_id
INNER JOIN products ON order_items.product_id = products.product_id
WHERE orders.order_date >= '2023-01-01' AND products.category = 'Electronics'
ORDER BY customers.last_name, customers.first_name, orders.order_date DESC;`;

export default function useSQLFormatter() {
    const [selectedOption, setSelectedOption] = useState("2space");
    const [inputSQL, setInputSQL] = useState("");
    const [outputSQL, setOutputSQL] = useState("");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [lineCount, setLineCount] = useState(0);
    const [charCount, setCharCount] = useState(0);


    const formatSQL = () => {
        let formatted = "";
        try {
            formatted = format(inputSQL, { language: "sql" });
        } catch (error) {
            setErrorMessage('Invalid SQL: ' + (error instanceof Error ? error.message : String(error)));
            return;
        }

        setOutputSQL(formatted);

        // Update line and character counts
        setLineCount(formatted.split("\n").length);
        setCharCount(formatted.length);

        if (errorMessage)
            setErrorMessage(null);
    };


    // Syntax highlighting for JSON
    const syntaxHighlight = (sql: string): string => {
        // Highlight SQL keywords
        let highlighted = sql.replace(
            /\b(SELECT|FROM|WHERE|AND|OR|INSERT|INTO|VALUES|UPDATE|SET|DELETE|JOIN|LEFT|RIGHT|INNER|OUTER|ON|AS|CREATE|TABLE|DROP|ALTER|ORDER|BY|GROUP|HAVING|DESC|ASC)\b/gi,
            (match) => `<span class="sql-keyword">${match}</span>`
        );

        // Highlight strings
        highlighted = highlighted.replace(
            /'([^']*)'/g,
            (match) => `<span class="sql-string">${match}</span>`
        );

        // Highlight numbers
        highlighted = highlighted.replace(
            /\b(\d+)\b/g,
            (match) => `<span class="sql-number">${match}</span>`
        );

        return highlighted;
    };

    const loadSampleSQL = () => {
        setInputSQL(sampleSQL);
    };

    const clear = () => {
        setInputSQL("");
        setOutputSQL("");
    };

    const copyToClipboard = () => {
        if (outputSQL) {
            navigator.clipboard.writeText(outputSQL).then(() => {
                alert("Copied to clipboard");
            });
        }
    };

    const downloadSQL = () => {
        if (outputSQL) {

            const blob = new Blob([outputSQL], { type: "text/sql;charset=utf-8;" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "formatted.sql";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }
    };


    const pasteFromClipboard = () => {
        navigator.clipboard.readText().then((text) => {
            setInputSQL(text);
        });
    };

    return {
        selectedOption,
        setSelectedOption,
        inputSQL,
        setInputSQL,
        outputSQL,
        setOutputSQL,
        formatSQL,
        loadSampleSQL,
        clear,
        errorMessage,
        copyToClipboard,
        downloadSQL,
        pasteFromClipboard,
        syntaxHighlight,
        lineCount,
        charCount
    };
}