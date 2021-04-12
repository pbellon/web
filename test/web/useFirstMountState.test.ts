import { renderHook } from '@testing-library/react-hooks';
import { useFirstMountState } from '../../src/web';

describe('useFirstMountState', () => {
  it('should return true on first render', () => {
    const { result } = renderHook(() => useFirstMountState());

    expect(result.current).toBe(true);
  })

  it('should return false on second and next renders', () => {
    const { result, rerender } = renderHook(() => useFirstMountState());

    expect(result.current).toBe(true);

    rerender()
    expect(result.current).toBe(false);

    rerender()
    expect(result.current).toBe(false);
  });
});