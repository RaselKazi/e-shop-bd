import { useState } from 'react'
import MostOrdered from '../../components/Dashboard/MostOrdered'
import MostTypeOfOrder from '../../components/Dashboard/MostTypeOfOrder'
import OrderReport from '../../components/Dashboard/OrderReport'
import StatsCard from '../../components/Dashboard/StatsCard'
import DashboardLayout from '../../components/Layout/DashboardLayout'
import DashboardNavbar from '../../components/Layout/Navbar/DashboardNavbar'
import DashboardMainSidebar from '../../components/Layout/Sidebar/DashboardMainSidebar'
import DashboardSidebar from '../../components/Layout/Sidebar/DashboardSidebar'

function dashboard() {
  const [mobileMenu, setMobileMenu] = useState(false)
  return (
    <DashboardLayout>
      <div className="flex w-full md:flex-row lg:flex-row sm:flex-col flex-col">
        <main className="flex flex-col flex-1 gap-6 p-4">
          <header>
            <h1 className="text-3xl font-semibold leading-loose text-white">
              Dashboard
            </h1>
            <div className="text-gray-200">Tuesday 2 Feb, 2021</div>
          </header>

          <hr className="border-gray-700" />
          <StatsCard />
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

export default dashboard
