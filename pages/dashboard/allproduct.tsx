import React, { useEffect, useState, useContext, useReducer } from 'react'
import axios from 'axios'
import ProductTable from '../../components/Dashboard/Table/ProductTable'
import DashboardLayout from '../../components/Layout/DashboardLayout'
import { Store } from '../../utils/Store'
import { useQuery, useQueryClient } from 'react-query'

function allProduct() {
  const { state, dispatch } = useContext(Store)

  // const { isLoading, data } = useQuery('product', () => {
  //   return axios.get('/api/admin/products')
  // })
  // dispatch({ type: 'ADD_ITEM', payload: data?.data })

  useEffect(() => {
    axios.get('/api/admin/products').then((res) => {
      dispatch({ type: 'ADD_ITEM', payload: res.data.data })
    })
  }, [])
  console.log(state.product)
  return (
    <DashboardLayout>
      <div className=" flex justify-center items-center px-6 py-4 ">
        <ProductTable TableData={state.product}></ProductTable>
      </div>
    </DashboardLayout>
  )
}

export default allProduct
