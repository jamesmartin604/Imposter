import { Category, Player } from '@/types/game';

export function pickRandomItem<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

export function selectImposters(players: Player[], count: number): Player[] {
  const shuffled = [...players].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function maxImposters(playerCount: number): number {
  if (playerCount >= 9) return 3;
  if (playerCount >= 6) return 2;
  return 1;
}

export function selectWord(categories: Category[]) {
  const category = pickRandomItem(categories);
  return pickRandomItem(category.words);
}

export function selectStartingPlayer(players: Player[]): Player {
  return pickRandomItem(players);
}
