# 📸 Vue.js + Express 프로젝트

이 프로젝트는 **Vue 3 (Vite)** 기반의 프론트엔드와 **Node.js (Express)** 기반의 백엔드로 구성된 이미지 포트폴리오 웹 애플리케이션입니다.

프론트는 사용자의 사진 폴더를 갤러리로 구성하고, 백엔드는 이미지 파일을 정적 경로로 서비스합니다.

---

## 📁 프로젝트 구조

```
프로젝트/
├── front/       # 프론트엔드(Vue + Vite)
└── backend/     # 백엔드(Node.js + Express)
```

---

## ✅ 사전 준비 사항

- [Node.js](https://nodejs.org/) (LTS 버전 권장)
- [Git](https://git-scm.com/)
- npm은 Node.js 설치 시 포함되어 있습니다.

---

## 🚀 실행 가이드

### 1️⃣ 백엔드 실행

```bash
cd C:\Users\USER\Desktop\데이터\프로젝트\backend
npm install         # 처음 1회만
node server.js
```

- 백엔드 서버는 기본적으로 `http://localhost:3000` 에서 실행됩니다.
- 이미지 경로 예: `http://localhost:3000/images/2025_05_04_일러스타페스/파일명.jpg`

---

### 2️⃣ 프론트엔드 실행 (개발 모드)

```bash
cd C:\Users\USER\Desktop\데이터\프로젝트\front
npm install         # 처음 1회만
npm run dev
```

- 실행 후 브라우저에서 `http://localhost:5173` 접속
- 프론트는 백엔드 서버(`localhost:3000`)에서 이미지를 불러옵니다.

---

### 3️⃣ 프론트엔드 배포 (빌드)

```bash
npm run build
```

- `/dist` 폴더가 생성되며, 정적 웹 호스팅에 업로드하여 사용할 수 있습니다.

---

## 🧪 Git 사용 예시

### 백엔드 코드 수정 시

```bash
cd backend
git add .
git commit -m "백엔드 코드 수정"
git push origin main
```

### 프론트 코드 수정 시

```bash
cd front
git add .
git commit -m "프론트 코드 수정"
git push origin main
```

---

## 📎 참고 사항

- 백엔드에서 `/public/images/{폴더명}/{파일명}` 형태로 이미지 정적 제공
- 프론트 컴포넌트는 이 경로를 통해 이미지를 요청함
- 예:  
  `http://localhost:3000/images/2025_05_04_일러스타페스/sample.jpg`

---

## 👤 작성자

- **닉네임**: 전자넹  
- **GitHub**: [@zeonzwane01](https://github.com/zeonzwane01)

---

> 이 문서는 처음 보는 사람도 쉽게 실행할 수 있도록 작성되었습니다. 실행 중 문제가 발생하면 `node_modules` 재설치 또는 포트 충돌 여부를 확인하세요.


---

## 📥 프로젝트 코드 다운로드 방법

처음 방문한 경우 아래 방법 중 하나로 코드를 내려받을 수 있습니다.

### ✅ 1. Git으로 클론하기 (권장)

```bash
git clone https://github.com/zeonzwane01/front.git
git clone https://github.com/zeonzwane01/backend.git
```

- `front`와 `backend` 폴더가 각각 복제됩니다.
- 이후 각 폴더에서 실행 가이드를 따라 진행하면 됩니다.

### 📁 2. GitHub 웹사이트에서 수동 다운로드

1. 아래 저장소에 접속:
   - 프론트엔드: [https://github.com/zeonzwane01/front](https://github.com/zeonzwane01/front)
   - 백엔드: [https://github.com/zeonzwane01/backend](https://github.com/zeonzwane01/backend)

2. 초록색 `Code` 버튼 클릭 → `Download ZIP` 선택

3. 압축을 해제한 후 각각의 폴더에서 실행 가이드를 따라 진행

> Git 설치가 어려운 경우 ZIP 다운로드 방식도 충분합니다.

---
