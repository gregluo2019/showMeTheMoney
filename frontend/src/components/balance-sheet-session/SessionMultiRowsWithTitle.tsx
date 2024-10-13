import { ISection } from '@/src/core/types';
import { CollapsibleTable } from '@/src/shared/CollapsibleTable';
import { SessionRow } from './SessionRow';

export function SessionMultiRowsWithTitle({ session }: { session: ISection }) {
  const header = session.Title;

  const body = session.Rows.map((row, index) => {
    return (
      <tr key={index} className={row.RowType === 'SummaryRow' ? 'font-bold' : ''}>
        <SessionRow row={row} />
      </tr>
    );
  });

  return <CollapsibleTable header={header} body={body} />;
}
