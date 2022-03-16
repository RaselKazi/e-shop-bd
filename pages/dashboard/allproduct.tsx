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
import { IProduct } from '../../type/product.model.type'

function allProduct() {
  useCheckAdminAndRedirect()
  const { state } = useContext(Store)
  const { userInfo } = state
  const router = useRouter()
  const [data, setData] = useState<IProduct[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/admin/products`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        })
        setData(data)
      } catch (err) {}
    }
    fetchData()
  }, [])

  return (
    <DashboardLayout>
      <div className=" flex justify-center items-center px-6 py-4 ">
        {data && (
          <ProductTable colum={PRODUCTCOLUMNS} TableData={data}></ProductTable>
        )}
      </div>
    </DashboardLayout>
  )
}

export default allProduct
