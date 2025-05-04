import { renderHook, waitFor } from "@testing-library/react";
import { describe } from "node:test";
import { getRombelData, useRombelData, useRombelWithStudentsData } from ".";
import QueryProvider from "@/lib/tanstack-query/provider";
import { expect, it } from "vitest";

describe("getRombelData", () => {
  it("should fetch rombel data and return results array", async () => {
    const result = await getRombelData({})
    expect(result).toBeDefined();
    expect(result.results).toBeInstanceOf(Array);
  });
});

describe('useRombelData', () => {
  it('should return data and loading state', async () => {
    const { result } = renderHook(() => useRombelData({}), { wrapper: QueryProvider })
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
      expect(result.current.data).toBeDefined()
      expect(result.current.data).toBeInstanceOf(Array)
    })
  })
})

describe('useRombelWithStudentsData', () => {
  it('should return data and loading state', async () => {
    const { result } = renderHook(() => useRombelWithStudentsData({}), { wrapper: QueryProvider })
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
      expect(result.current.data).toBeDefined()
      expect(result.current.data).toBeInstanceOf(Array)
    })
  })
})