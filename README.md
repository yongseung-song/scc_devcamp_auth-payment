# 스파르타코딩클럽 데브캠프 4월 3회차

## Goal

- `Next.js` 를 이용해 로그인/회원가입, 나아가 결제까지 **제대로** 구현해보기

## Dependencies

- Frontend Framework : `Next.js`
- HTTP client : `Axios`
- mock RESTful API : `json-server`
- ui : `shadcn/ui`
- form management : `react-hook-form`
- schema declaration/validation : `zod`
- styling : `tailwindCSS`

## Logs

#### Day 1. 회원가입 화면 구성하기

- 프로젝트 세팅
- `shadcn/ui` 의 `form`, `button`, `card`, `input` 등 컴포넌트 설치

#### Day 2. 예제 코드를 뜯어보고 현재 코드와 비교하기

- `form` 에 `step`으로 렌더링되는 `input`분기처리
- `className`에 `variant`로 next, prev, submit 버튼 조건부 노출
- `onSubmit` 콜백함수 작성
- `onSubmit` 함수 작동하지 않는 오류 수정

#### Day 3. 회원가입 기능 구현

- `onSubmit` 버그 수정
- Theme 적용
- Progress bar 적용
- `stepContext` 및 `Provider` 생성 및 컴포넌트 분리

#### Day 4. 로그인 기능 구현

- `json-server` 와 `axios` 를 사용해 회원가입 및 로그인 기능 구현
- `axios instance` 설정
- 컴포넌트 정리 및 분리

## To do

- `json-server-auth` 로 변경, 로그인 방식 개선
- 로그인 상태 관리
- `setStep`실행될 때 `input`슬라이드 되는 애니메이션 추가
