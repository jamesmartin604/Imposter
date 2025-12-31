import { Category, Player } from '@/types/game';

export function pickRandomItem<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

export function selectImposter(players: Player[]): Player {
  return pickRandomItem(players);
}

export function selectWord(categories: Category[]) {
  const category = pickRandomItem(categories);
  return pickRandomItem(category.words);
}

export function selectStartingPlayer(players: Player[]): Player {
  return pickRandomItem(players);
}
