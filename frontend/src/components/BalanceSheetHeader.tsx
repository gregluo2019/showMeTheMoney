import { IHeader } from '@/src/core/types';

export function BalanceSheetHeader({ header }: { header: IHeader }) {
  return (
    <table className='w-full'>
      <tbody>
        <tr>
          {header?.Cells.map((cell, index) => {
            return (
              <th key={index + cell.Value} className={`text-right ${index === 0 ? 'w-1/2' : 'w-1/4'}`}>
                {cell.Value}
              </th>
            );
          })}
        </tr>
      </tbody>
    </table>
  );
}
