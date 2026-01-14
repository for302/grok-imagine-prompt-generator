'use client';

import { useState } from 'react';
import { InfoModal } from './InfoModal';

export function Header() {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--background)]/60">
        <div className="px-4 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            GROK Prompt Generator
          </h1>

          <button
            onClick={() => setIsInfoOpen(true)}
            className="relative px-4 py-2 text-sm font-bold text-white rounded-lg bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:from-purple-500 hover:via-pink-400 hover:to-orange-400 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 hover:scale-105 animate-pulse hover:animate-none"
          >
            무료 AI 배우기
          </button>
        </div>
      </header>

      <InfoModal isOpen={isInfoOpen} onClose={() => setIsInfoOpen(false)} />
    </>
  );
}
