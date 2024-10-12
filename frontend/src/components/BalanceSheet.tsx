'use client';
import { useFetchData } from '@/src/hooks/useFetchData';
import { BalanceSheetSession } from './BalanceSheetSession';
import { ISection, IHeader } from '@/src/utils/types';

export function BalanceSheet() {
  const { error, data, loading } = useFetchData('http://localhost:3001/api/balanceSheet');

  const reportsRows = (data as any)?.Reports?.[0]?.Rows;
  const reportsRowsSections: ISection[] = reportsRows?.filter((reportRow: ISection | IHeader) => reportRow.RowType === 'Section');
  const reportsRowsHeader: IHeader = reportsRows?.find((reportRow: ISection | IHeader) => reportRow.RowType === 'Header');
  const reportTitle = (data as any)?.Reports?.[0]?.ReportTitles?.join(' - ');

  console.log(data);
  // console.log({ reportsRowsSections });
  // console.log({ reportsRows });

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
              <table className='w-full'>
                <tbody>
                  <tr>
                    {reportsRowsHeader?.Cells.map((cell, index) => {
                      return (
                        <th key={index + cell.Value} className={`text-right ${index === 0 ? 'w-1/2' : 'w-1/4'}`}>
                          {cell.Value}
                        </th>
                      );
                    })}
                  </tr>
                </tbody>
                <tbody></tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td>{reportsRowsSections?.map((session, index) => <BalanceSheetSession session={session} key={session.Title + index} />)}</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
