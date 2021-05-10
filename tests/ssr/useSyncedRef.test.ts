import { renderHook } from '@testing-library/react-hooks/server';
import { useSyncedRef } from '../../src';

describe('useSyncedRef', () => {
  it('should be defined', () => {
    expect(useSyncedRef).toBeDefined();
  });

  it('should render', () => {
    renderHook(() => useSyncedRef(1));
  });

  it('should return ref object', () => {
    const { result } = renderHook(() => useSyncedRef(1));

    expect(result.current).toEqual({ current: 1 });
  });
});