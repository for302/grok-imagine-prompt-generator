'use client';

import { useState, useMemo } from 'react';
import { usePromptStore } from '@/store/promptStore';
import { getPresetsByMode, getPresetById } from '@/data/presets';
import { PresetCard } from './PresetCard';
import { ConfirmDialog } from '@/components/ui/ConfirmDialog';

// 모바일에서 요소 선택 패널로 스크롤
const scrollToElementPanel = () => {
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    setTimeout(() => {
      const elementPanel = document.getElementById('element-panel');
      if (elementPanel) {
        elementPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }
};

export function PresetPanel() {
  const { mode, setMode, activePreset, isModified, loadPreset, favorites } = usePromptStore();
  const [pendingPreset, setPendingPreset] = useState<string | null>(null);
  const [showConfirm, setShowConfirm] = useState(false);

  const presets = useMemo(() => getPresetsByMode(mode), [mode]);

  // 즐겨찾기와 일반 프리셋 분리
  const { favoritePresets, regularPresets } = useMemo(() => {
    const favs = presets.filter(p => favorites.includes(p.id));
    const regs = presets.filter(p => !favorites.includes(p.id));
    return { favoritePresets: favs, regularPresets: regs };
  }, [presets, favorites]);

  const handlePresetClick = (presetId: string) => {
    if (isModified && activePreset && activePreset !== presetId) {
      setPendingPreset(presetId);
      setShowConfirm(true);
    } else {
      const preset = getPresetById(presetId);
      if (preset) {
        loadPreset(presetId, preset.selectedOptions);
        scrollToElementPanel();
      }
    }
  };

  const handleConfirm = () => {
    if (pendingPreset) {
      const preset = getPresetById(pendingPreset);
      if (preset) {
        loadPreset(pendingPreset, preset.selectedOptions);
        scrollToElementPanel();
      }
    }
    setShowConfirm(false);
    setPendingPreset(null);
  };

  return (
    <div className="md:h-full flex flex-col">
      {/* 모드 토글 */}
      <div className="p-4 border-b border-[var(--border)]">
        <div className="flex rounded-lg overflow-hidden border border-[var(--border)]">
          <button
            onClick={() => setMode('image')}
            className={`flex-1 py-2 px-4 text-sm font-medium transition-colors ${
              mode === 'image'
                ? 'bg-[var(--accent)] text-[var(--accent-foreground)]'
                : 'bg-transparent hover:bg-[var(--muted)]'
            }`}
          >
            이미지 프롬프트
          </button>
          <button
            onClick={() => setMode('video')}
            className={`flex-1 py-2 px-4 text-sm font-medium transition-colors ${
              mode === 'video'
                ? 'bg-[var(--accent)] text-[var(--accent-foreground)]'
                : 'bg-transparent hover:bg-[var(--muted)]'
            }`}
          >
            영상 프롬프트
          </button>
        </div>
      </div>

      {/* 프리셋 목록 */}
      <div className="flex-1 md:overflow-y-auto p-4 space-y-6">
        {/* 즐겨찾기 섹션 */}
        {favoritePresets.length > 0 && (
          <div>
            <h3 className="text-sm font-medium text-[var(--muted-foreground)] mb-3 flex items-center gap-2">
              <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              즐겨찾기
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {favoritePresets.map(preset => (
                <PresetCard
                  key={preset.id}
                  preset={preset}
                  isSelected={activePreset === preset.id}
                  onClick={() => handlePresetClick(preset.id)}
                />
              ))}
            </div>
          </div>
        )}

        {/* 전체 프리셋 */}
        <div>
          <h3 className="text-sm font-medium text-[var(--muted-foreground)] mb-3">
            프롬프트 조합 예시
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {regularPresets.map(preset => (
              <PresetCard
                key={preset.id}
                preset={preset}
                isSelected={activePreset === preset.id}
                onClick={() => handlePresetClick(preset.id)}
              />
            ))}
          </div>
        </div>
      </div>

      <ConfirmDialog
        isOpen={showConfirm}
        onClose={() => {
          setShowConfirm(false);
          setPendingPreset(null);
        }}
        onConfirm={handleConfirm}
        title="프롬프트 변경 확인"
        message="기존 옵션이 초기화 됩니다. 새로운 프롬프트를 제작 하시겠습니까?"
      />
    </div>
  );
}
