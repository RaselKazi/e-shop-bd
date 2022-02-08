import React, { useEffect, useState, useContext, useReducer } from 'react'
import axios from 'axios'
import ProductTable from '../../components/Dashboard/Table/ProductTable'
import DashboardLayout from '../../components/Layout/DashboardLayout'
import { Store } from '../../utils/Store'
import { useQuery, useQueryClient } from 'react-query'
import { PRODUCTCOLUMNS } from '../../data/TableData'
import { getError } from '../../utils/error'
import { useRouter } from 'next/router'
import useCheckAdminAndRedirect from '../../hook/useCheckAdminAndRedirect'

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' }
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, product: action.payload, error: '' }
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload }
    default:
      state
  }
}
function allProduct() {
  useCheckAdminAndRedirect()
  const { state } = useContext(Store)
  const { userInfo } = state
  const router = useRouter()

  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    loading: true,
    product: [],
    error: '',
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' })
        const { data } = await axios.get(`/api/admin/products`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        })
        dispatch({ type: 'FETCH_SUCCESS', payload: data.data })
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) })
      }
    }
    fetchData()
  }, [])
  return (
    <DashboardLayout>
      <div className=" flex justify-center items-center px-6 py-4 ">
        <ProductTable colum={PRODUCTCOLUMNS} TableData={product}></ProductTable>
      </div>
    </DashboardLayout>
  )
}

export default allProduct
