import { mockData } from '../mockData';
import { useFetchData } from '@/src/hooks/useFetchData';
import { renderHook, waitFor } from '@testing-library/react';

describe('useFetchData hook', () => {
  it('should be loading when fetching data', async () => {
    global.fetch = jest.fn().mockRejectedValueOnce(new Error('Fetch failed'));

    const { result } = renderHook(() => useFetchData('url'));
    expect(result.current.isLoading).toBe(true);
  });

  it('should get error when fetching data failed', async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error('error'));

    const { result } = renderHook(() => useFetchData('url'));

    await waitFor(() => expect(result.current.error).toBe(true));
  });

  it('should get data', async () => {
    const mResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue(mockData),
    };
    global.fetch = jest.fn().mockResolvedValue(mResponse);

    const { result } = renderHook(() => useFetchData('url'));

    await waitFor(() => expect(result.current.data.Status).toEqual('OK'));
  });
});
