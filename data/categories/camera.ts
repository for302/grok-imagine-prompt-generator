import { Category } from '@/types';

export const camera: Category = {
  id: 'camera',
  nameEn: 'Camera',
  nameKo: '카메라',
  icon: 'camera',
  subcategories: [
    {
      id: 'camera-angle',
      nameEn: 'Camera Angle & Shot Type',
      nameKo: '카메라 앵글 & 샷 타입',
      options: [
        { id: 'medium-closeup', english: 'Medium close-up', korean: '미디엄 클로즈업', description: '어깨~얼굴, 대화 중심 감정 표현' },
        { id: 'extreme-closeup', english: 'Extreme close-up (ECU)', korean: '익스트림 클로즈업', description: '눈·입·세부, 강렬한 감정 강조' },
        { id: 'low-angle-shot', english: 'Low angle shot', korean: '로우 앵글 샷', description: '아래에서 위로, 강하고 위압적' },
        { id: 'high-angle-shot', english: 'High angle shot', korean: '하이 앵글 샷', description: '위에서 아래로, 취약함·작아 보임' },
        { id: 'birds-eye-view', english: "Bird's-eye view / Overhead", korean: '버드스 아이 뷰 / 오버헤드', description: '정수리 위 직각, 전체 공간 맵핑' },
        { id: 'dutch-angle', english: 'Dutch angle / Tilted frame', korean: '더치 앵글 / 기울어진 프레임', description: '정신적 불안정·혼란·공포' },
        { id: 'over-the-shoulder', english: 'Over-the-shoulder (OTS)', korean: '오버 더 숄더', description: '어깨 너머, 대화 상대 시점' },
        { id: 'wide-shot', english: 'Wide shot / Long shot', korean: '와이드 샷 / 롱 샷', description: '전신 + 환경, 공간·맥락 소개' },
        { id: 'establishing-shot', english: 'Establishing shot', korean: '확립 샷', description: '넓은 환경 전체, 장소 소개' },
        { id: 'cowboy-shot', english: 'Cowboy shot / Medium long shot', korean: '카우보이 샷', description: '허벅지 중간부터, 서부극·총격' },
        { id: 'profile-shot', english: 'Profile shot / Side angle', korean: '프로필 샷 / 사이드 앵글', description: '옆모습, 신비·윤곽 강조' },
        { id: 'pov-shot', english: 'Point-of-view (POV)', korean: '포인트 오브 뷰', description: '주체 시선 그대로, 몰입·주관적 감정' },
        { id: 'reaction-shot', english: 'Reaction shot', korean: '리액션 샷', description: '상대 말 듣는 표정, 감정 반응' },
        { id: 'two-shot', english: 'Two-shot', korean: '투 샷', description: '두 사람 함께, 관계성·대화 균형' },
        { id: 'insert-shot', english: 'Insert / Detail shot', korean: '인서트 샷 / 디테일 샷', description: '특정 오브젝트·부위, 세부 강조' },
      ]
    },
    {
      id: 'camera-lens',
      nameEn: 'Camera Lens',
      nameKo: '카메라 렌즈',
      options: [
        { id: '50mm-lens', english: '50mm lens / Standard lens', korean: '50mm 표준 렌즈', description: '자연스러운 인간 시야, 중립적' },
        { id: '85mm-lens', english: '85mm lens / Portrait lens', korean: '85mm 포트레이트 렌즈', description: '얼굴 압축 + 아름다운 bokeh' },
        { id: '35mm-lens', english: '35mm lens / Wide-normal', korean: '35mm 와이드-노멀', description: '약간 넓은 시야, 공간감 + 자연스러움' },
        { id: '24mm-lens', english: '24mm lens / Wide-angle', korean: '24mm 와이드 앵글', description: '넓은 시야 + 약간 왜곡' },
        { id: 'anamorphic-lens', english: 'Anamorphic lens', korean: '아나모픽 렌즈', description: '영화적 플레어·스트레치' },
        { id: 'macro-lens', english: 'Macro lens / Close-up lens', korean: '매크로 렌즈', description: '극단 근접, 피부 텍스처·눈물' },
        { id: '135mm-lens', english: '135mm lens / Telephoto', korean: '135mm 텔레포토', description: '배경 압축, 강렬한 초점·고립감' },
        { id: 'fisheye-lens', english: 'Fisheye lens', korean: '어안 렌즈', description: '극단 왜곡·원형 프레임' },
      ]
    },
    {
      id: 'camera-movement',
      nameEn: 'Camera Movement',
      nameKo: '카메라 움직임',
      videoOnly: true,
      options: [
        { id: 'static-locked-camera', english: 'Static locked-off camera', korean: '스태틱 록드-오프 카메라', description: '완전 고정, 가장 안정적', videoOnly: true },
        { id: 'gentle-slow-zoomin', english: 'Gentle slow zoom-in', korean: '젠틀 슬로우 줌인', description: '천천히 가까워짐, 긴장 고조', videoOnly: true },
        { id: 'rapid-zoom-into', english: 'Rapid zoom-in to subject', korean: '빠른 줌인 주체로', description: '빠르게 가까워짐, 집중·긴박', videoOnly: true },
        { id: 'subtle-camera-drift', english: 'Subtle camera drift / Push-in', korean: '서브틀 카메라 드리프트 / 푸시인', description: '미세 이동, 자연스러운 생동감', videoOnly: true },
        { id: 'slow-pan-leftright', english: 'Slow pan left/right', korean: '슬로우 팬 레프트/라이트', description: '천천히 좌우, 환경 탐색', videoOnly: true },
        { id: 'slow-orbit-360', english: 'Slow orbit 360', korean: '슬로우 오빗 360', description: '천천히 360도 회전, 주체 전체 관찰', videoOnly: true },
        { id: 'light-parallax-shift', english: 'Light parallax shift / Sway', korean: '라이트 패럴랙스 쉬프트 / 스웨이', description: '배경 미세 움직임, 입체감', videoOnly: true },
        { id: 'bullet-time-frozen', english: 'Bullet time / Frozen moment', korean: '불릿 타임 / 프리즌 모먼트', description: '슬로우 + 오빗, 극적인 순간 정지', videoOnly: true },
        { id: 'whip-pan-sudden', english: 'Whip pan sudden', korean: '휩 팬 서든', description: '급격한 방향 전환, 충격·서프라이즈', videoOnly: true },
        { id: 'barrel-roll-vortex', english: 'Barrel roll / Vortex', korean: '배럴 롤 / 보텍스', description: '360도 회전 + 전진, 혼란·디스오리엔테이션', videoOnly: true },
        { id: 'crane-descending', english: 'Crane descending / Ascending', korean: '크레인 디센딩 / 어센딩', description: '위에서 내려오거나 올라감, 웅장·드라마틱', videoOnly: true },
        { id: 'tracking-backward', english: 'Tracking backward retreat', korean: '트래킹 백워드 리트리트', description: '뒤로 후퇴, 접근·추격·압박감', videoOnly: true },
        { id: 'fpv-flyby', english: 'FPV fly-by / Low fly', korean: 'FPV 플라이바이 / 로우 플라이', description: '1인칭 드론 느낌, 빠른·현대적·몰입감', videoOnly: true },
        { id: 'hyperlapse-pushin', english: 'Hyperlapse push-in', korean: '하이퍼랩스 푸시인', description: '초고속 앞으로, 시간 압축·긴장 급상승', videoOnly: true },
        { id: 'snorricam-chestmounted', english: 'Snorricam / Chest-mounted', korean: '스노리캠 / 체스트 마운티드', description: '몸 부착 흔들림, raw·다큐·공포', videoOnly: true },
      ]
    }
  ]
};
