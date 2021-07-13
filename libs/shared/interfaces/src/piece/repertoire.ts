import { Piece } from './piece';

export interface Repertoire {
  id: string;
  board: string;
  instrument: string;
  grade: string;
  diploma: string;
  pieces: Piece[];
}