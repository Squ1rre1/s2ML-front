# S2ML Frontend

React + TypeScript + Vite + Tailwind CSS로 구축된 현대적인 프론트엔드 애플리케이션입니다.

## 기술 스택

- **React 18** - 사용자 인터페이스 구축
- **TypeScript** - 타입 안정성
- **Vite** - 빠른 개발 환경
- **Tailwind CSS** - 유틸리티 우선 CSS 프레임워크
- **Framer Motion** - 애니메이션 라이브러리
- **React Icons** - 아이콘 라이브러리

## 시작하기

### 필수 요구사항

- Node.js 16.0 이상
- npm 또는 yarn

### 설치

```bash
# 종속성 설치
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:5173](http://localhost:5173)을 열어 확인하세요.

### 프로덕션 빌드

```bash
npm run build
```

빌드된 파일은 `dist` 폴더에 생성됩니다.

### 미리보기

```bash
npm run preview
```

## 프로젝트 구조

```
s2ML-front/
├── src/
│   ├── App.tsx         # 메인 애플리케이션 컴포넌트
│   ├── main.tsx        # 엔트리 포인트
│   └── index.css       # Tailwind CSS 설정
├── public/             # 정적 파일
├── index.html          # HTML 템플릿
└── vite.config.ts      # Vite 설정
```

## 주요 기능

- 🚀 **빠른 성능** - Vite를 통한 즉각적인 HMR
- 🎨 **현대적 디자인** - Tailwind CSS로 구현한 반응형 UI
- ✨ **부드러운 애니메이션** - Framer Motion 통합
- 📱 **반응형 레이아웃** - 모든 디바이스 지원
- 🔒 **타입 안정성** - TypeScript 전체 지원

## 라이선스

MIT
