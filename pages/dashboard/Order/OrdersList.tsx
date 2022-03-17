import axios from 'axios'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import DashboardLayout from '../../../components/Layout/DashboardLayout'
import { IOrder } from '../../../type/order.model.type'
import { Store } from '../../../utils/Store'
import ActionCol from '../../../utils/ui/ActionCol'
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
  console.log(data)
  return (
    <DashboardLayout>
      <div className="w-full w-max-full mt-9 flex justify-center items-center">
        {data && (
          <div className=" border-2 border-sky-700 rounded-lg bg-gray-900 overflow-hidden w-max-full">
            <div className=" overflow-auto w-full">
              <table className="table-auto ">
                <thead className="bg-gray-900">
                  <tr>
                    <TableRow title="fullName" />
                    <TableRow title="address" />
                    <TableRow title="totalPrice" />
                    <TableRow title="payment" />
                    <TableRow title="Status" />
                    <TableRow title="action" />
                  </tr>
                </thead>
                <tbody className="  bg-gray-900 divide-y divide-sky-900/30">
                  {data.slice(0, 10).map((order) => (
                    <tr
                      key={order._id}
                      className="  hover:bg-sky-900/10  bg-gray-800/40 odd:bg-gray-800 transition duration-200"
                    >
                      <TableCol title={order.shippingAddress.fullName} />
                      <TableCol title={order.shippingAddress.address} />
                      <TableCol title={order.totalPrice} />
                      <TableCol title={order.paymentMethod} />
                      <TableCol title={order.orderStatus} />
                      <ActionCol />
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
