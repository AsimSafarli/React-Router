import React from 'react'
import { Outlet } from 'react-router-dom'

function ContactLayout() {
  return (
    <div>
      Elaqe Seyfesi
      <Outlet/>
    </div>
  )
}

export default ContactLayout