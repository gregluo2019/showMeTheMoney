'use client';
import { useFetchData } from '/src/hooks/useFetchData';
import { BalanceSheetRow } from './BalanceSheetRow';
import { ISection, IHeader } from '/src/hooks/types';

export function BalanceSheet() {
  const { data, loading } = useFetchData('http://localhost:3001/api/balance');
  const reportsRows = data?.Reports?.[0]?.Rows;
  const reportsRowsSections: ISection[] = reportsRows?.filter((reportRow) => reportRow.RowType === 'Section');
  const reportsRowsHeader: IHeader = reportsRows?.find((reportRow) => reportRow.RowType === 'Header');
  // console.log({ reportsRowsHeader });
  console.log({ reportsRowsSections });

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <table border='1' style={{ borderCollapse: 'collapse', width: '70%', margin: '20px auto' }}>
      <thead>
        <tr>
          {reportsRowsHeader?.Cells.map((cell, index) => {
            return (
              <th key={index} className='text-right'>
                {cell.Value}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {reportsRowsSections?.map((sectionRow, index1) =>
          sectionRow.Rows.map((row, index2) => {
            return (
              <tr key={index1 + index2}>
                <BalanceSheetRow row={row} />
              </tr>
            );
          })
        )}
      </tbody>
    </table>
  );
}
