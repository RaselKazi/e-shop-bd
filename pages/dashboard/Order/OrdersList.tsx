import axios from 'axios'
import { useRouter } from 'next/router'
import { useContext, useEffect, useReducer } from 'react'
import ProductTable from '../../../components/Dashboard/Table/ProductTable'
import DashboardLayout from '../../../components/Layout/DashboardLayout'
import { ORDERSCOLUMNS } from '../../../data/TableData'
import { getError } from '../../../utils/error'
import { Store } from '../../../utils/Store'

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' }
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, orders: action.payload, error: '' }
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload }
    default:
      state
  }
}
function OrdersList() {
  const { state } = useContext(Store)
  const router = useRouter()
  const { userInfo } = state

  const [{ loading, error, orders }, dispatch] = useReducer(reducer, {
    loading: true,
    orders: [],
    error: '',
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' })
        const { data } = await axios.get(`/api/admin/orders`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        })
        dispatch({ type: 'FETCH_SUCCESS', payload: data })
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) })
      }
    }
    fetchData()
  }, [])

  return (
    <DashboardLayout>
      <div className="flex w-full items-center justify-center mx-auto">
        <ProductTable colum={ORDERSCOLUMNS} TableData={orders}></ProductTable>
      </div>
    </DashboardLayout>
  )
}

export default OrdersList
