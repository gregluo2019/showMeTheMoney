import { SessionRow } from '@/src/components/balance-sheet-session/SessionRow';
import { render, screen } from '@testing-library/react';
import { act } from 'react';
import { mockRow } from '../../mockData';

describe('SessionRow Component', () => {
  it('should show cell values', async () => {
    await act(() => {
      render(<SessionRow row={mockRow} />);
    });

    screen.getByText(mockRow.Cells[0].Value);
    screen.getByText('$' + mockRow.Cells[1].Value);
    screen.getByText('$' + mockRow.Cells[2].Value);
  });
});
