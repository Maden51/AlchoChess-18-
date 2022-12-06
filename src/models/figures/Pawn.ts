import Cell from "../Cell";
import Colors from "../Colors";
import Figure, { FigureNames } from "./Figure";
import blackLogo from "../../assets/img/black-pawn.png";
import whiteLogo from "../../assets/img/white-pawn.png";

class Pawn extends Figure{
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.PAWN;
  }
}

export default Pawn;