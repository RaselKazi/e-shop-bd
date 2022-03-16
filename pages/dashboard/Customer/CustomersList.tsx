import axios from 'axios'
import { useRouter } from 'next/router'
import { useContext, useEffect, useReducer, useState } from 'react'
import ProductTable from '../../../components/Dashboard/Table/ProductTable'
import DashboardLayout from '../../../components/Layout/DashboardLayout'
import { USERSCOLUMNS } from '../../../data/TableData'
import useCheckAdminAndRedirect from '../../../hook/useCheckAdminAndRedirect'
import { getError } from '../../../utils/error'
import { Store } from '../../../utils/Store'

function CustomersList() {
  useCheckAdminAndRedirect()
  const { state } = useContext(Store)
  const { userInfo } = state
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/admin/users`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        })
        setData(data)
      } catch (err) {}
    }
    fetchData()
  }, [])

  return (
    <DashboardLayout>
      <div className="">
        <ProductTable colum={USERSCOLUMNS} TableData={data}></ProductTable>
      </div>
    </DashboardLayout>
  )
}

export default CustomersList
