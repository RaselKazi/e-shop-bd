import React, { useContext } from 'react'
import { Store } from '../../utils/Store'
import TextAndSubtext from '../../utils/ui/TextAndSubtext'

export default function ShippingAddress() {
  const { state, dispatch } = useContext(Store)
  const {
    userInfo,
    cart: { shippingAddress },
  } = state
  return (
    <div>
      <div className=" grid grid-cols-2">
        <div>
          <TextAndSubtext Text="fullName" Subtext={shippingAddress.fullName} />
          <TextAndSubtext Text="city" Subtext={shippingAddress.city} />
          <TextAndSubtext Text="country" Subtext={shippingAddress.country} />
        </div>
        <div>
          {' '}
          <TextAndSubtext Text="ZipCode" Subtext={shippingAddress.postalCode} />
          <TextAndSubtext
            Text="phone Number"
            Subtext={shippingAddress.phoneNumber}
          />
        </div>
      </div>
      <TextAndSubtext Text="Address" Subtext={shippingAddress.address} />
    </div>
  )
}
