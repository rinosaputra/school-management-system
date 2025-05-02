import { renderHook, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { getGraduationData, useGraduationData, useGraduationWithRombelData } from ".";
import QueryProvider from "@/lib/tanstack-query/provider";

describe('getGraduationData', () => {
  it('should fetch graduation data and return results array', async () => {
    const result = await getGraduationData()
    expect(result.results).toBeInstanceOf(Array);
    expect(result.token).toBeDefined();
  });
})

describe('useRombelData', () => {
  it('should return data and loading state', async () => {
    const { result } = renderHook(() => useGraduationData(), { wrapper: QueryProvider })
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
      expect(result.current.data).toBeDefined()
      expect(result.current.data?.results).toBeInstanceOf(Array)
    })
  });
});

describe('useGraduationWithRombelData', () => {
  it('should return data and loading state', async () => {
    const { result } = renderHook(() => useGraduationWithRombelData(), { wrapper: QueryProvider })
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
      expect(result.current.data).toBeDefined()
      expect(result.current.data?.results).toBeInstanceOf(Array)
    })
  });
})