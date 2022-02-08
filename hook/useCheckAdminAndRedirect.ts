import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import { Store } from '../utils/Store'

export default function useCheckAdminAndRedirect() {
  const { state } = useContext(Store)
  const { userInfo } = state

  const router = useRouter()

  useEffect(() => {
    if (!userInfo) {
      router.push('/login')
    } else if (userInfo.role !== 'admin') {
      router.push('/')
    }
  }, [])
}
