import { Category } from '@/types';

export const lighting: Category = {
  id: 'lighting',
  nameEn: 'Lighting & Atmosphere',
  nameKo: '조명 & 분위기',
  icon: 'sun',
  subcategories: [
    {
      id: 'lighting-style',
      nameEn: 'Lighting Style',
      nameKo: '조명 스타일',
      options: [
        { id: 'soft-dramatic-lighting', english: 'Soft dramatic lighting', korean: '부드러운 드라마틱 조명', description: '측면 부드러운 빛, 감정 중심 대화' },
        { id: 'hard-light-harsh-shadows', english: 'Hard light harsh shadows', korean: '강한 빛·날카로운 그림자', description: '대비 강한 긴장·스릴러' },
        { id: 'single-bare-bulb', english: 'Single bare bulb overhead', korean: '맨 전구 하나 천장 조명', description: '취조실·고립·빈곤' },
        { id: 'fluorescent-flicker', english: 'Fluorescent flicker harsh', korean: '형광등 깜빡임 거칠음', description: '불안정·공포·현대' },
        { id: 'neon-rim-lighting', english: 'Neon rim lighting', korean: '네온 림 라이트', description: '윤곽 네온 빛, 사이버펑크' },
        { id: 'backlighting-silhouette', english: 'Backlighting silhouette', korean: '백라이팅 실루엣', description: '뒤에서 빛, 신비·영웅' },
        { id: 'volumetric-god-rays', english: 'Volumetric god rays', korean: '체적 갓 레이', description: '안개 속 빛줄기, 판타지' },
        { id: 'rim-light-halo', english: 'Rim light halo', korean: '림 라이트 후광', description: '윤곽 후광, 신화·천사' },
        { id: 'golden-hour-warm-glow', english: 'Golden hour warm glow', korean: '골든 아워 따뜻한 빛', description: '로맨스·희망·일몰' },
        { id: 'blue-hour-cool-tones', english: 'Blue hour cool tones', korean: '블루 아워 차가운 톤', description: '고독·미스터리·밤' },
        { id: 'chiaroscuro-extreme', english: 'Chiaroscuro extreme', korean: '키아로스쿠로 극단 명암', description: '르네상스·드라마·누아르' },
        { id: 'highkey-harsh-bright', english: 'High-key harsh bright', korean: '하이키 강한 밝음', description: '노출·취약·상업' },
        { id: 'lowkey-moody-shadows', english: 'Low-key moody shadows', korean: '로우키 분위기 있는 그림자', description: '미스터리·슬픔·스릴러' },
        { id: 'dappled-moonlight', english: 'Dappled moonlight through blinds', korean: '블라인드 사이 달빛 얼룩', description: '로맨틱·밤·침실' },
        { id: 'practical-table-lamp', english: 'Practical table lamp warm', korean: '실내 테이블 램프 따뜻함', description: '아늑·친밀·카페' },
        { id: 'cinematic-spotlight', english: 'Cinematic spotlight dramatic', korean: '시네마틱 스포트라이트 드라마틱', description: '무대·공연·독백' },
        { id: 'ambient-diffused-soft', english: 'Ambient diffused soft', korean: '주변 확산 부드러움', description: '자연·일상·평온' },
        { id: 'candlelight-flickering', english: 'Candlelight flickering intimate', korean: '촛불 깜빡임 친밀', description: '로맨스·고백·고전' },
      ]
    },
    {
      id: 'atmosphere-color',
      nameEn: 'Atmosphere & Color',
      nameKo: '분위기 & 색상',
      options: [
        { id: 'moody-atmospheric-shadows', english: 'Moody atmospheric shadows', korean: '분위기 있는 그림자·어두움', description: '미스터리·슬픔·고독' },
        { id: 'high-contrast-dramatic', english: 'High contrast dramatic', korean: '고대비 드라마틱', description: '액션·스릴러·강렬' },
        { id: 'teal-orange-cinematic', english: 'Teal and orange cinematic', korean: '청록+주황 시네마틱', description: '영화적 그레이딩·현대' },
        { id: 'muted-tones-desaturated', english: 'Muted tones desaturated', korean: '희미·채도 낮춤', description: '우울·현실적·빈티지' },
        { id: 'dreamy-misty-diffusion', english: 'Dreamy misty diffusion', korean: '몽환·안개 확산', description: '판타지·로맨스·꿈같음' },
        { id: 'cool-cyan-undertones', english: 'Cool cyan undertones', korean: '차가운 청록 언더톤', description: 'SF·고독·밤' },
        { id: 'warm-practical-glow', english: 'Warm practical glow', korean: '따뜻한 실내 빛', description: '친밀·가족·로맨스' },
        { id: 'hdr-high-dynamic-range', english: 'High dynamic range HDR', korean: 'HDR 고다이나믹 레인지', description: '깊은 블랙·밝은 하이라이트' },
        { id: 'vintage-sepia-tones', english: 'Vintage sepia tones', korean: '빈티지 세피아 톤', description: '회상·과거·노스탤지어' },
        { id: 'neon-cyber-glow', english: 'Neon cyber glow', korean: '네온 사이버 빛', description: '미래·밤·흥분' },
        { id: 'eerie-foggy-haze', english: 'Eerie foggy haze', korean: '섬뜩한 안개 안개', description: '호러·초자연·불안' },
        { id: 'vibrant-saturated-pop', english: 'Vibrant saturated pop', korean: '생생·채도 높음', description: '코미디·팝·에너지' },
      ]
    },
    {
      id: 'visual-effects',
      nameEn: 'Visual Effects',
      nameKo: '시각 효과',
      options: [
        { id: 'shallow-dof-bokeh', english: 'Shallow depth of field bokeh', korean: '얕은 피사계 심도·보케', description: '인물 초점·배경 블러' },
        { id: 'anamorphic-lens-flare', english: 'Anamorphic lens flare cinematic', korean: '아나모픽 렌즈 플레어 시네마틱', description: '영화적 빛 번짐·스트레치' },
        { id: '35mm-film-grain', english: '35mm film grain textured', korean: '35mm 필름 그레인 질감', description: '빈티지·현실적·시네마틱' },
        { id: 'subtle-vignette', english: 'Subtle vignette edges', korean: '미세 비네트 가장자리 어두움', description: '초점 강화·클래식' },
        { id: 'misty-diffusion-haze', english: 'Misty diffusion haze', korean: '안개 확산 헤이즈', description: '몽환·판타지·숲' },
        { id: 'cinematic-color-grading', english: 'Cinematic color grading teal orange', korean: '시네마틱 컬러 그레이딩 청록+주황', description: '현대 영화·드라마' },
        { id: 'chromatic-aberration', english: 'Chromatic aberration subtle', korean: '크로마틱 어버레이션 미세', description: '빈티지·아날로그' },
        { id: 'light-leaks-film', english: 'Light leaks film effect', korean: '라이트 릭 필름 효과', description: '빈티지·필름·따뜻' },
        { id: 'god-rays-volumetric-fog', english: 'God rays volumetric through fog', korean: '갓 레이 체적 안개 통과', description: '신성·숲·아침' },
        { id: 'bloom-glow-soft', english: 'Bloom glow soft highlights', korean: '블룸 글로우 부드러운 하이라이트', description: '꿈같음·마법·빛 과다' },
      ]
    }
  ]
};
