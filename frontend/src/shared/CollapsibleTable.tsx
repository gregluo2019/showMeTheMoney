import React, { ReactNode, useState } from 'react';

export function CollapsibleTable({ header, body }: { header: string; body: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

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

      <tbody className='text-sm'>{collapsed ? '' : body}</tbody>
    </table>
  );
}
