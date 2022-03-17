import React from 'react'
import DashboardNavbar from './Navbar/DashboardNavbar'
import DashboardMainSidebar from './Sidebar/DashboardMainSidebar'

function DashboardLayout({ children }: any) {
  return (
    <div className="flex w-screen max-w-screen h-screen max-h-screen font-sans bg-gray-800 overflow-hidden">
      <DashboardMainSidebar></DashboardMainSidebar>
      <div className="w-full max-w-full">
        <DashboardNavbar></DashboardNavbar>
        <div className="max-w-full h-full max-h-full  overflow-y-auto  mx-auto bg-gray-800">
          {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
