'use client';
import { IHeader, ISection } from '@/src/core/types';
import { useFetchData } from '@/src/hooks/useFetchData';
import { BalanceSheetSession } from './balance-sheet-session/BalanceSheetSession';
import { BalanceSheetHeader } from './BalanceSheetHeader';

export function BalanceSheet() {
  const { error, data, loading } = useFetchData('http://localhost:3001/api/balanceSheet');

  const reports = (data as any)?.Reports?.[0]?.Rows;
  const reportsSections: ISection[] = reports?.filter((reportRow: ISection | IHeader) => reportRow.RowType === 'Section');
  const reportsHeader: IHeader = reports?.find((reportRow: ISection | IHeader) => reportRow.RowType === 'Header');
  const reportTitle = (data as any)?.Reports?.[0]?.ReportTitles?.join(' - ');

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error happened.</div>;
  }

  return (
    <main>
      <h2 className='text-center text-xl mt-4'>{reportTitle}</h2>

      <table className='w-10/12 my-5 mx-auto' data-testid='main-table'>
        <tbody>
          <tr>
            <td>
              <BalanceSheetHeader header={reportsHeader} />
            </td>
          </tr>
          <tr>
            <td>{reportsSections?.map((session, index) => <BalanceSheetSession session={session} key={session.Title + index} />)}</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
