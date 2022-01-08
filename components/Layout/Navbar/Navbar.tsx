import React from 'react'
import BottomBar from './BottomBar'
import MiddleBar from './MiddleBar'
import TopBar from './TopBar'

function Navbar() {
  return (
    <header>
      <TopBar />

      <MiddleBar />

      <BottomBar />
    </header>
  )
}

export default Navbar
