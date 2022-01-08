import React from 'react'
import DashboardNavbar from './Navbar/DashboardNavbar'
import DashboardMainSidebar from './Sidebar/DashboardMainSidebar'

function DashboardLayout({ children }: any) {
  return (
    <div className="flex w-full min-h-screen font-sans bg-gray-800">
      <DashboardMainSidebar></DashboardMainSidebar>
      <div className="w-screen ">
        <DashboardNavbar></DashboardNavbar>
        <main>{children}</main>
      </div>
    </div>
  )
}

export default DashboardLayout
