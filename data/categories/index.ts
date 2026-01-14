import { sceneTypes } from './sceneTypes';
import { camera } from './camera';
import { subject } from './subject';
import { lighting } from './lighting';
import { voice } from './voice';
import { technical } from './technical';
import { Category, PromptOption } from '@/types';

export const categories: Category[] = [
  sceneTypes,
  camera,
  subject,
  lighting,
  voice,
  technical,
];

// 모든 옵션을 플랫하게 가져오는 헬퍼 함수
export function getAllOptions(): PromptOption[] {
  const options: PromptOption[] = [];
  for (const category of categories) {
    for (const subcategory of category.subcategories) {
      options.push(...subcategory.options);
    }
  }
  return options;
}

// ID로 옵션 찾기
export function findOptionById(id: string): PromptOption | undefined {
  for (const category of categories) {
    for (const subcategory of category.subcategories) {
      const option = subcategory.options.find(opt => opt.id === id);
      if (option) return option;
    }
  }
  return undefined;
}

// 카테고리 ID로 카테고리 찾기
export function findCategoryById(id: string): Category | undefined {
  return categories.find(cat => cat.id === id);
}

export { sceneTypes, camera, subject, lighting, voice, technical };
