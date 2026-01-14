import { Preset } from '@/types';

// 이미지 프롬프트용 프리셋 - 영상 전용 옵션 제외
export const imagePresets: Preset[] = [
  {
    id: 'img-preset-01',
    number: 1,
    titleEn: 'Romantic Portrait',
    titleKo: '로맨틱 포트레이트',
    thumbnail: '/thumbnails/img-preset-01.svg',
    mode: 'image',
    selectedOptions: [
      'romantic-drama-intimate', 'medium-closeup', '85mm-lens',
      'young-woman-early20s', 'elegant-long-hair', 'soft-melancholic-gaze',
      'glistening-tearful-eyes', 'flowing-elegant-dress', 'soft-dramatic-lighting',
      'golden-hour-warm-glow', 'shallow-dof-bokeh', 'high-cinematic-quality',
      '4k-resolution', 'muted-tones-desaturated'
    ]
  },
  {
    id: 'img-preset-02',
    number: 2,
    titleEn: 'Cyberpunk Character',
    titleKo: '사이버펑크 캐릭터',
    thumbnail: '/thumbnails/img-preset-02.svg',
    mode: 'image',
    selectedOptions: [
      'cyberpunk-neon-alley', 'medium-closeup', '35mm-lens',
      'androgynous-neutral', 'cyberpunk-neon-hair', 'intense-piercing-gaze',
      'neon-rim-lighting', 'teal-orange-cinematic', 'high-contrast-dramatic',
      'high-cinematic-quality', '4k-resolution', 'realistic-skin-texture'
    ]
  },
  {
    id: 'img-preset-03',
    number: 3,
    titleEn: 'Fantasy Warrior',
    titleKo: '판타지 전사',
    thumbnail: '/thumbnails/img-preset-03.svg',
    mode: 'image',
    selectedOptions: [
      'fantasy-warrior-epic', 'cowboy-shot', 'anamorphic-lens',
      'elf-graceful', 'tattooed-intricate', 'defiant-rebellious',
      'standing-defiant', 'volumetric-god-rays', 'warm-practical-glow',
      'high-cinematic-quality', 'ultra-realistic-rendering', '16-9-wide-aspect'
    ]
  },
  {
    id: 'img-preset-04',
    number: 4,
    titleEn: 'Horror Portrait',
    titleKo: '호러 포트레이트',
    thumbnail: '/thumbnails/img-preset-04.svg',
    mode: 'image',
    selectedOptions: [
      'horror-thriller-tension', 'extreme-closeup', 'macro-lens',
      'teenage-girl', 'anxious-wide-eyes', 'lip-quiver-trembling',
      'lowkey-moody-shadows', 'eerie-foggy-haze', 'chromatic-aberration',
      'high-cinematic-quality', 'hdr-deep-blacks'
    ]
  },
  {
    id: 'img-preset-05',
    number: 5,
    titleEn: 'Anime Style Character',
    titleKo: '애니메이션 스타일 캐릭터',
    thumbnail: '/thumbnails/img-preset-05.svg',
    mode: 'image',
    selectedOptions: [
      'anime-style-dramatic', 'medium-closeup', '50mm-lens',
      'young-woman-early20s', 'elegant-long-hair', 'hopeful-glistening-eyes',
      'soft-dramatic-lighting', 'vibrant-saturated-pop', 'bloom-glow-soft',
      'high-cinematic-quality', '4k-resolution'
    ]
  },
  {
    id: 'img-preset-06',
    number: 6,
    titleEn: 'Film Noir Detective',
    titleKo: '필름 누아르 탐정',
    thumbnail: '/thumbnails/img-preset-06.svg',
    mode: 'image',
    selectedOptions: [
      'film-noir-style-scene', 'profile-shot', '50mm-lens',
      'middleaged-man', 'mysterious-one-eye', 'skeptical-doubtful',
      'single-bare-bulb', 'chiaroscuro-extreme', 'muted-tones-desaturated',
      '35mm-film-grain', 'high-cinematic-quality', '16-9-wide-aspect'
    ]
  },
  {
    id: 'img-preset-07',
    number: 7,
    titleEn: 'Dreamy Ethereal',
    titleKo: '몽환적 천상',
    thumbnail: '/thumbnails/img-preset-07.svg',
    mode: 'image',
    selectedOptions: [
      'dreamy-atmospheric-serene', 'medium-closeup', '85mm-lens',
      'ageless-ethereal-female', 'glowing-ethereal-aura', 'peaceful-ethereal-calm',
      'calm-serene', 'backlighting-silhouette', 'dreamy-misty-diffusion',
      'bloom-glow-soft', 'high-cinematic-quality', '4k-resolution'
    ]
  },
  {
    id: 'img-preset-08',
    number: 8,
    titleEn: 'Retro Synthwave',
    titleKo: '레트로 신스웨이브',
    thumbnail: '/thumbnails/img-preset-08.svg',
    mode: 'image',
    selectedOptions: [
      'synthwave-neon-glow', 'cowboy-shot', '35mm-lens',
      'young-man-early20s', 'cyberpunk-neon-hair', 'passionate-intense',
      'neon-rim-lighting', 'neon-cyber-glow', 'high-contrast-dramatic',
      'chromatic-aberration', 'high-cinematic-quality', '16-9-wide-aspect'
    ]
  },
  {
    id: 'img-preset-09',
    number: 9,
    titleEn: 'Vintage Portrait',
    titleKo: '빈티지 포트레이트',
    thumbnail: '/thumbnails/img-preset-09.svg',
    mode: 'image',
    selectedOptions: [
      'nostalgic-vintage-retro', 'medium-closeup', '85mm-lens',
      'middleaged-woman', 'freckled-natural', 'nostalgic-wistful',
      'practical-table-lamp', 'vintage-sepia-tones', '35mm-film-grain',
      'light-leaks-film', 'subtle-vignette', 'high-cinematic-quality'
    ]
  },
  {
    id: 'img-preset-10',
    number: 10,
    titleEn: 'Sci-Fi Android',
    titleKo: 'SF 안드로이드',
    thumbnail: '/thumbnails/img-preset-10.svg',
    mode: 'image',
    selectedOptions: [
      'scifi-moody-futuristic', 'medium-closeup', '50mm-lens',
      'android-cybernetic', 'glowing-ethereal-aura', 'blank-empty-stare',
      'neon-rim-lighting', 'teal-orange-cinematic', 'cool-cyan-undertones',
      'high-cinematic-quality', '4k-resolution', 'realistic-skin-texture'
    ]
  }
];
