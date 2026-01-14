'use client';

import { Header } from '@/components/layout/Header';
import { PresetPanel } from '@/components/panels/Panel1/PresetPanel';
import { ElementPanel } from '@/components/panels/Panel2/ElementPanel';
import { EnglishPromptPanel } from '@/components/panels/Panel3/EnglishPromptPanel';
import { KoreanPromptPanel } from '@/components/panels/Panel4/KoreanPromptPanel';

export default function Home() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />

      <main className="flex-1 overflow-hidden p-4">
        <div className="h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {/* Panel 1: 프리셋 */}
          <div className="panel overflow-hidden xl:col-span-1">
            <PresetPanel />
          </div>

          {/* Panel 2: 요소 선택 */}
          <div className="panel overflow-hidden xl:col-span-1">
            <ElementPanel />
          </div>

          {/* Panel 3: 영어 프롬프트 */}
          <div className="panel overflow-hidden xl:col-span-1">
            <EnglishPromptPanel />
          </div>

          {/* Panel 4: 한글 프롬프트 */}
          <div className="panel overflow-hidden xl:col-span-1">
            <KoreanPromptPanel />
          </div>
        </div>
      </main>
    </div>
  );
}
