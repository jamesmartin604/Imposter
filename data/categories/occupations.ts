import { Category } from '@/types/game';

export const occupations: Category = {
  id: 'occupations',
  name: 'Occupations',
  words: [
  { word: 'Doctor', hint: 'Stethoscope' },        // tool hint  
  { word: 'Teacher', hint: 'Chalk' },            // classroom reference  
  { word: 'Pilot', hint: 'Cockpit' },            // location/tool hint  
  { word: 'Chef', hint: 'Apron' },               // uniform hint  
  { word: 'Artist', hint: 'Easel' },             // work tool hint  
  { word: 'Musician', hint: 'Strings' },         // instrument-related  
  { word: 'Writer', hint: 'Quill' },             // symbolic of writing  
  { word: 'Engineer', hint: 'Blueprint' },       // planning tool hint  
  { word: 'Actor', hint: 'Stage' },              // environment hint  
  { word: 'Scientist', hint: 'Lab' },            // workplace hint  
  { word: 'Photographer', hint: 'Lens' },        // tool hint  
  { word: 'Dancer', hint: 'Tutu' },              // subtle performance clue  
  { word: 'Firefighter', hint: 'Hose' },         // action/tool clue  
  { word: 'Police Officer', hint: 'Badge' },     // symbol clue  
  { word: 'Farmer', hint: 'Plow' },             // work tool / environment hint  
],

};
