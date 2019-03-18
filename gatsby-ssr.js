import React from 'react'

import { CartProvider } from './src/components/Cartkit'
import Layout from './src/components/Layout'

export const wrapRootElement = ({ element }) => {
  return (
    <CartProvider
      clientId="PvlE7B3cO0pmmhwSmiDO0JMWfhWcC14SmsjxI2sJXc"
      cartId="abc"
    >
      {element}
    </CartProvider>
  )
}

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
