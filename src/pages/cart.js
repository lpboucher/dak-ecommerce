import React, { useContext } from 'react'
import { Link } from 'gatsby'
import axios from 'axios'
import Easypost from '@easypost/api'

import { CartContext } from '../components/Cartkit'
import PageTitle from '../components/PageTitle'
import CartItemList from '../components/CartItemList'

const easyPost = new Easypost(process.env.EASYPOST_TEST_KEY);

const fromAddress = new easyPost.Address({
  company: 'EasyPost',
  street1: '417 Montgomery Street',
  street2: '5th Floor',
  city: 'San Francisco',
  state: 'CA',
  zip: '94104',
  phone: '415-528-7555'
});

fromAddress.save().then(console.log);

export default function CartPage() {
  const { isEmpty } = useContext(CartContext)

  return (
    <React.Fragment>
      <PageTitle title="Shopping Cart" />
      <CartItemList />

      {!isEmpty && (
        <div className="flex justify-end">
          <Link
            to="/checkout"
            className="inline-block appearance-none bg-black border border-black text-white hover:text-white px-4 py-3 leading-tight rounded-none focus:outline-none my-2 no-underline"
          >
            Continue to checkout
          </Link>
        </div>
      )}
    </React.Fragment>
  )
}
