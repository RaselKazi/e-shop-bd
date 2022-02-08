import React from 'react'
import DashboardNavbar from './Navbar/DashboardNavbar'
import DashboardMainSidebar from './Sidebar/DashboardMainSidebar'

function DashboardLayout({ children }: any) {
  return (
    <div className="flex max-w-screen min-h-screen font-sans bg-gray-800">
      <DashboardMainSidebar></DashboardMainSidebar>
      <div className="w-full max-w-full">
        <DashboardNavbar></DashboardNavbar>
        <main className="max-w-full flex w-full min-h-screen items-center justify-center mx-auto bg-gray-800">
          {children}
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
