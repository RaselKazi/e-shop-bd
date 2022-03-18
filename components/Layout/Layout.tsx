import React from 'react'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'

function Layout({ children }: React.PropsWithChildren<{}>): JSX.Element {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
