import { SessionTitle } from '@/src/components/balance-sheet-session/SessionTitle';
import { render, screen } from '@testing-library/react';
import { act } from 'react';

describe('SessionTitle Component', () => {
  it('should show cell values', async () => {
    const testTitle = 'test title';
    await act(() => {
      render(<SessionTitle title={testTitle} />);
    });

    const element = screen.getByText(testTitle);
    expect(element).toBeInTheDocument();
  });
});
