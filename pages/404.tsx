import React from 'react'
import Layout from '../components/Layout/Layout'

export default function NotPound() {
  return (
    <Layout>
      <main className="w-full h-96">
        <section className="xl:px-24 sm:px-10 px-4 pt-5">
          <div className=" flex-col  justify-center items-center">
            <div className=" flex  justify-center items-center mt-28 text-9xl font-bold text-yellow-500 ">
              <span className=" animate-pulse">4</span>
              <span className=" animate-bounce">0</span>
              <span className=" animate-pulse">4</span>
            </div>
            <div className="mt-8 text-center text-3xl font-bold text-yellow-300 capitalize">
              page not found
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
