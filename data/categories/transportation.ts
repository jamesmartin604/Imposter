import { Category } from '@/types/game';

export const transportation: Category = {
  id: 'transportation',
  name: 'Transportation',
  words: [
  { word: 'Car', hint: 'Engine' },             // essential part hint  
  { word: 'Bicycle', hint: 'Pedal' },         // action-based hint  
  { word: 'Train', hint: 'Track' },           // environment hint  
  { word: 'Airplane', hint: 'Wing' },         // tool/feature hint  
  { word: 'Boat', hint: 'Anchor' },           // function hint  
  { word: 'Motorcycle', hint: 'Helmet' },     // safety hint  
  { word: 'Bus', hint: 'Stop' },              // environment/action hint  
  { word: 'Subway', hint: 'Tunnel' },         // location hint  
  { word: 'Scooter', hint: 'Kick' },          // action hint  
  { word: 'Helicopter', hint: 'Rotor' },      // feature hint  
  { word: 'Truck', hint: 'Cargo' },           // function hint  
  { word: 'Skateboard', hint: 'Ramp' },       // environment/action hint  
  { word: 'Ferry', hint: 'Dock' },            // location hint  
  { word: 'Tram', hint: 'Rails' },            // environment hint  
  { word: 'Hot Air Balloon', hint: 'Basket' },// object hint  
],

};
