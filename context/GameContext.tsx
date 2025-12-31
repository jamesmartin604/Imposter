import { categories } from '@/data/categories';
import { Player } from '@/types/game';
import { createContext, useContext, useState } from 'react';

type GameContextType = {
  players: Player[];
  setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;

  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;

  resetGame: () => void;
};

const GameContext = createContext<GameContextType | null>(null);

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [players, setPlayers] = useState<Player[]>([]);

  // ✅ DEFAULT: all categories selected once
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    categories.map(c => c.id)
  );

  const resetGame = () => {
    // game-specific reset only
    // players + categories persist
  };

  return (
    <GameContext.Provider
      value={{
        players,
        setPlayers,
        selectedCategories,
        setSelectedCategories,
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within GameProvider');
  }
  return context;
}
