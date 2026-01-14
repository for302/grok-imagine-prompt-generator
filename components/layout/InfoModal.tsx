'use client';

import { Modal } from '@/components/ui/Modal';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function InfoModal({ isOpen, onClose }: InfoModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="AXclass - 무료 AI 배우기">
      <div className="space-y-6">
        {/* 메인 이미지 */}
        <a
          href="https://axclass.com/?utm_source=grok&utm_medium=site_button&utm_campaign=grok_to_axclass&utm_content=thumbnail_cta"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
        >
          <img
            src="/images/axclass_banner.png"
            alt="AXclass.com"
            className="w-full h-auto"
          />
        </a>
        <a
          href="https://axclass.com/?utm_source=grok&utm_medium=site_button&utm_campaign=grok_to_axclass&utm_content=thumbnail_cta"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-center font-semibold rounded-lg transition-all -mt-3"
        >
          무료강의 보러가기 →
        </a>

        {/* 메인 소개 */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            AXclass.com
          </h2>
          <p className="text-[var(--foreground)] leading-relaxed">
            당신의 일상과 업무 그리고 새로운 시작을 위해 필요한 AI의 지식을 얻을 수 있습니다.
          </p>
          <p className="text-[var(--foreground)] leading-relaxed">
            혼자서 힘들게 공부하고 있나요? AXClass에서 운영하는 커뮤니티 학습 모임 <strong className="text-blue-500 dark:text-blue-400">"AXStudyLab"</strong>과 함께 하시면 동료들과 친구들 그리고 다양한 사람들과 커뮤니티를 이루며 AI를 익히실 수 있어요~
          </p>
        </div>

        {/* 왜 AXStudyLab인가? */}
        <div className="p-4 bg-purple-500/15 border border-purple-500/30 rounded-lg space-y-3">
          <h3 className="font-bold text-lg text-purple-400 dark:text-purple-200">왜 AXStudyLab인가?</h3>
          <p className="text-[var(--foreground)]">
            AI 교육은 많지만, <strong className="text-purple-500 dark:text-purple-400">"배운 다음에 무엇을 할 수 있는지"</strong>까지 책임지는 곳은 많지 않습니다.
          </p>
          <p className="text-sm font-semibold">
            <span className="bg-white text-purple-700 px-2 py-1 rounded">
              AXStudyLab = 교육 + 실습 + 커뮤니티 + 프로젝트 완성
            </span>
          </p>
          <a
            href="https://axclass.com/?utm_source=grok&utm_medium=site_button&utm_campaign=grok_to_axclass&utm_content=closing_cta"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white text-center font-bold text-base rounded-lg transition-all"
          >
            1기 30명 마감 · 2기 모집 중 →
          </a>
        </div>

        {/* 특징 리스트 */}
        <div className="space-y-3">
          <div className="p-4 bg-[var(--muted)]/70 rounded-lg">
            <h4 className="font-semibold mb-2 text-[var(--foreground)]">1. 실전 프로젝트 기반 학습</h4>
            <p className="text-sm text-[var(--foreground)] opacity-90">
              이론이 아닌 "내 업무"에 맞는 프로젝트를 완성합니다. 한달 후, 바로 활용 가능한 결과물을 완성합니다.
            </p>
          </div>

          <div className="p-4 bg-[var(--muted)]/70 rounded-lg">
            <h4 className="font-semibold mb-2 text-[var(--foreground)]">2. 전문가 1:1 맞춤 멘토링</h4>
            <p className="text-sm text-[var(--foreground)] opacity-90">
              17년 교육 전문가 X 25년 IT&AI 실전 전문가의 체계적인 AI 기초 강의와 프로젝트별 1:1 맞춤 멘토링
            </p>
          </div>

          <div className="p-4 bg-[var(--muted)]/70 rounded-lg">
            <h4 className="font-semibold mb-2 text-[var(--foreground)]">3. 함께 성장하는 커뮤니티 학습</h4>
            <p className="text-sm text-[var(--foreground)] opacity-90">
              다양한 직무/산업의 참가자들과 함께 스터디. 주간 피어 피드백 세션, 평생 이용 가능한 커뮤니티
            </p>
          </div>

          <div className="p-4 bg-[var(--muted)]/70 rounded-lg">
            <h4 className="font-semibold mb-2 text-[var(--foreground)]">4. 검증된 학습 설계</h4>
            <p className="text-sm text-[var(--foreground)] opacity-90">
              플립러닝 + PBL + 멘토링으로 온라인 강의로 시간낭비 없이, 실시간 세션은 실습과 토론 집중
            </p>
          </div>
        </div>

        {/* 추천 대상 */}
        <div className="space-y-3">
          <h3 className="font-bold text-base text-[var(--foreground)]">이런 분께 추천합니다</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-purple-500/15 border border-purple-500/30 rounded-lg">
              <span className="font-semibold text-purple-400 dark:text-purple-300">AI린이</span>
              <p className="text-sm text-[var(--foreground)] mt-1 opacity-90">AI로 어떤 것까지 할 수 있을지 경험해 보고 싶은 분</p>
            </div>
            <div className="p-3 bg-green-500/15 border border-green-500/30 rounded-lg">
              <span className="font-semibold text-green-500 dark:text-green-300">1인사업가</span>
              <p className="text-sm text-[var(--foreground)] mt-1 opacity-90">시스템화나 자동화로 내 시간을 갖고 싶은 분</p>
            </div>
            <div className="p-3 bg-orange-500/15 border border-orange-500/30 rounded-lg">
              <span className="font-semibold text-orange-400 dark:text-orange-300">직장인, N잡러</span>
              <p className="text-sm text-[var(--foreground)] mt-1 opacity-90">업무 자동화, 바이브코딩으로 사업을 만들고 싶은 분</p>
            </div>
            <div className="p-3 bg-pink-500/15 border border-pink-500/30 rounded-lg">
              <span className="font-semibold text-pink-400 dark:text-pink-300">육아맘, 초등맘</span>
              <p className="text-sm text-[var(--foreground)] mt-1 opacity-90">AI로 아이 학습 체계화, 콘텐츠 제작하고 싶은 분</p>
            </div>
          </div>
        </div>

        {/* 진행 과정 */}
        <div className="p-4 bg-gradient-to-r from-blue-500/15 to-purple-500/15 border border-blue-500/20 rounded-lg">
          <h3 className="font-bold text-base mb-4 text-[var(--foreground)]">AXStudyLab 진행 과정</h3>
          <ol className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold">1</span>
              <span className="text-sm text-[var(--foreground)]"><strong className="text-blue-500 dark:text-blue-400">AI 공통강의</strong>로 최신 AI Trend를 배웁니다</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold">2</span>
              <span className="text-sm text-[var(--foreground)]">자신의 <strong className="text-blue-500 dark:text-blue-400">관심 분야 주제랩</strong> 강의를 듣습니다</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold">3</span>
              <span className="text-sm text-[var(--foreground)]"><strong className="text-blue-500 dark:text-blue-400">내가 원하는 프로젝트</strong>를 정하고 준비합니다</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold">4</span>
              <span className="text-sm text-[var(--foreground)]">랩장과 멘토들의 지원과 함께 <strong className="text-blue-500 dark:text-blue-400">프로젝트를 완성</strong>합니다</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold">5</span>
              <span className="text-sm text-[var(--foreground)]">내 프로젝트를 <strong className="text-blue-500 dark:text-blue-400">발표하고 공유</strong>합니다</span>
            </li>
          </ol>
        </div>

        {/* CTA 버튼 */}
        <a
          href="https://axclass.com/?utm_source=grok&utm_medium=site_button&utm_campaign=grok_to_axclass&utm_content=bottom_cta"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-center font-semibold rounded-lg transition-all"
        >
          AXStudyLab 구경하기 →
        </a>
      </div>
    </Modal>
  );
}
