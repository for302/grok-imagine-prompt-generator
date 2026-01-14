'use client';

import { usePromptStore } from '@/store/promptStore';
import { categories } from '@/data/categories';
import { CategoryAccordion } from './CategoryAccordion';

export function ElementPanel() {
  const { mode, expandedCategory, setExpandedCategory, selections } = usePromptStore();

  // 선택된 옵션 수 계산
  const getSelectedCountForCategory = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    if (!category) return 0;

    let count = 0;
    for (const subcategory of category.subcategories) {
      for (const option of subcategory.options) {
        if (selections[option.id]) {
          // 모드에 따른 필터링
          if (mode === 'image' && option.videoOnly) continue;
          if (mode === 'video' && option.imageOnly) continue;
          count++;
        }
      }
    }
    return count;
  };

  // 모드에 따라 카테고리 필터링
  const filteredCategories = categories.filter(category => {
    if (mode === 'image' && category.videoOnly) return false;
    return true;
  });

  return (
    <div className="md:h-full flex flex-col">
      <div className="p-4 border-b border-[var(--border)]">
        <h2 className="font-semibold">프롬프트 요소 선택</h2>
        <p className="text-xs text-[var(--muted-foreground)] mt-1">
          카테고리를 클릭하여 옵션을 선택하세요
        </p>
      </div>

      <div className="flex-1 md:overflow-y-auto">
        {filteredCategories.map(category => (
          <CategoryAccordion
            key={category.id}
            category={category}
            isExpanded={expandedCategory === category.id}
            selectedCount={getSelectedCountForCategory(category.id)}
            onToggle={() => setExpandedCategory(
              expandedCategory === category.id ? null : category.id
            )}
          />
        ))}
      </div>
    </div>
  );
}
