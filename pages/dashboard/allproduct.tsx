import React from 'react'
import ProductTable from '../../components/Dashboard/Table/ProductTable'
import DashboardLayout from '../../components/Layout/DashboardLayout'

function allProduct() {
  return (
    <DashboardLayout>
      <div className=" flex justify-center items-center px-6 py-4 ">
        <ProductTable></ProductTable>
      </div>
    </DashboardLayout>
  )
}

export default allProduct
