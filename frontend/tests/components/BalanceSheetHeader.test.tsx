import { BalanceSheetHeader } from '@/src/components/BalanceSheetHeader';
import { render, screen } from '@testing-library/react';
import { act } from 'react';
import { mockHeader } from '../mockData';

describe('BalanceSheetHeader Component', () => {
  it('should show header cell values', async () => {
    await act(() => {
      render(<BalanceSheetHeader header={mockHeader} />);
    });

    screen.getByText(mockHeader.Cells[1].Value);
    screen.getByText(mockHeader.Cells[2].Value);
  });
});
