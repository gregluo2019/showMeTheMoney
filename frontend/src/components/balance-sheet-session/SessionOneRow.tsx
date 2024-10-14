import { IRow } from '@/src/core/types';
import { SessionRow } from './SessionRow';

export function SessionOneRow({ row }: { row: IRow }) {
  return (
    <div className='text-sm'>
      <table className='w-full my-2'>
        <tbody>
          <tr className='font-bold'>
            <SessionRow row={row} />
          </tr>
        </tbody>
      </table>

      <div className='h-5 border-dotted border-t-2 w-full' data-testid='divider'></div>
    </div>
  );
}
