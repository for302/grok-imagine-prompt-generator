'use client';

import { ReactNode } from 'react';
import { Category } from '@/types';
import { usePromptStore } from '@/store/promptStore';

interface CategoryAccordionProps {
  category: Category;
  isExpanded: boolean;
  selectedCount: number;
  onToggle: () => void;
}

export function CategoryAccordion({
  category,
  isExpanded,
  selectedCount,
  onToggle
}: CategoryAccordionProps) {
  const { mode, selections, toggleOption } = usePromptStore();

  // 아이콘 매핑
  const iconMap: Record<string, ReactNode> = {
    film: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
    ),
    camera: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    user: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    sun: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    mic: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    settings: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  };

  return (
    <div className="border-b border-[var(--border)]">
      {/* 헤더 */}
      <button
        onClick={onToggle}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-[var(--muted)] transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-[var(--muted-foreground)]">
            {iconMap[category.icon || 'settings']}
          </span>
          <div className="text-left">
            <p className="font-medium text-sm">{category.nameKo}</p>
            <p className="text-xs text-[var(--muted-foreground)]">{category.nameEn}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {selectedCount > 0 && (
            <span className="px-2 py-0.5 text-xs font-medium bg-[var(--accent)] text-[var(--accent-foreground)] rounded-full">
              {selectedCount}
            </span>
          )}
          <svg
            className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* 콘텐츠 */}
      {isExpanded && (
        <div className="px-4 pb-4 space-y-4">
          {category.subcategories.map(subcategory => {
            // 영상 전용 서브카테고리 필터링
            const hasVideoOnlyOptions = subcategory.options.some(o => o.videoOnly);
            if (mode === 'image' && hasVideoOnlyOptions && subcategory.options.every(o => o.videoOnly)) {
              return null;
            }

            return (
              <div key={subcategory.id}>
                <h4 className="text-xs font-medium text-[var(--muted-foreground)] mb-2">
                  {subcategory.nameKo}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {subcategory.options.map(option => {
                    // 모드에 따른 필터링
                    if (mode === 'image' && option.videoOnly) return null;
                    if (mode === 'video' && option.imageOnly) return null;

                    const isSelected = selections[option.id];

                    return (
                      <button
                        key={option.id}
                        onClick={() => toggleOption(option.id)}
                        title={option.description}
                        className={`px-3 py-1.5 text-xs rounded-full border transition-all ${
                          isSelected
                            ? 'bg-[var(--accent)] text-[var(--accent-foreground)] border-[var(--accent)]'
                            : 'border-[var(--border)] hover:border-[var(--accent)] hover:bg-[var(--muted)]'
                        }`}
                      >
                        {option.korean}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
