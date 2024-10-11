'use client';
import { useFetchData } from '/src/hooks/useFetchData';
import { BalanceSheetSession } from './BalanceSheetSession';
import { ISection, IHeader } from '/src/hooks/types';

export function BalanceSheet() {
  const { data, loading } = useFetchData('http://localhost:3001/api/balance');
  const reportsRows = data?.Reports?.[0]?.Rows;
  const reportsRowsSections: ISection[] = reportsRows?.filter((reportRow) => reportRow.RowType === 'Section');
  const reportsRowsHeader: IHeader = reportsRows?.find((reportRow) => reportRow.RowType === 'Header');
  // console.log({ reportsRowsHeader });
  // console.log({ reportsRowsSections });
  console.log({ reportsRows });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <table border='1' style={{ borderCollapse: 'collapse', width: '70%', margin: '20px auto' }}>
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
    </>
  );
}
