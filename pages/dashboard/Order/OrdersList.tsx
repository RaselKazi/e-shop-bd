import axios from 'axios'
import { useRouter } from 'next/router'
import { useContext, useEffect, useReducer, useState } from 'react'
import ProductTable from '../../../components/Dashboard/Table/ProductTable'
import DashboardLayout from '../../../components/Layout/DashboardLayout'
import { ORDERSCOLUMNS } from '../../../data/TableData'
import { getError } from '../../../utils/error'
import { Store } from '../../../utils/Store'

function OrdersList() {
  const { state } = useContext(Store)
  const router = useRouter()
  const { userInfo } = state

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/admin/orders`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        })
        setData(data)
      } catch (err) {}
    }
    fetchData()
  }, [])

  return (
    <DashboardLayout>
      <div className="flex w-full items-center justify-center mx-auto">
        <ProductTable colum={ORDERSCOLUMNS} TableData={data}></ProductTable>
      </div>
    </DashboardLayout>
  )
}

export default OrdersList
