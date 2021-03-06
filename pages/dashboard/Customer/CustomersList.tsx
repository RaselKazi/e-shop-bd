import axios from 'axios'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import DashboardLayout from '../../../components/Layout/DashboardLayout'
import useCheckAdminAndRedirect from '../../../hook/useCheckAdminAndRedirect'
import { IUsers } from '../../../type/user.model.type'
import { Store } from '../../../utils/Store'
import ActionCol from '../../../utils/ui/ActionCol'
import TableCol from '../../../utils/ui/TableCol'
import TableRow from '../../../utils/ui/TableRow'

function CustomersList() {
  useCheckAdminAndRedirect()
  const { state } = useContext(Store)
  const { userInfo } = state
  const [data, setData] = useState<IUsers[]>([])

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
      <div className="w-full w-max-full mt-9 flex justify-center items-center">
        {data && (
          <div className=" border-2 border-sky-700 rounded-lg bg-gray-900 overflow-hidden w-max-full">
            <div className=" overflow-auto w-full">
              <table className="table-auto ">
                <thead className="bg-gray-900">
                  <tr>
                    <TableRow title="Name" />
                    <TableRow title="email" />
                    <TableRow title="role" />
                    <TableRow title="action" />
                  </tr>
                </thead>
                <tbody className="  bg-gray-900 divide-y divide-sky-900/30">
                  {data.slice(0, 10).map((user) => (
                    <tr
                      key={user._id}
                      className="  hover:bg-sky-900/10  bg-gray-800/40 odd:bg-gray-800 transition duration-200"
                    >
                      <TableCol title={user.name} />
                      <TableCol title={user.email} />
                      <TableCol title={user.role} />
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

export default CustomersList
