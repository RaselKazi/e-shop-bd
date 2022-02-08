import DashboardLayout from '../../../components/Layout/DashboardLayout'

function Customer() {
  return (
    <DashboardLayout>
      <div className="flex w-full md:flex-row lg:flex-row sm:flex-col flex-col">
        <main className="flex flex-col flex-1 gap-6 p-4">
          <header>
            <h1 className="text-3xl font-semibold leading-loose text-white">
              Coming Soon
            </h1>
          </header>

          <hr className="border-gray-700" />
        </main>
      </div>
    </DashboardLayout>
  )
}

export default Customer
