import { Movement } from './movement';

export interface Piece {
  id: string;
  sequence: number;
  title: string;
  collection: string;
  composer: string;
  instrument: string;
  duration: number;
  movements: Movement[];
}