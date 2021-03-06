export const PRODUCTCOLUMNS = [
  {
    Header: 'Product Images',

    imgAccessor: 'images',
    emailAccessor: 'email',
  },

  {
    Header: 'Product Name',
    accessor: 'name',
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
  },
]

export const ORDERSCOLUMNS = [
  {
    Header: 'Name',
    accessor: 'shippingAddress.fullName',
  },
  {
    Header: 'Address',
    accessor: 'shippingAddress.address',
  },
  {
    Header: 'Price',
    accessor: 'itemsPrice',
  },
  {
    Header: 'Payment',
    accessor: 'paymentMethod',
  },
  {
    Header: 'Total',
    accessor: 'totalPrice',
  },
  {
    Header: 'Paid',
    accessor: 'isPaid',
  },
  {
    Header: 'Delivered',
    accessor: 'isDelivered',
  },
  {
    Header: 'action',
    accessor: '_id',
  },
]

export const USERSCOLUMNS = [
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Email',
    accessor: 'email',
  },
  {
    Header: 'Role',
    accessor: 'role',
  },
  {
    Header: 'action',
    accessor: '_id',
  },
]
