import { categories, findOptionById } from '@/data/categories';
import { PromptOption } from '@/types';

// 카테고리 순서
const CATEGORY_ORDER = [
  'scene-type',
  'camera',
  'subject',
  'lighting',
  'voice',
  'technical'
];

export function buildPrompt(
  selectedOptionIds: string[],
  language: 'english' | 'korean',
  mode: 'image' | 'video'
): string {
  const orderedOptions: PromptOption[] = [];

  // 카테고리 순서대로 옵션 정렬
  for (const categoryId of CATEGORY_ORDER) {
    const category = categories.find(c => c.id === categoryId);
    if (!category) continue;

    // 영상 전용 카테고리 필터링
    if (category.videoOnly && mode === 'image') continue;

    for (const subcategory of category.subcategories) {
      // 영상 전용 서브카테고리 필터링
      if (subcategory.options[0]?.videoOnly && mode === 'image') continue;

      for (const option of subcategory.options) {
        if (selectedOptionIds.includes(option.id)) {
          // 영상 전용 옵션 필터링
          if (option.videoOnly && mode === 'image') continue;
          if (option.imageOnly && mode === 'video') continue;
          orderedOptions.push(option);
        }
      }
    }
  }

  // 프롬프트 생성
  const promptParts = orderedOptions.map(option =>
    language === 'english' ? option.english : option.korean
  );

  return promptParts.join(', ');
}

export function getPromptLength(prompt: string): number {
  return prompt.length;
}

export function isPromptOptimal(prompt: string): boolean {
  const length = prompt.length;
  return length >= 400 && length <= 700;
}

export function getPromptStatus(prompt: string): 'short' | 'optimal' | 'long' {
  const length = prompt.length;
  if (length < 400) return 'short';
  if (length > 700) return 'long';
  return 'optimal';
}
