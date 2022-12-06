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
}

export default Queen;