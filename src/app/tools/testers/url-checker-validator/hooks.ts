"use client"

import React, { useState, useCallback } from "react";
import {
    FaCheck,
    FaRedo,
    FaTimes,
    FaClock,
    FaQuestionCircle
} from 'react-icons/fa';

interface URLCheckResult {
    status: 'Accessible' | 'Redirect' | 'Error' | 'Timeout' | 'Invalid';
    httpStatus: number;
    httpStatusText: string;
    responseTime: number;
    timestamp: Date;
}

interface URLDetails {
    protocol: string;
    domain: string;
    port: string | null;
    path: string | null;
    query: string | null;
    fragment: string | null;
}

export default function useURLChecker() {
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<URLCheckResult | null>(null);
    const [error, setError] = useState<string | null>(null);

    const isValidUrl = useCallback((urlString: string): boolean => {
        try {
            const urlObj = new URL(urlString);
            return urlObj.protocol === "http:" || urlObj.protocol === "https:" ||
                urlObj.protocol === "ftp:" || urlObj.protocol === "ftps:";
        } catch {
            return false;
        }
    }, []);

    const parseURLDetails = useCallback((urlString: string): URLDetails => {
        try {
            const urlObj = new URL(urlString);
            return {
                protocol: urlObj.protocol.replace(':', ''),
                domain: urlObj.hostname,
                port: urlObj.port || null,
                path: urlObj.pathname || null,
                query: urlObj.search || null,
                fragment: urlObj.hash || null
            };
        } catch {
            return {
                protocol: '',
                domain: '',
                port: null,
                path: null,
                query: null,
                fragment: null
            };
        }
    }, []);

    const checkUrl = useCallback(async () => {
        if (!url.trim()) {
            setError("Please enter a URL");
            return;
        }

        if (!isValidUrl(url)) {
            setError("Please enter a valid URL (e.g., https://example.com)");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const startTime = performance.now();

            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

            let response: Response;
            let failedDueToCors = false;

            try {

                response = await fetch(url, {
                    method: 'HEAD',
                    signal: controller.signal,
                    headers: { 'User-Agent': 'GitOpenTools-URLChecker/1.0' },
                });
            } catch (fetchError: any) {

                failedDueToCors = true;
                response = await fetch(url, {
                    method: 'HEAD',
                    mode: 'no-cors',
                    signal: controller.signal,
                    headers: { 'User-Agent': 'GitOpenTools-URLChecker/1.0' },
                });
            }

            clearTimeout(timeoutId);
            const endTime = performance.now();
            const responseTime = endTime - startTime;

            let status: URLCheckResult['status'] = 'Accessible';
            let httpStatus = 200;
            let httpStatusText = 'OK';

            if (!failedDueToCors) {

                httpStatus = response.status;
                httpStatusText = response.statusText;
                if (httpStatus >= 200 && httpStatus < 300) {
                    status = 'Accessible';
                } else if (httpStatus >= 300 && httpStatus < 400) {
                    status = 'Redirect';
                } else if (httpStatus >= 400) {
                    status = 'Error';
                }
            } else {

                httpStatusText = `Likely Accessible (CORS Restricted)`;

            }

            setResult({
                status,
                httpStatus: failedDueToCors ? 0 : httpStatus,
                httpStatusText,
                responseTime,
                timestamp: new Date(),
            });

        } catch (error) {
            console.error('URL check error:', error);

            let errorStatus: URLCheckResult['status'] = 'Error';
            let errorMessage = 'Unknown error occurred';

            if (error instanceof Error) {
                if (error.name === 'AbortError') {
                    errorStatus = 'Timeout';
                    errorMessage = 'Request timed out after 10 seconds';
                } else if (error.name === 'TypeError') {
                    errorStatus = 'Invalid';
                    errorMessage = 'Network error or CORS blocked';
                }
            }

            setError(errorMessage);
            setResult({
                status: errorStatus,
                httpStatus: 0,
                httpStatusText: errorMessage,
                responseTime: 0,
                timestamp: new Date()
            });
        } finally {
            setLoading(false);
        }
    }, [url, isValidUrl]);

    const clearInput = useCallback(() => {
        setUrl("");
        setResult(null);
        setError(null);
    }, []);

    const getStatusColor = useCallback((status: string): string => {
        switch (status) {
            case 'Accessible': return 'bg-green-100 text-green-800';
            case 'Redirect': return 'bg-yellow-100 text-yellow-800';
            case 'Error': return 'bg-red-100 text-red-800';
            case 'Timeout': return 'bg-gray-100 text-gray-800';
            case 'Invalid': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    }, []);

    const getStatusIcon = useCallback((status: string) => {
        switch (status) {
            case 'Accessible':
                return React.createElement(FaCheck, { className: "text-green-500" });
            case 'Redirect':
                return React.createElement(FaRedo, { className: "text-yellow-500" });
            case 'Error':
                return React.createElement(FaTimes, { className: "text-red-500" });
            case 'Timeout':
                return React.createElement(FaClock, { className: "text-gray-500" });
            case 'Invalid':
                return React.createElement(FaTimes, { className: "text-red-500" });
            default:
                return React.createElement(FaQuestionCircle, { className: "text-gray-500" });
        }
    }, []);

    const formatResponseTime = useCallback((time: number): string => {
        if (time < 1000) {
            return `${time.toFixed(0)}ms`;
        }
        return `${(time / 1000).toFixed(2)}s`;
    }, []);

    const urlDetails = parseURLDetails(url);

    return {
        url,
        setUrl,
        checkUrl,
        clearInput,
        loading,
        result,
        error,
        isValidUrl: isValidUrl(url),
        urlDetails,
        getStatusColor,
        getStatusIcon,
        formatResponseTime
    };
}