'use client';

import { useMemo } from 'react';
import { usePromptStore } from '@/store/promptStore';
import { buildPrompt, getPromptLength, getPromptStatus } from '@/lib/promptBuilder';
import { useClipboard } from '@/hooks/useClipboard';

export function KoreanPromptPanel() {
  const { mode, selections } = usePromptStore();
  const { copied, copyToClipboard } = useClipboard();

  const selectedOptionIds = useMemo(() => {
    return Object.keys(selections).filter(id => selections[id]);
  }, [selections]);

  const prompt = useMemo(() => {
    return buildPrompt(selectedOptionIds, 'korean', mode);
  }, [selectedOptionIds, mode]);

  const length = getPromptLength(prompt);
  const status = getPromptStatus(prompt);

  const statusColors = {
    short: 'text-yellow-500',
    optimal: 'text-green-500',
    long: 'text-red-500'
  };

  const statusLabels = {
    short: '짧음 (400자 미만)',
    optimal: '적정 (400~700자)',
    long: '김 (700자 초과)'
  };

  return (
    <div className="md:h-full flex flex-col">
      <div className="p-4 border-b border-[var(--border)] flex items-center justify-between">
        <div>
          <h2 className="font-semibold">한글 프롬프트</h2>
          <p className="text-xs text-[var(--muted-foreground)] mt-0.5">
            {length}자 · <span className={statusColors[status]}>{statusLabels[status]}</span>
          </p>
        </div>
        <button
          onClick={() => copyToClipboard(prompt)}
          disabled={!prompt}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
            copied
              ? 'bg-green-500 text-white'
              : 'bg-[var(--muted)] hover:bg-[var(--border)] disabled:opacity-50'
          }`}
        >
          {copied ? (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              복사됨
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              복사
            </>
          )}
        </button>
      </div>

      <div className="flex-1 p-4 md:overflow-y-auto">
        {prompt ? (
          <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
            {prompt}
          </p>
        ) : (
          <div className="h-full flex items-center justify-center">
            <p className="text-[var(--muted-foreground)] text-sm text-center">
              왼쪽에서 프리셋을 선택하거나<br />
              요소를 직접 선택하세요
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
