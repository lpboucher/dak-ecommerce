import React, { useContext, useState } from 'react'

import { CartContext } from '../components/Cartkit'

import PageTitle from '../components/PageTitle'
import Input from '../components/Input'
import CartItemList from '../components/CartItemList'

function CheckoutPage() {
  const { checkout, pay } = useContext(CartContext)
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [region, setRegion] = useState("")
  const [postCode, setPostCode] = useState("")
  const [country, setCountry] = useState("")

  return (
    <React.Fragment>
      <PageTitle title="Checkout" />

      <div className="flex flex-wrap -mx-4">
        <div className="p-4 w-full lg:w-3/5">
          <div>
            <h2 className="text-black font-medium leading-loose p-0 mb-3 pt-6 pb-3 border-b border-grey-light">
              Contact information
            </h2>

            <div className="md:flex -mx-2">
              <div className="my-2 w-full px-2">
                <Input
                  autoFocus
                  name="customer.name"
                  label="Full name"
                  value={`${firstName} ${lastName}`}
                  readOnly
                  required
                />
              </div>

              <div className="my-2 w-full px-2">
                <Input
                  type="email"
                  name="customer.email"
                  label="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-black font-medium leading-loose p-0 mb-3 pt-6 pb-3 border-b border-grey-light">
              Shipping address
            </h2>
            <div className="md:flex -mx-2">
              <div className="my-2 w-full px-2">
                <Input
                  name="shipping_address.first_name"
                  label="First name"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  required
                />
              </div>

              <div className="my-2 w-full px-2">
                <Input
                  name="shipping_address.last_name"
                  label="Last name"
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="md:flex -mx-2">
              <div className="my-2 w-full px-2">
                <Input
                  name="shipping_address.line_1"
                  label="Address"
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="md:flex -mx-2">
              <div className="my-2 w-full px-2">
                <Input 
                  name="shipping_address.city"
                  label="City"
                  value={city}
                  onChange={e => setCity(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="md:flex -mx-2">
              <div className="my-2 w-full px-2">
                <Input
                  name="shipping_address.county"
                  label="State / County / Region"
                  value={region}
                  onChange={e => setRegion(e.target.value)}
                  required
                />
              </div>

              <div className="my-2 w-full px-2">
                <Input
                  name="shipping_address.post_code"
                  label="ZIP / Postcode"
                  value={postCode}
                  onChange={e => setPostCode(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="md:flex -mx-2">
              <div className="my-2 w-full px-2">
                <Input 
                  name="shipping_address.country"
                  label="Country"
                  value={country}
                  onChange={e => setCountry(e.target.value)}
                  required
                />
              </div>
            </div>

          </div>

          <div>
            <h2 className="text-black font-medium leading-loose p-0 mb-3 pt-6 pb-3 border-b border-grey-light">
              Payment method
            </h2>
          </div>

          <div>
            <h2 className="text-black font-medium leading-loose p-0 mb-3 pt-6 pb-3 border-b border-grey-light">
              Billing address
            </h2>

            <div className="my-2 w-full">
              <label
                htmlFor="billingIsShipping"
                className="p-0 m-0 flex items-center"
              >
                <div className="flex items-center justify-center mr-4 relative">
                  <input
                    type="checkbox"
                    className="appearance-none border outline-none p-2 relative rounded-none bg-black border-grey-dark hover:border-grey cursor-pointer"
                  />
                  <span className="absolute text-white flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 10 7"
                      className="w-3 h-3 fill-current"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 1L3.5 6 1 3.727"
                      />
                    </svg>
                  </span>
                </div>
                <span className="text-black">Same as shipping</span>
              </label>
            </div>
          </div>
        </div>

        <div className="p-4 w-full lg:w-2/5">
          <div className="bg-grey-lightest p-6 sticky pin-t">
            <h2 className="text-black font-medium leading-loose p-0 mb-3">
              Shopping Cart
            </h2>
            <CartItemList locked />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CheckoutPage
