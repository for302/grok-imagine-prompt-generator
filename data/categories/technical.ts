import { Category } from '@/types';

export const technical: Category = {
  id: 'technical',
  nameEn: 'Technical & Restrictions',
  nameKo: '기술적/제한 조건',
  icon: 'settings',
  subcategories: [
    {
      id: 'restrictions',
      nameEn: 'Restrictions',
      nameKo: '제한 조건',
      options: [
        { id: 'no-subtitles', english: 'No subtitles / No text overlays', korean: '자막 없음 / 텍스트 오버레이 금지', description: '대사 중심·순수 영상' },
        { id: 'no-bgm', english: 'No background music / No BGM', korean: '배경 음악 없음 / BGM 금지', description: '대사·효과음만', videoOnly: true },
        { id: 'only-ambient-sfx', english: 'Only subtle ambient SFX', korean: '미세 주변 효과음만', description: '현실적·조용한 분위기', videoOnly: true },
        { id: 'no-distractions', english: 'No distractions / No additional elements', korean: '방해 요소 없음 / 추가 요소 금지', description: '주체·표정·대사에 집중' },
        { id: 'no-motion-artifacts', english: 'No motion artifacts / No morphing', korean: '모션 아티팩트 없음 / 형태 왜곡 금지', description: '부드러운 움직임', videoOnly: true },
        { id: 'no-facial-morphing', english: 'No facial morphing / No identity shift', korean: '얼굴 변형 없음 / 신원 변화 금지', description: '얼굴 일관성 유지' },
        { id: 'no-extra-characters', english: 'No extra characters / No crowds', korean: '추가 인물 없음 / 군중 금지', description: '1인 중심·친밀' },
        { id: 'no-text-watermarks', english: 'No text / No watermarks / No logos', korean: '텍스트·워터마크·로고 없음', description: '깨끗한 영상' },
        { id: 'no-sudden-cuts', english: 'No sudden cuts / No jump cuts', korean: '갑작스러운 컷·점프 컷 금지', description: '부드러운 연속', videoOnly: true },
        { id: 'no-fast-motion', english: 'No fast motion / No blur artifacts', korean: '빠른 움직임·블러 아티팩트 금지', description: '천천히·정적·표정 중심', videoOnly: true },
      ]
    },
    {
      id: 'quality-specs',
      nameEn: 'Quality & Specs',
      nameKo: '품질 & 스펙',
      options: [
        { id: 'high-cinematic-quality', english: 'High cinematic quality / Ultra-detailed', korean: '고품질 시네마틱 / 초상세', description: '영화급·현실적·디테일 강조' },
        { id: '4k-resolution', english: '4K resolution / Ultra HD', korean: '4K 해상도 / 울트라 HD', description: '고해상도·선명·스크린용' },
        { id: '8k-resolution', english: '8K resolution / Ultra high quality', korean: '8K 해상도 / 초고퀄리티', description: '최고해상도·극상세·프리미엄' },
        { id: '24fps-cinematic', english: '24fps cinematic motion blur', korean: '24fps 시네마틱 모션 블러', description: '영화 같은 부드러움', videoOnly: true },
        { id: '35mm-film-grain-quality', english: '35mm film grain textured', korean: '35mm 필름 그레인 질감', description: '빈티지·현실적·시네마틱' },
        { id: 'locked-temporal-consistency', english: 'Locked temporal consistency', korean: '시간적 일관성 고정', description: '프레임 간 얼굴·움직임 변하지 않음', videoOnly: true },
        { id: 'physics-accurate', english: 'Physics-accurate micro-movements', korean: '물리적으로 정확한 미세 움직임', description: '머리카락·옷감·호흡', videoOnly: true },
        { id: '16-9-wide-aspect', english: '16:9 wide aspect ratio cinematic', korean: '16:9 와이드 비율 시네마틱', description: '영화 스크린·트레일러' },
        { id: '9-16-vertical-portrait', english: '9:16 vertical portrait safe', korean: '9:16 세로 포트레이트 안전', description: '모바일·틱톡·인스타 릴스' },
        { id: 'hdr-deep-blacks', english: 'High dynamic range HDR deep blacks', korean: 'HDR 고다이나믹 레인지 깊은 블랙', description: '명암 강렬·현실적' },
        { id: 'anamorphic-squeeze', english: 'Anamorphic squeeze cinematic look', korean: '아나모픽 압축 시네마틱 룩', description: '영화적 스트레치·플레어' },
        { id: 'realistic-skin-texture', english: 'Realistic skin texture pores visible', korean: '현실적 피부 텍스처 모공 보임', description: '포토리얼·클로즈업' },
        { id: 'subtle-vignette-framing', english: 'Subtle vignette framing edges', korean: '미세 비네트 가장자리 어두움', description: '초점 강화·클래식' },
        { id: 'chromatic-aberration-subtle', english: 'Chromatic aberration subtle film', korean: '미세 크로마틱 어버레이션 필름', description: '빈티지·아날로그' },
        { id: 'light-leaks-warm', english: 'Light leaks film effect warm', korean: '필름 라이트 릭 따뜻함', description: '빈티지·감성·과거 회상' },
        { id: 'no-lens-distortion', english: 'No lens distortion / No fisheye', korean: '렌즈 왜곡 없음 / 어안 금지', description: '자연스러운 시야' },
        { id: 'ultra-realistic-rendering', english: 'Ultra-realistic rendering', korean: '울트라 리얼리스틱 렌더링', description: '사진급·현실·최상위 옵션' },
      ]
    }
  ]
};
