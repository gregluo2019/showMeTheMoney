'use client';
import { IHeader, ISection, RowType } from '@/src/core/types';
//import { useFetchData } from '@/src/hooks/useFetchData';
import { useState } from 'react';
import { useFetchDataWithSWR } from '../hooks/useFetchDataWithSWR';
import { BalanceSheetSession } from './balance-sheet-session/BalanceSheetSession';
import { BalanceSheetHeader } from './BalanceSheetHeader';

export function BalanceSheet() {
  const { error, data, isLoading } = useFetchDataWithSWR('http://localhost:3001/api/balanceSheet');
  // const { error, data, isLoading } = useFetchData('http://localhost:3001/api/balanceSheet');

  const reports = (data as any)?.Reports?.[0]?.Rows;
  const reportsSections: ISection[] = reports?.filter((reportRow: ISection | IHeader) => reportRow.RowType === RowType.Section);
  const reportsHeader: IHeader = reports?.find((reportRow: ISection | IHeader) => reportRow.RowType === RowType.Header);
  const reportTitle = (data as any)?.Reports?.[0]?.ReportTitles?.join(' - ');

  const [collapseAll, setCollapseAll] = useState(false);

  const handleCollapse = () => {
    setCollapseAll(!collapseAll);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error happened.</div>;
  }

  return (
    <main>
      <h2 className='text-center text-xl mt-4'>{reportTitle}</h2>

      <div className='w-10/12 mx-auto text-right'>
        <label>
          <input type='checkbox' onChange={handleCollapse} checked={collapseAll} /> Hide All Details
        </label>
      </div>

      <table className='w-10/12 my-5 mx-auto' data-testid='main-table'>
        <tbody>
          <tr>
            <td>
              <BalanceSheetHeader header={reportsHeader} />
            </td>
          </tr>
          <tr>
            <td>{reportsSections?.map((session, index) => <BalanceSheetSession session={session} collapseAll={collapseAll} key={session.Title + index} />)}</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
