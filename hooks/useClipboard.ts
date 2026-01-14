'use client';

import { useState, useCallback } from 'react';

export function useClipboard(timeout = 2000) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const copyToClipboard = useCallback(async (text: string) => {
    if (!text) {
      setError('복사할 내용이 없습니다.');
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setError(null);

      setTimeout(() => {
        setCopied(false);
      }, timeout);

      return true;
    } catch (err) {
      // Fallback for older browsers
      try {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();

        setCopied(true);
        setError(null);

        setTimeout(() => {
          setCopied(false);
        }, timeout);

        return true;
      } catch (fallbackErr) {
        setError('복사에 실패했습니다.');
        console.error('Clipboard error:', err);
        return false;
      }
    }
  }, [timeout]);

  return { copied, error, copyToClipboard };
}
