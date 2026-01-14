'use client';

import { Modal } from '@/components/ui/Modal';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function InfoModal({ isOpen, onClose }: InfoModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Grok Imagine 영상 제작 안내">
      <div className="space-y-6 text-sm">
        <p className="text-[var(--muted-foreground)]">
          Grok Imagine의 영상 제작을 위한 프롬프트 생성기 입니다. 2026년 1월 기준으로, Grok Imagine은 텍스트-to-비디오나 이미지-to-비디오로 6~15초 클립을 생성하며, 프롬프트에서 각 장면의 요소를 세밀하게 지정하면 AI가 프레임을 자동 보간(interpolate)해 영상을 만듭니다.
        </p>

        <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
          <p className="text-yellow-600 dark:text-yellow-400">
            19세 이상 콘텐츠는 Spicy Mode에서 가능하지만, 모더레이션으로 인해 민감 주제는 피하세요. 프롬프트 길이는 400~700자가 적절합니다.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-base">1. 장면 유형 & 카메라 (Scene Type & Camera)</h3>
          <p className="text-[var(--muted-foreground)]">
            각 장면의 전체 스타일과 시각적 관점을 정의합니다. 복잡한 카메라 움직임보다 <strong>앵글 + 렌즈 + 프레이밍</strong>을 잘 이해하며, 움직임은 "gentle/slow/subtle" 정도로만 지정하는 게 안정적입니다.
          </p>
          <p className="text-xs text-[var(--muted-foreground)]">
            팁: 첫 장면은 "Wide shot 35mm lens establishing"으로 맥락, 중간은 "Medium close-up 85mm rack focus"으로 초점 이동, 끝은 "Static ECU macro lens frozen"으로 임팩트.
          </p>

          <h3 className="font-semibold text-base">2. 주체 & 표정/행동 (Subject & Expression)</h3>
          <p className="text-[var(--muted-foreground)]">
            주인공의 외형·감정·동작 세밀 지정. "face fidelity"로 얼굴 일관성 유지, 미세 동작을 애니메이션화합니다.
          </p>
          <p className="text-xs text-[var(--muted-foreground)]">
            팁: 이미지 업로드 시 "Maintain face from source". 예시: "Worried young woman, furrowed brow lip quiver, natural eye flick"
          </p>

          <h3 className="font-semibold text-base">3. 조명 & 분위기 (Lighting & Atmosphere)</h3>
          <p className="text-[var(--muted-foreground)]">
            시각 톤 설정, AI가 빛·색상 적용. 물리적 재질 이해로 현실적입니다.
          </p>
          <p className="text-xs text-[var(--muted-foreground)]">
            팁: 야경 "Dappled moonlight cool cyan", 액션 "Harsh flicker high contrast". 전환 "Lighting shift warm to cool".
          </p>

          <h3 className="font-semibold text-base">4. 음성 & 대사 (Voice & Dialogue)</h3>
          <p className="text-[var(--muted-foreground)]">
            오디오 추가, lip-sync 자동. 대사 중심 클립에 적합합니다.
          </p>
          <p className="text-xs text-[var(--muted-foreground)]">
            팁: 대화 "Quivering fry paused hesitation", 내레이션 "Layered timbre echoey".
          </p>

          <h3 className="font-semibold text-base">5. 기술적/제한 조건 (Technical & Restrictions)</h3>
          <p className="text-[var(--muted-foreground)]">
            품질 설정 및 원치 않는 요소를 제외합니다.
          </p>
          <p className="text-xs text-[var(--muted-foreground)]">
            팁: 전체 "Temporal consistency locked no artifacts", 예시 "High cinematic 35mm grain, only breath SFX"
          </p>
        </div>
      </div>
    </Modal>
  );
}
