'use client';
import { IRow } from '/src/hooks/types';
import { isNumeric } from '/src/utils/utilities';

export function BalanceSheetRow({ row }: { row: IRow }) {
  // console.log({ row });

  return (
    <>
      {row.Cells.map((cell, index) => {
        return (
          <td key={index} className={isNumeric(cell.Value) ? 'text-right' : ''}>
            {cell.Value}
          </td>
        );
      })}
    </>
  );
}
