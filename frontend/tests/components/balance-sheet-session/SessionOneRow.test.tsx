import { SessionOneRow } from '@/src/components/balance-sheet-session/SessionOneRow';
import { render, screen } from '@testing-library/react';
import { act } from 'react';
import { mockRow } from '../../mockData';

describe('SessionOneRow Component', () => {
  it('should show table', async () => {
    await act(() => {
      render(<SessionOneRow row={mockRow} />);
    });

    await screen.getByRole('table');
  });

  it('should show divider line', async () => {
    await act(() => {
      render(<SessionOneRow row={mockRow} />);
    });

    const element = screen.getByTestId('divider');
    expect(element).toBeInTheDocument();
  });
});
