# 🐈 Nekolog (ねころぐ)

> **Gamify Your Git Workflow and Level Up Your Development Journey!**

Nekolog is a premium, beautifully crafted developer dashboard and quest-tracking mobile application built with **React Native** and **Expo**. It integrates your daily Git actions — commits, pushes, and issue resolution — into a gamified developer experience, complete with an interactive cat mascot (**Neko**), XP & levels, streaks, weekly contribution heatmaps, a repository explorer, pinned portfolio, recent badges, and a Git branch pipeline visualizer.

---

## ✨ Features

- **🎮 Gamified Developer Profile** — Track progress with XP, levels, and consecutive day streaks. Reaching XP thresholds triggers level-ups with animated feedback.
- **🐈 Interactive Mascot (Neko)** — Neko dynamically blinks, peeks out, and reacts to your activity with frame-by-frame PNG animations.
- **📅 Daily Quests** — Complete target Git milestones (e.g. *Make 3 Commits*, *Close 1 Issue*, *Push 2 Times*) to earn bonus XP.
- **📆 Weekly Challenges** — Longer-horizon goals that track your activity across the full week.
- **📊 Weekly Contribution Heatmap** — A GitHub-style grid showing daily developer activity, rendered directly in the app.
- **📈 Level & Streak Cards** — Dedicated cards for XP progress bars and consecutive activity streaks.
- **🗂️ Quest Preview** — A home-screen snapshot of your active daily quests and how close you are to completing them.
- **📂 Repository Explorer** — Browse all your GitHub repositories with total stars, forks, open issues, and primary language tags.
- **🌿 Git Branch Pipeline Visualizer** — View branch trees and pipeline statuses (Success / Running / Failed) inside the repository detail view.
- **🗃️ Repository Summary Card** — A compact summary view for key repository metrics.
- **📌 Pinned Portfolio** — Highlight your best repositories directly on your profile.
- **🏅 Recent Badges** — Showcase recently earned achievement badges on the profile screen.
- **👤 Profile Header** — Rich developer profile header with avatar, username, level badge, and XP snapshot.
- **🗃️ DevCard Shareable Screen** — A premium developer identity card dashboard featuring featured repositories, contribution stats, a github-style contribution heatmap grid, and easy sharing integrations.
- **💎 Ultra-Premium UI/UX**
  - Animated cross-fade splash → login screen transition.
  - Sleek, high-contrast dark theme with translucent glassmorphic elements.
  - Custom developer typography: **Roboto**, **JetBrains Mono**, and **Monaspace Neon**.
  - Smooth micro-animations throughout via React Native Reanimated.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| Language | TypeScript `~6.0.3` |
| UI Runtime | React `19.2.3` |
| Framework | React Native `0.85.3` + Expo SDK `~56.0.8` |
| State Management | Zustand `^5.0.14` |
| Animations | React Native Reanimated `4.3.1` |
| Vector Graphics | React Native SVG `15.15.4` |
| Safe Area Handling | React Native Safe Area Context `~5.7.0` |
| Font Loading | Expo Font `~56.0.5` |
| Status Bar | Expo Status Bar `~56.0.4` |

---

## 📁 Project Structure

```
Nekolog/
├── assets/                          # Static assets
│   ├── fonts/                       # Roboto, JetBrains Mono, Monaspace Neon
│   ├── images/                      # Avatar profiles and splash assets
│   └── mascot/                      # Neko frame-by-frame PNG states (open, mid, closed, peek, curious)
├── src/
│   ├── dev card/
│   │   ├── components/
│   │   │   ├── DevPulseCard.tsx      # Core DevCard showing repos and contribution heatmap
│   │   │   └── ShareButtons.tsx      # Social sharing action button grid (LinkedIn, X, WhatsApp, PNG)
│   │   └── devcard.tsx               # DevCard Screen Shell
│   ├── friends screen/
│   │   └── friends.tsx               # Friends network placeholder screen
│   ├── home screen/
│   │   ├── components/
│   │   │   ├── CommitCatBanner.tsx   # Animated Neko mascot banner with speech bubbles
│   │   │   ├── GlobalNavBar.tsx      # Bottom tab navigation bar
│   │   │   ├── GlobalProfileCard.tsx # Top-of-home profile snapshot card
│   │   │   ├── LevelProgressCard.tsx # XP progress bar and level display
│   │   │   ├── NekoLogTitle.tsx      # Branded app title header
│   │   │   ├── QuestsPreview.tsx     # Home-screen daily quest status preview
│   │   │   ├── StreakActiveCard.tsx  # Consecutive day streak tracker card
│   │   │   ├── Text.tsx              # Typography utility component
│   │   │   └── WeeklyPerformance.tsx # Weekly contribution heatmap grid
│   │   └── Home.tsx                  # Home Screen Shell
│   ├── profile screen/
│   │   ├── components/
│   │   │   ├── GitPipelineGraph.tsx      # Branch tree & pipeline status visualizer
│   │   │   ├── PinnedPortfolio.tsx       # Pinned repository portfolio section
│   │   │   ├── ProfileHeader.tsx         # Avatar, username, level badge & XP header
│   │   │   ├── RecentBadges.tsx          # Recently earned achievement badges
│   │   │   ├── RepositoriesList.tsx      # Full repository explorer list
│   │   │   └── RepositorySummaryCard.tsx # Compact repository metrics card
│   │   ├── all repos.tsx             # Repository Explorer Screen
│   │   └── profile screen.tsx        # Profile Screen Shell
│   ├── quest screen/
│   │   ├── components/
│   │   │   ├── DailyQuests.tsx       # Daily quest cards and progress tracking
│   │   │   ├── QuestCard.tsx         # Individual quest card component
│   │   │   ├── Text.tsx              # Typography utility component
│   │   │   └── WeeklyChallenges.tsx  # Weekly challenge tracker
│   │   └── quest.tsx                 # Quest Screen Shell
│   ├── setup screens/
│   │   ├── components/
│   │   │   └── NekoLogTitle.tsx      # Global title header
│   │   ├── Splashscreen.tsx          # Animated boot splash screen
│   │   └── login.tsx                 # GitHub connect screen with blinking Neko mascot
│   └── store/
│       └── useAppStore.ts            # Zustand global store (nav, XP, quests, streaks)
├── App.tsx                           # Application router & main entry shell
├── app.json                          # Expo build configuration
├── index.ts                          # Entry point register
└── package.json                      # Dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+
- **npm** (or yarn)
- **Expo Go** app on your physical device, or an iOS Simulator / Android Emulator

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/sreekar020/Nekolog.git
cd Nekolog

# 2. Install dependencies
npm install

# 3. Start the development server
npm run start
```

### Running on Devices

| Target | Command |
|---|---|
| iOS Simulator | Press `i` in terminal, or `npm run ios` |
| Android Emulator | Press `a` in terminal, or `npm run android` |
| Physical Device | Scan the QR code with **Expo Go** |
| Web Browser | Press `w` in terminal, or `npm run web` |

---

## 🎮 Core Architecture

### 💾 State Management — `useAppStore.ts`

Nekolog uses a lightweight **Zustand** store to manage global state across all tabs:

- **`currentScreen`** — Switches between splash, login, and the main dashboard.
- **`activeTab`** — Tracks which tab is active: *Home*, *Quests*, *Friends*, *Profile*, or *DevCard*.
- **XP & Levels** — Gamification calculations; level threshold increases by 200 XP per level.
- **Streak Tracking** — Counts and persists consecutive active days.
- **Quest Actions** — Increments/decrements daily commit, push, and issue progress; awards XP + completion bonuses when quests are finished.

### 🎭 Mascot Animations — `login.tsx` & `CommitCatBanner.tsx`

- **Blinking Loop** — On the login screen, Neko blinks periodically through preloaded PNG frames (`neko_open` → `neko_mid` → `neko_closed`).
- **Peeking Guide** — Neko slides in from the edge with speech bubbles. Tap to dismiss.

### 🌿 Git Branch Pipeline Graph — `GitPipelineGraph.tsx`

Renders a branch tree for a selected repository using **React Native SVG**, with coloured pipeline status indicators (✅ Success / 🔄 Running / ❌ Failed) for each branch node.

### 📊 Weekly Performance Heatmap — `WeeklyPerformance.tsx`

A custom GitHub-contribution-style calendar grid rendered with React Native SVG, coloured by activity intensity for the trailing 7-day window.

### 🗃️ DevCard Identity Card — `devcard.tsx`

Renders a high-fidelity, shareable developer card containing:
- **Featured Repositories**: Up to 3 select repositories displaying language badges, commit metrics, and star counts.
- **GitHub Contribution Heatmap**: A 10-column contribution grid showing color-coded activity frequencies.
- **Branding & Footer**: Official DevPulse branding including a custom Git-branch vector logo.
- **Social Integrations**: Action triggers for LinkedIn, Twitter / X, WhatsApp, and image exports ("Save PNG").

---

## ⚖️ License

Distributed under the **MIT License**. See [LICENSE](./LICENSE) for details.
