import axios from 'axios'
import { useRouter } from 'next/router'
import { useContext, useEffect, useReducer } from 'react'
import ProductTable from '../../../components/Dashboard/Table/ProductTable'
import DashboardLayout from '../../../components/Layout/DashboardLayout'
import { USERSCOLUMNS } from '../../../data/TableData'
import useCheckAdminAndRedirect from '../../../hook/useCheckAdminAndRedirect'
import { getError } from '../../../utils/error'
import { Store } from '../../../utils/Store'

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' }
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, users: action.payload, error: '' }
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload }
    default:
      state
  }
}

function CustomersList() {
  useCheckAdminAndRedirect()
  const { state } = useContext(Store)
  const { userInfo } = state

  const [{ loading, error, users }, dispatch] = useReducer(reducer, {
    loading: true,
    users: [],
    error: '',
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' })
        const { data } = await axios.get(`/api/admin/users`, {
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
      <div className="">
        <ProductTable colum={USERSCOLUMNS} TableData={users}></ProductTable>
      </div>
    </DashboardLayout>
  )
}

export default CustomersList
