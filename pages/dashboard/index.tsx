import axios from 'axios'
import { useContext, useEffect, useReducer, useState } from 'react'
import MostOrdered from '../../components/Dashboard/MostOrdered'
import MostTypeOfOrder from '../../components/Dashboard/MostTypeOfOrder'
import OrderReport from '../../components/Dashboard/OrderReport'
import StatsCard from '../../components/Dashboard/StatsCard'
import DashboardLayout from '../../components/Layout/DashboardLayout'
import useCheckAdminAndRedirect from '../../hook/useCheckAdminAndRedirect'
import { getError } from '../../utils/error'
import { Store } from '../../utils/Store'
import Preloader from '../../utils/ui/Preloader'

type summaryData = {
  ordersPrice: Number
  productsCount: Number
  ordersCount: Number
  usersCount: Number
  salesData: { _id: string; totalSales: number }[]
}

function dashboard() {
  useCheckAdminAndRedirect()
  const [mobileMenu, setMobileMenu] = useState(false)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<summaryData | null>(null)
  //JavaScript function to get the current date
  let today = new Date()
  const dd = String(today.getDate()).padStart(2, '0')
  const mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  const yyyy = today.getFullYear()

  const day = dd + '/' + mm + '/' + yyyy

  const { state } = useContext(Store)
  const { userInfo } = state

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const { data } = await axios.get(`/api/admin/summary`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        })

        setData(data)
        setLoading(false)
      } catch (err) {}
    }
    fetchData()
  }, [])

  if (loading) {
    return <Preloader />
  } else {
    return (
      <DashboardLayout>
        <div className="flex w-full md:flex-row lg:flex-row sm:flex-col flex-col">
          <main className="flex flex-col flex-1 gap-6 p-4">
            <header>
              <h1 className="text-3xl font-semibold leading-loose text-white">
                Dashboard
              </h1>
              <div className="text-gray-200">{day}</div>
            </header>
            <hr className="border-gray-700" />
            {data && <StatsCard data={data} />}

            <OrderReport />
          </main>
          <aside className="flex flex-col gap-y-6 pt-6 pr-6">
            <MostOrdered />
            <MostTypeOfOrder />
          </aside>
        </div>
      </DashboardLayout>
    )
  }
}

export default dashboard
