import { Preset } from '@/types';

// 이미지 프롬프트용 프리셋 - 영상 전용 옵션 제외
export const imagePresets: Preset[] = [
  {
    id: 'img-preset-01',
    number: 1,
    titleEn: 'Romantic Portrait',
    titleKo: '로맨틱 포트레이트',
    thumbnail: '/thumbnails/img-preset-01.jpg',
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
    thumbnail: '/thumbnails/img-preset-02.jpg',
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
    thumbnail: '/thumbnails/img-preset-03.jpg',
    mode: 'image',
    selectedOptions: [
      'fantasy-warrior-epic', 'cowboy-shot', 'anamorphic-lens',
      'male-rugged', 'elf-graceful', 'tattooed-intricate', 'defiant-rebellious',
      'standing-defiant', 'volumetric-god-rays', 'warm-practical-glow',
      'high-cinematic-quality', 'ultra-realistic-rendering', '16-9-wide-aspect'
    ]
  },
  {
    id: 'img-preset-04',
    number: 4,
    titleEn: 'Serene Underwater Blossom',
    titleKo: '평온한 수중 벚꽃 포트레이트',
    thumbnail: '/thumbnails/img-preset-04.jpg',
    mode: 'image',
    selectedOptions: [
      'underwater-dreamy-coral', 'dreamy-atmospheric-serene', 'medium-closeup', '85mm-lens',
      'young-woman-early20s', 'korean-woman', 'elegant-long-hair', 'freckled-natural', 'calm-serene',
      'volumetric-god-rays', 'dreamy-misty-diffusion', 'cool-cyan-undertones', 'bloom-glow-soft',
      'shallow-dof-bokeh', 'high-cinematic-quality', '4k-resolution', 'realistic-skin-texture'
    ]
  },
  {
    id: 'img-preset-05',
    number: 5,
    titleEn: 'Anime Style Character',
    titleKo: '애니메이션 스타일 캐릭터',
    thumbnail: '/thumbnails/img-preset-05.jpg',
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
    thumbnail: '/thumbnails/img-preset-06.jpg',
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
    titleEn: 'Curious Cat Living Room',
    titleKo: '호기심 고양이 거실',
    thumbnail: '/thumbnails/img-preset-07.jpg',
    mode: 'image',
    selectedOptions: [
      'cozy-living-room', 'pov-shot', '50mm-lens',
      'cat-domestic', 'cat-looking-camera', 'playful-teasing',
      'highkey-harsh-bright', 'ambient-diffused-soft', 'vibrant-saturated-pop',
      'shallow-dof-bokeh', 'high-cinematic-quality', '4k-resolution'
    ]
  },
  {
    id: 'img-preset-08',
    number: 8,
    titleEn: 'Ghibli Teddy Bear Phone Booth',
    titleKo: '지브리풍 테디베어 전화부스',
    thumbnail: '/thumbnails/img-preset-08.jpg',
    mode: 'image',
    selectedOptions: [
      'ghibli-2d-handdrawn', 'telephone-booth-urban', 'whimsical-fantasy-cute',
      'wide-shot', 'teddy-bears-plush', 'kawaii-plush-toys',
      'tender-affectionate', 'soft-emotional-tones'
    ]
  },
  {
    id: 'img-preset-09',
    number: 9,
    titleEn: 'Pixar Cute Monsters Mountain',
    titleKo: '픽사 귀여운 몬스터 산',
    thumbnail: '/thumbnails/img-preset-09.jpg',
    mode: 'image',
    selectedOptions: [
      'pixar-style-3d', 'whimsical-fantasy-cute', 'joyful-sunlit-meadow',
      'wide-shot', '35mm-lens', 'cute-furry-monsters', 'pixar-style-creatures',
      'joyful-happy', 'playful-teasing', 'highkey-harsh-bright',
      'ambient-diffused-soft', 'vibrant-saturated-pop', 'bloom-glow-soft',
      'high-cinematic-quality', '4k-resolution'
    ]
  },
  {
    id: 'img-preset-10',
    number: 10,
    titleEn: 'Korean Pre-Wedding Street',
    titleKo: '한국 프리웨딩 스트리트',
    thumbnail: '/thumbnails/img-preset-10.jpg',
    mode: 'image',
    selectedOptions: [
      'prewedding-romantic', 'urban-street-crossing', 'ivy-covered-wall',
      'cowboy-shot', '35mm-lens', 'korean-couple', 'bride-wedding-dress', 'groom-suit',
      'couple-holding-hands', 'couple-warm-smiles', 'joyful-happy', 'tender-affectionate',
      'ambient-diffused-soft', 'muted-earthy-tones', 'shallow-dof-bokeh',
      '35mm-film-grain', 'high-cinematic-quality', 'realistic-skin-texture'
    ]
  }
];
