// 프롬프트 옵션 (이중언어)
export interface PromptOption {
  id: string;
  english: string;
  korean: string;
  description?: string;
  videoOnly?: boolean;
  imageOnly?: boolean;
}

// 하위 카테고리
export interface Subcategory {
  id: string;
  nameEn: string;
  nameKo: string;
  videoOnly?: boolean;
  options: PromptOption[];
}

// 카테고리
export interface Category {
  id: string;
  nameEn: string;
  nameKo: string;
  icon?: string;
  videoOnly?: boolean;
  subcategories: Subcategory[];
}

// 프리셋 조합
export interface Preset {
  id: string;
  number: number;
  titleEn: string;
  titleKo: string;
  thumbnail: string;
  mode: 'image' | 'video';
  selectedOptions: string[];
}

// 선택 상태
export interface SelectionState {
  [optionId: string]: boolean;
}

// 앱 상태
export interface AppState {
  mode: 'image' | 'video';
  activePreset: string | null;
  selections: SelectionState;
  favorites: string[];
  isModified: boolean;
  expandedCategory: string | null;
}
