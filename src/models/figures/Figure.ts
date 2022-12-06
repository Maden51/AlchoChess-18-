import Colors from "../Colors";
import logo from '../../assets/img/black-king.png';
import Cell from "../Cell";

export enum FigureNames {
  FIGURE = "figure",
  KING = "king",
  BISHOP = "bishop",
  KNIGHT = "knight",
  PAWN = "pawn",
  QUEEN = "queen",
  ROOK = "rook"
}

class Figure {
  color: Colors;
  logo: typeof logo | null;
  cell: Cell;
  name: FigureNames;
  id: number;

  constructor(color: Colors, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.logo = null;
    this.name = FigureNames.FIGURE;
    this.id = Math.random();
  }
  canMove(Cell: Cell) : boolean {
    return true;
  }
  
  moveFigure(Cell: Cell) {

  }
}



export default Figure;