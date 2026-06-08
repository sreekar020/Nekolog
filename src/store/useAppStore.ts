import { create } from 'zustand';

export interface DevCardRepository {
  name: string;
  language: string;
  languageColor: string;
  commits: number;
  stars: number;
}

export interface AppState {
  // Navigation/Screen State
  currentScreen: 'splash' | 'login' | 'home';
  activeTab: 'Home' | 'Quests' | 'Friends' | 'Profile' | 'DevCard';
  profileSubScreen: 'main' | 'all_repos';

  // User Profile State
  username: string;
  level: number;
  streakDays: number;
  xp: number;
  
  // DevCard State
  devCardRepos: DevCardRepository[];
  devCardContributionsCount: string;
  devCardContributionsRange: string;
  devCardHeatmap: number[][];
  
  // Daily Quests Progress
  commitsCount: number;
  commitsTotal: number;
  pushesCount: number;
  pushesTotal: number;
  issuesCount: number;
  issuesTotal: number;
  
  // Actions
  setScreen: (screen: 'splash' | 'login' | 'home') => void;
  setActiveTab: (tab: 'Home' | 'Quests' | 'Friends' | 'Profile' | 'DevCard') => void;
  setUsername: (username: string) => void;
  addXp: (amount: number) => void;
  incrementCommits: () => void;
  incrementPushes: () => void;
  incrementIssues: () => void;
  resetQuests: () => void;
  setProfileSubScreen: (subScreen: 'main' | 'all_repos') => void;
}

export const useAppStore = create<AppState>((set) => ({
  // Navigation Defaults
  currentScreen: 'splash',
  activeTab: 'Home',
  profileSubScreen: 'main',
  
  // User Profile Defaults (Figma Specs)
  username: 'octocat',
  level: 12,
  streakDays: 6,
  xp: 2450,

  // DevCard Defaults
  devCardRepos: [
    { name: 'hyper-terminal-ai', language: 'Rust', languageColor: '#FF7B72', commits: 124, stars: 489 },
    { name: 'nebula-query-engine', language: 'Go', languageColor: '#58A6FF', commits: 98, stars: 312 },
    { name: 'react-visual-git-graph', language: 'TypeScript', languageColor: '#F1E05A', commits: 256, stars: 820 },
  ],
  devCardContributionsCount: '+126',
  devCardContributionsRange: 'over 30d',
  devCardHeatmap: [
    [0, 3, 3], // Col 1 (grey, green, green)
    [3, 2, 0], // Col 2 (green, light-green, grey)
    [3, 0, 3], // Col 3 (green, grey, green)
    [3, 0, 3], // Col 4 (green, grey, green)
    [2, 3, 3], // Col 5 (light-green, green, green)
    [0, 3, 2], // Col 6 (grey, green, light-green)
    [3, 2, 0], // Col 7 (green, light-green, grey)
    [3, 0, 3], // Col 8 (green, grey, green)
    [3, 0, 3], // Col 9 (green, grey, green)
    [2, 3, 3], // Col 10 (light-green, green, green)
  ],
  
  // Daily Quests Defaults (Starts close to completion for premium preview feel)
  commitsCount: 2,
  commitsTotal: 3,
  pushesCount: 1,
  pushesTotal: 2,
  issuesCount: 0,
  issuesTotal: 1,
  
  // Actions implementation
  setScreen: (screen) => set({ currentScreen: screen }),
  
  setActiveTab: (tab) => set({ activeTab: tab }),
  
  setUsername: (name) => set({ username: name }),
  
  setProfileSubScreen: (subScreen) => set({ profileSubScreen: subScreen }),
  
  addXp: (amount) => set((state) => {
    const newXp = state.xp + amount;
    // Calculate level based on XP (every 200 XP threshold translates to a level)
    // 2400 XP = lvl 12, 2600 XP = lvl 13, 2800 XP = lvl 14, etc.
    const newLevel = Math.floor(newXp / 200);
    return { 
      xp: newXp,
      level: newLevel
    };
  }),
  
  incrementCommits: () => set((state) => {
    if (state.commitsCount >= state.commitsTotal) return {};
    
    const newCount = state.commitsCount + 1;
    const isCompleted = newCount === state.commitsTotal;
    const questBonusXp = isCompleted ? 120 : 0; // +120 XP daily quest completion reward
    const baseXp = 20; // +20 XP for single commit
    const totalXpToAdd = questBonusXp + baseXp;
    
    const newXp = state.xp + totalXpToAdd;
    const newLevel = Math.floor(newXp / 200);
    
    return {
      commitsCount: newCount,
      xp: newXp,
      level: newLevel
    };
  }),
  
  incrementPushes: () => set((state) => {
    if (state.pushesCount >= state.pushesTotal) return {};
    
    const newCount = state.pushesCount + 1;
    const isCompleted = newCount === state.pushesTotal;
    const questBonusXp = isCompleted ? 180 : 0; // +180 XP daily quest completion reward
    const baseXp = 30; // +30 XP for single push
    const totalXpToAdd = questBonusXp + baseXp;
    
    const newXp = state.xp + totalXpToAdd;
    const newLevel = Math.floor(newXp / 200);
    
    return {
      pushesCount: newCount,
      xp: newXp,
      level: newLevel
    };
  }),
  
  incrementIssues: () => set((state) => {
    if (state.issuesCount >= state.issuesTotal) return {};
    
    const newCount = state.issuesCount + 1;
    const isCompleted = newCount === state.issuesTotal;
    const questBonusXp = isCompleted ? 150 : 0; // +150 XP daily quest completion reward
    const baseXp = 25; // +25 XP for closing an issue
    const totalXpToAdd = questBonusXp + baseXp;
    
    const newXp = state.xp + totalXpToAdd;
    const newLevel = Math.floor(newXp / 200);
    
    return {
      issuesCount: newCount,
      xp: newXp,
      level: newLevel
    };
  }),
  
  resetQuests: () => set({
    commitsCount: 0,
    pushesCount: 0,
    issuesCount: 0,
    xp: 2450,
    level: 12
  }),
}));
