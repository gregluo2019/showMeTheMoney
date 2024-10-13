import { ISection } from '@/src/core/types';
import { SessionMultiRowsWithTitle } from './SessionMultiRowsWithTitle';
import { SessionOneRow } from './SessionOneRow';
import { SessionTitle } from './SessionTitle';

type Props = { session: ISection; collapseAll: boolean };

export function BalanceSheetSession({ session, collapseAll }: Props) {
  if (!session.Rows.length && session.Title) {
    return <SessionTitle title={session.Title} />;
  }

  if (session.Rows.length === 1 && !session.Title) {
    return <SessionOneRow row={session.Rows[0]} />;
  }

  return <SessionMultiRowsWithTitle session={session} collapseAll={collapseAll} key={collapseAll.toString()} />;
}
