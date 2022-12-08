import { FC } from 'react';
import Figure from '../models/figures/Figure';

interface LostFiguresProps {
  figures: Figure[];
  title: string;
}

const LostFigures: FC<LostFiguresProps> = ({ title, figures }) => {
  return (
    <div className="lost-box">
      <h3>{title}</h3>
      <div>
        {figures.map((figure) => (
          <div key={figure.id}>
            {figure.name}{' '}
            {figure.logo && <img src={figure.logo} alt="фигура" width={20} height={20} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LostFigures;
