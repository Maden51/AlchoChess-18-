import Cell from "../Cell";
import Colors from "../Colors";
import Figure, { FigureNames } from "./Figure";
import blackLogo from "../../assets/img/black-queen.png";
import whiteLogo from "../../assets/img/white-queen.png";

class Queen extends Figure{
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.QUEEN;
  }
  canMove(target: Cell): boolean{
    if(!super.canMove(target))
      return false;
    if(this.cell.isEmptyVertical(target) || this.cell.isEmptyHorizontal(target) || this.cell.isEmptyDiagonal(target))
      return true;
    return false;
  }
}

export default Queen;