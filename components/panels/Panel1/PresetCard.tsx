'use client';

import { Preset } from '@/types';
import { usePromptStore } from '@/store/promptStore';

interface PresetCardProps {
  preset: Preset;
  isSelected: boolean;
  onClick: () => void;
}

export function PresetCard({ preset, isSelected, onClick }: PresetCardProps) {
  const { favorites, toggleFavorite } = usePromptStore();
  const isFavorite = favorites.includes(preset.id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(preset.id);
  };

  return (
    <div
      onClick={onClick}
      className={`relative group cursor-pointer rounded-lg overflow-hidden transition-all duration-200 ${
        isSelected
          ? 'ring-2 ring-[var(--accent)] ring-offset-2 ring-offset-[var(--background)]'
          : 'hover:shadow-lg'
      }`}
    >
      {/* 썸네일 */}
      <div className="aspect-video bg-gradient-to-br from-[var(--muted)] to-[var(--border)] flex items-center justify-center">
        <span className="text-4xl font-bold text-[var(--muted-foreground)]/30">
          {preset.number}
        </span>
      </div>

      {/* 즐겨찾기 버튼 */}
      <button
        onClick={handleFavoriteClick}
        className={`absolute top-2 right-2 p-1.5 rounded-full transition-all ${
          isFavorite
            ? 'bg-yellow-500 text-white'
            : 'bg-black/30 text-white/70 opacity-0 group-hover:opacity-100'
        }`}
      >
        <svg className="w-4 h-4" fill={isFavorite ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      </button>

      {/* 제목 */}
      <div className="p-2 bg-[var(--card)]">
        <p className="text-xs font-medium truncate">{preset.titleKo}</p>
        <p className="text-[10px] text-[var(--muted-foreground)] truncate">{preset.titleEn}</p>
      </div>
    </div>
  );
}
