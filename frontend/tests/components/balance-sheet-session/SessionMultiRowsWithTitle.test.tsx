import { SessionMultiRowsWithTitle } from '@/src/components/balance-sheet-session/SessionMultiRowsWithTitle';
import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react';
import { mockSession } from '../../mockData';

describe('SessionMultiRowsWithTitle Component', () => {
  it('should show session title "Bank"', async () => {
    await act(() => {
      render(<SessionMultiRowsWithTitle session={mockSession} />);
    });

    await screen.getAllByText(/Bank/i);
  });

  it('should show "Hide Details" in initial rendering', async () => {
    await act(() => {
      render(<SessionMultiRowsWithTitle session={mockSession} />);
    });

    await screen.getByText(/Hide Details/i);
  });

  it('should show "Show Details" after clicking the "Hide Details"', async () => {
    await act(() => {
      render(<SessionMultiRowsWithTitle session={mockSession} />);
    });

    expect(screen.getByText(/My Bank Account/i)).toBeInTheDocument();

    const button = screen.getByText('⯅ Hide Details');

    fireEvent.click(button);

    expect(screen.getByText(/Show Details/i)).toBeInTheDocument();
    expect(screen.queryByText(/My Bank Account/i)).toBeNull();
  });
});
