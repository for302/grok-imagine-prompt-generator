---
id: 2026-01-14_104547
type: text
title: 목표는 "실시간 영상 제작 프롬프트 생성기"야
created_at: 2026-01-14T10:45:47.062877+09:00
source_app: Paste
collection_device: KC-MAIN-Windows
keywords:
- 목표는
- 실시간
- 영상
- 제작
- 프롬프트
summary: 목표는 "실시간 영상 제작 프롬프트 생성기"야 아래의 내용을 바탕으로 좌측에는 각 프롬프트 요소를 선택하고, 우측에는 프롬프트가 실시간으로 생성되어 보여주는 프로그램을 만들어줘. 우측 프롬프트 생성기는 다시 2단으로 나뉘어져서 한국어, 영어로 나뉘어서 보여져. 이런 프롬프트는 AI를 사용하지 말고, 미리 만들어둔 내용을 조합하는 방식으로 프로그래밍 알고리즘
url: ''
site_name: ''
favicon_url: ''
thumbnail_url: ''
category: ''
attachments: []
flag: 0
author: ''
author_url: ''
---

목표는 "실시간 영상 제작 프롬프트 생성기"야
아래의 내용을 바탕으로 좌측에는 각 프롬프트 요소를 선택하고, 우측에는 프롬프트가 실시간으로 생성되어 보여주는 프로그램을 만들어줘.
우측 프롬프트 생성기는 다시 2단으로 나뉘어져서 한국어, 영어로 나뉘어서 보여져.
이런 프롬프트는 AI를 사용하지 말고, 미리 만들어둔 내용을 조합하는 방식으로 프로그래밍 알고리즘을 만들어줘.

# 기본 설계

4단구성
| Panel 1 | Panel 2 | Panel 3 | Panel 4 |
|---|---|---|---|
| 프롬프트조합예시 | 프롬프트 요소 선택 영역 | 영어 프롬프트 생성 영역 | 한글 프롬프트 생성 영역 |

### 공통
상단에 "Grok 영상 제작용 프롬프트 생성기" 라고 나옴.

추가로 "프롬프트 생성 안내" 버튼을 클릭하면 아래의 내용을 모달창으로 띄워서 보여줘.
```
### Grok Imagine 영상 제작을 위한 장면별 이미지 생성 요소 상세 정리

Grok Imagine의 영상 제작을 위한 프롬프트 생성기 입니다. 2026년 1월 기준으로, Grok Imagine은 텍스트-to-비디오나 이미지-to-비디오로 6~15초 클립을 생성하며, 프롬프트에서 각 장면의 요소를 세밀하게 지정하면 AI가 프레임을 자동 보간(interpolate)해 영상을 만듭니다. 

19이상 콘텐츠는 Spicy Mode에서 가능하지만, 모더레이션으로 인해 민감 주제 피하세요. 프롬프트 길이는 400~700자가 적절합니다.

#### 1. 장면 유형 & 카메라 (Scene Type & Camera)
이 요소는 각 장면의 전체 스타일과 시각적 관점을 정의합니다. Grok Imagine은 복잡한 카메라 움직임보다 **앵글 + 렌즈 + 프레이밍**을 잘 이해하며, 움직임은 "gentle/slow/subtle" 정도로만 지정하는 게 안정적입니다. (복잡 모션 시 artifact 발생 ↑). 이전 수정처럼 움직임을 보조로 두고, 앵글/렌즈를 메인으로 강조.

- **장면별 적용 팁**: 첫 장면은 "Wide shot 35mm lens establishing"으로 맥락, 중간은 "Medium close-up 85mm rack focus"으로 초점 이동, 끝은 "Static ECU macro lens frozen"으로 임팩트. 움직임은 "gentle/slow/subtle" 필수 + "no motion artifacts" 추가. 예시 조합: "Film noir dialogue, low angle 50mm lens, subtle zoom-in" (예: 1번 프롬프트처럼 긴장 유발).

#### 2. 주체 & 표정/행동 (Subject & Expression/Performance)
주인공의 외형·감정·동작 세밀 지정. Grok Imagine은 "face fidelity"로 얼굴 일관성 유지, 미세 동작을 애니메이션화. 다중 장면 시 "maintain identity" 추가.

- **장면별 적용 팁**: 서사 영상에서 첫 장면 "Frozen mid-expression subtle breathing", 중간 "Rapid blinking jaw clench", 끝 "Glance away tear welling". 이미지 업로드 시 "Maintain face from source". 예시 조합: "Worried young woman, furrowed brow lip quiver, natural eye flick" (예: 5번 horror 스타일).

#### 3. 조명 & 분위기 (Lighting & Atmosphere)
시각 톤 설정, AI가 빛·색상 적용. 물리적 재질 이해로 현실적.

- **장면별 적용 팁**: 야경 "Dappled moonlight cool cyan", 액션 "Harsh flicker high contrast". 전환 "Lighting shift warm to cool". 예시 조합: "Soft dramatic neon rim, moody cyan shadows" (예: 3번 cyberpunk).

#### 4. 음성 & 대사 (Voice & Dialogue)
오디오 추가, lip-sync 자동. 대사 중심 클립에 적합.

- **장면별 적용 팁**: 대화 "Quivering fry paused hesitation", 내레이션 "Layered timbre echoey". 오디오 제한 "Ambient SFX only". 예시 조합: "Husky voice ID:0314, slow deliberate quivering fry" (예: 2번 dreamy).

#### 5. 기술적/제한 조건 (Technical & Restrictions)

- **장면별 적용 팁**: 전체 "Temporal consistency locked no artifacts", NSFW "Spicy mode". 예시 조합: "High cinematic 35mm grain, only breath SFX" (예: 30번 orbit).

```

### [Panel 1] 프롬프트 조합 예시
1. "이미지 프롬프트"와 "영상 프롬프트" 두개의 버튼이 존재 한다. 각 버튼을 클릭하면 아래의 "프롬프트 조합 썸네일"이 달라진다.
   - "이미지 프롬프트"를 선택하면 "장면을 위한 이미지 생성 프롬프트 조합을 보여준다.
   -  "영상 프롬프트"를 선택하면 "영상 제작을 위한 프롬프트 조합을 보여준다.

2. 썸네일과 제목으로 구성된 카드UI가 갤러리 형식으로 보여진다. ( 썸네일은 직접 이미지를 넣을 예정 )
   - 클릭하면 Panel 2에 해당하는 각 세부요소들이 선택이 자동으로 되며, 
   - Panel 3, Panel 4에 프롬프트가 자동으로 생성된다.
   - 클릭한 썸네일은 테두리가 굵은 컬러 테두리로 변해서 선택했다는 것을 인지 할 수 있게 한다.
   - 만약 다른 썸네일을 클릭하면 Panel2,3,4 모두 해당 옵션에 맞게 자동 변경된다.
   - 만약 다른 썸네일을 클릭하기 전에 Panel 2에 추가적인 옵션을 수정했다면, 다른 것을 클릭할 때 경고창을 띄워서 "기존 옵션이 초기화 됩니다. 새로운 프롬프트를 제작 하시겠습니까?" 라고 보여준 후 "네"라고 하면 새로운 프롬프트로, "아니오"를 클릭하면 기존 그대로 있는다.

3. 각 썸네일에는 즐겨찾기(★) 표시가 있어서 클릭하면 즐겨찾기가 되고 제일 상단에 "즐겨찾기"로 추가 표시 된다. 하단에 원래 있는 곳에는 그대로 있으면서 즐겨찾기 표시는 보여준다.


### [Panel 2] 프롬프트 요소 선택 영역
1. 프롬프트의 요소에 객관식 처럼 여러 옵션들이 있어서 선택을 하면 자동으로 Panel 3,4에 프롬프트가 생성되게 해주는 기능이야.

2. 아래의 "참고 내용, 각 요소의 세부옵션 예시, 추가 고급 옵션"을 참고하고, 니가 최대한 상세히 프롬프트에 넣을 요소들을 기획해서 만들어줘. 물론 아래의 "참고 내용"처럼 그룹핑을 해서 카테고리별 세부요소 선택이 되어야 해.

3. Panel 1에서 선택한 "프롬프트 조합"에 따라 여기에 해당 조합의 각 옵션이 자동 선택 됩니다. 그리고 사용자가 추가적으로 다른 키워드를 선택하거나 선택취소도 가능합니다. 여기서 선택한 내용이 자동으로 Panel3,4에 적용 됩니다.

4. 헌데 가장 중요한건, 옵션이 너무 많다  보니 이걸 전체를 다 보여주면 너무 복잡해 진다는거지.. 이걸 최대한 효과적으로 보여주고 선택하게 하는 방법이 무가 있을까? 제안해줘. 내 생각은 우선 선택된 것만 보여주고, 각 요소별 펼치기를 누르면 옵션이 다 나오고, 체크하고 다른걸 또 펼치면 기존 펼쳐진건 닫히고,, 뭐 그런?



## [Panel 3] 영어 프롬프트 생성 영역
1. Panel 2에서 선택한 내용을 기준으로 프롬프트가 자동 생성됩니다. Panel 2 의 모든 옵션에 따라 키워드가 자동으로 보여지게 됩니다. 

2. 우측 상단에 "프롬프트 복사" 버튼이 있어서 클릭하면 복사가 됩니다. 




## [Panel 4] 한글 프롬프트 생성 영역
1. Panel 2에서 선택한 내용을 기준으로 프롬프트가 자동 생성됩니다. Panel 2 의 모든 옵션에 따라 키워드가 자동으로 보여지게 됩니다. 

2. 우측 상단에 "프롬프트 복사" 버튼이 있어서 클릭하면 복사가 됩니다.





# 참고 내용 (좌측 영역에서 선택하려는 요소- 이 내용을 바탕으로 선택해야하는 요소의 각 옵션은 니가 상세히 기획해서 알려줘. 이미지 프롬프트와 영상 프롬프트가 섞여 있으니까 잘 조정해줘.)


## 1. 장면 유형 (Scene Type)

### 1. 영화·시네마틱 장르 중심
- Cinematic dialogue shot | 영화적 대화 샷 | 감정 중심 대사 장면, lip-sync·표정 강조, 가장 기본적이고 안정적인 대화 클립
- Film noir style scene | 필름 누아르 스타일 장면 | 어두운 미스터리·범죄·탐정 이야기, 고대비 그림자·긴장감 빌드업
- Epic Hollywood cinematic | 에픽 할리우드 시네마틱 | 웅장한 서사·히어로·대규모 전투, 클라이맥스·트레일러 느낌
- Horror thriller tension build | 호러 스릴러 긴장 고조 | 공포·서스펜스·점진적 불안, 어두운 조명·미세 움직임 강조
- Thriller suspense low-key | 스릴러 서스펜스 로우키 | 조용한 긴장·심리전·은밀한 대화, 로우키 조명·미세 표정
- Sci-fi moody futuristic | SF 분위기 미래적 | 미래 도시·외계·디스토피아, 네온·홀로그램·철학적 대사
- Post-apocalyptic dystopian | 포스트 아포칼립스 디스토피아 | 폐허·생존·절망적 대화, 먼지·황량한 배경
- Western desert showdown | 웨스턴 사막 대결 | 총격·대치·클라이맥스 대사, 먼지·황야·저녁노을
- Romantic drama intimate | 로맨틱 드라마 친밀 | 사랑·이별·감정 고백, 부드러운 조명·클로즈업
- Action high-energy sequence | 액션 고에너지 시퀀스 | 추격·전투·빠른 움직임, 다이내믹 카메라·효과음
- Crime noir detective | 범죄 누아르 탐정 | 수사·독백·어두운 골목, 모노톤·비 내리는 밤
- War epic battlefield | 전쟁 에픽 전장 | 전투·희생·명령 대사, 폭발·연기·드라마틱 앵글
- Mystery detective noir | 미스터리 탐정 누아르 | 수수께끼·단서 발견, 그림자·비밀스러운 분위기
- Drama emotional close-up | 드라마 감정 클로즈업 | 눈물·분노·고백, 강한 표정·침묵 후 대사
- Comedy light-hearted slice-of-life | 코미디 경쾌한 일상 | 유머·가벼운 대화·웃음, 밝은 조명·캐주얼
- Musical vibrant performance | 뮤지컬 활기찬 공연 | 노래·댄스·에너지 폭발, 화려한 조명·스테이지
- Historical period drama | 역사 시대 드라마 | 왕실·전쟁·감정 대사, 고풍스러운 의상·촛불 조명
- Spy thriller espionage | 스파이 스릴러 첩보 | 비밀 작전·위장·긴장 대화, 어두운 방·은밀함
- Superhero blockbuster | 슈퍼히어로 블록버스터 | 파워·구원·대사, 폭발·빛 효과·영웅 포즈
- Disaster epic catastrophe | 재난 에픽 대재앙 | 붕괴·탈출·절규 대사, 화염·연기·혼란

### 2. 판타지·신화·매직
- Fantasy warrior epic | 판타지 전사 에픽 | 전투·영웅 서사·대사, 검·갑옷·마법 효과
- Mythical creature soaring | 신화적 생물 비상 | 드래곤·그리핀 비행, 웅장한 하늘·신화적 분위기
- Medieval fantasy castle | 중세 판타지 성 | 왕궁·기사·대화, 횃불·석조·고딕
- Dragon fantasy aerial | 드래곤 판타지 공중 | 드래곤 날기·불뿜기, 산맥·구름·위협적
- Elf forest enchanted | 엘프 숲 마법 | 신비로운 숲·엘프·대화, 빛나는 나무·안개
- Dark fantasy demonic | 다크 판타지 악마 | 악마·저주·공포 대사, 붉은 조명·어둠
- Magical realism dreamlike | 마법 리얼리즘 꿈같은 | 현실 속 마법·이상한 일상, 부드러운 빛·초현실
- High fantasy kingdom | 하이 판타지 왕국 | 왕·마법사·서사 대화, 성·왕관·화려함
- Fairy tale whimsical | 동화 기발한 | 요정·모험·유쾌 대사, 밝은 색·꽃·마법
- Steampunk fantasy Victorian | 스팀펑크 빅토리아 판타지 | 기계·증기·모험, 톱니바퀴·고딕
- Dark magic ritual | 다크 매직 의식 | 주문·희생·음모 대사, 촛불·펜타그램
- Elemental nature fantasy | 원소 자연 판타지 | 불·물·바람 정령, 자연 속 마법·대화
- Heroic quest adventure | 영웅 퀘스트 모험 | 여정·동료·결의 대사, 산·숲·보물
- Sorceress mystical aura | 마녀 신비로운 오라 | 마법사·주문·신비 대사, 빛나는 오라·안개

### 3. SF·사이버펑크·미래
- Cyberpunk neon alleyway | 사이버펑크 네온 골목 | 네온·비·해커 대사, 어두운 골목·빗물
- Futuristic city neon-lit | 미래 도시 네온 불빛 | 고층 빌딩·플라잉카·대화, 네온·비행
- Sci-fi space station | SF 우주 정거장 | 우주·중력·위기 대사, 별·금속·홀로그램
- Dystopian cyber-noir | 디스토피아 사이버 누아르 | 빈부격차·반항·어두운 대사, 비·네온
- Retro-futuristic synthwave | 레트로 퓨처 신스웨이브 | 80년대 스타일 미래, 네온·그리드·낭만
- Alien planet exploration | 외계 행성 탐험 | 외계 생물·탐사·대화, 이국적 풍경·안개
- Blade Runner atmosphere | 블레이드 러너 분위기 | 레플리칸트·비·철학 대사, 비 내리는 도시
- Holographic cyber world | 홀로그램 사이버 세계 | 가상 현실·아바타·대화, 빛나는 홀로그램
- Post-cyberpunk rainy streets | 포스트 사이버펑크 비 내리는 거리 | 회복·희망·대사, 비·네온 잔상
- Space opera epic | 스페이스 오페라 에픽 | 우주 전쟁·운명·대사, 별·함선·폭발
- Robotic android intimate | 로봇 안드로이드 친밀 | 인간성·감정·대화, 금속 피부·부드러운 조명
- Neon Tokyo futuristic | 네온 도쿄 미래적 | 일본풍 사이버·번화가·대사, 네온·인파
- Cyberpunk hacker lair | 사이버펑크 해커 은신처 | 코드·모니터·긴장 대사, 어두운 방·키보드

### 4. 애니·만화·스타일화
- Anime style dramatic | 애니메이션 스타일 드라마틱 | 감정 폭발·대사, 과장된 표정·효과선
- 80s OVA anime dark mysterious | 80년대 OVA 애니 다크 미스터리 | 복고·어두운 SF·판타지, VHS 느낌
- Studio Ghibli whimsical | 스튜디오 지브리 기발한 | 자연·모험·따뜻 대사, 부드러운 색·바람
- Cyberpunk anime neon warrior | 사이버펑크 애니 네온 전사 | 네온·검·전투, 다이내믹 포즈
- Sumi-e ink wash fantasy | 수묵화 잉크 워시 판타지 | 전통 동양·신비·고요 대사, 먹물·그라데이션
- Low-poly geometric minimalist | 로우폴리 기하학 미니멀 | 단순·추상·현대, 폴리곤·평면 색
- Flat colors anime pop | 플랫 컬러 애니 팝 | 밝고 선명·팝아트, 캐주얼·유쾌 대사
- Watercolor bleed dreamy | 수채화 번지는 꿈같은 | 몽환·부드러움·감성 대사, 물감 번짐
- Kawaii cute chibi | 카와이 귀여운 치비 | 귀여움·코믹·가벼운 대사, 큰 머리·작은 몸
- Mecha anime action | 메카 애니 액션 | 로봇·전투·외침 대사, 폭발·기계 디테일
- Shoujo romantic ethereal | 소녀 만화 로맨틱 천상 | 사랑·꽃·부드러운 대사, 반짝임·꿈같음
- Shonen high-energy battle | 소년 만화 고에너지 전투 | 열혈·파워업·대사, 속도선·효과

### 5. 자연·일상·분위기 중심
- Dreamy atmospheric serene | 꿈같은 분위기 평온 | 휴식·명상·내면 독백, 부드러운 빛·안개
- Intimate cozy warm | 친밀하고 아늑한 따뜻함 | 연인·가족 대화, 램프·포근함
- Moody atmospheric shadows | 분위기 있는 그림자 | 고독·회상·조용 대사, 깊은 그림자
- Nostalgic vintage retro | 향수 어린 빈티지 레트로 | 추억·옛날 이야기, 세피아·필름 그레인
- Peaceful ethereal calm | 평화로운 천상 같은 고요 | 치유·명상·속삭임 대사, 빛·구름
- Melancholic rainy mood | 우울한 비 내리는 분위기 | 슬픔·이별·혼잣말, 비·창밖
- Joyful sunlit meadow | 기쁜 햇살 가득한 초원 | 행복·웃음 대사, 꽃·햇빛
- Lonely snowy village | 외로운 눈 덮인 마을 | 고독·겨울·회상 대사, 눈·침묵
- Vibrant sunrise golden hour | 생생한 일출 골든 아워 | 희망·새 출발 대사, 따뜻한 빛
- Mystical foggy forest | 신비로운 안개 숲 | 탐험·발견·대화, 안개·나무
- Tranquil mountain lake aurora | 고요한 산 호수 오로라 | 평화·경이·속삭임, 오로라·반사
- Urban night city hum | 도시 밤의 웅성거림 | 야경·혼자·생각 대사, 네온·소음
- Cozy café laughter | 아늑한 카페 웃음소리 | 친구·대화·웃음, 커피·따뜻함
- Surreal abstract haze | 초현실 추상 안개 | 꿈·무의식·철학 대사, 왜곡·색채

### 6. 아트·추상·특수 스타일
- Hyperrealism ultra-detailed | 하이퍼리얼리즘 초상세 | 사진급 현실·피부·디테일, 포트레이트·제품
- ArtStation trending cinematic | 아트스테이션 트렌딩 시네마틱 | 현대 게임·영화 컨셉아트, 고품질·드라마틱
- Van Gogh starry night style | 반 고흐 별이 빛나는 밤 스타일 | 소용돌이·밝은 색·감성, 밤하늘·꿈같음
- Impressionist soft brush | 인상파 부드러운 붓터치 | 빛·색채·인상, 야외·순간 포착
- Surreal Dali melting | 초현실 달리 녹아내리는 | 왜곡·꿈·무의식, 기이한 오브젝트
- Minimalist branding clean | 미니멀리즘 브랜딩 깔끔 | 단순·현대·제품·로고, 흰 배경·선명
- Vaporwave retro aesthetic | 베이퍼웨이브 레트로 미학 | 90년대·네온·그리드, 향수·아이러니
- Synthwave neon glow | 신스웨이브 네온 빛 | 80년대 SF·네온·그리드, 레트로 퓨처
- Oil painting textured | 유화 질감 | 두꺼운 붓질·텍스처, 클래식·감성
- Pencil sketch artistic | 연필 스케치 아티스틱 | 드로잉·라인·감성, 컨셉·스케치 느낌
- Glitch art digital distortion | 글리치 아트 디지털 왜곡 | 오류·현대·디지털, 사이버·혼란
- Pixel art retro game | 픽셀 아트 레트로 게임 | 8비트·게임·노스탤지어, 귀여움·레트로
- Abstract color burst | 추상 색채 폭발 | 감정·에너지·비현실, 색상·형태 중심
- Ink wash traditional Asian | 전통 아시아 잉크 워시 | 수묵·동양·고요, 먹물·그라데이션

### 7. 기타·혼합·특수 분위기
- Playful christmas festive | 장난기 어린 크리스마스 축제 | 크리스마스·웃음·축제 대사, 산타·트리·눈
- Steamy intimate sensual | 뜨거운 친밀 관능 | 로맨틱·스파이시·밀착 대사, 어두운 조명·안개
- Nostalgic 1980s arcade | 80년대 아케이드 향수 | 게임·추억·대화, 네온·픽셀·음악
- Vintage product premium | 빈티지 제품 프리미엄 | 제품 쇼케이스·럭셔리, 클래식·고급
- Dramatic sunset silhouette | 드라마틱한 일몰 실루엣 | 작별·희망·대사, 붉은 하늘·실루엣
- Time-lapse blooming garden | 타임랩스 꽃 피는 정원 | 성장·변화·시간 흐름, 꽃·빠른 움직임
- Viral upbeat energetic | 바이럴 업비트 에너지 | 춤·파티·즐거움, 밝음·빠른 컷
- Erotic suggestive moody | 에로틱 암시 분위기 | 섹시·유혹·대사, 어두운 조명·곡선
- Educational simple diagram | 교육용 심플 다이어그램 | 설명·강의·정보 전달, 클린·아이콘
- Product mockup sleek | 제품 목업 슬릭 | 제품 홍보·광고, 미니멀·고해상도
- Fashion editorial glamorous | 패션 에디토리얼 글래머러스 | 모델·패션·포즈, 화려·조명
- Game cinematic cutscene | 게임 시네마틱 컷신 | 게임 서사·대사, 드라마틱·효과
- Underwater dreamy coral | 수중 꿈같은 산호 | 바다·신비·헤엄, 물방울·빛 반사
- Desert alien vast | 사막 외계 광활 | 외계·고독·탐험 대사, 모래·이중 태양



## 2. 카메라 (Camera)

### 1. 카메라 앵글 & 샷 타입 예시
- Medium close-up | 미디엄 클로즈업 (어깨~얼굴) | 대화 중심 감정 표현, lip-sync가 중요한 장면, 가장 안정적이고 추천되는 기본 샷
- Extreme close-up (ECU) | 익스트림 클로즈업 (눈·입·세부) | 강렬한 감정(눈물, 떨림), 긴장·공포·드라마틱한 순간 강조
- Low angle shot | 로우 앵글 샷 (아래에서 위로) | 캐릭터를 강하고 위압적으로 보이게 할 때, 영웅·악당·권위적 분위기
- High angle shot | 하이 앵글 샷 (위에서 아래로) | 취약함·작아 보임·피해자 느낌, 불안·고립·패배 직전 장면
- Bird’s-eye view / Overhead | 버드스 아이 뷰 / 오버헤드 (정수리 위 직각) | 전체 공간 맵핑, 고독·감시·신처럼 내려다보는 느낌
- Dutch angle / Tilted frame | 더치 앵글 / 기울어진 프레임 | 정신적 불안정·혼란·공포·불균형한 심리 상태 표현
- Over-the-shoulder (OTS) | 오버 더 숄더 (어깨 너머) | 대화 상대 시점, 관계성·연결감·대사 교환 장면 필수
- Wide shot / Long shot | 와이드 샷 / 롱 샷 (전신 + 환경) | 공간·맥락 소개, 고립·작은 존재감·서사 시작·끝맺음
- Establishing shot | 확립 샷 (넓은 환경 전체) | 이야기 배경·장소 소개, 장면 전환 시 위치 설정
- Cowboy shot / Medium long shot | 카우보이 샷 (허벅지 중간부터) | 서부극·총격·움직임 중심, 다리와 상체 균형
- Profile shot / Side angle | 프로필 샷 / 사이드 앵글 (옆모습) | 신비·윤곽 강조, 캐릭터 소개·내면 독백·고독한 순간
- Point-of-view (POV) | 포인트 오브 뷰 (주체 시선 그대로) | 몰입·주관적 감정, 관객이 캐릭터가 된 듯한 체험
- Reaction shot | 리액션 샷 (상대 말 듣는 표정) | 대화 중 감정 반응, 감정 교차·드라마 강조
- Two-shot | 투 샷 (두 사람 함께) | 관계성·대화 균형, 커플·대립·친밀한 순간
- Insert / Detail shot | 인서트 샷 / 디테일 샷 (특정 오브젝트·부위) | 손 떨림·눈물·폰 화면 등 세부 강조, 서스펜스·감정 전달

### 2. 카메라 렌즈 선택 예시
- 50mm lens / Standard lens | 50mm 표준 렌즈 (자연스러운 인간 시야) | 가장 현실적·중립적, 대화·일상·포트레이트 기본 추천
- 85mm lens / Portrait lens | 85mm 포트레이트 렌즈 (얼굴 압축 + 아름다운 bokeh) | 감정 클로즈업·뷰티·로맨틱·드라마틱한 얼굴 강조
- 35mm lens / Wide-normal | 35mm 와이드-노멀 (약간 넓은 시야) | 배경 약간 포함, 공간감 + 자연스러움 균형
- 24mm lens / Wide-angle | 24mm 와이드 앵글 (넓은 시야 + 약간 왜곡) | 공간·환경 강조, 고립·압박·몽환적 분위기
- Anamorphic lens / Anamorphic squeeze | 아나모픽 렌즈 (영화적 플레어·스트레치) | 시네마틱·할리우드 느낌, 드라마·SF·에픽 장면
- Macro lens / Close-up lens | 매크로 렌즈 (극단 근접) | 피부 텍스처·눈물·모공·미세 디테일 강조, 감정 극대화
- 135mm lens / Telephoto | 135mm 텔레포토 (배경 압축) | 배경을 뭉개고 주체를 더 돋보이게, 강렬한 초점·고립감
- Fisheye lens | 어안 렌즈 (극단 왜곡·원형 프레임) | 혼란·비현실·공포·초현실·현대적 아트 느낌

### 3. 움직임 관련 보조 키워드 (Grok Imagine에서 과도 사용 피함, subtle 추천 - 영상 프롬프트에서만 보임)
- Static locked-off camera | 스태틱 록드-오프 카메라 (완전 고정) | 가장 안정적·artifact 최소, lip-sync·표정 중심 장면 추천
- Gentle slow zoom-in | 젠틀 슬로우 줌인 (천천히 가까워짐) | 긴장 고조·감정 집중·드라마틱 빌드업
- Subtle camera drift / Push-in | 서브틀 카메라 드리프트 / 푸시인 (미세 이동) | 자연스러운 생동감, 정적 장면에 약간의 움직임 추가
- Slow pan left/right | 슬로우 팬 레프트/라이트 (천천히 좌우) | 환경 탐색·공간 소개·서서히 드러나는 긴장
- Slow orbit 360 | 슬로우 오빗 360 (천천히 360도 회전) | 주체 전체 관찰·신비·드라마틱·감정 몰입
- Light parallax shift / Sway | 라이트 패럴랙스 쉬프트 / 스웨이 (배경 미세 움직임) | 입체감·현실감 부여, 정지 장면에 자연스러움 추가
- Bullet time / Frozen moment | 불릿 타임 / 프리즌 모먼트 (슬로우 + 오빗) | 극적인 순간 정지·시간 멈춤 효과, 임팩트 강한 클라이맥스
- Whip pan sudden | 휩 팬 서든 (급격한 방향 전환) | 충격·서프라이즈·빠른 반전 장면
- Barrel roll / Vortex | 배럴 롤 / 보텍스 (360도 회전 + 전진) | 혼란·디스오리엔테이션·정신 붕괴 표현
- Crane descending / Ascending | 크레인 디센딩 / 어센딩 (위에서 내려오거나 올라감) | 웅장·드라마틱 개요 → 친밀 전환, 또는 반대
- Tracking backward retreat | 트래킹 백워드 리트리트 (뒤로 후퇴) | 접근·추격·압박감·거리 벌어짐
- FPV fly-by / Low fly | FPV 플라이바이 / 로우 플라이 (1인칭 드론 느낌) | 빠른·현대적·몰입감, 액션·사이버펑크
- Hyperlapse push-in | 하이퍼랩스 푸시인 (초고속 앞으로) | 시간 압축·긴장 급상승·서사적 전환
- Snorricam / Chest-mounted | 스노리캠 / 체스트 마운티드 (몸 부착 흔들림) | raw·다큐·공포·극한 감정·현실적 불안정






## 3. 주체 & 표정/행동 (Subject & Expression/Performance)

### 1. 나이 및 연령대 (Age & Apparent Age)
- Young woman in her early 20s | 20대 초반 젊은 여성 | 현대적·공감·로맨스·일상 대화·청춘 느낌
- Young man in his early 20s | 20대 초반 젊은 남성 | 현대적·청춘·로맨스·모험·열정적 대사·청년 성장 이야기
- Teenage girl adolescent | 10대 후반 소녀 | 순수·학교·청춘·성장·감정 폭발 장면
- Teenage boy adolescent | 10대 후반 소년 | 반항·우정·청춘·모험·감정 변화·학교·코믹 또는 드라마
- Middle-aged mature woman | 중년 성숙한 여성 | 지적·경험·드라마·가족·회상·깊은 대사
- Middle-aged mature man | 중년 성숙한 남성 | 지혜·경험·아버지·리더·위기 대처·드라마·회상·깊은 독백
- Elderly wise old lady | 노년 지혜로운 할머니 | 회상·조언·슬픔·전통·감동적 독백
- Elderly wise old man | 노년 지혜로운 할아버지 | 조언·회상·전쟁·가족·철학적 대사·감동·전통 이야기
- Childlike innocent girl | 어린아이 같은 순수 소녀 | 동화·판타지·귀여움·호기심·코믹
- Childlike innocent boy | 어린아이 같은 순수 소년 | 모험·호기심·장난·판타지·코믹·순수한 성장 이야기
- Ageless ethereal being | 나이 불명의 천상적 존재 | 신화·판타지·신비·영원함·초월적 대사
- Ageless ethereal male entity | 나이 불명의 천상적 남성 존재 | 신·정령·수호자·판타지·SF·철학적·신비로운 대사
- Appearing 30s confident adult woman | 30대처럼 보이는 자신감 있는 성인 여성 | 직장인·리더·현실적·강인한 캐릭터
- Appearing 30s confident adult man | 30대처럼 보이는 자신감 있는 성인 남성 | 리더·전문가·액션·로맨스·현실적·결단력 있는 대사

### 2. 성별 및 젠더 표현 (Gender & Identity)
- Female elegant woman | 여성 우아한 여성 | 대부분의 감정·로맨스·뷰티 중심 장면 기본
- Male rugged man | 남성 거친 남성 | 액션·전투·강인·서사적 대사
- Androgynous gender-neutral figure | 중성적 젠더-뉴트럴 인물 | 미스터리·SF·판타지·현대적·정체성 탐구
- Non-binary ethereal entity | 논바이너리 천상적 존재 | 추상·아트·초현실·철학적·다양성 테마
- Feminine seductive siren | 여성적 매혹적인 사이렌 | 유혹·에로틱·스파이·관능 대사
- Masculine heroic warrior | 남성적 영웅적 전사 | 액션·판타지·구원·결의 대사

### 3. 인물 종족·종류 (Human, Fantasy, Sci-Fi Species/Race)
- Human realistic woman | 현실적 인간 여성 | 포토리얼·일상·드라마·현대적 대화 기본
- Elf graceful pointed ears | 엘프 우아한 뾰족 귀 | 판타지·숲·마법·신비 대사
- Orc muscular green-skinned | 오크 근육질 녹색 피부 | 다크 판타지·전투·야생·강렬
- Dragonborn scaled humanoid | 드래곤본 비늘 인간형 | 판타지·화염·위압·신화적
- Android cybernetic female | 안드로이드 사이버네틱 여성 | SF·미래·로봇·철학·감정 탐구
- Alien extraterrestrial being | 외계인 외계 존재 | SF·탐험·신비·공포·다른 세계
- Vampire pale immortal | 뱀파이어 창백한 불사 | 고딕·다크 로맨스·피·밤·유혹
- Werewolf feral hybrid | 웨어울프 야생 혼혈 | 호러·변신·달빛·본능·분노 대사
- Fairy delicate winged | 요정 섬세한 날개 | 동화·마법·작고 귀여운·꿈같은
- Mermaid aquatic scaled tail | 인어 수중 비늘 꼬리 | 바다·신비·로맨틱·물속 대사
- Ghost translucent spectral | 유령 반투명 영혼 | 호러·회상·슬픔·초자연 대사

### 4. 스타일·외모 특징 (Style & Physical Features)
- Elegant long flowing hair | 우아한 긴 흐르는 머리카락 | 로맨스·판타지·클래식 미인
- Seductive smoky eyes makeup | 매혹적인 스모키 아이 메이크업 | 유혹·밤·관능·드라마틱
- Mysterious one eye covered | 신비로운 한쪽 눈 가림 | 미스터리·고독·비밀·판타지
- Cyberpunk neon hair streaks | 사이버펑크 네온 헤어 스트릭 | 미래·반항·도시·네온 분위기
- Scarred battle-worn face | 흉터 난 전투로 지친 얼굴 | 액션·전쟁·생존·강인함
- Glowing ethereal aura | 빛나는 천상적 오라 | 마법·신화·초월·판타지 존재
- Tattooed intricate patterns | 문신 복잡한 패턴 | 현대·펑크·스토리텔링·개성 강조
- Pierced alternative style | 피어싱 얼터너티브 스타일 | 반항·청춘·현대·엣지 있는 캐릭터
- Freckled natural beauty | 주근깨 자연스러운 미인 | 순수·현실적·캐주얼·따뜻함

### 5. 의상·소품·자세 (Clothing / Props / Pose)
- Flowing elegant dress | 흐르는 우아한 드레스 | 로맨스·파티·고전적·드라마틱
- Holding smartphone nervously | 스마트폰 긴장되게 쥐고 | 현대·전화 대기·불안·현실적
- Crossed arms defensive pose | 팔짱 끼고 방어적 자세 | 불신·자신감·대치·긴장 대사
- Leaning forward intense | 앞으로 몸 기울인 강렬 | 대화 집중·분노·설득·드라마
- Sitting thoughtfully chin on hand | 턱 괴고 생각에 잠긴 앉은 자세 | 독백·회상·철학적·고독
- Standing defiant hands on hips | 손 허리에 얹고 도전적 서 있음 | 강인·반항·영웅적·결의
- Kneeling vulnerable bowed head | 무릎 꿇고 고개 숙인 취약 자세 | 패배·슬픔·기도·감정 절정
- Wearing cybernetic arm implant | 사이버네틱 팔 임플란트 착용 | SF·미래·강화·아이덴티티 탐구


### 6. 표정 키워드 예시 (Facial Expressions)
- Worried furrowed brows | 걱정 어린 찌푸린 눈썹 | 기본 걱정·불안·전화 대기 장면
- Anxious wide eyes | 불안한 크게 뜬 눈 | 공포 직전·충격·긴장 고조
- Concerned subtle frown | 우려 어린 미세 찡그림 | 조용한 걱정·친구·가족 대사
- Intense piercing gaze | 강렬한 뚫어지는 시선 | 대치·분노·위협·드라마틱 대사
- Glistening tearful eyes | 반짝이는 눈물 고인 눈 | 슬픔·이별·감정 폭발 클라이맥스
- Lip quiver trembling | 입술 떨림 | 억눌린 울음·감정 임계점·취약함
- Frozen mid-expression shock | 순간 멈춘 충격 표정 | 서프라이즈·배신·갑작스러운 진실
- Jaw clenched tension | 턱 악문 긴장 | 분노 억제·결의·위기 상황
- Eyelid twitch nervous | 눈꺼풀 경련 | 극도의 신경과민·스트레스·공황 직전
- Nostril flare breathing hard | 콧구멍 벌어진 거친 숨 | 분노·공포·신체적 긴장
- Subtle micro-expression pain | 미세한 고통 미세표정 | 숨기려는 슬픔·내적 갈등
- Smoldering seductive stare | 타오르는 매혹적 시선 | 유혹·관능·밀착 대사
- Soft melancholic gaze | 부드러운 우울한 시선 | 회상·회한·조용한 독백
- Hopeful glistening eyes | 희망 어린 반짝이는 눈 | 구원·재회·긍정 전환점
- Blank empty stare | 멍한 공허한 시선 | 충격 후 상실·트라우마·정신 붕괴 직전

### 7. 행동/동작 키워드 예시 (Actions & Micro-Movements)
- Subtle breathing chest heave | 미세한 호흡 가슴 오르내림 | 자연스러움·긴장 유지·대사 전 기본
- Shallow rapid breaths | 얕고 빠른 호흡 | 불안·공황·위기 직전·숨 가쁨 강조
- Natural eye movement glance away | 자연스러운 눈동자 움직임·시선 피하기 | 망설임·죄책감·거짓말·회피
- Slight head tilt curious | 살짝 고개 기울임 | 호기심·관심·부드러운 질문 대사
- Lip bite pressed lips | 입술 깨물기·꾹 다문 입 | 억제된 감정·초조·결심·유혹
- Nervous throat swallow | 긴장된 목울대 삼킴 | 말 꺼내기 전 망설임·두려움·긴장
- Jaw clench restrained anger | 턱 악물기 억눌린 분노 | 화 참기·결의·위협 직전
- Fidgeting fingers twisting ring | 손가락 꼬물거리며 반지 돌리기 | 초조·불안·대기·고민
- Rapid blinking anxiety | 빠른 눈 깜빡임 | 극도 불안·스트레스·거짓말 탐지 느낌
- Subtle eyelash flutter | 미세한 속눈썹 떨림 | 감정적 떨림·취약·로맨틱·눈물 직전
- Parted lips hesitant breath | 벌어진 입술 망설이는 숨 | 말 꺼내기 전·충격·놀람
- Gentle lip quiver emotion | 부드러운 입술 떨림 | 울음 참기·감정 폭발 직전·취약함
- Hand trembling slight shake | 손 떨림 미세 흔들림 | 공포·추위·감정 과부하
- Slow head shake denial | 천천히 고개 저음 | 부정·거부·슬픔·절망 대사
- Sudden sharp inhale surprise | 갑작스러운 날카로운 숨 들이마심 | 충격·서프라이즈·반전 순간
- Fingers clenching fist anger | 손가락 쥐어짜는 주먹 | 분노·결의·억눌린 폭발 직전

### 8. 감정 키워드 예시 (Emotion Keywords)

- Worried anxious concern | 걱정·불안·우려 | 전화 안 온 상황·친구 실종·위기 직전 대사, 기본 감정 표현
- Fearful terrified panic | 공포·두려움·패닉 | 갑작스러운 위협·호러·생명 위기·숨 가쁜 대사
- Sad melancholic heartbroken | 슬픔·우울·상심 | 이별·상실·회상·눈물 고인 대사·조용한 독백
- Angry furious rage | 분노·격노·분개 | 배신·부당함·대치·목소리 떨리는 강렬 대사
- Surprised shocked stunned | 놀람·충격·멍함 | 반전·갑작스러운 진실·말문 막힌 순간
- Confused bewildered puzzled | 혼란·당황·의아함 | 수수께끼·거짓말·이해 못 한 상황·고개 갸우뚱
- Relieved grateful sigh | 안도·감사·한숨 | 위기 탈출·재회·구원·긴장 풀리는 대사
- Hopeful optimistic yearning | 희망·낙관·갈망 | 미래 약속·재기·구원 요청·빛나는 눈
- Joyful happy ecstatic | 기쁨·행복·황홀 | 재회·성공·웃음·축하 대사·밝은 미소
- Nostalgic wistful longing | 향수·애틋함·그리움 | 옛 추억·이별 후 회상·부드러운 미소 + 슬픔 섞임
- Guilty remorseful ashamed | 죄책감·후회·부끄러움 | 실수 고백·사과·고개 숙인 대사
- Defiant rebellious stubborn | 반항·저항·고집 | 부당한 명령 거부·결의·턱 치켜든 자세
- Desperate pleading begging | 절박·애원·구걸 | 마지막 부탁·생존·눈물·손 모은 자세
- Contemptuous disdain scornful | 경멸·무시·비웃음 | 적대·오만·입꼬리 비틀린 미소
- Calm serene composed | 차분·평온·침착 | 위기 속 냉정·명상·철학적 대사·깊은 숨
- Melancholic introspective thoughtful | 우울·내성적·사색적 | 혼자 있는 순간·철학·회상·창밖 바라봄
- Enraged explosive wrathful | 폭발적 분노·격노 | 극한 분노·복수 선언·주먹 쥐고 떨림
- Tender affectionate loving | 부드러움·애정·사랑 | 연인·가족·고백·미소·눈 맞춤
- Bitter resentful grudging | 쓰라림·원한·억울함 | 과거 배신·복수심·차가운 시선
- Exhausted drained weary | 지침·탈진·피곤 | 장기 스트레스·전투 후·헐떡임·눈 감음
- Empowered triumphant victorious | 힘 얻음·승리·자부심 | 성공·극복·고개 들고 미소
- Vulnerable fragile broken | 취약·연약·부서짐 | 트라우마·상처·울음 참기·고개 숙임
- Skeptical doubtful suspicious | 회의적·의심·불신 | 거짓말 탐지·경계·눈썹 치켜올림
- Playful teasing mischievous | 장난기·놀림·개구쟁이 | 친구·연인·코믹·웃는 눈
- Passionate intense fervent | 열정·강렬·열렬 | 사랑 고백·연설·불타는 눈빛
- Detached cold indifferent | 무관심·냉담·무심 | 배신 후·감정 상실·멍한 시선

## 4. 조명 & 분위기 (Lighting & Atmosphere)

### 1. 조명 스타일 키워드 예시 (Lighting Styles)
- Soft dramatic lighting | 부드러운 드라마틱 조명 (측면 부드러운 빛) | 감정 중심 대화·로맨스·인물 초점, 자연스러운 그림자·피부 톤 강조
- Hard light harsh shadows | 강한 빛·날카로운 그림자 | 대비 강한 긴장·스릴러·누아르, 얼굴 반쪽 어둠·극적 효과
- Single bare bulb overhead | 맨 전구 하나 천장 조명 | 취조실·고립·빈곤·현실적, 거친 그림자·인더스트리얼 분위기
- Fluorescent flicker harsh | 형광등 깜빡임 거칠음 | 불안정·공포·현대·빈곤, 깜빡임·냉랭한 톤·스트레스 강조
- Neon rim lighting | 네온 림 라이트 (윤곽 네온 빛) | 사이버펑크·미래·밤 거리, 실루엣·네온 반사·현대적
- Backlighting silhouette | 백라이팅 실루엣 (뒤에서 빛) | 신비·영웅·이별·일몰, 윤곽 강조·감정적 깊이
- Volumetric god rays | 체적 갓 레이 (안개 속 빛줄기) | 판타지·숲·성당·신성, 몽환·드라마틱·빛 입자
- Rim light halo | 림 라이트 후광 (윤곽 후광) | 신화·천사·영웅·마법, 신성·초월적·아름다움 강조
- Golden hour warm glow | 골든 아워 따뜻한 빛 | 로맨스·희망·일몰·야외, 황금빛·따뜻함·낭만적
- Blue hour cool tones | 블루 아워 차가운 톤 | 고독·미스터리·밤·SF, 청록·차가움·우울·신비
- Chiaroscuro extreme | 키아로스쿠로 극단 명암 | 르네상스·드라마·누아르·공포, 반쪽 얼굴 어둠·극적 긴장
- High-key harsh bright | 하이키 강한 밝음 | 노출·취약·상업·코미디, 밝은 배경·부드러운 그림자 없음
- Low-key moody shadows | 로우키 분위기 있는 그림자 | 미스터리·슬픔·스릴러, 깊은 어둠·조명 최소
- Dappled moonlight through blinds | 블라인드 사이 달빛 얼룩 | 로맨틱·밤·침실·회상, 줄무늬 빛·은밀함
- Practical table lamp warm | 실내 테이블 램프 따뜻함 | 아늑·친밀·카페·가족 대화, 부드러운 노란 빛
- Cinematic spotlight dramatic | 시네마틱 스포트라이트 드라마틱 | 무대·공연·독백·강조, 주체에 집중된 빛
- Ambient diffused soft | 주변 확산 부드러움 | 자연·일상·평온·인도어, 균일·현실적·노이즈 최소
- Candlelight flickering intimate | 촛불 깜빡임 친밀 | 로맨스·고백·고전·스릴러, 따뜻·불안정·분위기

### 2. 분위기 & 색상 키워드 예시 (Atmosphere & Color Grading)
- Moody atmospheric shadows | 분위기 있는 그림자·어두움 | 미스터리·슬픔·고독·누아르, 깊은 명암·감정 깊이
- High contrast dramatic | 고대비 드라마틱 | 액션·스릴러·강렬, 검정·흰색 극단·긴장감
- Teal and orange cinematic | 청록+주황 시네마틱 | 영화적 그레이딩·현대·SF·로맨스, 피부 따뜻·배경 차가움
- Muted tones desaturated | 희미·채도 낮춤 | 우울·현실적·빈티지·전쟁 후, 색상 약함·감정 억제
- Dreamy misty diffusion | 몽환·안개 확산 | 판타지·로맨스·꿈같음, 부드러움·안개·빛 번짐
- Cool cyan undertones | 차가운 청록 언더톤 | SF·고독·밤·미래 도시, 냉랭·기술적·감정 거리감
- Warm practical glow | 따뜻한 실내 빛 | 친밀·가족·로맨스·아늑, 노란·주황·포근함
- High dynamic range HDR | HDR 고다이나믹 레인지 | 깊은 블랙·밝은 하이라이트·현실적·영화적 깊이
- Vintage sepia tones | 빈티지 세피아 톤 | 회상·과거·노스탤지어·역사, 갈색·오래된 느낌
- Neon cyber glow | 네온 사이버 빛 | 미래·밤·흥분·도시 탐험, 밝은 네온·반사·에너지
- Eerie foggy haze | 섬뜩한 안개 안개 | 호러·초자연·불안·밤 숲, 흐림·신비·공포 빌드업
- Vibrant saturated pop | 생생·채도 높음 | 코미디·팝·에너지·바이럴, 밝고 강렬한 색·즐거움

### 3. 기타 시각 효과 키워드 예시 (Other Visual Effects)
- Shallow depth of field bokeh | 얕은 피사계 심도·보케 | 인물 초점·배경 블러·로맨스·포트레이트, 감정 집중
- Anamorphic lens flare cinematic | 아나모픽 렌즈 플레어 시네마틱 | 영화적 빛 번짐·스트레치·드라마·SF·액션
- 35mm film grain textured | 35mm 필름 그레인 질감 | 빈티지·현실적·시네마틱·노이즈·클래식 영화 느낌
- Subtle vignette edges | 미세 비네트 가장자리 어두움 | 초점 강화·클래식·감정 몰입·포트레이트
- Misty diffusion haze | 안개 확산 헤이즈 | 몽환·판타지·숲·아침·부드러운 분위기
- Cinematic color grading teal orange | 시네마틱 컬러 그레이딩 청록+주황 | 현대 영화·드라마·감정 깊이·피부 톤 강조
- Chromatic aberration subtle | 크로마틱 어버레이션 미세 | 빈티지·아날로그·현실적·엣지 색 번짐
- Light leaks film effect | 라이트 릭 필름 효과 | 빈티지·필름·따뜻·감성·과거 회상
- God rays volumetric through fog | 갓 레이 체적 안개 통과 | 신성·숲·아침·판타지·드라마틱 빛줄기
- Bloom glow soft highlights | 블룸 글로우 부드러운 하이라이트 | 꿈같음·마법·빛 과다·로맨틱·에테리얼


## 5. 음성 & 대사 (Voice & Dialogue) - 영상 프롬프트에서만 보임

- Husky mysterious female (Voice ID:0314) | 허스키 신비로운 여성 (Voice ID:0314) | 긴장·유혹·미스터리·로맨틱 서스펜스 대사, 낮고 쉰 듯 매혹적 톤 (가장 많이 공유·기본 여성 보이스)
- Husky mysterious male (Voice ID:0315) | 허스키 신비로운 남성 (Voice ID:0315) | 누아르·탐정·악당·위협 대사, 깊고 거친 매력 (0314의 남성 버전으로 자주 언급)
- Soft angelic female (Voice ID:0421) | 부드럽고 천사 같은 여성 (Voice ID:0421) | 위로·치유·판타지·순수·로맨틱 대사, 맑고 높은 톤
- Deep resonant male (Voice ID:0422) | 깊고 장엄한 남성 (Voice ID:0422) | 신화·신·용·여신·에픽 대사, 공명·권위적·울림
- Squeaky cute high-pitch (Voice ID:0550) | 귀여운 생쥐·치비 스타일 고음 (Voice ID:0550) | 코믹·동화·장난기·귀여운 캐릭터 대사, 높고 빠른 톤
- Booming thunderous dragon (Voice ID:0667) | 천둥 같은 거대한 용 포효 (Voice ID:0667) | 판타지·공룡·거대 생물·위압 대사, 깊고 메아리·포효 섞임
- Neutral robotic monotone (Voice ID:0778) | 중성 로봇·AI 단조로운 톤 (Voice ID:0778) | SF·안드로이드·중성·무감정·냉담 대사, 평평·기계적
- Goddess majestic resonant female (Voice ID:0889) | 여신 장엄 공명 여성 (Voice ID:0889) | 신화·여신·예언·장엄·신성 대사, 울림·천상적
- Primal dinosaur growl (Voice ID:0990) | 원시 공룡 그르렁 낮은 포효 (Voice ID:0990) | 공룡·고대 괴물·야생·공포 대사, 거칠고 낮은·위협적
- Bright youthful energetic female (Voice ID:1001) | 밝고 젊은 에너지 넘치는 여성 (Voice ID:1001) | 청춘·코미디·행복·바이럴·경쾌 대사
- Deep gravelly masculine (Voice ID:1002) | 깊고 자갈 같은 남성 (Voice ID:1002) | 위압·악당·전쟁·강렬·거친 대사
- Bright energetic neutral (Voice ID:0123) | 밝고 활기찬 중성 톤 (Voice ID:0123) | 유쾌·코믹·애니메이션·바이럴·중립 대사
- Deep menacing growl male (Voice ID:2005) | 깊고 위협적인 남성 그르렁 (Voice ID:2005) | 악당·괴물·공포·대치·분노 대사
- Soft dreamy ethereal female (Voice ID:3007) | 부드럽고 몽환적인 여성 (Voice ID:3007) | 판타지·꿈같은·위로·로맨틱·에테리얼 대사
- Robotic electronic neutral (Voice ID:4008) | 로봇·전자음 섞인 중성 (Voice ID:4008) | SF·AI·미래·기계적·전자음 대사

- Breathy whisper undertone | 숨찬 속삭임 뉘앙스 | 친밀·은밀·고백·관능, 숨소리 섞인 부드러움·밀착감
- Seductive low sultry | 매혹적 낮은 섹시 톤 | 유혹·에로틱·스파이·밤 대사, 낮고 느린·끌어당기는 느낌
- Quivering vocal fry emotional | 떨리는 보컬 프라이 감정적 | 슬픔·후회·울음 직전, 목소리 끝 떨림·취약함 강조
- Throaty rasp increasing | 거친 목 쉰 듯 점점 강해짐 | 분노·절박·위기·격앙, 목이 쉰 듯한 긴장감 빌드업
- Enigmatic intimate lowered register | 수수께끼 친밀 낮아진 레지스터 | 깊은 속내·고백·철학적 대사, 낮은 톤·가까운 느낌
- Layered emotional timbre | 다층 감정 톤 | 복합 감정(걱정+사랑·분노+슬픔), 풍부한 뉘앙스·드라마틱
- Slight vocal crack vulnerable | 살짝 갈라지는 목소리 취약함 | 감정 폭발 직전·울음 참기·진심 드러남
- Soft gentle angelic | 부드럽고 천사 같은 | 위로·치유·판타지·순수 대사, 맑고 높은 톤·평온
- Deep gravelly masculine | 깊고 자갈 같은 남성 톤 | 위압·권위·악당·전쟁 지휘, 낮고 거친·강렬
- Bright youthful energetic | 밝고 젊은 에너지 넘침 | 코미디·청춘·흥분·바이럴 대사, 높고 경쾌
- Monotone cold detached | 단조롭고 차가운 무감정 | 로봇·안드로이드·냉담·SF·무관심 대사
- Trembling fearful shaky | 떨리는 공포스러운 목소리 | 패닉·공포·위협 받음·호러 대사
- Warm comforting maternal | 따뜻하고 위로하는 모성적 | 어머니·조언·가족·감동·치유 대사

### 대사 전달 키워드 예시 (Dialogue Delivery)
- Slow deliberate seductive undertone | 천천히 신중 매혹적 뉘앙스 | 유혹·고백·긴장 빌드업·밀착 대사
- Paused hesitation breath catch | 멈춤·망설임·숨 멎음 | 말 꺼내기 전·죄책감·두려움·진심 드러남
- Rising inflection turning plea | 음 높아지는 애원 톤 | 부탁·구걸·절박·감정 호소·마지막 대사
- Breathless pause mid-sentence | 숨찬 멈춤 문장 중간 | 충격·놀람·감정 과부하·서프라이즈 순간
- Slow enunciation emphasis | 천천히 또박또박 강조 | 진지·위협·명령·철학적·중요한 대사
- Natural fillers um ah hesitant | 자연스러운 필러(음·아) 망설임 | 현실적 대화·당황·생각 정리·일상
- Whispered intimate close | 속삭임 친밀 가까움 | 은밀·고백·밤·밀착·관능·비밀 공유
- Urgent rapid pleading | 급박 빠른 애원 | 위기·탈출·구원 요청·시간 촉박·패닉
- Calm measured controlled | 차분 측정된 통제 | 냉정·리더·협상·위기 속 침착 대사
- Stuttering nervous broken | 말 더듬는 긴장 깨짐 | 극도 불안·거짓말·죄책감·압박 상황
- Passionate fervent rising | 열정적 열렬 점점 높아짐 | 사랑 선언·연설·결의·감정 폭발 클라이맥스
- Monotonous robotic flat | 단조로운 로봇 같은 평평함 | AI·안드로이드·무감정·SF·냉담 대사
- Growling low menacing | 으르렁거리는 낮은 위협 | 분노·악당·위협·공포·대치 장면

### 대사 & 싱크 키워드 예시 (Dialogue & Sync)
- Specific line exact dialogue | 정확한 대사 지정 (e.g., "She says: 'Why didn't you...'") | 대사 그대로 재현·lip-sync 핵심·스토리텔링
- Lip-sync perfect natural | 립싱크 완벽 자연스러움 | 입 모양·턱 움직임·목 울대 동기화, 대사 중심 클립 필수
- Precise lip synchronization throat movement | 정확한 입술 동기화 + 목 움직임 | 현실적·세밀·감정 전달 강화
- Subtle throat swallow during speech | 말 중 미세 목 삼킴 | 망설임·긴장·현실적 디테일·취약함
- Echoey room reverb intimate space | 방 안 반향·공간감 | 고립·큰 방·빈 집·신비·공포·회상
- Increasing rasp toward end | 대사 끝으로 갈수록 쉰 듯 거칠어짐 | 감정 고조·분노·절박·클라이맥스 빌드업
- Breathy sigh between words | 단어 사이 숨찬 한숨 | 감정 과부하·슬픔·피로·취약·로맨틱
- Natural breath pauses realistic | 자연스러운 숨쉬기 멈춤 | 현실적·긴장 유지·대사 리듬·생동감
- Layered whisper overlay | 속삭임 레이어 겹침 | 내면 독백·회상·이중성·초현실·심리적 깊이
- Perfect sync no artifacts | 완벽 싱크·아티팩트 없음 | lip-sync 오류 방지·고품질·대사 중심 클립 필수



## 6. 기술적/제한 조건 (Technical & Restrictions)

### 제한 조건 키워드 예시 (Restrictions – 불필요 요소 제거)
- No subtitles / No text overlays | 자막 없음 / 텍스트 오버레이 금지 | 대사 중심·순수 영상·lip-sync만 강조할 때 필수
- No background music / No BGM / No score | 배경 음악 없음 / BGM 금지 | 대사·효과음만 듣고 싶을 때, 순수 오디오 클립
- Only subtle ambient SFX / Only room tone | 미세 주변 효과음 / 방 안 톤만 | 현실적·조용한 분위기·숨소리·바람·발소리 중심
- No distractions / No additional elements | 방해 요소 없음 / 추가 요소 금지 | 주체·표정·대사에 집중, 군더더기 제거
- No motion artifacts / No morphing | 모션 아티팩트 없음 / 형태 왜곡 금지 | 부드러운 움직임·고정 샷·lip-sync 안정화
- No facial morphing / No identity shift | 얼굴 변형 없음 / 신원 변화 금지 | 얼굴 일관성 유지·동일 인물 장면 연속 시 필수
- No extra characters / No crowds | 추가 인물 없음 / 군중 금지 | 1인 중심·친밀·독백·대화 장면
- No text / No watermarks / No logos | 텍스트·워터마크·로고 없음 | 깨끗한 영상·상업적·제작용 출력
- No sudden cuts / No jump cuts | 갑작스러운 컷·점프 컷 금지 | 부드러운 연속·단일 장면·플로우 유지
- No fast motion / No blur artifacts | 빠른 움직임·블러 아티팩트 금지 | 천천히·정적·표정 중심 클립

### 품질 & 스펙 키워드 예시 (Quality & Technical Specs)
- High cinematic quality / Ultra-detailed | 고품질 시네마틱 / 초상세 | 영화급·현실적·피부·머리카락·조명 디테일 강조
- 4K resolution / Ultra HD | 4K 해상도 / 울트라 HD | 고해상도·선명·스크린용·포스터급 출력
- 24fps cinematic motion blur | 24fps 시네마틱 모션 블러 | 영화 같은 부드러움·자연스러운 움직임·클래식 필름 느낌
- 35mm film grain textured | 35mm 필름 그레인 질감 | 빈티지·현실적·시네마틱·노이즈·클래식 영화 스타일
- Locked temporal consistency | 시간적 일관성 고정 | 프레임 간 얼굴·움직임·조명 변하지 않음, 연속 클립 필수
- Physics-accurate micro-movements | 물리적으로 정확한 미세 움직임 | 머리카락·옷감·호흡·자연스러운 떨림·현실감 ↑
- 16:9 wide aspect ratio cinematic | 16:9 와이드 비율 시네마틱 | 영화 스크린·트레일러·표준 와이드스크린
- 9:16 vertical portrait safe | 9:16 세로 포트레이트 안전 | 모바일·틱톡·인스타 릴스·세로 영상 최적
- High dynamic range HDR deep blacks | HDR 고다이나믹 레인지 깊은 블랙 | 명암 강렬·현실적·밤·어두운 장면·조명 대비
- Anamorphic squeeze cinematic look | 아나모픽 압축 시네마틱 룩 | 영화적 스트레치·플레어·할리우드 느낌·드라마·SF
- Realistic skin texture pores visible | 현실적 피부 텍스처 모공 보임 | 포토리얼·클로즈업·인물 중심·세밀 디테일
- Subtle vignette framing edges | 미세 비네트 가장자리 어두움 | 초점 강화·클래식·감정 몰입·포트레이트·드라마틱
- Chromatic aberration subtle film | 미세 크로마틱 어버레이션 필름 | 빈티지·아날로그·현실적·엣지 색 번짐·레트로
- Light leaks film effect warm | 필름 라이트 릭 따뜻함 | 빈티지·감성·과거 회상·로맨틱·따뜻한 빛 새는 효과
- No lens distortion / No fisheye | 렌즈 왜곡 없음 / 어안 금지 | 자연스러운 시야·중립·현실적·포트레이트
- Ultra-realistic rendering | 울트라 리얼리스틱 렌더링 | 사진급·현실·인물·환경·고품질 최상위 옵션








## 조합 예시 ( 이런 조합을 가장 상단에 썸네일과 함꼐 보여주어, 썸네일을 선택하면 아래에 각 요소가 자동으로 체크되고, 우측에 프롬프트도 자동 생성되게 해줘. )

1. **Classic Romantic Confession**
   Romantic drama intimate scene, static locked-off camera, medium close-up on young woman in her early 20s with elegant long flowing hair, soft melancholic gaze with glistening tearful eyes, wearing flowing elegant dress, soft dramatic lighting with golden hour warm glow, husky mysterious female voice ID 0314 with breathy sigh between words, she says: "I've loved you from the moment we met.", lip-sync perfect, natural breath pauses realistic, shallow depth of field bokeh, no subtitles, no BGM, high cinematic quality, 4K resolution, muted tones desaturated.

2. **Intense Action Hero Monologue**
   Action high-energy sequence, subtle camera drift push-in, low angle shot on masculine heroic warrior in his 30s with scarred battle-worn face, intense piercing gaze with jaw clenched tension, standing defiant hands on hips, hard light harsh shadows with high contrast dramatic, deep gravelly masculine voice ID 1002 with passionate fervent rising, he says: "This ends now!", lip-sync perfect, subtle breathing chest heave, 35mm film grain textured, no text overlays, only subtle ambient SFX, ultra-realistic rendering, 16:9 wide aspect ratio.

3. **Horror Suspense Build**
   Horror thriller tension build, gentle slow zoom-in, extreme close-up on anxious teenage girl with wide eyes and lip quiver trembling, kneeling vulnerable bowed head, low-key moody shadows with eerie foggy haze, soft angelic female voice ID 0421 with trembling fearful shaky, she says: "I think something's in the house with me.", lip-sync perfect, rapid blinking anxiety, chromatic aberration subtle, no extra characters, no fast motion, high dynamic range HDR, 24fps cinematic motion blur.

4. **Sci-Fi Futuristic Dialogue**
   Sci-fi moody futuristic, static locked-off camera, over-the-shoulder shot on android cybernetic female with glowing ethereal aura, blank empty stare with subtle micro-expression pain, sitting thoughtfully chin on hand, neon rim lighting with teal and orange cinematic, neutral robotic monotone voice ID 0778 with monotonous robotic flat, she says: "What does it mean to be human?", lip-sync perfect, precise lip synchronization throat movement, no distractions, no BGM, ultra-detailed, locked temporal consistency.

5. **Comedy Light-Hearted Banter**
   Comedy light-hearted slice-of-life, light parallax shift sway, two-shot on playful teenage boy and girl with kawaii cute chibi features, joyful happy ecstatic expressions with slight head tilt curious, cozy café laughter setting, vibrant saturated pop with practical table lamp warm, bright youthful energetic female voice ID 1001 with playful teasing mischievous, she says: "You're such a goofball!", lip-sync perfect, natural fillers um ah hesitant, no subtitles, only room tone, high cinematic quality, 9:16 vertical portrait safe.

6. **Drama Emotional Breakdown**
   Drama emotional close-up, subtle camera drift push-in, profile shot on middle-aged mature woman with freckled natural beauty, sad melancholic heartbroken with slow head shake denial, leaning forward intense, candlelight flickering intimate with dreamy misty diffusion, husky mysterious female voice ID 0314 with quivering vocal fry emotional, she says: "I can't do this anymore.", lip-sync perfect, subtle throat swallow during speech, vintage sepia tones, no motion artifacts, 4K resolution, physics-accurate micro-movements.

7. **Fantasy Epic Quest**
   Fantasy warrior epic, slow pan left, wide shot on elf graceful pointed ears male with tattooed intricate patterns, hopeful optimistic yearning with parted lips hesitant breath, holding sword in heroic pose, volumetric god rays with warm practical glow, deep resonant male voice ID 0422 with slow enunciation emphasis, he says: "We must press on for the kingdom.", lip-sync perfect, natural eye movement glance away, anamorphic lens flare cinematic, no extra elements, high dynamic range HDR, ultra-realistic rendering.

8. **Thriller Detective Interrogation**
   Crime noir detective, dutch angle tilted frame, reaction shot on mysterious one eye covered man in his 40s, skeptical doubtful suspicious with nostril flare breathing hard, crossed arms defensive pose, single bare bulb overhead with chiaroscuro extreme, husky mysterious male voice ID 0315 with growling low menacing, he says: "You think you can fool me?", lip-sync perfect, fidgeting fingers twisting ring, 35mm film grain textured, no BGM, desaturated muted palette, 16:9 wide aspect ratio.

9. **Romantic Intimate Whisper**
   Intimate cozy warm, static locked-off camera, medium close-up on feminine seductive siren with seductive smoky eyes makeup, tender affectionate loving with smoldering seductive stare, steamy intimate sensual setting, backlighting silhouette with bloom glow soft highlights, soft dreamy ethereal female voice ID 3007 with whispered intimate close, she says: "Come closer, my love.", lip-sync perfect, gentle lip quiver emotion, shallow depth of field bokeh, no text, high cinematic quality, 24fps cinematic motion blur.

10. **War Epic Command**
    War epic battlefield, crane descending, cowboy shot on middle-aged mature man with deep gravelly masculine features, defiant rebellious stubborn with fingers clenching fist anger, standing defiant hands on hips, high-key harsh bright with high contrast dramatic, deep gravelly masculine voice ID 1002 with urgent rapid pleading, he says: "Hold the line!", lip-sync perfect, shallow rapid breaths, no sudden cuts, only faint ambient SFX, ultra-detailed, locked temporal consistency.

11. **Cyberpunk Hacker Conspiracy**
    Cyberpunk hacker lair, FPV fly-by low fly, point-of-view shot on androgynous gender-neutral figure with cyberpunk neon hair streaks, confused bewildered puzzled with rapid blinking anxiety, wearing cybernetic arm implant, fluorescent flicker harsh with neon cyber glow, robotic electronic neutral voice ID 4008 with stuttering nervous broken, they say: "The system's rigged against us.", lip-sync perfect, layered emotional timbre, glitch art digital distortion, no facial morphing, high dynamic range HDR, 4K resolution.

12. **Mythical Creature Soaring Monologue**
    Mythical creature soaring, slow orbit 360, bird’s-eye view on dragonborn scaled humanoid with primal dinosaur growl features, empowered triumphant victorious with sudden sharp inhale surprise, soaring through clouds, god rays volumetric through fog with vibrant sunrise golden hour, booming thunderous dragon voice ID 0667 with layered whisper overlay, it says: "Freedom is in the skies.", lip-sync perfect, subtle eyelash flutter, light leaks film effect warm, no distractions, physics-accurate micro-movements, 16:9 wide aspect ratio.

13. **Surreal Dali Dream Sequence**
    Surreal Dali melting, barrel roll vortex, fisheye lens on non-binary ethereal entity with surreal abstract haze, melancholic introspective thoughtful with lip bite pressed lips, melting clocks in background, surreal Dali melting with chromatic aberration subtle, soft gentle angelic voice ID 0421 with breathy whisper undertone, they say: "Time bends in dreams.", lip-sync perfect, natural breath pauses realistic, misty diffusion haze, no extra characters, ultra-realistic rendering, 24fps cinematic motion blur.

14. **Steampunk Victorian Adventure**
    Steampunk fantasy Victorian, tracking backward retreat, insert detail shot on pierced alternative style woman in her 30s, playful teasing mischievous with slight head tilt curious, holding steampunk gadget, oil painting textured with warm practical glow, bright energetic neutral voice ID 0123 with natural fillers um ah hesitant, she says: "This contraption might just work!", lip-sync perfect, fidgeting fingers twisting ring, vaporwave retro aesthetic, no BGM, high cinematic quality, locked temporal consistency.

15. **Underwater Mermaid Lament**
    Underwater dreamy coral, light parallax shift sway, macro lens on mermaid aquatic scaled tail with glowing ethereal aura, vulnerable fragile broken with glistening tearful eyes, swimming gracefully, dappled moonlight through blinds with dreamy misty diffusion, goddess majestic resonant female voice ID 0889 with paused hesitation breath catch, she says: "The surface world calls to me.", lip-sync perfect, subtle breathing chest heave, bloom glow soft highlights, no text overlays, 4K resolution, physics-accurate micro-movements.

16. **Pixel Art Retro Game Hero**
    Pixel art retro game, whip pan sudden, low-poly geometric minimalist on childlike innocent boy with pixelated features, joyful happy ecstatic with slow head shake denial, in arcade setting, synthwave neon glow with vibrant saturated pop, squeaky cute high-pitch voice ID 0550 with playful teasing mischievous, he says: "Level up time!", lip-sync perfect, rapid blinking anxiety, pixel art retro game, no motion artifacts, ultra-detailed, 9:16 vertical portrait safe.

17. **Abstract Color Burst Emotion**
    Abstract color burst, hyperlapse push-in, abstract color burst on ageless ethereal being with abstract patterns, passionate intense fervent with jaw clench restrained anger, exploding colors, abstract color burst with high dynamic range HDR, deep menacing growl male voice ID 2005 with increasing rasp toward end, it says: "Colors define my rage.", lip-sync perfect, subtle micro-expression pain, glitch art digital distortion, no subtitles, high cinematic quality, 35mm film grain textured.

18. **Historical Period Drama Betrayal**
    Historical period drama, slow pan right, establishing shot on elderly wise old lady with vintage product premium gown, guilty remorseful ashamed with nervous throat swallow, in candlelit castle, impressionist soft brush with vintage sepia tones, warm comforting maternal voice ID (custom maternal variant), she says: "I never meant to betray you.", lip-sync perfect, parted lips hesitant breath, light leaks film effect, no extra elements, locked temporal consistency, 16:9 wide aspect ratio.

19. **Vaporwave Nostalgic Reflection**
    Vaporwave retro aesthetic, subtle camera drift push-in, 135mm telephoto lens on nostalgic 1980s arcade teen with vaporwave features, nostalgic wistful longing with soft melancholic gaze, in neon arcade, vaporwave retro aesthetic with neon cyber glow, breathy whisper undertone voice ID 3007 with slow deliberate seductive undertone, she says: "Those days were electric.", lip-sync perfect, natural eye movement glance away, chromatic aberration subtle, no BGM, ultra-realistic rendering, 24fps cinematic motion blur.

20. **Elemental Nature Fantasy Ritual**
    Elemental nature fantasy, crane ascending, wide-normal 35mm lens on sorceress mystical aura with elemental effects, calm serene composed with gentle lip quiver emotion, performing ritual in forest, dappled moonlight through blinds with volumetric god rays, soft dreamy ethereal female voice ID 3007 with enigmatic intimate lowered register, she says: "Elements, heed my call.", lip-sync perfect, subtle throat swallow during speech, misty diffusion haze, no distractions, high dynamic range HDR, physics-accurate micro-movements.

21. **Quantum Holographic Entity Debate**
    Holographic cyber world, bullet time frozen moment, anamorphic lens on alien extraterrestrial being with holographic glitches, detached cold indifferent with blank empty stare, debating in virtual space, holographic cyber world with glitch art digital distortion, neutral robotic monotone voice ID 0778 with layered whisper overlay, it says: "Reality is but a simulation.", lip-sync perfect, subtle eyelash flutter, anamorphic lens flare cinematic, no facial morphing, ultra-detailed, 4K resolution.

22. **Bio-Luminescent Forest Guardian**
    Mystical foggy forest, snorricam chest-mounted, macro lens on fairy delicate winged with bio-luminescent glow, empowered triumphant victorious with hopeful glistening eyes, guarding ancient tree, bloom glow soft highlights with god rays volumetric through fog, primal dinosaur growl voice ID 0990 with rising inflection turning plea, it says: "The forest lives through me.", lip-sync perfect, shallow rapid breaths, surreal abstract haze, no text, high cinematic quality, locked temporal consistency.

23. **Retro-Futuristic Synthwave Time Traveler**
    Retro-futuristic synthwave, hyperlapse push-in, fisheye lens on time-traveler with chronal distortions, surprised shocked stunned with frozen mid-expression shock, in grid-lined city, synthwave neon glow with light leaks film effect warm, robotic electronic neutral voice ID 4008 with breathless pause mid-sentence, they say: "I've seen the end... and the beginning.", lip-sync perfect, rapid blinking anxiety, chromatic aberration subtle, no BGM, 24fps cinematic motion blur, physics-accurate micro-movements.

24. **Ink Wash Traditional Asian Phantom**
    Ink wash traditional Asian, slow orbit 360, sumi-e ink wash fantasy on ghost translucent spectral with ink bleed effects, bitter resentful grudging with smoldering seductive stare, haunting ancient temple, ink wash traditional Asian with misty diffusion haze, deep resonant male voice ID 0422 with throaty rasp increasing, it says: "Vengeance flows like ink.", lip-sync perfect, subtle micro-expression pain, no extra characters, ultra-realistic rendering, 16:9 wide aspect ratio.

25. **Low-Poly Geometric Alien Diplomat**
    Low-poly geometric minimalist, barrel roll vortex, overhead bird’s-eye view on alien planet exploration entity with low-poly facets, skeptical doubtful suspicious with nostril flare breathing hard, negotiating on crystalline planet, low-poly geometric minimalist with high contrast dramatic, bright energetic neutral voice ID 0123 with stuttering nervous broken, it says: "Your terms are... polygonal.", lip-sync perfect, fidgeting fingers twisting ring, no motion artifacts, high dynamic range HDR, 9:16 vertical portrait safe.

26. **Erotic Suggestive Shadow Puppetry**
    Erotic suggestive moody, whip pan sudden, silhouette backlighting on vampire pale immortal with shadow play elements, erotic suggestive moody with rim light halo, seductive low sultry voice ID 0314 with slight vocal crack vulnerable, she says: "Shadows reveal our desires.", lip-sync perfect, hand trembling slight shake, chiaroscuro extreme, no subtitles, locked temporal consistency, 35mm film grain textured.

27. **Musical Vibrant Hologram Performance**
    Musical vibrant performance, FPV fly-by low fly, anamorphic lens on holographic performer with musical notes manifesting, joyful happy ecstatic with passionate fervent rising, on neon stage, cinematic spotlight dramatic with neon rim lighting, bright youthful energetic female voice ID 1001 with passionate fervent rising, she says: "Let the music take you!", lip-sync perfect, natural breath pauses realistic, anamorphic squeeze cinematic look, no distractions, ultra-detailed, 4K resolution.

28. **Post-Cyberpunk Rainy Redemption**
    Post-cyberpunk rainy streets, tracking backward retreat, rain-slicked profile shot on robotic android intimate with rain-distorted reflections, relieved grateful sigh with soft melancholic gaze, in rainy alley redemption, post-cyberpunk rainy streets with blue hour cool tones, soft dreamy ethereal female voice ID 3007 with calm measured controlled, she says: "Rain washes away the code.", lip-sync perfect, gentle lip quiver emotion, misty diffusion haze, no BGM, high cinematic quality, physics-accurate micro-movements.

29. **Surreal Abstract Haze Consciousness Stream**
    Surreal abstract haze, hyperlapse push-in, abstract distorted lens on ageless ethereal male entity with consciousness streams visualized, contemplative melancholic introspective with subtle micro-expression pain, in void of thoughts, surreal abstract haze with abstract color burst, enigmatic intimate lowered register voice ID 0422 with layered emotional timbre, he says: "Thoughts swirl in the haze.", lip-sync perfect, slow head shake denial, glitch art digital distortion, no extra elements, 24fps cinematic motion blur, locked temporal consistency.

30. **Desert Alien Vast Symbiosis**
    Desert alien vast, crane ascending, wide-angle 24mm lens on symbiotic alien-human hybrid with desert mirage effects, hopeful optimistic yearning with sudden sharp inhale surprise, merging with alien flora, desert alien vast with golden hour warm glow, primal dinosaur growl voice ID 0990 with urgent rapid pleading, it says: "We become one with the sands.", lip-sync perfect, shallow rapid breaths, god rays volumetric through fog, no facial morphing, ultra-realistic rendering, 16:9 wide aspect ratio.