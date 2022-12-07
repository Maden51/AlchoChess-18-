import { FC } from 'react';
import Cell from '../models/Cell';

interface CellProps {
  cell: Cell;
  selected: boolean;
  handleClick: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({ cell, selected, handleClick }) => {
  return (
    <div
      className={['cell', cell.color, selected ? 'selected' : ''].join(' ')}
      onClick={() => handleClick(cell)}
      style={{ background: cell.available && cell.figure ? 'green' : '' }}>
      {cell.figure?.logo && <img src={cell.figure.logo} alt={cell.figure.name} />}
      {cell.available && !cell.figure && <div className={'available'}></div>}
    </div>
  );
};

export default CellComponent;
