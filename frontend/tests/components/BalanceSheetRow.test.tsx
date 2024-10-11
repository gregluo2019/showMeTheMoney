import { render, screen } from '@testing-library/react';
import { mockRow } from '../mockData';
import { BalanceSheetRow } from 'src/components/BalanceSheetRow';
import { act } from 'react';

describe('BalanceSheetRow Component', () => {
  it('should show "My Bank Account"', async () => {
    await act(() => {
      render(<BalanceSheetRow row={mockRow} />);
    });

    await screen.getAllByText(/My Bank Account/i);
  });

  it('should show number 126.70', async () => {
    await act(() => {
      render(<BalanceSheetRow row={mockRow} />);
    });

    await screen.getByText(/126.70/i);
  });
});
