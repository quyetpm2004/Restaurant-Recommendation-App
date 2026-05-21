import { Experience } from '../types';

const STORAGE_PREFIX = 'user-experiences:';

export function loadUserExperiences(restaurantId: string): Experience[] {
  try {
    const raw = localStorage.getItem(`${STORAGE_PREFIX}${restaurantId}`);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Experience[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveUserExperiences(restaurantId: string, experiences: Experience[]): void {
  try {
    localStorage.setItem(`${STORAGE_PREFIX}${restaurantId}`, JSON.stringify(experiences));
  } catch {
    // Quota exceeded or private browsing — ignore silently
  }
}
