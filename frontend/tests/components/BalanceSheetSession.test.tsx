import { render, screen } from '@testing-library/react';
import { mockSession } from '../mockData';
import { BalanceSheetSession } from 'src/components/BalanceSheetSession';
import { act } from 'react';

describe('BalanceSheetSession Component', () => {
  it('should show session title "Bank"', async () => {
    await act(() => {
      render(<BalanceSheetSession session={mockSession} />);
    });

    await screen.getAllByText(/Bank/i);
  });

  it('should show total bank 104076', async () => {
    await act(() => {
      render(<BalanceSheetSession session={mockSession} />);
    });

    await screen.getByText(/104076/i);
  });
});
