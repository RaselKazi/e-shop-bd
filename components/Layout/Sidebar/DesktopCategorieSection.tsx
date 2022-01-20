import React, { useState } from 'react'
import Filter from './Filter'
import SidebarCard from './SidebarCard'
import SidebarCategories from './SidebarCategories'
import SidebarImgCard from './SidebarImgCard'

function DesktopCategorieSection() {
  return (
    <div className="hidden lg:block">
      <SidebarCategories></SidebarCategories>
      <Filter></Filter>
      <SidebarCard></SidebarCard>

      <SidebarImgCard></SidebarImgCard>
    </div>
  )
}

export default DesktopCategorieSection
