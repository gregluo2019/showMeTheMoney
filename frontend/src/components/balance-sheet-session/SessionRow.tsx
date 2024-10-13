import { IRow } from '@/src/core/types';
import { isNumeric } from '@/src/utils/utilities';

export function SessionRow({ row }: { row: IRow }) {
  return (
    <>
      {row.Cells.map((cell, index) => {
        return (
          <td key={index + cell.Value} className={`${isNumeric(cell.Value) ? 'text-right' : ''} ${index === 0 ? 'w-1/2' : 'w-1/4'}`}>
            {`${isNumeric(cell.Value) ? '$' : ''}${cell.Value}`}
          </td>
        );
      })}
    </>
  );
}
