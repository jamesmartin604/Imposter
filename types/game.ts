export type Player = {
  id: string;
  name: string;
};

export type Category = {
  id: string;
  name: string;
  words: {
    word: string;
    hint: string;
  }[];
};

export type GameState = {
  players: Player[];
  imposterId: string;
  word: string;
  hint: string;
  currentPlayerIndex: number;
};
