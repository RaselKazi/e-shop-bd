import React from 'react'
import { useRouter } from 'next/router'
type ActionProps = {
  value: any
}

export default function ActionButton({ value }: ActionProps) {
  const router = useRouter()

  return (
    <div>
      <button onClick={() => router.push(`/dashboard/newproduct/${value}`)}>
        edit
      </button>
    </div>
  )
}
