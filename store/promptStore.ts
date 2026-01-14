'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { SelectionState } from '@/types';

interface PromptStore {
  // 상태
  mode: 'image' | 'video';
  activePreset: string | null;
  selections: SelectionState;
  favorites: string[];
  isModified: boolean;
  expandedCategory: string | null;

  // 모드 액션
  setMode: (mode: 'image' | 'video') => void;

  // 선택 액션
  toggleOption: (optionId: string) => void;
  selectOptions: (optionIds: string[]) => void;
  clearSelections: () => void;

  // 프리셋 액션
  setActivePreset: (presetId: string | null) => void;
  loadPreset: (presetId: string, optionIds: string[]) => void;

  // 즐겨찾기 액션
  toggleFavorite: (presetId: string) => void;
  isFavorite: (presetId: string) => boolean;

  // 수정 상태
  setModified: (isModified: boolean) => void;

  // 아코디언 상태
  setExpandedCategory: (categoryId: string | null) => void;

  // 유틸리티
  getSelectedOptions: () => string[];
  getSelectedCount: () => number;
}

export const usePromptStore = create<PromptStore>()(
  persist(
    (set, get) => ({
      // 초기 상태
      mode: 'video',
      activePreset: null,
      selections: {},
      favorites: [],
      isModified: false,
      expandedCategory: null,

      // 모드 설정
      setMode: (mode) => set({
        mode,
        activePreset: null,
        selections: {},
        isModified: false
      }),

      // 옵션 토글
      toggleOption: (optionId) => set((state) => {
        const newSelections = { ...state.selections };
        if (newSelections[optionId]) {
          delete newSelections[optionId];
        } else {
          newSelections[optionId] = true;
        }
        return {
          selections: newSelections,
          isModified: true
        };
      }),

      // 여러 옵션 선택
      selectOptions: (optionIds) => set(() => {
        const newSelections: SelectionState = {};
        optionIds.forEach(id => {
          newSelections[id] = true;
        });
        return { selections: newSelections };
      }),

      // 선택 초기화
      clearSelections: () => set({
        selections: {},
        activePreset: null,
        isModified: false
      }),

      // 활성 프리셋 설정
      setActivePreset: (presetId) => set({ activePreset: presetId }),

      // 프리셋 로드
      loadPreset: (presetId, optionIds) => {
        const newSelections: SelectionState = {};
        optionIds.forEach(id => {
          newSelections[id] = true;
        });
        set({
          activePreset: presetId,
          selections: newSelections,
          isModified: false
        });
      },

      // 즐겨찾기 토글
      toggleFavorite: (presetId) => set((state) => {
        const favorites = state.favorites.includes(presetId)
          ? state.favorites.filter(id => id !== presetId)
          : [...state.favorites, presetId];
        return { favorites };
      }),

      // 즐겨찾기 여부 확인
      isFavorite: (presetId) => get().favorites.includes(presetId),

      // 수정 상태 설정
      setModified: (isModified) => set({ isModified }),

      // 확장된 카테고리 설정
      setExpandedCategory: (categoryId) => set({ expandedCategory: categoryId }),

      // 선택된 옵션 ID 배열 반환
      getSelectedOptions: () => Object.keys(get().selections).filter(id => get().selections[id]),

      // 선택된 옵션 수 반환
      getSelectedCount: () => Object.keys(get().selections).filter(id => get().selections[id]).length,
    }),
    {
      name: 'grok-prompt-storage',
      partialize: (state) => ({
        favorites: state.favorites,
      }),
    }
  )
);
