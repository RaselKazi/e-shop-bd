import ActionButton from '../components/Dashboard/Table/ActionButton'
import { AvatarCell } from '../components/Dashboard/Table/AvatarCell'

export const COLUMNS = [
  {
    Header: 'Product Images',
    accessor: 'name',
    Cell: AvatarCell,
    imgAccessor: 'images',
    emailAccessor: 'email',
  },

  {
    Header: 'Description',
    accessor: 'description',
  },
  {
    Header: 'Category',
    accessor: 'category',
  },
  {
    Header: 'Price',
    accessor: 'price',
  },
  {
    Header: 'Stock',
    accessor: 'stock',
  },
  {
    Header: 'action',
    accessor: '_id',
    Cell: ActionButton,
  },
]

export const MOCK_DATA = [
  {
    firstName: 'horn-od926',
    lastName: 'selection-gsykp',
    age: 22,
    visits: 20,
    progress: 39,
    status: 'single',
  },
  {
    firstName: 'heart-nff6w',
    lastName: 'information-nyp92',
    age: 16,
    visits: 98,
    progress: 40,
    status: 'complicated',
  },
  {
    firstName: 'minute-yri12',
    lastName: 'fairies-iutct',
    age: 7,
    visits: 77,
    progress: 39,
    status: 'single',
  },
  {
    firstName: 'degree-jx4h0',
    lastName: 'man-u2y40',
    age: 27,
    visits: 54,
    progress: 92,
    status: 'relationship',
  },
  {
    firstName: 'degree-jx4h0',
    lastName: 'man-u2y40',
    age: 27,
    visits: 54,
    progress: 92,
    status: 'relationship',
  },
  {
    firstName: 'degree-jx4h0',
    lastName: 'man-u2y40',
    age: 27,
    visits: 54,
    progress: 92,
    status: 'relationship',
  },
  {
    firstName: 'degree-jx4h0',
    lastName: 'man-u2y40',
    age: 27,
    visits: 54,
    progress: 92,
    status: 'relationship',
  },
  {
    firstName: 'degree-jx4h0',
    lastName: 'man-u2y40',
    age: 27,
    visits: 54,
    progress: 92,
    status: 'relationship',
  },
  {
    firstName: 'degree-jx4h0',
    lastName: 'man-u2y40',
    age: 27,
    visits: 54,
    progress: 92,
    status: 'relationship',
  },
  {
    firstName: 'degree-jx4h0',
    lastName: 'man-u2y40',
    age: 27,
    visits: 54,
    progress: 92,
    status: 'relationship',
  },
  {
    firstName: 'degree-jx4h0',
    lastName: 'man-u2y40',
    age: 27,
    visits: 54,
    progress: 92,
    status: 'relationship',
  },
  {
    firstName: 'degree-jx4h0',
    lastName: 'man-u2y40',
    age: 27,
    visits: 54,
    progress: 92,
    status: 'relationship',
  },
  {
    firstName: 'degree-jx4h0',
    lastName: 'man-u2y40',
    age: 27,
    visits: 54,
    progress: 92,
    status: 'relationship',
  },
  {
    firstName: 'degree-jx4h0',
    lastName: 'man-u2y40',
    age: 27,
    visits: 54,
    progress: 92,
    status: 'relationship',
  },
]
