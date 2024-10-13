import { ISection } from '@/src/core/types';
import { useState } from 'react';
import { SessionRow } from './SessionRow';

type Props = { session: ISection; collapseAll?: boolean };

export function SessionMultiRowsWithTitle({ session, collapseAll = false }: Props) {
  const [collapsed, setCollapsed] = useState(collapseAll);

  const header = session.Title;

  const body = session.Rows.filter((row) => (collapsed ? row.RowType === 'SummaryRow' : true)).map((row, index) => (
    <tr key={index} className={row.RowType === 'SummaryRow' ? 'font-bold' : ''}>
      <SessionRow row={row} />
    </tr>
  ));

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <table className='w-full my-2 border-solid border-2 border-slate-300'>
      <thead>
        <tr className='bg-slate-200'>
          <th className='text-left text-lg'>{header}</th>
          <th></th>
          <th className='flex flex-row justify-end'>
            <span onClick={toggleCollapse} style={{ cursor: 'pointer' }} className='text-sm font-light text-right mt-1'>
              {collapsed ? '⯆ Show Details' : '⯅ Hide Details'}
            </span>
          </th>
        </tr>
      </thead>

      <tbody className='text-sm'>{body}</tbody>
    </table>
  );
}
