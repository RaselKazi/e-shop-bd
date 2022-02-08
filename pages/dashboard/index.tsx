import axios from 'axios'
import { useRouter } from 'next/router'
import { useContext, useEffect, useReducer, useState } from 'react'
import MostOrdered from '../../components/Dashboard/MostOrdered'
import MostTypeOfOrder from '../../components/Dashboard/MostTypeOfOrder'
import OrderReport from '../../components/Dashboard/OrderReport'
import StatsCard from '../../components/Dashboard/StatsCard'
import DashboardLayout from '../../components/Layout/DashboardLayout'
import DashboardNavbar from '../../components/Layout/Navbar/DashboardNavbar'
import DashboardMainSidebar from '../../components/Layout/Sidebar/DashboardMainSidebar'
import DashboardSidebar from '../../components/Layout/Sidebar/DashboardSidebar'
import useCheckAdminAndRedirect from '../../hook/useCheckAdminAndRedirect'
import { getError } from '../../utils/error'
import { Store } from '../../utils/Store'
import Preloader from '../../utils/ui/Preloader'

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' }
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, summary: action.payload, error: '' }
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload }
    default:
      state
  }
}

function dashboard() {
  useCheckAdminAndRedirect()
  const [mobileMenu, setMobileMenu] = useState(false)

  //JavaScript function to get the current date
  let today = new Date()
  const dd = String(today.getDate()).padStart(2, '0')
  const mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  const yyyy = today.getFullYear()

  const day = dd + '/' + mm + '/' + yyyy

  const { state } = useContext(Store)
  const { userInfo } = state

  const [{ loading, error, summary }, dispatch] = useReducer(reducer, {
    loading: true,
    summary: { salesData: [] },
    error: '',
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' })
        const { data } = await axios.get(`/api/admin/summary`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        })

        dispatch({ type: 'FETCH_SUCCESS', payload: data })
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) })
      }
    }
    fetchData()
  }, [])

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
          <StatsCard data={summary} />
          <OrderReport />
        </main>
        <aside className="flex flex-col gap-y-6 pt-6 pr-6">
          <MostOrdered />
          <MostTypeOfOrder chartData={summary.salesData} />
        </aside>
      </div>
    </DashboardLayout>
  )
}

export default dashboard
