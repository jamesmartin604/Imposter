import { Category } from '@/types/game';

export const sports: Category = {
  id: 'sports',
  name: 'Sports',
  words: [
  { word: 'Soccer', hint: 'Goal' },            // action-based hint  
  { word: 'Basketball', hint: 'Hoop' },       // iconic object  
  { word: 'Tennis', hint: 'Racket' },         // equipment hint  
  { word: 'Golf', hint: 'Putter' },           // equipment/action hint  
  { word: 'Swimming', hint: 'Lane' },         // environment clue  
  { word: 'Running', hint: 'Track' },         // place/action hint  
  { word: 'Boxing', hint: 'Glove' },          // equipment hint  
  { word: 'Cycling', hint: 'Pedal' },         // action hint  
  { word: 'Skiing', hint: 'Slope' },          // location/action hint  
  { word: 'Baseball', hint: 'Diamond' },      // field shape hint  
  { word: 'Volleyball', hint: 'Net' },        // equipment/environment hint  
  { word: 'Surfing', hint: 'Wave' },          // environment/action hint  
  { word: 'Cricket', hint: 'Stump' },         // equipment hint  
  { word: 'Gymnastics', hint: 'Balance' },    // action/concept hint  
  { word: 'Archery', hint: 'Target' },        // objective hint  
],

};
