import { useState, useCallback, useEffect, useRef } from "react";

export interface PasswordOptions {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
  excludeSimilar: boolean;
  avoidRepeated: boolean;
  avoidSequential: boolean;
}

export type PresetType = "developer" | "website" | "banking" | "custom";

export interface Preset {
  id: PresetType;
  name: string;
  description: string;
  options: PasswordOptions;
}

// Character sets
const charSets = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
};

// Similar characters to exclude
const similarChars = "lI1O0";

export default function usePasswordGenerator() {
  const [password, setPassword] = useState<string>("");
  const [options, setOptions] = useState<PasswordOptions>({
    length: 16,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
    excludeSimilar: false,
    avoidRepeated: false,
    avoidSequential: false,
  });
  const [strength, setStrength] = useState<{
    level: "weak" | "medium" | "strong" | "very strong";
    score: number;
    entropy: number;
  }>({ level: "medium", score: 0, entropy: 0 });
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [showAdvanced, setShowAdvanced] = useState<boolean>(false);
  const [preset, setPreset] = useState<PresetType>("developer");
  const [copied, setCopied] = useState<boolean>(false);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  // Use refs for frequently accessed values to avoid recreating functions
  const optionsRef = useRef(options);
  const passwordRef = useRef(password);

  // Update ref when options change
  useEffect(() => {
    optionsRef.current = options;
    passwordRef.current = password;
  }, [options, password]);

  // Presets configuration
  const presets: Record<PresetType, Preset> = {
    developer: {
      id: "developer",
      name: "Developer / SSH",
      description: "For SSH keys, API tokens, and development credentials",
      options: {
        length: 32,
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: true,
        excludeSimilar: true,
        avoidRepeated: true,
        avoidSequential: true,
      },
    },
    website: {
      id: "website",
      name: "Website Login",
      description: "General purpose website and app passwords",
      options: {
        length: 16,
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: false,
        excludeSimilar: true,
        avoidRepeated: false,
        avoidSequential: false,
      },
    },
    banking: {
      id: "banking",
      name: "Banking / Finance",
      description: "For financial accounts and sensitive data",
      options: {
        length: 20,
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: true,
        excludeSimilar: true,
        avoidRepeated: true,
        avoidSequential: true,
      },
    },
    custom: {
      id: "custom",
      name: "Custom",
      description: "Custom configuration",
      options: { ...options },
    },
  };

  // Calculate password strength
  const calculateStrength = useCallback((pwd: string, opts: PasswordOptions) => {
    if (!pwd || pwd.length === 0) {
      return { level: "weak" as const, score: 0, entropy: 0 };
    }

    let charPool = 0;
    
    // Calculate character pool size
    if (opts.uppercase) charPool += 26;
    if (opts.lowercase) charPool += 26;
    if (opts.numbers) charPool += 10;
    if (opts.symbols) charPool += charSets.symbols.length;

    // Calculate entropy (bits)
    const entropy = pwd.length > 0 ? Math.log2(Math.pow(charPool, pwd.length)) : 0;

    // Score calculation
    let score = 0;

    // Length score
    if (pwd.length >= 8) score += 1;
    if (pwd.length >= 12) score += 1;
    if (pwd.length >= 16) score += 1;
    if (pwd.length >= 20) score += 1;

    // Character variety score
    const hasUpper = /[A-Z]/.test(pwd);
    const hasLower = /[a-z]/.test(pwd);
    const hasNumber = /[0-9]/.test(pwd);
    const hasSymbol = /[^A-Za-z0-9]/.test(pwd);

    if (hasUpper) score += 1;
    if (hasLower) score += 1;
    if (hasNumber) score += 1;
    if (hasSymbol) score += 1;

    // Determine level based on entropy and score
    let level: "weak" | "medium" | "strong" | "very strong" = "weak";
    
    if (entropy >= 80 || score >= 7) {
      level = "very strong";
    } else if (entropy >= 60 || score >= 5) {
      level = "strong";
    } else if (entropy >= 40 || score >= 3) {
      level = "medium";
    }

    return { level, score, entropy };
  }, []);

  // Optimized password generation function
  const generatePassword = useCallback(() => {
    // Check if at least one character type is selected
    const currentOptions = optionsRef.current;
    if (!currentOptions.uppercase && !currentOptions.lowercase && 
        !currentOptions.numbers && !currentOptions.symbols) {
      return;
    }

    setIsGenerating(true);

    // Use requestAnimationFrame to prevent blocking the main thread
    requestAnimationFrame(() => {
      try {
        // Build character pool
        let charPool = "";
        if (currentOptions.uppercase) charPool += charSets.uppercase;
        if (currentOptions.lowercase) charPool += charSets.lowercase;
        if (currentOptions.numbers) charPool += charSets.numbers;
        if (currentOptions.symbols) charPool += charSets.symbols;

        // Remove similar characters if needed
        if (currentOptions.excludeSimilar) {
          const excludeRegex = new RegExp(`[${similarChars}]`, "gi");
          charPool = charPool.replace(excludeRegex, "");
        }

        // Validate character pool is not empty
        if (charPool.length === 0) {
          console.error("Character pool is empty after filtering");
          setIsGenerating(false);
          return;
        }

        // Generate cryptographically secure random bytes
        const array = new Uint8Array(currentOptions.length * 2); // Generate extra for filtering
        window.crypto.getRandomValues(array);

        let generated = "";
        let attempts = 0;
        const maxAttempts = currentOptions.length * 10; // Prevent infinite loops

        for (let i = 0; i < currentOptions.length && attempts < maxAttempts; i++) {
          attempts++;
          
          // Get random index
          const randomIndex = array[i * 2] % charPool.length;
          let char = charPool[randomIndex];
          
          // Skip if we need to avoid repeated characters
          if (currentOptions.avoidRepeated && i > 0 && char === generated[generated.length - 1]) {
            i--; // Try again for this position
            continue;
          }

          // Skip if we need to avoid sequential characters
          if (currentOptions.avoidSequential && i > 0) {
            const prevChar = generated[generated.length - 1];
            const prevIndex = charPool.indexOf(prevChar);
            const currentIndex = charPool.indexOf(char);
            
            if (prevIndex !== -1 && currentIndex !== -1 && 
                Math.abs(currentIndex - prevIndex) === 1) {
              i--; // Try again for this position
              continue;
            }
          }

          generated += char;
        }

        // If we couldn't generate enough characters (due to constraints), 
        // fall back to simpler generation
        if (generated.length < currentOptions.length) {
          console.warn("Could not satisfy all constraints, generating simpler password");
          generated = "";
          for (let i = 0; i < currentOptions.length; i++) {
            const randomIndex = array[i] % charPool.length;
            generated += charPool[randomIndex];
          }
        }

        setPassword(generated);
        setStrength(calculateStrength(generated, currentOptions));
      } catch (error) {
        console.error("Error generating password:", error);
        // Fallback to simpler generation method
        try {
          const fallbackOptions = optionsRef.current;
          let charPool = "";
          if (fallbackOptions.uppercase) charPool += charSets.uppercase;
          if (fallbackOptions.lowercase) charPool += charSets.lowercase;
          if (fallbackOptions.numbers) charPool += charSets.numbers;
          if (fallbackOptions.symbols) charPool += charSets.symbols;

          let fallbackPassword = "";
          for (let i = 0; i < fallbackOptions.length; i++) {
            fallbackPassword += charPool.charAt(Math.floor(Math.random() * charPool.length));
          }
          
          setPassword(fallbackPassword);
          setStrength(calculateStrength(fallbackPassword, fallbackOptions));
        } catch (fallbackError) {
          console.error("Fallback generation also failed:", fallbackError);
        }
      } finally {
        setIsGenerating(false);
      }
    });
  }, [calculateStrength]);

  // Apply preset
  const applyPreset = useCallback((presetId: PresetType) => {
    const preset = presets[presetId];
    setOptions(preset.options);
    setPreset(presetId);
  }, [presets]);

  // Copy to clipboard
  const copyToClipboard = useCallback(async () => {
    if (passwordRef.current) {
      try {
        await navigator.clipboard.writeText(passwordRef.current);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy:", err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = passwordRef.current;
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand('copy');
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch (e) {
          console.error("Fallback copy failed:", e);
        }
        document.body.removeChild(textArea);
      }
    }
  }, []);

  // Regenerate password
  const regeneratePassword = useCallback(() => {
    if (!isGenerating) {
      generatePassword();
    }
  }, [generatePassword, isGenerating]);

  // Toggle character visibility
  const toggleVisibility = useCallback(() => {
    setIsHidden(!isHidden);
  }, [isHidden]);

  // Update options
  const updateOption = useCallback((key: keyof PasswordOptions, value: any) => {
    setOptions(prev => ({ ...prev, [key]: value }));
    setPreset("custom");
  }, []);

  // Update length specifically to prevent infinite re-renders
  const updateLength = useCallback((value: number) => {
    const clampedValue = Math.min(64, Math.max(6, value));
    setOptions(prev => ({ ...prev, length: clampedValue }));
    setPreset("custom");
  }, []);

  // Initialize with a password on mount
  useEffect(() => {
    generatePassword();
  }, []); // Empty dependency array to run only once on mount

  // Update strength when password or options change
  useEffect(() => {
    if (password) {
      setStrength(calculateStrength(password, options));
    }
  }, [password, options, calculateStrength]);

  return {
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
  };
}