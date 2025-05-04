import { describe, expect, it } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { useStudentData } from '.'
import QueryProvider from '@/lib/tanstack-query/provider'

describe('useStudentData', async () => {
  it('should return data and loading state', async () => {
    const { result } = renderHook(() => useStudentData({}), { wrapper: QueryProvider })
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
      expect(result.current.data).toBeInstanceOf(Array)
    })
  })
})