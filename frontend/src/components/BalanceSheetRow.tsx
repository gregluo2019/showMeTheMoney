'use client';
import { IRow } from '/src/hooks/types';
import { isNumeric } from '/src/utils/utilities';

export function BalanceSheetRow({ row }: { row: IRow }) {
  return (
    <>
      {row.Cells.map((cell, index) => {
        return (
          <td key={index + cell.Value} className={`${isNumeric(cell.Value) ? 'text-right' : ''} ${index === 0 ? 'w-1/2' : 'w-1/4'}`}>
            {cell.Value}
          </td>
        );
      })}
    </>
  );
}
