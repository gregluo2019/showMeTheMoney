'use client';
import { BalanceSheetRow } from './BalanceSheetRow';
import { ISection } from '@/src/utils/types';

export function BalanceSheetSession({ session }: { session: ISection }) {
  return (
    <table className='border-solid border-2 w-full'>
      <tbody>
        <tr className='bg-slate-200'>
          <td>{session.Title}</td>
          <td></td>
          <td></td>
        </tr>

        {session.Rows.map((row, index) => {
          return (
            <tr key={index} className={row.RowType === 'SummaryRow' ? 'font-bold' : ''}>
              <BalanceSheetRow row={row} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
