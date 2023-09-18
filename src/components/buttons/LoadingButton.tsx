import React from 'react'
import { PiSpinnerGapThin } from 'react-icons/pi'

function LoadingButton() {
  return (
    <button
        type="button"
        disabled={true}
        className="inline-flex items-center gap-x-2 rounded-xl bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:bg-zinc-600 disabled:hover:bg-zinc-500 disabled:focus-visible:outline-zinc-600"
      >
        Loading
          <PiSpinnerGapThin className="-mr-0.5 h-5 w-5 text-white animate-spin" aria-hidden="true" />
      </button>
  )
}

export default LoadingButton