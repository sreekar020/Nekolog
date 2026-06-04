# 🐈 Nekolog (ねころぐ)

> **Gamify Your Git Workflow and Level Up Your Development Journey!**

Nekolog is a premium, beautifully crafted developer dashboard and quest-tracking mobile application built with **React Native** and **Expo**. It integrates your daily Git actions (commits, pushes, issue resolution) into a gamified dashboard, complete with an interactive cat mascot (**Neko**), levels, XP, streaks, weekly contribution heatmaps, and a repository branch visualizer.

---

## ✨ Features

- **🎮 Gamified Developer Profile**: Track your progress with XP, levels, and consecutive streaks. Reaching XP thresholds triggers level-ups!
- **🐈 Interactive Mascot (Neko)**: Neko guide-cat dynamically blinks, reacts, peeks out to provide guidance, and reacts to your tasks.
- **📅 Daily Quests & Weekly Challenges**: Complete target git milestones (e.g., *Make 3 Commits*, *Close 1 Issue*, *Create 2 Pushes*) to claim bonus XP.
- **📊 Weekly Contribution Heatmap**: A custom GitHub-style grid representation of your daily developer activity directly on your phone.
- **📂 Repository Explorer**: Browse all your GitHub repositories, check total stars, forks, open issues, and primary language indicators.
- **🌿 Git Branch Pipeline Visualizer**: View branch trees and pipeline build statuses (Success, Running, Failed) directly inside the repository explorer.
- **💎 Ultra-Premium UI/UX**:
  - Seamless animated cross-fade splash screen to login screen.
  - Interactive custom buttons, search inputs, and navigation.
  - Custom developer typography: Roboto, JetBrains Mono, and Monaspace Neon.
  - Sleek, high-contrast dark theme with translucent glassmorphic elements.

---

## 🛠️ Technology Stack

### 🚀 Core Technologies & Frameworks

| Badge | Technology / Library | Version | Role in Nekolog |
| :--- | :--- | :--- | :--- |
| ![Expo](https://img.shields.io/badge/Expo-56.0-00020D?style=flat-pack&logo=expo&logoColor=white) | **Expo SDK** | `~56.0.8` | App workflow tooling, custom font loaders, native build configuration |
| ![React Native](https://img.shields.io/badge/React_Native-0.85-20232A?style=flat-pack&logo=react&logoColor=61DAFB) | **React Native Core** | `0.85.3` | Native cross-platform components, gesture system, layout engines |
| ![React](https://img.shields.io/badge/React-19.2-20232A?style=flat-pack&logo=react&logoColor=61DAFB) | **React Core** | `19.2.3` | Component model, state orchestration, custom UI hooks |
| ![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=flat-pack&logo=typescript&logoColor=white) | **TypeScript** | `~6.0.3` | Static typing, interface contracts for game states and components |

### 📦 Key Dependencies & Libraries

- **State Management**: [Zustand](https://github.com/pmndrs/zustand) (`^5.0.14`) - *Powers the global game engine, handling XP gains, levels, navigation states, daily/weekly quests, and profile information.*
- **Animations**: [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) (`4.3.1`) - *Handles physics-based transitions, mascot scale-spring dynamics, and seamless screen cross-fades.*
- **Vector Graphics**: [React Native SVG](https://github.com/software-mansion/react-native-svg) (`15.15.4`) - *Renders scalable icons, chevron vectors, search bars, and the git pipeline flow graph with pixel-perfect resolution.*
- **Layout Safety**: [React Native Safe Area Context](https://github.com/th3rdwave/react-native-safe-area-context) (`~5.7.0`) - *Ensures notch/island safety on modern iOS & Android devices.*
- **Status Bar**: `expo-status-bar` (`~56.0.4`) - *Maintains light-on-dark technical status bar aesthetics consistently across OS targets.*

### 🎨 Typography & Design Tokens

- **Fonts**: Custom assets registered using `expo-font`:
  - `Roboto-Regular`, `Roboto-Medium`, `Roboto-Bold`, `Roboto-Black` (Clean UI system text)
  - `JetBrainsMono-ExtraBold` (Monospace console branding)
  - `MonaspaceNeon-Regular`, `MonaspaceNeon-Bold` (Coding aesthetic typography)
- **Theme**: HSL-based dark mode palette tailored for visual contrast matching premium terminal interfaces.


---

## 📁 Project Structure

```bash
Nekolog/
├── assets/                    # Static assets & assets configuration
│   ├── fonts/                 # Custom Typography (Roboto, JetBrains Mono, Monaspace Neon)
│   ├── images/                # Avatar profiles and splash assets
│   └── mascot/                # Neko frame-by-frame state and expression frames (happy, closed, peek, curious)
├── src/                       # Main application source
│   ├── home screen/           # Home tab dashboard
│   │   ├── components/        # Profile cards, contribution heatmap grid, mascot banners
│   │   └── Home.tsx           # Home Screen Shell
│   ├── profile screen/        # Profile & Repository explorer tab
│   │   ├── components/        # Repos list, Git branch pipelines graph, summary cards
│   │   ├── all repos.tsx      # Repository Explorer Screen
│   │   └── profile screen.tsx # Profile Screen Shell
│   ├── quest screen/          # Daily and weekly quest panel
│   │   ├── components/        # Quest logging buttons and cards
│   │   └── quest.tsx          # Quest Screen Shell
│   ├── setup screens/         # Boot and Authentication interfaces
│   │   ├── components/        # App Title headers and global components
│   │   ├── Splashscreen.tsx   # Custom animated boot splash screen
│   │   └── login.tsx          # GitHub connect login screen with blinking peeking mascot
│   └── store/                 # Global state management
│       └── useAppStore.ts     # Zustand Store (nav state, profile XP tracker, quest triggers)
├── App.tsx                    # Application router & main entry shell
├── app.json                   # Expo build configuration metadata
├── index.ts                   # Entry point register
└── package.json               # Dependencies and scripts definitions
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18+) and **npm** or **yarn** installed on your development machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sreekar020/Nekolog.git
   cd Nekolog
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run start
   ```

### Running on Devices

- **iOS Simulator**: Press `i` in your terminal after starting the dev server, or run `npm run ios`.
- **Android Emulator**: Press `a` in your terminal after starting the dev server, or run `npm run android`.
- **Expo Go App**: Scan the QR code displayed in your terminal using your iOS Camera or Android Expo Go app to test directly on your physical device.
- **Web App**: Press `w` in your terminal after starting the dev server, or run `npm run web`.

---

## 🎮 How it Works (Core Architecture)

### 💾 State Management (`useAppStore.ts`)
Nekolog uses a lightweight **Zustand** store to manage global states across different tabs:
- **`currentScreen`**: Seamlessly switches between the splash loading screen, login portal, and the home dashboard.
- **`activeTab`**: Tracks navigation between *Home*, *Quests*, and *Profile*.
- **XP & Levels**: Handles gamification calculations. Standard level threshold increases every 200 XP.
- **Quest Actions**: Increments/decrements progress for Daily Commits, Pushes, and Issues, and dishes out corresponding XP rewards + bonuses when quests are fully completed.

### 🎭 Interactive Mascot Animations (`login.tsx` & `CommitCatBanner.tsx`)
- **Blinking Mascot**: In the login portal, Neko's eyes blink periodically using a ping-pong state loop through preloaded PNG assets (`neko_open`, `neko_mid`, `neko_closed`).
- **Peeking Guide**: Slides in from the left and displays speech bubbles alerting users to login steps. Tap the screen to dismiss Neko and slide them back.

---

## ⚖️ License

Distributed under the MIT License. See [LICENSE](file:///c:/Users/sreek/Desktop/Nekolog/LICENSE) for more details.
