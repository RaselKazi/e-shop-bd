import axios from 'axios'
import { useRouter } from 'next/router'
import { useContext, useEffect, useReducer, useState } from 'react'
import ProductTable from '../../../components/Dashboard/Table/ProductTable'
import DashboardLayout from '../../../components/Layout/DashboardLayout'
import { ORDERSCOLUMNS } from '../../../data/TableData'
import { IOrder } from '../../../type/order.model.type'
import { getError } from '../../../utils/error'
import { Store } from '../../../utils/Store'
import TableCol from '../../../utils/ui/TableCol'
import TableRow from '../../../utils/ui/TableRow'

function OrdersList() {
  const { state } = useContext(Store)
  const router = useRouter()
  const { userInfo } = state

  const [data, setData] = useState<IOrder[]>([])

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
      <div className="flex w-full  justify-center mx-auto">
        {data && (
          <div className=" mt-10 w-7/12 sm:w-3/6 md:w-5/12 border-2 border-sky-700 rounded-lg bg-gray-900 overflow-hidden">
            <div className="w-full overflow-x-auto ">
              <table className="table-auto ">
                <thead className="bg-gray-900">
                  <tr>
                    <TableRow title="Name" />
                    <TableRow title="email" />
                    <TableRow title="role" />
                  </tr>
                </thead>
                <tbody className="  bg-gray-900 divide-y divide-sky-900/30">
                  {data.slice(0, 10).map((order) => (
                    <tr className="  hover:bg-sky-900/10  bg-gray-800/40 odd:bg-gray-800 transition duration-200">
                      <TableCol title={order.paymentMethod} />
                      <TableCol title={order.itemsPrice} />
                      <TableCol title={order.orderStatus} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="py-4 bg-gray-900"></div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}

export default OrdersList
