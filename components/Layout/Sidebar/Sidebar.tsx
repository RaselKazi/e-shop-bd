import React from 'react'
import DesktopCategorieSection from './DesktopCategorieSection'
import MobileCategorieSection from './MobileCategorieSection'

function Sidebar() {
  return (
    <div>
      <MobileCategorieSection></MobileCategorieSection>
      <DesktopCategorieSection></DesktopCategorieSection>
    </div>
  )
}

export default Sidebar
