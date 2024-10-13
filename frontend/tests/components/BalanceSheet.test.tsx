import { fireEvent, render, screen } from '@testing-library/react';
import { mockData } from '../mockData';
import { BalanceSheet } from 'src/components/BalanceSheet';
import { act } from 'react';

describe('BalanceSheet Component', () => {
  it('should show "Loading..." when fetching data', async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error('error'));

    act(() => {
      render(<BalanceSheet />);
    });

    screen.getByText(/Loading.../i);
  });

  it('should show "Error happened" when fetching data failed', async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error('error'));

    await act(() => {
      render(<BalanceSheet />);
    });

    expect(screen.getByText(/Error happened/i)).toBeInTheDocument();
  });

  it('should show report title and main table', async () => {
    const mResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue(mockData),
    };
    global.fetch = jest.fn().mockResolvedValue(mResponse);

    await act(() => {
      render(<BalanceSheet />);
    });

    await screen.getByText(/Balance Sheet - Demo Org - As at 11 October 2024/i);
    const element = screen.getByTestId('main-table');
    expect(element).toBeInTheDocument();
  });

  it('should show "Hide All Details" checkbox in initial rendering', async () => {
    await act(() => {
      render(<BalanceSheet />);
    });

    await screen.getByText(/Hide All Details/i);
  });

  it('should toggles checkbox between checked and unchecked after clicking the "Hide All Details"', async () => {
    await act(() => {
      render(<BalanceSheet />);
    });

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();

    fireEvent.click(checkbox);

    expect(checkbox).not.toBeChecked();
  });
});
