import { Category } from '@/types';

export const voice: Category = {
  id: 'voice',
  nameEn: 'Voice & Dialogue',
  nameKo: '음성 & 대사',
  icon: 'mic',
  videoOnly: true,
  subcategories: [
    {
      id: 'voice-id',
      nameEn: 'Voice ID',
      nameKo: '음성 ID',
      options: [
        { id: 'voice-0314', english: 'Husky mysterious female (Voice ID:0314)', korean: '허스키 신비로운 여성 (Voice ID:0314)', description: '긴장·유혹·미스터리·로맨틱 서스펜스', videoOnly: true },
        { id: 'voice-0315', english: 'Husky mysterious male (Voice ID:0315)', korean: '허스키 신비로운 남성 (Voice ID:0315)', description: '누아르·탐정·악당·위협 대사', videoOnly: true },
        { id: 'voice-0421', english: 'Soft angelic female (Voice ID:0421)', korean: '부드럽고 천사 같은 여성 (Voice ID:0421)', description: '위로·치유·판타지·순수', videoOnly: true },
        { id: 'voice-0422', english: 'Deep resonant male (Voice ID:0422)', korean: '깊고 장엄한 남성 (Voice ID:0422)', description: '신화·신·용·여신·에픽', videoOnly: true },
        { id: 'voice-0550', english: 'Squeaky cute high-pitch (Voice ID:0550)', korean: '귀여운 생쥐·치비 스타일 고음 (Voice ID:0550)', description: '코믹·동화·장난기', videoOnly: true },
        { id: 'voice-0667', english: 'Booming thunderous dragon (Voice ID:0667)', korean: '천둥 같은 거대한 용 포효 (Voice ID:0667)', description: '판타지·공룡·거대 생물', videoOnly: true },
        { id: 'voice-0778', english: 'Neutral robotic monotone (Voice ID:0778)', korean: '중성 로봇·AI 단조로운 톤 (Voice ID:0778)', description: 'SF·안드로이드·무감정', videoOnly: true },
        { id: 'voice-0889', english: 'Goddess majestic resonant female (Voice ID:0889)', korean: '여신 장엄 공명 여성 (Voice ID:0889)', description: '신화·여신·예언·장엄', videoOnly: true },
        { id: 'voice-0990', english: 'Primal dinosaur growl (Voice ID:0990)', korean: '원시 공룡 그르렁 낮은 포효 (Voice ID:0990)', description: '공룡·고대 괴물·야생', videoOnly: true },
        { id: 'voice-1001', english: 'Bright youthful energetic female (Voice ID:1001)', korean: '밝고 젊은 에너지 넘치는 여성 (Voice ID:1001)', description: '청춘·코미디·행복·바이럴', videoOnly: true },
        { id: 'voice-1002', english: 'Deep gravelly masculine (Voice ID:1002)', korean: '깊고 자갈 같은 남성 (Voice ID:1002)', description: '위압·악당·전쟁·강렬', videoOnly: true },
        { id: 'voice-0123', english: 'Bright energetic neutral (Voice ID:0123)', korean: '밝고 활기찬 중성 톤 (Voice ID:0123)', description: '유쾌·코믹·애니메이션', videoOnly: true },
        { id: 'voice-2005', english: 'Deep menacing growl male (Voice ID:2005)', korean: '깊고 위협적인 남성 그르렁 (Voice ID:2005)', description: '악당·괴물·공포', videoOnly: true },
        { id: 'voice-3007', english: 'Soft dreamy ethereal female (Voice ID:3007)', korean: '부드럽고 몽환적인 여성 (Voice ID:3007)', description: '판타지·꿈같은·위로', videoOnly: true },
        { id: 'voice-4008', english: 'Robotic electronic neutral (Voice ID:4008)', korean: '로봇·전자음 섞인 중성 (Voice ID:4008)', description: 'SF·AI·미래·기계적', videoOnly: true },
      ]
    },
    {
      id: 'voice-tone',
      nameEn: 'Voice Tone',
      nameKo: '음성 톤',
      options: [
        { id: 'breathy-whisper', english: 'Breathy whisper undertone', korean: '숨찬 속삭임 뉘앙스', description: '친밀·은밀·고백', videoOnly: true },
        { id: 'seductive-low-sultry', english: 'Seductive low sultry', korean: '매혹적 낮은 섹시 톤', description: '유혹·에로틱·스파이', videoOnly: true },
        { id: 'quivering-vocal-fry', english: 'Quivering vocal fry emotional', korean: '떨리는 보컬 프라이 감정적', description: '슬픔·후회·울음 직전', videoOnly: true },
        { id: 'throaty-rasp', english: 'Throaty rasp increasing', korean: '거친 목 쉰 듯 점점 강해짐', description: '분노·절박·위기', videoOnly: true },
        { id: 'enigmatic-intimate', english: 'Enigmatic intimate lowered register', korean: '수수께끼 친밀 낮아진 레지스터', description: '깊은 속내·고백', videoOnly: true },
        { id: 'layered-emotional-timbre', english: 'Layered emotional timbre', korean: '다층 감정 톤', description: '복합 감정, 풍부한 뉘앙스', videoOnly: true },
        { id: 'slight-vocal-crack', english: 'Slight vocal crack vulnerable', korean: '살짝 갈라지는 목소리 취약함', description: '감정 폭발 직전·진심', videoOnly: true },
        { id: 'soft-gentle-angelic', english: 'Soft gentle angelic', korean: '부드럽고 천사 같은', description: '위로·치유·판타지', videoOnly: true },
        { id: 'deep-gravelly-masculine', english: 'Deep gravelly masculine', korean: '깊고 자갈 같은 남성 톤', description: '위압·권위·악당', videoOnly: true },
        { id: 'bright-youthful-energetic', english: 'Bright youthful energetic', korean: '밝고 젊은 에너지 넘침', description: '코미디·청춘·흥분', videoOnly: true },
        { id: 'monotone-cold-detached', english: 'Monotone cold detached', korean: '단조롭고 차가운 무감정', description: '로봇·안드로이드·냉담', videoOnly: true },
        { id: 'trembling-fearful', english: 'Trembling fearful shaky', korean: '떨리는 공포스러운 목소리', description: '패닉·공포·위협 받음', videoOnly: true },
        { id: 'warm-comforting-maternal', english: 'Warm comforting maternal', korean: '따뜻하고 위로하는 모성적', description: '어머니·조언·가족', videoOnly: true },
      ]
    },
    {
      id: 'dialogue-delivery',
      nameEn: 'Dialogue Delivery',
      nameKo: '대사 전달',
      options: [
        { id: 'slow-deliberate-seductive', english: 'Slow deliberate seductive undertone', korean: '천천히 신중 매혹적 뉘앙스', description: '유혹·고백·긴장 빌드업', videoOnly: true },
        { id: 'paused-hesitation', english: 'Paused hesitation breath catch', korean: '멈춤·망설임·숨 멎음', description: '말 꺼내기 전·죄책감', videoOnly: true },
        { id: 'rising-inflection-plea', english: 'Rising inflection turning plea', korean: '음 높아지는 애원 톤', description: '부탁·구걸·절박', videoOnly: true },
        { id: 'breathless-pause', english: 'Breathless pause mid-sentence', korean: '숨찬 멈춤 문장 중간', description: '충격·놀람·감정 과부하', videoOnly: true },
        { id: 'slow-enunciation', english: 'Slow enunciation emphasis', korean: '천천히 또박또박 강조', description: '진지·위협·명령', videoOnly: true },
        { id: 'natural-fillers', english: 'Natural fillers um ah hesitant', korean: '자연스러운 필러(음·아) 망설임', description: '현실적 대화·당황', videoOnly: true },
        { id: 'whispered-intimate', english: 'Whispered intimate close', korean: '속삭임 친밀 가까움', description: '은밀·고백·밤', videoOnly: true },
        { id: 'urgent-rapid-pleading', english: 'Urgent rapid pleading', korean: '급박 빠른 애원', description: '위기·탈출·시간 촉박', videoOnly: true },
        { id: 'calm-measured', english: 'Calm measured controlled', korean: '차분 측정된 통제', description: '냉정·리더·협상', videoOnly: true },
        { id: 'stuttering-nervous', english: 'Stuttering nervous broken', korean: '말 더듬는 긴장 깨짐', description: '극도 불안·거짓말', videoOnly: true },
        { id: 'passionate-fervent', english: 'Passionate fervent rising', korean: '열정적 열렬 점점 높아짐', description: '사랑 선언·연설', videoOnly: true },
        { id: 'monotonous-robotic', english: 'Monotonous robotic flat', korean: '단조로운 로봇 같은 평평함', description: 'AI·안드로이드·무감정', videoOnly: true },
        { id: 'growling-low-menacing', english: 'Growling low menacing', korean: '으르렁거리는 낮은 위협', description: '분노·악당·공포', videoOnly: true },
      ]
    },
    {
      id: 'dialogue-sync',
      nameEn: 'Dialogue & Sync',
      nameKo: '대사 & 싱크',
      options: [
        { id: 'lipsync-perfect', english: 'Lip-sync perfect natural', korean: '립싱크 완벽 자연스러움', description: '입 모양·턱 움직임 동기화', videoOnly: true },
        { id: 'precise-lip-sync', english: 'Precise lip synchronization throat movement', korean: '정확한 입술 동기화 + 목 움직임', description: '현실적·세밀·감정 전달', videoOnly: true },
        { id: 'subtle-throat-swallow', english: 'Subtle throat swallow during speech', korean: '말 중 미세 목 삼킴', description: '망설임·긴장·현실적 디테일', videoOnly: true },
        { id: 'echoey-room-reverb', english: 'Echoey room reverb intimate space', korean: '방 안 반향·공간감', description: '고립·큰 방·빈 집', videoOnly: true },
        { id: 'increasing-rasp-end', english: 'Increasing rasp toward end', korean: '대사 끝으로 갈수록 쉰 듯 거칠어짐', description: '감정 고조·분노·절박', videoOnly: true },
        { id: 'breathy-sigh-between', english: 'Breathy sigh between words', korean: '단어 사이 숨찬 한숨', description: '감정 과부하·슬픔·피로', videoOnly: true },
        { id: 'natural-breath-pauses', english: 'Natural breath pauses realistic', korean: '자연스러운 숨쉬기 멈춤', description: '현실적·긴장 유지·대사 리듬', videoOnly: true },
        { id: 'layered-whisper', english: 'Layered whisper overlay', korean: '속삭임 레이어 겹침', description: '내면 독백·회상·이중성', videoOnly: true },
        { id: 'perfect-sync-no-artifacts', english: 'Perfect sync no artifacts', korean: '완벽 싱크·아티팩트 없음', description: 'lip-sync 오류 방지·고품질', videoOnly: true },
      ]
    }
  ]
};
