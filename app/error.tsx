'use client'

import { useEffect } from "react"

export default function Error({
    error,
    reset,
  }: {
    error: Error & { digest?: string }
    reset: () => void
  }) {
    useEffect(() => {
      // Log the error to an error reporting service
      console.error(error)
    }, [error])
   
    return (
      <div>
        <p>Something went wrong!</p>
        <button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
        <p className="p-2">{error.message}</p>
      </div>
    )
}