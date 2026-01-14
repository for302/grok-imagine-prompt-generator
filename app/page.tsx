'use client';

import { Header } from '@/components/layout/Header';
import { PresetPanel } from '@/components/panels/Panel1/PresetPanel';
import { ElementPanel } from '@/components/panels/Panel2/ElementPanel';
import { EnglishPromptPanel } from '@/components/panels/Panel3/EnglishPromptPanel';
import { KoreanPromptPanel } from '@/components/panels/Panel4/KoreanPromptPanel';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen md:h-screen md:overflow-hidden">
      <Header />

      <main className="flex-1 md:overflow-hidden p-4">
        <div className="md:h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {/* Panel 1: 프리셋 */}
          <div className="panel md:overflow-hidden">
            <PresetPanel />
          </div>

          {/* Panel 2: 요소 선택 */}
          <div id="element-panel" className="panel md:overflow-hidden">
            <ElementPanel />
          </div>

          {/* Panel 3: 프롬프트 (영어 + 한글 위아래) */}
          <div className="flex flex-col gap-4 md:overflow-hidden">
            <div className="panel md:overflow-hidden md:flex-1">
              <EnglishPromptPanel />
            </div>
            <div className="panel md:overflow-hidden md:flex-1">
              <KoreanPromptPanel />
            </div>
          </div>
        </div>
      </main>

      {/* 모바일 하단 배너 */}
      <a
        href="https://www.coupang.com/vp/products/6875742433?itemId=16462707169&src=1139000&spec=10799999&addtag=400&ctag=6875742433&lptag=AF7421237&itime=20260115061935&pageType=PRODUCT&pageValue=6875742433&wPcid=17659392394265419393660&wRef=&wTime=20260115061935&redirect=landing&traceid=V0-101-788541e734c354ee&mcid=631854343acd499cb0af40a7d21e1f89&campaignid=&clickBeacon=&imgsize=&pageid=&sig=&subid=&campaigntype=&puid=&ctime=&portal=&landing_exp=&placementid=&puidType=&contentcategory=&tsource=&deviceid=&contenttype=&token=&impressionid=&requestid=&contentkeyword=&offerId=&sfId=&subparam="
        target="_blank"
        rel="noopener noreferrer"
        className="block md:hidden p-4"
      >
        <img
          src="/images/banner-01.gif"
          alt="광고 배너"
          className="w-full h-auto rounded-lg"
        />
      </a>
    </div>
  );
}
