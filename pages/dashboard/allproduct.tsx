import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import DashboardLayout from '../../components/Layout/DashboardLayout'
import { Store } from '../../utils/Store'
import { useRouter } from 'next/router'
import useCheckAdminAndRedirect from '../../hook/useCheckAdminAndRedirect'
import { IProduct } from '../../type/product.model.type'
import TableRow from '../../utils/ui/TableRow'
import TableCol from '../../utils/ui/TableCol'
import AvatarCol from '../../utils/ui/AvatarCol'
import ActionCol from '../../utils/ui/ActionCol'

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
        setData(data.data)
      } catch (err) {}
    }
    fetchData()
  }, [])
  console.log(data)
  return (
    <DashboardLayout>
      <div className="w-full w-max-full mt-9 flex justify-center items-center ">
        {data && (
          <div className=" border-2 border-sky-700 rounded-lg bg-gray-900 overflow-hidden w-max-full">
            <div className=" overflow-auto w-full">
              <table className="table-auto ">
                <thead className="bg-gray-900">
                  <tr>
                    <TableRow title="Name" />
                    <TableRow title="Name" />
                    <TableRow title="category" />
                    <TableRow title="brand" />
                    <TableRow title="stock" />
                    <TableRow title="price" />
                    <TableRow title="discount" />
                    <TableRow title="action" />
                  </tr>
                </thead>
                <tbody className="  bg-gray-900 divide-y divide-sky-900/30">
                  {data.slice(0, 10).map((pro) => (
                    <tr
                      key={pro._id}
                      className="  hover:bg-sky-900/10  bg-gray-800/40 odd:bg-gray-800 transition duration-200"
                    >
                      <AvatarCol images={pro.images} />
                      <TableCol title={pro.name} />
                      <TableCol title={pro.category} />
                      <TableCol title={pro.brand} />
                      <TableCol title={pro.stock} />
                      <TableCol title={`${pro.price} TK`} />
                      <TableCol
                        title={pro.discount === 0 ? '-' : `${pro.discount} %`}
                      />
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

export default allProduct
